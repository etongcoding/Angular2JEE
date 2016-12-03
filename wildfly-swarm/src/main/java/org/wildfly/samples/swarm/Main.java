package org.wildfly.samples.swarm;

//import org.jboss.shrinkwrap.api.asset.ClassLoaderAsset;

import org.jboss.shrinkwrap.api.ShrinkWrap;
import org.jboss.shrinkwrap.api.asset.ClassLoaderAsset;
import org.wildfly.swarm.Swarm;
import org.wildfly.swarm.datasources.DatasourcesFraction;
import org.wildfly.swarm.jpa.JPAFraction;
import org.wildfly.swarm.jaxrs.JAXRSArchive;

/**
 * @author Ping Li
 * 
 * WildFly Swarm User’s Guide 
 * PDF:
 *     https://www.gitbook.com/book/wildfly-swarm/wildfly-swarm-users-guide/details
 * html:
 *     https://wildfly-swarm.gitbooks.io/wildfly-swarm-users-guide/content/index.html
 * git:
 *     https://github.com/wildfly-swarm/wildfly-swarm-users-guide
 */
public class Main {
    public static void main(String...args) throws Exception {
                // Instantiate the container
        Swarm swarm = new Swarm();

        String useDB = System.getProperty("swarm.use.db", "mysql");
        String driverModule;

        // Configure the Datasources subsystem with a driver
        // and a datasource
        switch (useDB.toLowerCase()) {
            case "h2":
                swarm.fraction(datasourceWithH2());
                driverModule = "com.h2database.h2";
                break;
            case "postgresql" :
                swarm.fraction(datasourceWithPostgresql());
                driverModule = "org.postgresql";
                break;
            case "mysql" :
                swarm.fraction(datasourceWithMysql());
                driverModule = "com.mysql";
                break;
            default:
                swarm.fraction(datasourceWithH2());
                driverModule = "com.h2database.h2";
        }


        // Create one or more deployments
        JAXRSArchive deployment = ShrinkWrap.create(JAXRSArchive.class);
        
        // Add resource to deployment
        deployment.addAsWebInfResource(new ClassLoaderAsset("META-INF/persistence.xml", Main.class.getClassLoader()), "classes/META-INF/persistence.xml");
        deployment.addAsWebInfResource(new ClassLoaderAsset("META-INF/load.sql", Main.class.getClassLoader()), "classes/META-INF/load.sql");

        // Add class        
        deployment.addClass(Employee.class);
        deployment.addClass(MyApplication.class);
        deployment.addClass(MyResource.class);
        deployment.addClass(CORSFilter.class);
        deployment.addClass(PersistenceHelper.class);

        deployment.addModule(driverModule);

        // Start the swarm
        swarm.start();
        swarm.deploy(deployment);
    }

    private static DatasourcesFraction datasourceWithH2() {
        return new DatasourcesFraction()
            // there is this by default in wildfly swarm
            // If the JPA fraction is used, by default it will create a default ExampleDS.
            // https://wildfly-swarm.gitbooks.io/wildfly-swarm-users-guide/content/common/datasources.html
                // .jdbcDriver("h2", (d) -> {
                //     d.driverClassName("org.h2.Driver");
                //     d.xaDatasourceClass("org.h2.jdbcx.JdbcDataSource");
                //     d.driverModuleName("com.h2database.h2");
                // })
                // .dataSource("MyDS", (ds) -> {
                //     ds.driverName("h2");
                //     ds.connectionUrl("jdbc:h2:mem:test;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=FALSE");
                //     ds.userName("sa");
                //     ds.password("sa");
                // })
                ;
    }

    private static DatasourcesFraction datasourceWithPostgresql() {
        return new DatasourcesFraction()
                .jdbcDriver("org.postgresql", (d) -> {
                    d.driverClassName("org.postgresql.Driver");
                    d.xaDatasourceClass("org.postgresql.xa.PGXADataSource");
                    d.driverModuleName("org.postgresql");
                })
                .dataSource("MyDS", (ds) -> {
                    ds.driverName("org.postgresql");
                    ds.connectionUrl("jdbc:postgresql://localhost:5432/postgres");
                    ds.userName("postgres");
                    ds.password("postgres");
                });
    }

    private static DatasourcesFraction datasourceWithMysql() {
        return new DatasourcesFraction()
                .jdbcDriver("com.mysql", (d) -> {
                    d.driverClassName("com.mysql.jdbc.Driver");
                    d.xaDatasourceClass("com.mysql.jdbc.jdbc2.optional.MysqlXADataSource");
                    d.driverModuleName("com.mysql");
                })
                .dataSource("MyDS", (ds) -> {
                    ds.driverName("com.mysql");
                    ds.connectionUrl("jdbc:mysql://localhost:3306/mwchatdb");
                    ds.userName("etongcoding");
                    ds.password(".......");
                });
    }

}


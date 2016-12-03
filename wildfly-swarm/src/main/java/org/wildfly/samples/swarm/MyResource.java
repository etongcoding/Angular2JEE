package org.wildfly.samples.swarm;

import java.util.List;
import java.util.Map;
import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.PathParam;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * @author Ping Li
 *
 * http://localhost:8080/resources/resource
 * http://localhost:8080/resources/resource/all
 */
@Path("/resource")
public class MyResource {

    @PersistenceContext
    EntityManager em;

    @Inject
    PersistenceHelper helper;
    
    @GET    
    public String get() {
       if( em == null ) {
            return "em is null";
        }
        return "hello swarm!";
    }
    
    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Employee myFind(@PathParam("id") Integer id) {
        return em.find(Employee.class, id);
    }

    @GET
    @Path("all")
    @Produces(MediaType.APPLICATION_JSON)
    public Employee[] getHelper() {
        return helper.getEntityManager().createNamedQuery("Employee.findAll", Employee.class).getResultList().toArray(new Employee[0]);
    }

    @GET
    @Path("two")
    @Produces("application/json")
    public List<Employee> getAll() {
        return em.createNamedQuery("Employee.findTwo", Employee.class).getResultList();
    }
}

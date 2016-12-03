package org.wildfly.samples.swarm;

import javax.enterprise.context.ApplicationScoped;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * @author Ping Li
 */
@ApplicationScoped
public class PersistenceHelper {

    @PersistenceContext
    private EntityManager em;

    public EntityManager getEntityManager() {
        return em;
    }
}
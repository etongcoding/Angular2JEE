/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.etongcoding.mwchat.facade;

import com.etongcoding.mwchat.model.Friend;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 *
 * @author pingli
 */
@Stateless
public class FriendFacade extends AbstractFacade<Friend> {

    @PersistenceContext(unitName = "MWCHAT_PU")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public FriendFacade() {
        super(Friend.class);
    }
    
}

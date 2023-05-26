package com.solutec.api.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "contact")
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int idContact;

    @Column(name = "name")
    private String nameContact;

    @Column(name = "mail")
    private String mailContact;

    public Contact(String nameContact, String mailContact) {
        this.nameContact = nameContact;
        this.mailContact = mailContact;
    }

    public Contact() {

    }

    public String getNameContact() {
        return nameContact;
    }

    public void setNameContact(String nameContact) {
        this.nameContact = nameContact;
    }

    public String getMailContact() {
        return mailContact;
    }

    public void setMailContact(String mailContact) {
        this.mailContact = mailContact;
    }

    public int getIdContact() {
        return idContact;
    }

}

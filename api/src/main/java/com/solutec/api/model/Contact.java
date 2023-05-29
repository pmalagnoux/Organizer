package com.solutec.api.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "contact")
public class Contact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int idContact;

    @Column(name = "first_name")
    private String firstNameContact;

    @Column(name = "last_name")
    private String lastNameContact;

    @Column(name = "mail")
    private String mailContact;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "perimeter_contact", joinColumns = @JoinColumn(name = "id_perimeter"), inverseJoinColumns = @JoinColumn(name = "id_contact"))
    private List<Contact> contacts = new ArrayList<>();

    public Contact(String firstNameContact, String lastNameContact, String mailContact) {
        this.firstNameContact = firstNameContact;
        this.lastNameContact = lastNameContact;
        this.mailContact = mailContact;
    }

    public Contact() {

    }

    public String getFirstNameContact() {
        return firstNameContact;
    }

    public void setFirstNameContact(String firstNameContact) {
        this.firstNameContact = firstNameContact;
    }

    public String getLastNameContact() {
        return lastNameContact;
    }

    public void setLastNameContact(String lastNameContact) {
        this.lastNameContact = lastNameContact;
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

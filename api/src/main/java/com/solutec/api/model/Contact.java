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
    private int id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "mail")
    private String mail;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "perimeter_contact", joinColumns = @JoinColumn(name = "id_perimeter"), inverseJoinColumns = @JoinColumn(name = "id_contact"))
    private List<Contact> contacts = new ArrayList<>();

    public Contact(String firstNameContact, String lastNameContact, String mailContact) {
        this.firstName = firstNameContact;
        this.lastName = lastNameContact;
        this.mail = mailContact;
    }

    public Contact() {

    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstNameContact) {
        this.firstName = firstNameContact;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastNameContact) {
        this.lastName = lastNameContact;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mailContact) {
        this.mail = mailContact;
    }

    public int getId() {
        return id;
    }

}

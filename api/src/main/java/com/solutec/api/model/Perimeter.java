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
@Table(name = "perimeter")
public class Perimeter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int idPerimeter;

    @Column(name = "name")
    private String namePerimeter;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "perimeter_contact", joinColumns = @JoinColumn(name = "id_perimeter"), inverseJoinColumns = @JoinColumn(name = "id_contact"))
    private List<Contact> contacts = new ArrayList<>();

    public String getNamePerimeter() {
        return namePerimeter;
    }

    public void setNamePerimeter(String namePerimeter) {
        this.namePerimeter = namePerimeter;
    }

    public int getIdPerimeter() {
        return idPerimeter;
    }

}

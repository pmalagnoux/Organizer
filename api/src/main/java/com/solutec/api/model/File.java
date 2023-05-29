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
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "file")
public class File {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int idFile;

    @Column(name = "name")
    private String nameFile;

    @Column(name = "extension")
    private String extension;

    @Column(name = "location")
    private String location;

    @ManyToOne
    @JoinColumn(name = "id_type")
    private Type typeFile;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "file_tag", joinColumns = @JoinColumn(name = "id_file"), inverseJoinColumns = @JoinColumn(name = "id_tag"))
    private List<Tag> tags = new ArrayList<>();

    public File() {
    }

    public File(String nameFile, String extension, String location) {
        this.nameFile = nameFile;
        this.extension = extension;
        this.location = location;
    }

    public String getNameFile() {
        return nameFile;
    }

    public void setNameFile(String nameFile) {
        this.nameFile = nameFile;
    }

    public String getExtension() {
        return extension;
    }

    public void setExtension(String extension) {
        this.extension = extension;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Type getTypeFile() {
        return typeFile;
    }

    public void setTypeFile(Type typeFile) {
        this.typeFile = typeFile;
    }

    public int getIdFile() {
        return idFile;
    }

}

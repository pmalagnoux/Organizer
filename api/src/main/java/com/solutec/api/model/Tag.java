package com.solutec.api.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tag")
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int idTag;

    @Column(name = "content")
    private String contentTag;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "file_tag", joinColumns = @JoinColumn(name = "id_tag"), inverseJoinColumns = @JoinColumn(name = "id_file"))
    private List<File> files = new ArrayList<>();

    public Tag() {
    }

    public Tag(String contentTag) {
        this.contentTag = contentTag;
    }

    public String getContentTag() {
        return contentTag;
    }

    public void setContentTag(String contentTag) {
        this.contentTag = contentTag;
    }

    public int getIdTag() {
        return idTag;
    }

}

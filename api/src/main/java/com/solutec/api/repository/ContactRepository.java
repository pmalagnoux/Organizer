package com.solutec.api.repository;

import org.springframework.data.repository.CrudRepository;

import com.solutec.api.model.Contact;

public interface ContactRepository extends CrudRepository<Contact, Integer> {

}

package com.solutec.api.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.solutec.api.model.Contact;
import com.solutec.api.repository.ContactRepository;

@Service
public class ContactService {

    @Autowired
    ContactRepository contactRepository;

    public List<Contact> getAllContacts() {
        List<Contact> result = new ArrayList<>();
        this.contactRepository.findAll().forEach(result::add);
        return result;
    }

    public Contact addContact(Contact contact) {
        return this.contactRepository.save(contact);
    }

    public Contact getContactById(int idContact) {
        Optional<Contact> hOpt = this.contactRepository.findById(idContact);
        if (hOpt.isPresent()) {
            return hOpt.get();
        }
        return null;
    }

    public void deleteContact(int idContact) {
        this.contactRepository.deleteById(idContact);
    }
}

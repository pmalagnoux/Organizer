package com.solutec.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.solutec.api.model.Contact;
import com.solutec.api.service.ContactService;

@RestController
@RequestMapping("/contact")
public class ContactController {

    @Autowired
    ContactService contactService;

    @RequestMapping(method = RequestMethod.GET, value = "")
    public List<Contact> getAllContacts() {
        return contactService.getAllContacts();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/addContact")
    @ResponseStatus(HttpStatus.CREATED)
    public Contact addContact(@RequestBody Contact contact) {
        return contactService.addContact(contact);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{idContact}")
    public Contact getContact(@PathVariable int idContact) {
        return contactService.getContactById(idContact);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{idContact}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteContact(@PathVariable int idContact) {
        contactService.deleteContact(idContact);
    }
}

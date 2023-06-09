package com.solutec.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.solutec.api.model.Contact;
import com.solutec.api.model.Perimeter;
import com.solutec.api.service.PerimeterService;

@RestController
@RequestMapping("/perimeter")
public class PerimeterController {

    @Autowired
    PerimeterService perimeterService;

    @RequestMapping(method = RequestMethod.GET, value = "")
    public List<Perimeter> getAllPerimeters() {
        return perimeterService.getAllPerimeters();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/addPerimeter")
    @ResponseStatus(HttpStatus.CREATED)
    public Perimeter addPerimeter(@RequestBody Perimeter perimeter) {
        return perimeterService.addPerimeter(perimeter);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{idPerimeter}")
    public Perimeter getPerimeterById(@PathVariable int idPerimeter) {
        return perimeterService.getPerimeterById(idPerimeter);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{idPerimeter}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePerimeter(@PathVariable int idPerimeter) {
        perimeterService.deletePerimeter(idPerimeter);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/{idPerimeter}/addContact")
    public Perimeter addContact(@RequestBody Contact contact, @PathVariable int idPerimeter) {
        return perimeterService.addContact(contact, idPerimeter);
    }
}

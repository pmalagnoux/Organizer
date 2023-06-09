package com.solutec.api.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.solutec.api.model.Contact;
import com.solutec.api.model.Perimeter;
import com.solutec.api.repository.PerimeterRepository;

@Service
public class PerimeterService {

    @Autowired
    PerimeterRepository perimeterRepository;

    public List<Perimeter> getAllPerimeters() {
        List<Perimeter> result = new ArrayList<>();
        this.perimeterRepository.findAll().forEach(result::add);
        return result;
    }

    public Perimeter addPerimeter(Perimeter perimeter) {
        return this.perimeterRepository.save(perimeter);
    }

    public Perimeter getPerimeterById(int idPerimeter) {
        Optional<Perimeter> hOpt = this.perimeterRepository.findById(idPerimeter);
        if (hOpt.isPresent()) {
            return hOpt.get();
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }

    public void deletePerimeter(int idPerimeter) {
        this.perimeterRepository.deleteById(idPerimeter);
    }

    public Perimeter addContact(Contact contact, int idPerimeter) {
        Optional<Perimeter> hOpt = this.perimeterRepository.findById(idPerimeter);
        if (hOpt.isPresent()) {
            Perimeter perimeter = hOpt.get();
            perimeter.getContacts().add(contact);
            return this.perimeterRepository.save(perimeter);
        }
        return null;
    }
}

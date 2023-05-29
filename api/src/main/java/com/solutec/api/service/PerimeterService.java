package com.solutec.api.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        return null;
    }
}

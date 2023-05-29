package com.solutec.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.solutec.api.model.Perimeter;
import com.solutec.api.service.PerimeterService;

@RestController
@RequestMapping("/organizer/perimeters")
public class PerimeterController {

    @Autowired
    PerimeterService perimeterService;

    @RequestMapping(method = RequestMethod.GET, value = "/getAllPerimeters")
    public List<Perimeter> getAllPerimeters() {
        return perimeterService.getAllPerimeters();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/addPerimeter")
    public Perimeter addPerimeter(@RequestBody Perimeter perimeter) {
        return perimeterService.addPerimeter(perimeter);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getPerimeter/{idPerimeter}")
    public Perimeter addPerimeter(@PathVariable int idPerimeter) {
        return perimeterService.getPerimeterById(idPerimeter);
    }
}

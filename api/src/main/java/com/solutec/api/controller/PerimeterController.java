package com.solutec.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.solutec.api.service.PerimeterService;

@RestController
@RequestMapping("/organizer/perimeters")
public class PerimeterController {

    @Autowired
    PerimeterService perimeterService;
}

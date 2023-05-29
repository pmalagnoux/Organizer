package com.solutec.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.solutec.api.model.Type;
import com.solutec.api.service.TypeService;

@RestController
@RequestMapping("/organizer/types")
public class TypeController {

    @Autowired
    TypeService typeService;

    @RequestMapping(method = RequestMethod.GET, value = "/getAllTypes")
    public List<Type> getAllTypes() {
        return typeService.getAllTypes();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/addType")
    public Type addType(@RequestBody Type type) {
        return typeService.addType(type);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getType/{idType}")
    public Type addType(@PathVariable int idType) {
        return typeService.getTypeById(idType);
    }
}

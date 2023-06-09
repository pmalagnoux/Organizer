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

import com.solutec.api.model.Type;
import com.solutec.api.service.TypeService;

@RestController
@RequestMapping("/type")
public class TypeController {

    @Autowired
    TypeService typeService;

    @RequestMapping(method = RequestMethod.GET, value = "")
    public List<Type> getAllTypes() {
        return typeService.getAllTypes();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/addType")
    @ResponseStatus(HttpStatus.CREATED)
    public Type addType(@RequestBody Type type) {
        return typeService.addType(type);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{idType}")
    public Type getType(@PathVariable int idType) {
        return typeService.getTypeById(idType);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/idType")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteType(@PathVariable int idType) {
        typeService.deleteType(idType);
    }
}

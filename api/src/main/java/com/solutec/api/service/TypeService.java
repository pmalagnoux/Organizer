package com.solutec.api.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.solutec.api.model.Type;
import com.solutec.api.repository.TypeRepository;

@Service
public class TypeService {

    @Autowired
    TypeRepository typeRepository;

    public List<Type> getAllTypes() {
        List<Type> result = new ArrayList<>();
        this.typeRepository.findAll().forEach(result::add);
        return result;
    }

    public Type addType(Type type) {
        return this.typeRepository.save(type);
    }

    public Type getTypeById(int idType) {
        Optional<Type> hOpt = this.typeRepository.findById(idType);
        if (hOpt.isPresent()) {
            return hOpt.get();
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }

    public void deleteType(int idType) {
        this.typeRepository.deleteById(idType);
    }
}

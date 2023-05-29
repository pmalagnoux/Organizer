package com.solutec.api.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.solutec.api.model.Type;
import com.solutec.api.repository.TypeRepository;

@Service
public class TypeService {

    @Autowired
    TypeRepository typeRepository;

    public List<Type> getAllContacts() {
        List<Type> result = new ArrayList<>();
        this.typeRepository.findAll().forEach(result::add);
        return result;
    }

    public Type addContact(Type type) {
        return this.typeRepository.save(type);
    }

    public Type getContactById(int idType) {
        Optional<Type> hOpt = this.typeRepository.findById(idType);
        if (hOpt.isPresent()) {
            return hOpt.get();
        }
        return null;
    }
}

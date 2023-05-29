package com.solutec.api.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.solutec.api.model.Tag;
import com.solutec.api.repository.TagRepository;

@Service
public class TagService {

    @Autowired
    TagRepository tagRepository;

    public List<Tag> getAllContacts() {
        List<Tag> result = new ArrayList<>();
        this.tagRepository.findAll().forEach(result::add);
        return result;
    }

    public Tag addContact(Tag tag) {
        return this.tagRepository.save(tag);
    }

    public Tag getContactById(int idTag) {
        Optional<Tag> hOpt = this.tagRepository.findById(idTag);
        if (hOpt.isPresent()) {
            return hOpt.get();
        }
        return null;
    }
}

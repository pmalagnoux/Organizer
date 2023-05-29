package com.solutec.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.solutec.api.model.Tag;
import com.solutec.api.service.TagService;

@RestController
@RequestMapping("/organizer/tags")
public class TagController {

    @Autowired
    TagService tagService;

    @RequestMapping(method = RequestMethod.GET, value = "/getAllTags")
    public List<Tag> getAllTags() {
        return tagService.getAllTags();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/addTag")
    public Tag addTag(@RequestBody Tag tag) {
        return tagService.addTag(tag);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getTag/{idTag}")
    public Tag addTag(@PathVariable int idTag) {
        return tagService.getTagById(idTag);
    }
}

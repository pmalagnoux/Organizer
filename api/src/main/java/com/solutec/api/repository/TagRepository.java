package com.solutec.api.repository;

import org.springframework.data.repository.CrudRepository;

import com.solutec.api.model.Tag;

public interface TagRepository extends CrudRepository<Tag, Integer> {

}

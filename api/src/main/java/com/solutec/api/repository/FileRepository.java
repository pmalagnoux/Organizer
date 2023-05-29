package com.solutec.api.repository;

import org.springframework.data.repository.CrudRepository;

import com.solutec.api.model.File;

public interface FileRepository extends CrudRepository<File, Integer> {

}

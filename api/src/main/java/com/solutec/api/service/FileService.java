package com.solutec.api.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.solutec.api.model.File;
import com.solutec.api.repository.FileRepository;

@Service
public class FileService {

    @Autowired
    FileRepository fileRepository;

    public List<File> getAllFiles() {
        List<File> result = new ArrayList<>();
        this.fileRepository.findAll().forEach(result::add);
        return result;
    }

    public File getFileById(int idFile) {
        Optional<File> hOpt = this.fileRepository.findById(idFile);
        if (hOpt.isPresent()) {
            return hOpt.get();
        }
        return null;
    }

}

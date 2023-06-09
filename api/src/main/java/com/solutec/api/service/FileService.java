package com.solutec.api.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

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
        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }

    public File addFile(File file) {
        return this.fileRepository.save(file);
    }

    public void deleteFile(int idFile) {
        this.fileRepository.deleteById(idFile);
    }

}

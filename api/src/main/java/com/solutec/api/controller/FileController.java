package com.solutec.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.solutec.api.model.File;
import com.solutec.api.service.FileService;

@RestController
@RequestMapping("/organizer/files")
public class FileController {

    @Autowired
    FileService fileService;

    @RequestMapping(method = RequestMethod.GET, value = "/getAllFiles")
    public List<File> getAllFiles() {
        return fileService.getAllFiles();
    }

    // @RequestMapping(method = RequestMethod.POST, value = "/addFile")
    // public File addFile(@RequestBody File file) {
    // return fileService.addFile(file);
    // }

    @RequestMapping(method = RequestMethod.GET, value = "/getFile/{idFile}")
    public File addFile(@PathVariable int idFile) {
        return fileService.getFileById(idFile);
    }
}

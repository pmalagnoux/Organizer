using apica.Context;
using apica.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection.Metadata;
using File = apica.Models.File;

namespace apica.Helpers
{
    public class FileHelper
    {
        private DBContext _context;
        public FileHelper(DBContext context)
        {
            _context = context;
        }

        public List<File> GetFiles()
        {
            List<File> response = new List<File>();
            var dataList = _context.Files.Include(c => c.Tags).ToList();
            return dataList;
        }

        public void AddFile(File file)
        {
            _context.Files.Add(file);
            _context.SaveChanges();
        }

        public void RemoveFile(int id)
        {
            File response = GetFile(id);
            _context.Files.Remove(response);
            _context.SaveChanges();

        }

        public File GetFile(int id)
        {
            File response = _context.Files.Include(c => c.Tags).FirstOrDefault(x=> x.Id == id);
            return response;
        }

        public void UpdateFile(int id, File file)
        {
            File response = _context.Files.FirstOrDefault(c => c.Id == id);
            //TODO : Faire les changements
            _context.SaveChanges(); 
        }

        public void ScanFiles()
        {
            string path = @"C:\Users\pmalagnoux\OneDrive - Solutec\Bureau\Intercontrat\Comptes rendu de réunions";
            List<string> allFiles = new List<string>();
            ScanFiles(allFiles, path);
            
            foreach (var file in allFiles)
            {
                if (_context.Files.Any(o => o.Location == file))
                {
                
                }
                else
                {
                    File fileTemp = new File();
                    fileTemp.Name = Path.GetFileNameWithoutExtension(file);
                    fileTemp.Extension = Path.GetExtension(file);
                    fileTemp.Location = Path.GetFullPath(file);
                    AddFile(fileTemp);
                }
            }
            List<File> files = GetFiles();
            foreach (var file in files) 
            {
                if (!allFiles.Contains(file.Location))
                {
                    RemoveFile(file.Id);
                }
            }

        }

        private void ScanFiles (List<string> allFiles, string path)
        {
            List<string> files = Directory.GetFiles(path).ToList();
            allFiles.AddRange(files);
            List<string> subDirectories = Directory.GetDirectories(path).ToList();
            Console.WriteLine(subDirectories.Count);
            foreach (string subdirect in subDirectories)
            {
                 ScanFiles(allFiles, subdirect);
            }
        }


        public void addTag(int id, int idTag)
        {
            File response = _context.Files.Include(p => p.Tags).Single(c => c.Id == id);
            Tag tag = _context.Tags.Find(idTag);
            response.Tags.Add(tag);
            _context.SaveChanges();
        }

        public void RemoveTag(int id, int idTag)
        {
            var tagToDelete = _context.FileTags.FirstOrDefault(c => c.TagId == idTag && c.FileId == id);
            _context.FileTags.Remove(tagToDelete);
            _context.SaveChanges();
        }
    }
}

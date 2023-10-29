package com.kirian.library.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kirian.library.entity.models.Author;
import com.kirian.library.entity.services.IAuthorService;

@RestController
@CrossOrigin(origins="*")
public class AuthorController {

	@Autowired
	IAuthorService authorService;
	
	@GetMapping("/authors")
	public List<Author>getAllUsers(){
		return authorService.getAll();
	}
	
	//PathVariable indica que un parametro del metodo 
	//debe ser enlazado, como en el caso del id
	@GetMapping("/authors/{id}")
	public Author getOne(@PathVariable(value = "id")long id){
		return authorService.get(id);
	}
	
	@PostMapping("/authors")
	public void post(@RequestBody Author author){
		System.out.println(author.getName());
		authorService.post(author);	
	}
	@PutMapping("/authors/{id}")
	public void put(@RequestBody Author author, @PathVariable(value = "id")long id){
		authorService.put(author, id);
	}
	
	@DeleteMapping("/authors/{id}")
	public void put(@PathVariable(value = "id")long id){
		authorService.delete(id);
	}
}

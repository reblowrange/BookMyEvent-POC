package com.bookevent.controller;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.Min;

import com.bookevent.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookevent.ORM.Category;

@CrossOrigin("*")
@RestController()
@RequestMapping("/category")
@Validated
public class CategoryController {
	
	@Autowired
	CategoryService categoryService;
	
	@PostMapping()
	public ResponseEntity<Category> createCategory(@Valid @RequestBody Category category) {
		return new ResponseEntity<Category>(categoryService.createCategory(category), HttpStatus.CREATED);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Category>> getAllCategory() {
		return new ResponseEntity<List<Category>>(categoryService.getAllCategory(), HttpStatus.OK);
	}
	
	@GetMapping("/id/{id}")
	public ResponseEntity<Category> getCategoryById(@PathVariable @Min(1) Integer id) throws Exception {
		return new ResponseEntity<Category>(categoryService.getCategoryById(id), HttpStatus.OK);
	}
	
	@PutMapping()
	public ResponseEntity<Category> updateCategory(@Valid @RequestBody Category category) {
		return new ResponseEntity<Category>(categoryService.updateCategory(category), HttpStatus.OK);
	}
	
	@DeleteMapping("/id/{id}")
	public void deleteCategory(@PathVariable @Min(1) Integer id) {
		categoryService.deleteCategory(id);
	}
}

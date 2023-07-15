package com.bookevent.service;

import java.util.List;

import com.bookevent.ORM.Category;

public interface CategoryService {
	public Category createCategory(Category category);
	
	public List<Category> getAllCategory();
	
	public Category getCategoryById(Integer id) throws Exception;
	
	public void deleteCategory(Integer id);
	
	public Category updateCategory(Category category);
}

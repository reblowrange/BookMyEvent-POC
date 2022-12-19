package com.alti.bookmyevent.service;

import java.util.List;

import com.alti.bookmyevent.ORM.Category;

public interface CategoryService {
	public Category createCategory(Category category);
	
	public List<Category> getAllCategory();
	
	public Category getCategoryById(Integer id) throws Exception;
	
	public void deleteCategory(Integer id);
	
	public Category updateCategory(Category category);
}

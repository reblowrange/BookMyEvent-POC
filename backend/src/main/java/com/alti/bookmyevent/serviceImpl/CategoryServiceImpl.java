package com.alti.bookmyevent.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alti.bookmyevent.ORM.Category;
import com.alti.bookmyevent.repository.CategoryJPARepository;
import com.alti.bookmyevent.service.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService {

	@Autowired CategoryJPARepository jpaRepository;
	
	@Override
	public Category createCategory(Category category) {
		Category response = jpaRepository.save(category);
		return response;
	}

	@Override
	public List<Category> getAllCategory() {
		return jpaRepository.findAll();
	}

	@Override
	public Category getCategoryById(Integer id) throws Exception {
		Optional<Category> response = jpaRepository.findById(id);
		if(response.isPresent()) {
			return response.get();
		} else {
			throw new Exception("Category Not found");
		}
		
	}

	@Override
	public void deleteCategory(Integer id) {
		jpaRepository.deleteById(id);
	}
	
	@Override
	public Category updateCategory(Category category) {
		return jpaRepository.save(category);
	}

}

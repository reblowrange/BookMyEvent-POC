package com.alti.bookmyevent.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alti.bookmyevent.ORM.Category;

@Repository
public interface CategoryJPARepository extends JpaRepository<Category, Integer> {

}

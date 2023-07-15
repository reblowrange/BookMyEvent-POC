package com.bookevent.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bookevent.ORM.Category;

@Repository
public interface CategoryJPARepository extends JpaRepository<Category, Integer> {

}

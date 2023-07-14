package com.alti.bookmyevent.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.alti.bookmyevent.ORM.Event;

@Repository
public interface EventJPARepository extends JpaRepository<Event, Integer> {
	
	@Query("select e from Event e WHERE e.category = ?1")
	public List<Event> getEventsByCategory(String category);
	
	@Query("select e from Event e WHERE e.category = ?1 and e.location = ?2")
	public List<Event> getEventsByCategory(String category, String location);
}

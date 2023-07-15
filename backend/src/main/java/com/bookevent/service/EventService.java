package com.bookevent.service;

import java.util.List;

import com.bookevent.ORM.Event;

public interface EventService {
	Event saveEvent(Event event);
	
	List<Event> getAllEvents();
	
	Event getEventById(Integer id) throws Exception;
	
	void deleteEventById(Integer id);
	
	Event updateEvent(Event event);
	
	List<Event> getEventsByCategory(String category);
	
	List<Event> getEventsByCategoryNLocation(String category, String location);
}

package com.alti.bookmyevent.serviceImpl;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alti.bookmyevent.ORM.Event;
import com.alti.bookmyevent.repository.EventJPARepository;
import com.alti.bookmyevent.service.EventService;

@Service
public class EventServiceImpl implements EventService {

	@Autowired
	EventJPARepository eventJPARepository;

	@Override
	public Event saveEvent(Event event) {
		Event reponse = eventJPARepository.save(event);
		return reponse;
	}

	@Override
	public List<Event> getAllEvents() {
		List<Event> events = eventJPARepository.findAll();
		events.sort(Comparator.comparing(Event::getOnDate).reversed());
		return events;
	}

	@Override
	public Event getEventById(Integer id) throws Exception {
		Optional<Event> response = eventJPARepository.findById(id);
		if (response.isPresent()) {
			return response.get();
		} else {
			throw new Exception("Event Not found");
		}
	}

	@Override
	public void deleteEventById(Integer id) {
		eventJPARepository.deleteById(id);
	}

	@Override
	public Event updateEvent(Event event) {
		Event reponse = eventJPARepository.save(event);
		return reponse;
	}

	@Override
	public List<Event> getEventsByCategory(String category) {
		List<Event> events = eventJPARepository.getEventsByCategory(category);
		events.sort(Comparator.comparing(Event::getOnDate).reversed());
		return events;
	}

	@Override
	public List<Event> getEventsByCategoryNLocation(String category, String location) {
		List<Event> events = null;
		if (location.equalsIgnoreCase("all")) {
			events = eventJPARepository.getEventsByCategory(category);
		}
		events = eventJPARepository.getEventsByCategory(category, location);

		events.sort(Comparator.comparing(Event::getOnDate).reversed());
		return events;
	}

}

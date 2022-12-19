import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Event } from '../models/Constants';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private readonly httpClient: HttpClient) { }

  public addCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>('category', category);
  }

  public getCategoryById(id: number): Observable<Category> {
    return this.httpClient.get<Category>('category/id/' + id);
  }

  public getAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>('category/all');
  }

  public updateCategory(category: Category): Observable<Category> {
    return this.httpClient.put<Category>('category', category);
  }

  public deleteCategoryById(id: number): Observable<Category> {
    return this.httpClient.delete<Category>('category/id/' + id);
  }

  public createEvent(event: Event): Observable<Event> {
    return this.httpClient.post<Event>('event', event);
  }

  public getEventById(id: number): Observable<Event> {
    return this.httpClient.get<Event>('event/id/' + id);
  }

  public getEventByCategory(category: string): Observable<Event[]> {
    return this.httpClient.get<Event[]>('event/category/' + category);
  }

  public getEventByCategoryNLocation(category: string, location: string): Observable<Event[]> {
    return this.httpClient.get<Event[]>('event', { params: { category: category, location: location } });
  }

  public getAllEvent(): Observable<Event[]> {
    return this.httpClient.get<Event[]>('event/all');
  }

  public updateEvent(event: Event): Observable<Event> {
    return this.httpClient.put<Event>('event', event);
  }

  public deleteEventById(id: number): Observable<Event> {
    return this.httpClient.delete<Event>('event/id/' + id);
  }
}

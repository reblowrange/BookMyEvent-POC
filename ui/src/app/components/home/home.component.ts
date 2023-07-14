import { Component, OnInit } from '@angular/core';
import { Category, Event, LocationList } from 'src/app/models/Constants';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public selectedCity = 'Pune'
  public locationList = LocationList;
  public eventList = new Array<Event>();
  public categories = new Array<Category>();

  constructor(private readonly restService: RestService) { }

  ngOnInit(): void {
    this.getAllEvent();
    this.getAllCategory();
  }

  private getAllEvent(): void {
    this.restService.getAllEvent().subscribe(res => {
      this.eventList = res && res.length ? res : [];
    })
  }

  private getAllCategory(): void {
    this.restService.getAllCategories().subscribe(res => {
      this.categories = res && res.length ? res : [];
    });
  }

  public onCategorySelect(category: Category): void {
    this.restService.getEventByCategoryNLocation(category.name, this.selectedCity).subscribe( res => {
      this.eventList = res && res.length ? res : [];
    });
  }
}

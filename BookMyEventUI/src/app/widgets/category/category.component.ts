import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/Constants';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Output() onCategorySelect = new EventEmitter<Category>();
  public categories = new Array<Category>({
    id: 1,
    name: 'Drama / Theater',
    matIcon: 'theater_comedy'
  },
    {
      id: 1,
      name: 'Music',
      matIcon: 'speaker'
    },
    {
      id: 1,
      name: 'Art',
      matIcon: 'gesture'
    },
    {
      id: 1,
      name: 'Travel & Outdoor',
      matIcon: 'flight_takeoff'
    },
    {
      id: 1,
      name: 'Sports & Fitness',
      matIcon: 'sports_soccer'
    },
    {
      id: 1,
      name: 'Food & Drink',
      matIcon: 'brunch_dining'
    });
  constructor(private readonly restService: RestService) { }

  ngOnInit(): void {

  }

}

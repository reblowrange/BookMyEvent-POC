import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category, Event } from 'src/app/models/Constants';
import { LocationList } from 'src/app/models/Constants';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  public categoryList = new Array<Category>();
  public locationList = LocationList;
  public eventForm: FormGroup;
  public eventList = new Array<Event>()

  constructor(private readonly restService: RestService, private readonly formBuider: FormBuilder,
    private datepipe: DatePipe) {

    this.eventForm = this.formBuider.group({
      id: [null],
      name: [null, [Validators.required]],
      description: [null, Validators.required],
      category: [null, Validators.required],
      onDate: [null, Validators.required],
      location: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.restService.getAllCategories().subscribe(res => {
      this.categoryList = res && res.length ? res : [];
    });

    this.getAllEvent();
  }

  public onSubmit(form: FormGroup): void {
    const onDate = new Date(form.value['onDate']);
    let onDateVal = this.datepipe.transform(onDate, `yyyy-MM-dd'T'HH:mm:sss`);

    const eventValues = {} as Event;
    eventValues['id'] = form.value['id'];
    eventValues['name'] = form.value['name'];
    eventValues['description'] = form.value['description'];
    eventValues['category'] = form.value['category'];
    eventValues['onDate'] = onDateVal ? onDateVal : '';
    eventValues['location'] = form.value['location'];

    if (eventValues['id']) {
      this.restService.updateEvent(eventValues).subscribe(res => {
        console.log(res);
        this.eventForm.reset();
        this.getAllEvent();
      });
    } else {
      this.restService.createEvent(eventValues).subscribe(res => {
        console.log(res);
        this.eventForm.reset();
        this.getAllEvent();
      });
    }
  }

  public getAllEvent(): void {
    this.restService.getAllEvent().subscribe(res => this.eventList = res && res.length ? res : []);
  }

  public editEvent(id: number): void {
    console.log(id);
    this.restService.getEventById(id).subscribe(res => {
      this.eventForm.patchValue({
        id: res['id'],
        name: res['name'],
        description: res['description'],
        category: res['category'],
        onDate: new Date(res['onDate']),
        location: res['location'],
      });
    });
  }

  public deleteEvent(id: number): void {
    this.restService.deleteEventById(id).subscribe(() => console.log("event deleted"));
    this.getAllEvent();
  }
}

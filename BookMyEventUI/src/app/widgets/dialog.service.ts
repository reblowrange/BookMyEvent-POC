import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  public success = new BehaviorSubject<string>('');
  public warning = new BehaviorSubject<string>('');
  public error = new BehaviorSubject<string>('');
  public info = new BehaviorSubject<string>('');

  constructor() { }
}

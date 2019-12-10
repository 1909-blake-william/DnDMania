import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  test = false;
  private testStream = new ReplaySubject<boolean>(1);
  test$ = this.testStream.asObservable();

  constructor() { }

  toggleTest() {
    this.test = !this.test;
    console.log(this.test);
    this.testStream.next(this.test);
  }
}

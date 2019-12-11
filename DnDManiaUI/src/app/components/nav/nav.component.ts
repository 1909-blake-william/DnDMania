import { Component, OnInit, OnDestroy } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  test = false;
  testSub: Subscription;

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.testSub = this.testService.test$.subscribe(test => {
      this.test = test;
    });
  }

  ngOnDestroy() {
    if (this.testSub !== undefined) {
      this.testSub.unsubscribe();
    }
  }

}

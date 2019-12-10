import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private testService: TestService, private router: Router) { }

  ngOnInit() {
    this.testService.toggleTest();
    this.router.navigateByUrl('/home');
  }

}

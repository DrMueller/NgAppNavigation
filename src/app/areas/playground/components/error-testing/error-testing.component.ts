import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-testing',
  templateUrl: './error-testing.component.html',
  styleUrls: ['./error-testing.component.scss']
})
export class ErrorTestingComponent implements OnInit {

  constructor() { }

  public throwException(): void {
    throw new Error('Hello Test Error');
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from './commons/services/request-to-resources/jsonplaceholder/jsonplaceholder.service';

@Component({
  selector: 'bz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'unit-tests-bz';

  constructor(
    private jsonplaceholderService: JsonplaceholderService,
  ) {}

  ngOnInit() {
    this.jsonplaceholderService.formatResponse().subscribe(res => {
      console.log(res);
    });
  }
}

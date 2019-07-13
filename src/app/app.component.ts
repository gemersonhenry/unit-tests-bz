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
    this.jsonplaceholderService.getPosts().subscribe(res => {
      console.log(res);
    });
    this.jsonplaceholderService.getPosts2().subscribe(res => {
      console.log(res);
    });
  }
}

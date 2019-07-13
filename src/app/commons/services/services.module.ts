import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestMethodsService } from './request-methods/request-methods.service';
import { HttpClientModule } from '@angular/common/http';
import { JsonplaceholderService } from './request-to-resources/jsonplaceholder/jsonplaceholder.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    RequestMethodsService,
    JsonplaceholderService,
  ]
})
export class ServicesModule { }

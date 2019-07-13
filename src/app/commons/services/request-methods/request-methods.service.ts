import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable()
export class RequestMethodsService {

  constructor(
    private http: HttpClient
  ) { }

  public getMethod<T>(url: string): Observable<HttpResponse<T>> {
    return this.http
      .get<T>(
        url,
        {
          headers: {},
          observe: 'response',
          params: {},
          responseType: 'json'
        },
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }

  public postMethod<T>(url: string): Observable<HttpResponse<T>> {
    return this.http
      .post<T>(
        url,
        {
          key: 'bzgemerson'
        },
        {
          headers: {},
          observe: 'response',
          params: {},
          responseType: 'json'
        }
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }
}

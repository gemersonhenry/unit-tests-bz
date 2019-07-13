import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { IGlobalErrorResponse, IErrorResponseModel } from '../contansts/global-interface';

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
      );
  }

  /**
   * ESte metodo se agregará de ls siguiente manera
   * "pipe(catchError(requestMethods.catchErrorResolution))"
   */
  public catchErrorResolution(error: HttpErrorResponse): Observable<IGlobalErrorResponse<IErrorResponseModel>> {
    return new Observable<IGlobalErrorResponse<IErrorResponseModel>>((observer) => {
      observer.next({
        status: error.status,
        error: {
          errorMessage: error.message,
        },
      });
    });
  }
}

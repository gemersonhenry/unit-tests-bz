import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
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

  public putMethod<T>(url: string): Observable<HttpResponse<T>> {
    return this.http
      .put<T>(
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

  public deleteMethod<T>(url: string): Observable<HttpResponse<T>> {
    return this.http
      .delete<T>(
        url,
        {
          headers: {},
          observe: 'response',
          params: {},
          responseType: 'json'
        }
      );
  }

  /**
   * Este metodo sirve para formatear cuando hay un error de servidor y se agregará
   * de la siguiente manera "pipe(catchError(requestMethods.catchErrorResolution))"
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

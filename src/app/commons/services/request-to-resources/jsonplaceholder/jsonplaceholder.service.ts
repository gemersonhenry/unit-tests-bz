import { Injectable } from '@angular/core';
import { GLOBAL_APIS } from '../../contansts/global-apis';
import { RequestMethodsService } from '../../request-methods/request-methods.service';
import { map, catchError } from 'rxjs/operators';
import { Post } from './jsonplaceholder.model';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { IPostResponse } from './jsonplaceholder.interface';
import { Observable, throwError } from 'rxjs';
import { IGlobalSuccessfulResponse, IGlobalErrorResponse, IErrorResponseModel } from '../../contansts/global-interface';

@Injectable()
export class JsonplaceholderService {

  private readonly url = GLOBAL_APIS.JSON_PLACE_HOLDER;

  constructor(
    private requestMethods: RequestMethodsService,
  ) { }

  public getPosts() {
    return new Observable<IGlobalSuccessfulResponse<Post[]>>((observer) => {
      this.requestMethods
      .getMethod<Post[]>(this.url)
      .pipe(
        map((response: HttpResponse<IPostResponse[]>) => {
          const body = response.body.map((post) => new Post(post));
          observer.next({
            data: body,
            status: response.status,
          });
        })
      );
    });
  }

  /**
   * Método para homologar todas las peticiones
   */
  public formatResponse(): Observable<IGlobalSuccessfulResponse<Post[]> | IGlobalErrorResponse<IErrorResponseModel>> {
    return this.requestMethods
      .getMethod<Post[]>(this.url + 'o')
      .pipe(
        map((response: HttpResponse<IPostResponse[]>) => {
          const body = response.body.map((post) => new Post(post));
          return {
            data: body,
            status: response.status,
          } as IGlobalSuccessfulResponse<Post[]>;
        })
      )
      .pipe(catchError(this.requestMethods.catchErrorResolution));
  }

}

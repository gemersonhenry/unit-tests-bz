import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { GLOBAL_APIS } from '../../contansts/global-apis';
import { RequestMethodsService } from '../../request-methods/request-methods.service';
import { map, catchError } from 'rxjs/operators';
import { Post } from './jsonplaceholder.model';
import { IPostResponse } from './jsonplaceholder.interface';
import { Observable } from 'rxjs';
import { IGlobalSuccessfulResponse, IGlobalErrorResponse, IErrorResponseModel } from '../../contansts/global-interface';

@Injectable()
export class JsonplaceholderService {

  private readonly url = GLOBAL_APIS.JSON_PLACE_HOLDER;

  constructor(
    private requestMethods: RequestMethodsService,
  ) { }

  /**
   * Método para homologar todas las peticiones
   */
  public getAllPosts(): Observable<IGlobalSuccessfulResponse<Post[]> | IGlobalErrorResponse<IErrorResponseModel>> {
    return this.requestMethods
      .getMethod<Post[]>(this.url)
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

import { Injectable } from '@angular/core';
import { GLOBAL_APIS } from '../../contansts/global-apis';
import { RequestMethodsService } from '../../request-methods/request-methods.service';
import { map } from 'rxjs/operators';
import { Post } from './jsonplaceholder.model';
import { HttpResponse } from '@angular/common/http';
import { IPostResponse } from './jsonplaceholder.interface';
import { Observable } from 'rxjs';
import { IGlobalResponse } from '../../contansts/global-interface';

@Injectable()
export class JsonplaceholderService {

  private readonly url = GLOBAL_APIS.JSON_PLACE_HOLDER;
  private readonly url2 = GLOBAL_APIS.JSON_PLACE_HOLDER_2;

  constructor(
    private requestMethods: RequestMethodsService,
  ) { }

  public getPosts() {
    return new Observable<IGlobalResponse<Post[]>>((observer) => {
      this.requestMethods
      .getMethod<Post[]>(this.url2)
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

  public getPosts2() {
    return this.requestMethods.getMethod(this.url2);
  }
}

import { IPostResponse } from './jsonplaceholder.interface';

export class Post {

  public userId: number;
  public id: number;
  public title: string;
  public body: string;

  constructor(res: IPostResponse) {
    this.userId = res.userId || -1;
    this.id = res.id || -1;
    this.title = res.title || '';
    this.body = res.body || '';
  }
}

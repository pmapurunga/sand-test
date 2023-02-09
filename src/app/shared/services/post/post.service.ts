import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "../../models/post/post.modele";
import { CrudService } from "../crud.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PostService extends CrudService<Post> {
  constructor(_http: HttpClient) {
    super(_http, "https://my-json-server.typicode.com/typicode/demo/posts");
  }

  loadAll(): Observable<Array<Post>> {
    return this._http.get<Array<Post>>(this._baseUrl).catch(this.handleError);
  }
}

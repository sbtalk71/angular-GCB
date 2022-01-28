import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _baseurl = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  public getAllPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this._baseurl);
  }

  public findPostById(id:number):Observable<Post>{
    return this.http.get<Post>(this._baseurl+'/'+id);
  }
}

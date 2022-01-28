import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts: Post[] = [];
  constructor(private _service: AppService) { }

  ngOnInit(): void {
    this._service.getAllPosts().subscribe(data => this.posts = data);
  }
  public onClick(id: number) {
    this._service.findPostById(id).subscribe(data => console.log(data));
  }
}

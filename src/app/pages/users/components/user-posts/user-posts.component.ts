import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  posts: any;

  constructor(private data: UsersService) { }

  ngOnInit() {

    this.data.getPosts().subscribe(
      (data: any) => this.posts = data
    )
  }

}

import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: any;

  constructor(private data: UsersService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.user = params['id'])
  }

  ngOnInit() {
    this.data.getUser(this.user).subscribe(
      (data : any) => this.user = data
    )
  }

}

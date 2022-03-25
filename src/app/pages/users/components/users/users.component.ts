import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '200ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('100ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class UsersComponent implements OnInit {

  users$: any;

  constructor(private data: UsersService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      (data: any) => this.users$ = data
    );
  }


}

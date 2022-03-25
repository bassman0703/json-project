import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzTableModule} from "ng-zorro-antd/table";
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import {NzWaveModule} from "ng-zorro-antd/core/wave";
import {NzButtonModule} from "ng-zorro-antd/button";
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {NzCardModule} from "ng-zorro-antd/card";


@NgModule({
  declarations: [
    UsersComponent,
    UserDetailComponent,
    UserPostsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NzDividerModule,
    NzTableModule,
    NzWaveModule,
    NzButtonModule,
    NzPageHeaderModule,
    NzCardModule
  ]
})
export class UsersModule { }

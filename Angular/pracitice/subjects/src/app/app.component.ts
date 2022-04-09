import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated: boolean = false;
  private subscription!: Subscription;

  constructor(private userService: UserService){

  }

  ngOnInit(): void{
    // this.userService.activatedEmmiter.subscribe((didActivate) => this.userActivated = didActivate);   
    this.subscription = this.userService.subject.subscribe((didActivate) => this.userActivated = didActivate);   

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(

    )
  }

}

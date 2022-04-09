import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() users: string[] = [];
  @Output() newUser = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addNewUser(input: HTMLInputElement): void{
    const {value: name} = input;
    this.newUser.emit(name);
    input.value = '';
  }
}

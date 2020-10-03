import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.css']
})
export class MenuTopComponent implements OnInit {
  count=1;
  constructor() { }

  ngOnInit(): void {
  }

}

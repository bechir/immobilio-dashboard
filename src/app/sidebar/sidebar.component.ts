import { Component, OnInit } from '@angular/core';
import { sidebarItems } from './sidebar.data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  get items() {
    return sidebarItems;
  }
}

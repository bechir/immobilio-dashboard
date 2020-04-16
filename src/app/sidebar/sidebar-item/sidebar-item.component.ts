import { Component, OnInit, Input } from '@angular/core';
import { SidebarItem } from '../sidebar-item';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {
  @Input() item: SidebarItem

  constructor() { }

  ngOnInit(): void {
  }

}

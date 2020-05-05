import { Component, OnInit, Input } from '@angular/core';
import { SideBarMenu } from '../sidebar-item';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {
  @Input() item: SideBarMenu

  public isCollapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() title: string;

  @Input () theme: string;

  @Input () isCollapsed: boolean = false;

  toggleCollapseNavBar(isCollapsed:boolean){
    this.isCollapsed = !this.isCollapsed;
  }
  constructor() { }

  ngOnInit() {
  }


}

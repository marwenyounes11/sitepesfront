import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private vps: ViewportScroller) { }

  ngOnInit(): void {
  }
  scroll(id) {
    this.vps.scrollToAnchor(id);
  }
  openTab() {
    /**  var i, x, tablinks;
    
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("w3-blanc", " w3-red");
    }
    */
  }
  onNavigate(){
   
    window.location.href="acceuil#page";
}
}

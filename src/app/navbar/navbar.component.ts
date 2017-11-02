import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  constructor() { }
  title : string = '9GAG';
  menu : string[] = ['Hot','Trending','Fresh','More '];
  items : string[] = ['Funny','Animals','Dark Humor','NSFW','Game of Thrones']


}

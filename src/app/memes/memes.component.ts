import { Component, OnInit } from '@angular/core';
import {isNumber} from "util";

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent {

  constructor() { }
  memearray : any[] =[
    {
      "upvotes": 34,
      "downvotes":2,
      "image":"./assets/memepics/1.jpg"
    },
    {
      "upvotes": 123,
      "downvotes":23,
      "image":"./assets/memepics/2.jpg"
    },
    {
      "upvotes": 445,
      "downvotes":89,
      "image":"./assets/memepics/3.jpg"
    },
    {
      "upvotes": 355,
      "downvotes":20,
      "image":"./assets/memepics/4.jpg"
    },
    {
      "upvotes": 657,
      "downvotes":299,
      "image":"./assets/memepics/5.jpg"
    },
    {
      "upvotes": 234,
      "downvotes":72,
      "image":"./assets/memepics/6.gif"
    },
    {
      "upvotes": 434,
      "downvotes":28,
      "image":"./assets/memepics/7.gif"
    },
    {
      "upvotes": 434,
      "downvotes":28,
      "image":"./assets/memepics/8.gif"
    }
  ]

}

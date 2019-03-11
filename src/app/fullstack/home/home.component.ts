import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class FullstackHomeComponent implements OnInit {

  constructor(private titleService: Title) {
    titleService.setTitle('Full Stack');
  }

  ngOnInit() {
  }

}

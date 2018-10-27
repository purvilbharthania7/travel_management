import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#button1").click(function(){
      $("#button1").addClass('red');
      $("#button2").removeClass('red');
      $("#button3").removeClass('red');
      $("#Flight").addClass('show');
      $("#Hotel").removeClass('show');
      $("#Car").removeClass('show');
    });
    $("#button2").click(function(){
      $("#button2").addClass('red');
      $("#button1").removeClass('red');
      $("#button3").removeClass('red');
      $("#Hotel").addClass('show');
      $("#Flight").removeClass('show');
      $("#Car").removeClass('show');

    });
    $("#button3").click(function(){
      $("#button3").addClass('red');
      $("#button1").removeClass('red');
      $("#button2").removeClass('red');
      $("#Car").addClass('show');
      $("#Flight").removeClass('show');
      $("#Hotel").removeClass('show');
    });
  }
}



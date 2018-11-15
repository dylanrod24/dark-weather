import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService){
    
  }
  

  

  ngOnInit(){

    // Sockets connection to node server
    
  }

  
}

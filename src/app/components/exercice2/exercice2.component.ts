import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/services/service/s.service'


@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.scss']
})
export class Exercice2Component implements OnInit {
  
  data: any;
  items: Array<any> = [];
  current=0;
  img : any;

  
  constructor(private $ser: ServiceService) { 
 

  }
  
  ngOnInit() {

  }

  getData() {
    this.$ser.getData().subscribe( // avec http  je donne a subscribe de formules landa 
      s => this.data = s, // 1er ca normal 
      error => alert('error !!') //2 em  expresseion declancher en cas d erreur 
      );
 this.current=1;
 


}



}

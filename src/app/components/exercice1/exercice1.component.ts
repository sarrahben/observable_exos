import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, share} from "rxjs/operators";
@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss']
})
export class Exercice1Component implements OnInit {
  @ViewChild('hr',{static : false}) hr : ElementRef;
  @ViewChild('min',{static : false}) min : ElementRef;
  @ViewChild('sec',{static : false}) sec : ElementRef;
  clock: Observable<Date>;
  time: Date;
  constructor(){
    this.clock = interval(1000).pipe(map(tick => new Date()),share());
  }
  
  ngOnInit() {
   this.clock.subscribe(time => this.updateClock(time));
    
  }

  updateClock(time )
  {
    this.sec.nativeElement.style.transform = 'rotate(' + time.getSeconds() * 6 + 'deg)';
    this.min.nativeElement.style.transform = 'rotate(' + time.getMinutes() * 6 + 'deg)';
    this.hr.nativeElement.style.transform = 'rotate(' + time.getHours() * 30 + 'deg)';
  }
}



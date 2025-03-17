import { Component, HostBinding, HostListener, inject,ElementRef, input,ViewEncapsulation, ContentChild, contentChild, AfterContentInit, afterRender, afterNextRender } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host:{
    class:'control',
    '(click)':'onClick()'
  }
})
export class ControlComponent implements AfterContentInit {
 label=input.required<string>();
//  @HostBinding('class') class='control';
// @HostListener('click') 
private el=inject(ElementRef);

// @ContentChild('input')private control?:ElementRef<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;
private control=contentChild<ElementRef<HTMLInputElement| HTMLAreaElement>>('input');

constructor() {
   afterRender(()=>{
    console.log('Control rendered');
   });
   afterNextRender(()=>{
    console.log('Control next rendered');
   }); 
  }

ngAfterContentInit(): void {
  
}
onClick(){
  console.log('Control clicked');
console.log(this.el);
console.log(this.control());
}
}

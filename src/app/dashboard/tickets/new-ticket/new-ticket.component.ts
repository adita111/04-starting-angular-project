import { Component, ViewChild, ElementRef, viewChild, AfterViewInit, OnInit, Output, EventEmitter, output } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})

export class NewTicketComponent implements OnInit,AfterViewInit {

enterredTitle = '';
enteredText = '';

add=output<{title:string;text:string;}>();


ngOnInit() {
console.log("on init");
console.log(this.form?.nativeElement);
}

ngAfterViewInit() {
  console.log("after view init");
  console.log(this.form?.nativeElement);
}


  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  //private form= viewChild.required<ElementRef<HTMLFormElement>>('form');
onSubmit() {
  this.add.emit({title:this.enterredTitle,text:this.enteredText});
  //this.form?.nativeElement.reset();
  this.enterredTitle='';
  this.enteredText='';
}

}

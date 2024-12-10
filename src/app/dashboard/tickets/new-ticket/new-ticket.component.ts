import { Component, ElementRef, EventEmitter, output, Output, ViewChild, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  
  add = output<{title: string; text: string;}>()
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;

  onSubmit(title:string, ticketText:string){
    this.add.emit({title: title, text: ticketText});
    this.form?.nativeElement.reset();
  }
}

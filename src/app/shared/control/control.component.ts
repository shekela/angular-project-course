import { afterNextRender, afterRender, Component, ContentChild, ElementRef, HostListener, input, viewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host:{
    class: 'control',
    '(click)':'onClick()'
  }

})
export class ControlComponent {
    constructor(){
      afterRender(() => {
        console.log("After Render");
      });
      afterNextRender(() => {
        console.log("After next render");
      })
    }

    label = input.required<string>();
    @ContentChild('input') private control?: ElementRef<HTMLTextAreaElement | HTMLInputElement>
 
    onClick(){
      console.log(this.control)
    }

}

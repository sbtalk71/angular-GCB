import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight3]'
})
export class HighlightDirective3 implements OnInit {

  @HostBinding("style.BackgroundColor") color:string="red";
  constructor(private element: ElementRef, private renederer: Renderer2) {

  }

  ngOnInit() {
    this.renederer.setStyle(this.element.nativeElement, "background-color", "green");
  }

  @HostListener("mouseenter")
  mouseenters(){
   this.color="yellow"
  }

  @HostListener("mouseleave")
  mouseleaves(){
    this.color="green";
  }

  @HostListener("click")
  onClick(){
    this.color="";
  }
}

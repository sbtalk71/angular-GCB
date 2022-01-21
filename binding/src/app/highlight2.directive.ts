import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight2]'
})
export class HighlightDirective2 implements OnInit {

  constructor(private element: ElementRef, private renederer: Renderer2) {

  }

  ngOnInit() {
    this.renederer.setStyle(this.element.nativeElement, "background-color", "green");
  }

  @HostListener("mouseenter")
  mouseenters(){
    this.renederer.setStyle(this.element.nativeElement, "background-color", "yellow");
  }

  @HostListener("mouseleave")
  mouseleaves(){
    this.renederer.setStyle(this.element.nativeElement, "background-color", "green");
  }
}

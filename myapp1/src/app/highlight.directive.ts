import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    (this.element.nativeElement as HTMLElement).style.backgroundColor = "red";
  }

  
}

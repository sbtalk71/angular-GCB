import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight2]'
})
export class HighlightDirective2 implements OnInit {

  constructor(private element: ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement,"background-color","green");
  }

  @HostListener('mouseenter')
  onmouseover(event:Event){
    this.renderer.setStyle(this.element.nativeElement,"background-color","yellow");
    
  }

  @HostListener('mouseleave')
  onmouseleave(event:Event){
    this.renderer.setStyle(this.element.nativeElement,"background-color","green");
    
  }
}

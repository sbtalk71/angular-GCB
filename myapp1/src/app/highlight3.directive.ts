import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight3]'
})
export class HighlightDirective3 implements OnInit {

  @HostBinding("style.backgroundColor") color:string='';

  constructor(private element: ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement,"background-color","green");
  }

  @HostListener('mouseenter')
  onmouseover(event:Event){
    this.color="yellow";
    
  }

  @HostListener('mouseleave')
  onmouseleave(event:Event){
    this.color="green";
  }
}

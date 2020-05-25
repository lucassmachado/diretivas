import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostBinding('style.backgroundColor')
  backgrounColor: string;

  @HostListener('mouseenter')
  onMouseOver() {
    // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
    this.backgrounColor = 'yellow';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'white');
    this.backgrounColor = 'white';
  }

  constructor(private _elementRef: ElementRef,
    private _renderer: Renderer2) { }
}

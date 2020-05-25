import { Directive, HostBinding, Input, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor')
  backgroundColor: string;

  @Input()
  defaultColor = 'white';

  @Input('highlight')
  highlightColor = 'yellow';

  @HostListener('mouseenter')
  onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}

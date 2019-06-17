import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

    @HostBinding('style') innerText;

    constructor(private element: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        
        // this.element.nativeElement.style.backgroundColor = 'blue'
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'lime');
    }

    @HostListener('mouseover') hovering(eventData: Event) {
        // console.log(this.innerText)
        this.renderer.setStyle(this.element.nativeElement, 'background-color', 'gray');
        this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    }

    @HostListener('mouseleave') leaving(eventData: Event) {


        this.renderer.setStyle(this.element.nativeElement, 'background-color', 'white');
        this.renderer.setStyle(this.element.nativeElement, 'color', 'black');
    }
}
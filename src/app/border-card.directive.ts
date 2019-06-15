import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

	private initialColor: string = '#f5f5f5';
	private defaultColor: string = '#009688';
	

    @Input('pkmnBorderCard') private couleur : string;

	constructor(private el: ElementRef) {
		this.setBorder(this.initialColor);
	}

    @HostListener('mouseenter') onMouseenter(){
    this.setBorder(this.couleur || this.defaultColor);
    }
    @HostListener('mouseleave') onmouseleave(){
        this.setBorder(this.initialColor);
    }
	private setBorder(color: string) {
		let border = 'solid 4px ' + color;
        this.el.nativeElement.style.border = border;
       
	} 

	private setHeight(height: number) {
		this.el.nativeElement.style.height = height + 'px';
	}
}
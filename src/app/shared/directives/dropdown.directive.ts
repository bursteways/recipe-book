import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

/**
 * @description Toggle Dropdown
 * @description - Handles the toggling "open/close" for dropdowns. Dropdowns should close when clicking
 *                anywhere in the document outside of the menu.
 */
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}

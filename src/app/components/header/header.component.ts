import { Component, Output, ViewChild, Renderer2, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private renderer2: Renderer2) { }

  @Output() featuredSelected = new EventEmitter<string>();
  isActiveString: string = '';
  onSelect(feature: string) {
    this.featuredSelected.emit(feature);
    this.isActiveString = feature;
  }


  // For Menu toggle
  @ViewChild("myMenu") menu: any;
  isOpen: boolean = false;
  openMenu() {
    if (this.isOpen) {
      this.renderer2.setStyle(this.menu.nativeElement, 'display', 'none');
      this.isOpen = false;
    }
    else {
      this.renderer2.setStyle(this.menu.nativeElement, 'display', 'block');
      this.isOpen = true;
    }
    // console.log("isOpen: ",this.isOpen);
  }
}

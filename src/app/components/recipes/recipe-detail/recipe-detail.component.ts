import { Component, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(private renderer2:Renderer2) { }

  ngOnInit(): void {
  }

  @Input() recipe : any;






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

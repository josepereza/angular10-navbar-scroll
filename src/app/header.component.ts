import { Component, Input, HostListener, HostBinding } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Component({
  selector: 'header',
  template: `<h1 [ngClass]="{'hdr': !scrolling, 'hdrScroll': scrolling }">header {{name}}!</h1>`,
  styleUrls: [ './header.component.css' ]
})
export class HeaderComponent  {
  @Input() name: string;
  scrolling: boolean;
  constructor(@Inject(DOCUMENT) private document: Document) {
      this.scrolling = false;
    }

  @HostListener('document:scroll', ['$event']) onScrollEvent($event){
   // console.log($event['Window']);
    console.log("scrolling");
    
    if(!this.scrolling) {
      this.scrolling = true;
    }
    if (this.document.documentElement.scrollTop==0){
      this.scrolling=false;
    } 
 }
}

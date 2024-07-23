
import {Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazyImage.component.html',

})
export class LazyImageComponent {

@Input()
public url!: string;

@Input()
public alt: string= '';

public hasLoaded: boolean = false

ngOnInit():void {
  if( !this.url)
 throw new Error (' URL property in required')
}

onLoad(){

  this.hasLoaded =  true;
}

}

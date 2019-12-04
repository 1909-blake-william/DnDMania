import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
// Added BrowserAnimationModule for animations to imports and import
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule
    // BrowserAnimationsModule
  ]
})
export class ViewModule { }

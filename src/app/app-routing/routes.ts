import { Routes } from '@angular/router';

import { SlideComponent } from '../slide/slide.component';
import { MatSliderComponent } from '../mat-slider/mat-slider.component';


export const routes: Routes = [
    { path: 'hometype', component: SlideComponent },
    { path: 'homeest', component: MatSliderComponent },
    { path: '', redirectTo: '/hometype', pathMatch: 'full' }
  ];
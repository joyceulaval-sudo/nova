import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component'
import { FaqComponent } from './pages/faq/faq.component'
import { NovaComponent } from './pages/nova/nova.component'
import { PredictorComponent } from './pages/predictor/predictor.component'


export const routes: Routes = [
  { path: '', redirectTo: 'nova', pathMatch: 'full' },
  { path: 'nova', component: NovaComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'predictor', component: PredictorComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'nova' }
]

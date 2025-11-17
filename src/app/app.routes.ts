import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component'
import { FaqComponent } from './pages/faq/faq.component'
import { NovaComponent } from './pages/nova/nova.component'


export const routes: Routes = [
  { path: '', redirectTo: 'nova', pathMatch: 'full' },
  { path: 'nova', component: NovaComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'nova' }
]

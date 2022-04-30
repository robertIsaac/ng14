import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

const routes: Routes = [
  {
    path: 'foo',
    loadComponent: () => import('./app/foo/foo.component').then(c => c.FooComponent),
  },
];

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    ...importProvidersFrom(RouterModule.forRoot(routes)),
  ],
})
  .catch(err => console.error(err));

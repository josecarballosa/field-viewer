/**
 * DO import modules that should be instantiated once in your app.
 * DO place services in the module, but do not provide them.
 * DO NOT import the CoreModule into any modules other than the AppModule.
 * DO NOT declare components, pipes, directives.
 * // TODO: Why not? For example: toolbar, navbar, ...
 */

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';

// import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { throwIfAlreadyLoaded } from './duplicate-import-guard';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    // HttpClientModule,
    // NgbDropdownModule,
  ],
  declarations: [HeaderComponent, NotFoundComponent],
  exports: [HeaderComponent, NotFoundComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

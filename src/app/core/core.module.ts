/**
 * DO import modules that should be instantiated once in your app.
 * DO place services in the module, but do not provide them.
 * DO NOT import the CoreModule into any modules other than the AppModule.
 * DO NOT declare components, pipes, directives.
 * // TODO: Why not? For example: toolbar, navbar, ...
 */

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';

// import { NavbarComponent } from './navbar/navbar.component';
// import { ToolbarComponent } from './toolbar/toolbar.component';
import { throwIfAlreadyLoaded } from './duplicate-import-guard';

@NgModule({
  imports: [
    CommonModule,
    // HttpClientModule
  ],
  // declarations: [NavbarComponent, ToolbarComponent],
  declarations: [],
  // exports: [NavbarComponent, ToolbarComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

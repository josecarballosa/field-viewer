/**
 * DO declare components, pipes, directives, and export them.
 * DO import FormsModule, ReactiveFormsModule and other (3rd-party) modules you need.
 * DO import the SharedModule into any Feature Modules.
 * DO NOT provide app-wide singleton services in your SharedModule.
 *   Instead move these to the CoreModule.
 * DO NOT import the SharedModule into the AppModule.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SplitViewComponent } from './split-view/split-view.component';

@NgModule({
  declarations: [SplitViewComponent],
  // imports: [CommonModule, FormsModule],
  imports: [CommonModule],
  exports: [FormsModule, SplitViewComponent],
})
export class SharedModule {}

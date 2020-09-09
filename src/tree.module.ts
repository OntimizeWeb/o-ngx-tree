import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NodeDraggableDirective } from './draggable/node-draggable.directive';
import { NodeEditableDirective } from './editable/node-editable.directive';
import { NodeMenuComponent } from './menu/node-menu.component';
import { TreeInternalComponent } from './tree-internal.component';
import { TreeComponent } from './tree.component';
import { SafeHtmlPipe } from './utils/safe-html.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NodeDraggableDirective,
    TreeComponent,
    NodeEditableDirective,
    NodeMenuComponent,
    TreeInternalComponent,
    SafeHtmlPipe
  ],
  exports: [TreeComponent]
})
export class TreeModule {}

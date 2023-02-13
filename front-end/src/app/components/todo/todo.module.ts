import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [TodoComponent],
  exports: [TodoComponent],
  imports: [CommonModule, SharedModule],
})
export class TodoModule {}

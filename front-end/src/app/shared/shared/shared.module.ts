import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CheckboxModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
  exports: [
    CheckboxModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}

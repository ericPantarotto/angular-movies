import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
  declarations: [],
  exports: [MatToolbarModule, MatButtonModule, MatIconModule],
  imports: [CommonModule],
})
export class MaterialModule {}

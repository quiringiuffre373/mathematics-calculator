import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, MatButtonModule, MatIconModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
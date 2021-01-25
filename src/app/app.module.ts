import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { TodoComponent } from './components/todo.component';
import { RightWrapComponent } from './components/right-wrap/right-wrap.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { DateRangeComponent } from './components/date-range/date-range.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    RightWrapComponent,
    DateRangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    NzDatePickerModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }

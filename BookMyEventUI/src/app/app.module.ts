import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbDatepickerModule } from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { HttpIntercepterService } from './core/http-intercepter.service';
import { MaterialLibsModule } from './modules/material-libs.module';
import { NebularLibsModule } from './modules/nebular-libs.module';
import { CategoryComponent } from './widgets/category/category.component';
import { CreateEventComponent } from './widgets/create-event/create-event.component';
import { CreateCategoryComponent } from './widgets/create-category/create-category.component';
import { DialogComponent } from './widgets/dialog/dialog.component';
import { DialogService } from './widgets/dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    CreateEventComponent,
    CategoryComponent,
    CreateCategoryComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    NebularLibsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialLibsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterService, multi: true},
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

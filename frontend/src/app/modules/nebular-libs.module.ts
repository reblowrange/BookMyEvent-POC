import { NgModule } from '@angular/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbSelectModule,
  NbTabsetModule,
  NbThemeModule,
  NbTimepickerModule,
  NbToastrModule,
} from '@nebular/theme';



@NgModule({
  imports: [
    
    NbThemeModule.forRoot({ name: 'default' }),
    NbDatepickerModule.forRoot(),
    NbTimepickerModule.forRoot(),
    NbToastrModule.forRoot()
  ],
  exports: [
    NbInputModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbIconModule,
    NbThemeModule,
    NbLayoutModule,
    NbSelectModule,
    NbListModule,
    NbCardModule,
    NbInputModule,
    NbDatepickerModule,
    NbTimepickerModule,
    NbTabsetModule
  ],
})
export class NebularLibsModule { }

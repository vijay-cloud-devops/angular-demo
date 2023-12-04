import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { AssetDetailsComponent } from './components/asset-details/asset-details.component';
import { AssetCountComponent } from './components/asset-count/asset-count.component';
import { AssetRecordsComponent } from './components/asset-records/asset-records.component';
import {MatCardModule} from "@angular/material/card";
import { AssetSearchComponent } from './components/asset-search/asset-search.component';
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {provideHttpClient} from "@angular/common/http";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatGridListModule} from "@angular/material/grid-list";
import { TimerComponent } from './components/timer/timer.component';
import {TimeAgoPipe} from "time-ago-pipe";
import {TimeagoFormatter, TimeagoModule} from "ngx-timeago";
import {CustomFormatter} from "./components/timer/custom-formatter";
import { AdavanceSearchDialogComponent } from './components/adavance-search-dialog/adavance-search-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import {MatChipsModule} from "@angular/material/chips";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AssetDetailsComponent,
    AssetCountComponent,
    AssetRecordsComponent,
    AssetSearchComponent,
    TimerComponent,
    AdavanceSearchDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatListModule,
    MatMenuModule,
    MatGridListModule,
    TimeagoModule.forRoot({
      //formatter: { provide: TimeagoFormatter, useClass: CustomFormatter }
    }),
    MatDialogModule,
    ReactiveFormsModule,
    MatChipsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }

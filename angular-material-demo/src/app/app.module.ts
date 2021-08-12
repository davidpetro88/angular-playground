import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import { TypographyComponent } from './typography/typography.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { IconComponent } from './icon/icon.component';
import { BadgeComponent } from './badge/badge.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import {FormsModule} from "@angular/forms";
import { ModeOverComponent } from './side-nav/mode-over/mode-over.component';
import { ModePushComponent } from './side-nav/mode-push/mode-push.component';
import { ModeSideComponent } from './side-nav/mode-side/mode-side.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonsComponent,
    ButtonToggleComponent,
    IconComponent,
    BadgeComponent,
    ProgressSpinnerComponent,
    ToolBarComponent,
    SideNavComponent,
    ModeOverComponent,
    ModePushComponent,
    ModeSideComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

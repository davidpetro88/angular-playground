import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {TypographyComponent} from './typography/typography.component';
import {ButtonsComponent} from './buttons/buttons.component';
import {ButtonToggleComponent} from './button-toggle/button-toggle.component';
import {IconComponent} from './icon/icon.component';
import {BadgeComponent} from './badge/badge.component';
import {ProgressSpinnerComponent} from './progress-spinner/progress-spinner.component';
import {ToolBarComponent} from './tool-bar/tool-bar.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ModeOverComponent} from './side-nav/mode-over/mode-over.component';
import {ModePushComponent} from './side-nav/mode-push/mode-push.component';
import {ModeSideComponent} from './side-nav/mode-side/mode-side.component';
import {MenuComponent} from './menu/menu.component';
import {ListComponent} from './list/list.component';
import {DividerComponent} from './divider/divider.component';
import {GridComponent} from './grid/grid.component';
import {RowHeightComponent} from './grid/row-height/row-height.component';
import {RowHeightFitComponent} from './grid/row-height-fit/row-height-fit.component';
import {ExpansionComponent} from './expansion/expansion.component';
import {CardComponent} from './card/card.component';
import {TabsComponent} from './tabs/tabs.component';
import {HorizontalComponent} from './stepper/horizontal/horizontal.component';
import {LinearComponent} from './stepper/horizontal/linear/linear.component';
import {VerticalComponent} from './stepper/horizontal/vertical/vertical.component';
import {FormComponent} from './form/form.component';
import {SelectComponent} from './select/select.component';
import {AutocompleteComponent} from './autocomplete/autocomplete.component';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {RadioComponent} from './radio/radio.component';
import {DatepickerComponent} from './datepicker/datepicker.component';
import {TooltipComponent} from './tooltip/tooltip.component';
import {SnackBarComponent} from './snack-bar/snack-bar.component';
import {SnackBarCustomComponent} from './snack-bar/snack-bar-custom/snack.bar.custom.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogExampleComponent } from './dialog/dialog-example/dialog-example.component';
import { TableComponent } from './table/table.component';
import {ScrollingModule} from "@angular/cdk/scrolling";
import { ScrollingComponent } from './scrolling/scrolling.component';


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
    MenuComponent,
    ListComponent,
    DividerComponent,
    GridComponent,
    RowHeightComponent,
    RowHeightFitComponent,
    ExpansionComponent,
    CardComponent,
    TabsComponent,
    HorizontalComponent,
    LinearComponent,
    VerticalComponent,
    FormComponent,
    SelectComponent,
    AutocompleteComponent,
    CheckboxComponent,
    RadioComponent,
    DatepickerComponent,
    TooltipComponent,
    SnackBarComponent,
    SnackBarCustomComponent,
    DialogComponent,
    DialogExampleComponent,
    TableComponent,
    ScrollingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

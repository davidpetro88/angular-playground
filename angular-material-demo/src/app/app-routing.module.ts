import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TypographyComponent} from "./typography/typography.component";
import {ButtonsComponent} from "./buttons/buttons.component";
import {ButtonToggleComponent} from "./button-toggle/button-toggle.component";
import {IconComponent} from "./icon/icon.component";
import {BadgeComponent} from "./badge/badge.component";
import {ProgressSpinnerComponent} from "./progress-spinner/progress-spinner.component";
import {ToolBarComponent} from "./tool-bar/tool-bar.component";
import {SideNavComponent} from "./side-nav/side-nav.component";
import {ModePushComponent} from "./side-nav/mode-push/mode-push.component";
import {ModeOverComponent} from "./side-nav/mode-over/mode-over.component";
import {ModeSideComponent} from "./side-nav/mode-side/mode-side.component";
import {MenuComponent} from "./menu/menu.component";

const routes: Routes = [
  {
    path: 'typography',
    component: TypographyComponent,
  },
  {
    path: 'buttons',
    component: ButtonsComponent,
  },
  {
    path: 'button-toggle',
    component: ButtonToggleComponent,
  },
  {
    path: 'icon',
    component: IconComponent,
  },
  {
    path: 'badge',
    component: BadgeComponent,
  },
  {
    path: 'progress-spinner',
    component: ProgressSpinnerComponent,
  },
  {
    path: 'tool-bar',
    component: ToolBarComponent,
  },
  {
    path: 'side-nav',
    component: SideNavComponent,
  },
  {
    path: 'side-nav/mode-over',
    component: ModeOverComponent,
  },
  {
    path: 'side-nav/mode-push',
    component: ModePushComponent,
  },
  {
    path: 'side-nav/mode-side',
    component: ModeSideComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

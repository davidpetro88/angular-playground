import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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
import {ListComponent} from "./list/list.component";
import {DividerComponent} from "./divider/divider.component";
import {GridComponent} from "./grid/grid.component";
import {RowHeightComponent} from "./grid/row-height/row-height.component";
import {RowHeightFitComponent} from "./grid/row-height-fit/row-height-fit.component";
import {ExpansionComponent} from "./expansion/expansion.component";
import {CardComponent} from "./card/card.component";
import {TabsComponent} from "./tabs/tabs.component";

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
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'divider',
    component: DividerComponent,
  },
  {
    path: 'grid',
    component: GridComponent,
  },
  {
    path: 'grid/row-height',
    component: RowHeightComponent,
  },
  {
    path: 'grid/row-height-fit',
    component: RowHeightFitComponent,
  },
  {
    path: 'expansion',
    component: ExpansionComponent,
  },
  {
    path: 'card',
    component: CardComponent,
  },
  {
    path: 'tabs',
    component: TabsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

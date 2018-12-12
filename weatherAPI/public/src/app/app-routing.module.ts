import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SanJoseComponent } from './san-jose/san-jose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { SeattleComponent } from './seattle/seattle.component';
import { DallasComponent } from './dallas/dallas.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { WashingtonDCComponent } from './washington-dc/washington-dc.component';
import { CustomComponent } from './custom/custom.component';

const routes: Routes = [
  {path: "custom", component: CustomComponent},
  {path: "san-jose", component: SanJoseComponent},
  {path: "burbank", component: BurbankComponent},
  {path: "seattle", component: SeattleComponent},
  {path: "dallas", component: DallasComponent},
  {path: "chicago", component: ChicagoComponent},
  {path: "washington-dc", component: WashingtonDCComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

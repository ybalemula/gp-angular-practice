import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NareshComponent } from './naresh/naresh.component';
import { MaincomponentComponent } from './maincomponent/maincomponent.component';
import { ParentcomponentComponent } from './Decoretorsconsept/parentcomponent/parentcomponent.component';
import { DropdowncomponentComponent } from './CascadingDropdown/dropdowncomponent/dropdowncomponent.component';



const routes: Routes = [
    { path: 'Naresh',component: MaincomponentComponent},
    {path:'crud',component:NareshComponent},
    {path:'decoretors',component:ParentcomponentComponent},
    {path:'CascadingDropdown',component:DropdowncomponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NareshRoutingModule { }

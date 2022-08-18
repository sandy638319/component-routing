import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FourComponent } from './four/four.component';
import { HomeComponent } from './home/home.component';
import { OneComponent } from './one/one.component';
import { ThreeComponent } from './three/three.component';
import { TwoComponent } from './two/two.component';

const routes: Routes = [
  // {path: "", component: HomeComponent},
  {path: "one", component: OneComponent },
  {path: "two", component: TwoComponent },
  {path: "three", component: ThreeComponent },
  {path: "four", component: FourComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

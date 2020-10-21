import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiphySearchComponent } from './giphy-search/giphy-search.component';


const routes: Routes = [

  { path: '', component:  GiphySearchComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

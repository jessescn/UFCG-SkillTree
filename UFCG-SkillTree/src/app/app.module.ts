import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { beeHiveGraphComponent } from './beehive-graph/beehive-graph.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path:'./', component: AppComponent },
  { path: 'beehive', component: beeHiveGraphComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    beeHiveGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}

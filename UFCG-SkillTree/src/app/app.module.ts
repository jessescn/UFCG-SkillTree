import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { beeHiveGraphComponent } from './beehive-graph/beehive-graph.component';
import { Routes, RouterModule } from '@angular/router';
import { MenubarComponent } from './menubar/menubar.component';
import { ProfileBarComponent } from './profile-bar/profile-bar.component';

import { D3Service, D3_DIRECTIVES } from './graph/d3';

import { GraphComponent } from './graph/visuals/graph/graph.component';
import { SHARED_VISUALS } from './graph/visuals/shared';


const appRoutes: Routes = [
  { path:'./', component: AppComponent },
  { path: 'beehive', component: beeHiveGraphComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    beeHiveGraphComponent,
    MenubarComponent,
    ProfileBarComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES,
    GraphComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true})
  ],
  providers: [ D3Service ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}

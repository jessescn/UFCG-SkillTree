import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { beeHiveGraphComponent } from './beehive-graph/beehive-graph.component';
import { Routes, RouterModule } from '@angular/router';
import { MenubarComponent } from './menubar/menubar.component';
import { ProfileBarComponent } from './profile-bar/profile-bar.component';

const appRoutes: Routes = [
  { path:'./', component: AppComponent },
  { path: 'beehive', component: beeHiveGraphComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    beeHiveGraphComponent,
    MenubarComponent,
    ProfileBarComponent
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

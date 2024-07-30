import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthorlistComponent } from './author-list/author-list.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { LibreriaServicesService } from './services/libreria-services.service';
import { ModalObrasComponent } from './modal-obras/modal-obras.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ObrasComponent } from './obras/obras.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthorlistComponent,
    FavoritesComponent,
    ModalObrasComponent,
    ObrasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    LibreriaServicesService,
  NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormDatosComponent } from './form-datos/form-datos.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarPersonalizadoComponent } from './navbar-personalizado/navbar-personalizado.component';


@NgModule({
  declarations: [
    AppComponent,
    FormDatosComponent,
    FooterComponent,
    HomeComponent,
    InfoComponent,
    NavbarPersonalizadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

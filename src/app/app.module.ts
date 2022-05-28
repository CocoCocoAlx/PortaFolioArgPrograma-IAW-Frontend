import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

/* Secciones del proyecto */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { LogoargprogramaComponent } from './componentes/logoargprograma/logoargprograma.component';
import { CartelComponent } from './componentes/cartel/cartel.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { PiedepaginaComponent } from './componentes/piedepagina/piedepagina.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';

/* Complementos extenos */
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    LogoargprogramaComponent,
    CartelComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    PiedepaginaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

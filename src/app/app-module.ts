import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PrimerComponent } from './components/primercomponent/primercomponent';
import { SegundoCmp } from './components/segundocmp/segundocmp';
import { TercerCmp } from './components/tercercmp/tercercmp';
import { EventosCmp } from './components/eventoscmp/eventoscmp';
import { DirectivasCmp } from './components/directivascmp/directivascmp';
import { NumerosEstilosCmp } from './components/numerosestiloscmp/numerosestiloscmp';
import { TestComponent } from './components/test-component/test-component';
import { FormsModule } from '@angular/forms';
import { FormSaludoComponent } from './components/formSaludoComponent/formSaludoComponent';


@NgModule({
  declarations: [
    App,
    PrimerComponent,
    SegundoCmp,
    TercerCmp,
    EventosCmp,
    DirectivasCmp,
    NumerosEstilosCmp,
    TestComponent,
    FormSaludoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}

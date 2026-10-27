import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PrimerComponent } from './components/primercomponent/primercomponent';
import { SegundoCmp } from './components/segundocmp/segundocmp';
import { TercerCmp} from './components/tercercmp/tercercmp';
import { EventosCmp} from './components/eventoscmp/eventoscmp';
import { DirectivasCmp } from './components/directivascmp/directivascmp';
import { NumerosEstilosCmp } from './components/numerosestiloscmp/numerosestiloscmp';

@NgModule({
  declarations: [
    App, PrimerComponent, SegundoCmp, TercerCmp,
    EventosCmp, DirectivasCmp, NumerosEstilosCmp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }

import { APP_INITIALIZER, NgModule, PLATFORM_ID } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { isPlatformBrowser } from '@angular/common';

function initializeKeycloak(keycloak: KeycloakService, platformId: Object) {
  return () => {
    if (isPlatformBrowser(platformId)) {
      return keycloak.init({
        config: {
          url: 'http://localhost:8090',
          realm: 'hacen-realm',
          clientId: 'event-app'
        },
        initOptions: {
          // onLoad: 'login-required',
          // checkLoginIframe: true
          onLoad: 'check-sso',
          silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
        }
      });
    } else {
      return Promise.resolve();
    }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    EvenementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService,PLATFORM_ID]
      }
      
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

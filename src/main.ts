import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage'

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes), 
    importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"phototag-dcf53","appId":"1:1088104973620:web:0973f36a7fab10c9739161","storageBucket":"phototag-dcf53.appspot.com","apiKey":"AIzaSyBSE5yX4DXyX2U7Fnz1DuahmAczQvFFcLk","authDomain":"phototag-dcf53.firebaseapp.com","messagingSenderId":"1088104973620"}))),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideStorage(() => getStorage())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"phototag-dcf53","appId":"1:1088104973620:web:0973f36a7fab10c9739161","storageBucket":"phototag-dcf53.appspot.com","apiKey":"AIzaSyBSE5yX4DXyX2U7Fnz1DuahmAczQvFFcLk","authDomain":"phototag-dcf53.firebaseapp.com","messagingSenderId":"1088104973620"}))), importProvidersFrom(provideFirestore(() => getFirestore()))
  ],
});

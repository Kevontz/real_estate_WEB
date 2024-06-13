import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { appConfig } from './app/services/app.config'; // Corrigido o caminho de importação

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    { provide: 'APP_CONFIG', useValue: appConfig } // Adicionada a configuração do provedor
  ]
})
.catch(err => console.error(err));

import { enableProdMode } from '@angular/core';
import { renderModule } from '@angular/platform-server';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import * as express from 'express';

import { AppServerModule } from './app/app.server.module';
import { config } from './app/services/app.config.server'; // Corrigido o caminho de importação

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');

const app = express();

if (environment.production) {
  enableProdMode();
}

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModule,
  providers: [
    provideModuleMap(config.MODULE_MAP) // Corrigido a passagem do módulo
  ]
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

app.get('*.*', express.static(DIST_FOLDER));

app.get('*', (req, res) => {
  res.render('index', { req });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

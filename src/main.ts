// Import Angular's platform-browser-dynamic for bootstrapping
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Import the root module of the application
import { AppModule } from './app/app.module';

// Bootstrap the application with the root module
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error('Error bootstrapping application:', err));


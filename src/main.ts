import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';  // Certifique-se de que é o AppModule certo

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

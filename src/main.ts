import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// global import of lib css using style-loader, the rest of our css is required as string for ng2 components
require('!!style!css!bootstrap/dist/css/bootstrap.min.css');
require('!!style!css!ng2-toastr/ng2-toastr.css');

platformBrowserDynamic().bootstrapModule(AppModule);

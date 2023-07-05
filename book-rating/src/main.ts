import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { Test } from './test';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));



const test = new Test(33);
console.log(test.zahl);

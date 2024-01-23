import { Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageAccountCreationComponent } from './registration-page/account-creation/registration-page-account-creation.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    title: 'Login - Circleus',
    component: LoginPageComponent,
  },
  {
    path: 'registration',
    title: 'Registration - Circleus',
    children: [
      {
        path: '',
        redirectTo: 'account-creation',
        pathMatch: 'full',
      },
      {
        path: 'account-creation',
        title: 'Account Creation - Circleus',
        component: RegistrationPageAccountCreationComponent,
      },
    ],
  },
];

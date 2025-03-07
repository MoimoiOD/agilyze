import { Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { HomeComponent } from '../home/home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MethodologiesComponent } from '../methodologies/methodologies.component';
import { SettingsComponent } from '../settings/settings.component';
import { TeamsComponent } from '../teams/teams.component';

export const routes: Routes = [
    { 
        path: '', 
        component: AuthComponent
    },
    { 
        path: 'home', 
        component: HomeComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'methodologies',
                component: MethodologiesComponent
            },
            {
                path: 'teams',
                component: TeamsComponent
            },
            {
                path: 'settings',
                component: SettingsComponent
            }
        ]
    },
];

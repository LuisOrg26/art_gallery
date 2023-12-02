import {Routes} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ArtComponent } from './art/art.component';
import { ArtCardComponent } from './art-card/art-card.component';

const routeConfig: Routes = [
    {
      path: '',
      component: WelcomeComponent,
      title: 'Home page',
    },
    {
      path: 'about-us',
      component: AboutUsComponent,
      title: 'About Us',
    },
    {
      path: 'search',
      component: ArtComponent,
      title: 'Search',
    },
    {
      path: 'paint',
      component: ArtCardComponent,
      title: 'Paints',
    }
  ];
  export default routeConfig;
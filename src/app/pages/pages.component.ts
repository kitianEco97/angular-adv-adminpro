import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../services/settings.service';

declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  
  // Esta es la injeccion del servicio a esta clase, con esto nos ahorramos mucho código en esa pagina
  constructor( private settingService: SettingsService ) { }

  ngOnInit(): void {
    customInitFunctions();
  }

}

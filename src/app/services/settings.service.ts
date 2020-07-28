import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public linkTheme = document.querySelector('#theme');

  constructor() {

    const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
    this.linkTheme.setAttribute('href', url);

  }

  changeTheme(theme: string){
    // console.log(theme); //Recibiendo el color    
    const url = `./assets/css/colors/${ theme }.css`
    
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
    // this.checkCurrentTheme();
    // console.log(url);
  }

  checkCurrentTheme() {
    // Con esta instruccion se va al modelo y se selecciona el elemento con esta clase
  const links = document.querySelectorAll('.selector');
    // Con esta instruccion recorremos todos los elementos que encontremos con esa clase
  links.forEach( elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.linkTheme.getAttribute('href');

      if( btnThemeUrl === currentTheme ){
        elem.classList.add('working');
      }

    });
    // console.log(links);

  }

}

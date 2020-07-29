import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html'
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then(usuarios => {
      console.log(usuarios);
    })


    // const promesa = new Promise( ( resolve, reject ) => {

    //   if(false){
    //     resolve('ecoja');
    //   } else {
    //     reject('Algo salio mal');
    //   }


    // });

    // promesa.then( (mensaje) => {
    //   console.log(mensaje);
    // })
    // .catch( error => console.log('Error en mi promesa', error));

    // console.log('Fin del init');    
  }

  getUsuarios(){

    return new Promise(resolve => {
      fetch('https://reqres.in/api/users?page=2')
      .then( res => res.json() )
      .then( body => resolve(body.data) );
    });    
    // return promesa;
  }

}

import { Link } from "react-router-dom";
import React, { Component } from "react";
import AuthService from "../../auth/AuthService";

class Usuario extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="psudoBody">
        <div className="card has-text-centered is-wide">
          <div>
            <h1>Tu Perfil.</h1>
          </div>
          <header className="card-header">
            <img
              src="https://www.eldiario.es/campobase/noticias/Equipo_Femenino_Alpinismo-EFA-Benasque-Peru_EDIIMA20170608_0092_19.jpg"
              alt="foto"
              width="350px"
              height="350px"
            />
          <div>
          </div>
          </header>

          <div className="card-content">
            <p>
              <b>Nombre:</b> Carlos Perez.
            </p>
            <p>
            <b>Descripción:</b> Viajero por naturaleza y adicto a la cultura asiatica. En mis tiempos libres practico alpinismo y carpintería.
            <br/>
            <br/>
            </p> 
            <div className="idiomas">
            <b>Idioma nativo:</b> Español.
              <br/>
             <b>Segundo Idioma:</b> Coreano.
            <br/> </div>
            
          </div>
          <img src="https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545301985/Banderas/spain.svg" alt="bandera"
              width="30px" height="30px"/>
           <img src="https://res.cloudinary.com/dfhjbqvwc/image/upload/v1545301983/Banderas/south-korea.svg" alt="bandera"
              width="30px" height="30px"/>
        </div>
      </div>
    );
  }
}

export default Usuario;

{
  /* <div >
<div id="contentBoxApp" ng-app="contentBoxApp">
<article className="grid-item content-box" ng-repeat="(gridKey, gridItem) in gridItems | filter:filterBySearch">
<div className="inner">
<img className="content-box-thumb"src="https://www.lavanguardia.com/r/GODO/LV/p1/WebSite/Imagenes/2011/10/07/Recortada/LV_20111007_LV_FOTOS_D_54227803913-992x558@LaVanguardia-Web.jpg" alt="tech image" />
<h1 className="content-box-header">
<b>Carlos Perez</b>
</h1>
<p className="content-box-blurb">
{}
</p> <br></br>
<p><b>Idioma Nativo: </b>{} <br></br>
<b>Segundo Idioma:</b>{}</p>

<a className="button is-primary" href=''> 
<p>Contacta</p></a>

</div>
</article>

</div>
</div> */
}

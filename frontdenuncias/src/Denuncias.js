import React, {Component} from "react";
import request from "superagent";

class Denuncias extends Component {

  constructor(props) {
    super(props);

    this.state = {
      denuncias: []
    };
  }

  componentDidMount() {
    fetch("/robos/")
      .then((res) => {
        if (res.status !== 200) {
          console.log("Error getting data");
        }
        return res.json();
      })
      .then((json) => {
        console.log(json);
        this.setState({denuncias: json});
      });
  }

  renderDenuncia( )
  {
    if(this.state.denuncias)
    {
      console.log(this.state.denuncias);
      return this.state.denuncias.map((denuncia) => {
        return(
        <div key={denuncia._id}>
          <div className="col-sm mr-sm-0 pr-sm-0 ml-md-3">
                <div className="card border-primary mb-3 projects">
                  <div className="card-header">Fecha: {denuncia.fecha} & Hora: {denuncia.hora}</div>                             
                  <div className="card-body text-primary">
                    <h5 className="card-title">Lugar: {denuncia.direccion}, {denuncia.barrio}</h5>
                    <p className="card-text"> Articulo: {denuncia.articulo} Modus Operandi:{denuncia.modus} Ladrones:{denuncia.delincuentes} </p>                    
                  </div>
                </div>                       
            </div>
        </div>);
      });

    }
    
  }

render() { 
  return (
    <div className="container-fuid">
      <div className="row">
        <div className="col offset-md-4">
           <h4 className="myFont">Denuncias realizadas en los últimos días</h4>
           <h4 className="myFont">Denuncias realizadas en los últimos días</h4>
        </div>   
      </div>
      <div className="row mr-sm-0 align-items-center">    
        <div className="row mr-sm-0 align-items-center">
          {this.renderDenuncia()}            
        </div>        
      </div> 
    </div>
    );
  }
}
export default Denuncias;

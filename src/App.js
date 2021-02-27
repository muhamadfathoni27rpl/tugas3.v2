import React from "react";
import Utama from "./Components/Utama";
import {Link , } from "react-router-dom";

class App extends React.Component {
  render(){

    return(
      <div>
         <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
          <a class="navbar-brand" href="/">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
            {/* </button> */}
            <div className="collapse navbar-collapse" id="nvbCollapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-link">
                  <Link className="nav-link" to="/list_agenda">
                  <i className="fa fa-th-list fa-fw mr-1"></i>List Agenda
                  </Link>
                </li>
                <li className="nav-link">
                  <Link className="nav-link" to="/list_keranjang">
                  <i class="fas fa-shopping-cart"></i> Keranjang
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
        <Utama />
      </div>
    )
  }
}

export default App;
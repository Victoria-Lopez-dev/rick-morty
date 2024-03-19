import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter as Router, Routes,Route} from "react-router-dom";

import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';
import Contact from './pages/Contact/Contact';


import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/characters' element={<Characters/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
  </React.StrictMode>
);

//para los estilos, podemos o hacer todo en CSS "puro" , o podemos utilizar las clases de Bootstrap.
//IMPORTANTE, el atributo "class" en React lo reemplazamos por "className"

//los estilos podemos ponerlo en el css de index.css para que aplique a las 3 paginas; en una hoja aparte css por cada componente para que aplique en cada uno de ellos y sus componentes "hijos"


//modulo - paquete React -> react-router-dom 
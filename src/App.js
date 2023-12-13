import React from 'react';
import Name from './Name';
import Prix from './Prix';
import Description from './Description';
import Image from './Image';
import { Card } from 'react-bootstrap';

function App() {
  var nom= prompt("Dooner votre nom")
  return (
    <div  class="Card">
      
      <Name/>
      <Prix/>
      <Description/>
      
     <p>
      Bonjour, {nom}
     </p>
      
    </div>

  );
}

export default App;

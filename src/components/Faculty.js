import React from 'react';
import { Link, Route } from 'react-router-dom';
import './style.css';
import facults from './stubs/facults';


function Currency({ facult, history, match }) {
    console.log(match);
 
  return (
      <div>
        <p> {facult.info}</p>
         
         
        <Route path={`${match.path}/sell`} component={Sell} />
      </div>
    );
  }
  function Sell({ match }) {
    
    return <div>You succesfully sold currency with id: {match.params.id}</div>;
  }
export default function Faculty(props) {
    
  return (
    <main className="text1">
      <h1>Faculties</h1>
      <ul>
          {facults.map(fac=>(
              <li>
                 <Link to={`${props.match.url}/${fac.id}`}>{fac.name}</Link> 
              </li>
          ))}
      </ul>
      {console.log(props.match)}
      <Route
        path={`${props.match.url}/:id`}
        render={props => {
          const facult = facults.find(fac => fac.id === props.match.params.id);
          return <Currency {...props} facult={facult} />;
        }}
      />
    </main>
  );
}
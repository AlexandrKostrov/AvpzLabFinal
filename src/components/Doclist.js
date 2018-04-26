import React from 'react';
import './style.css';

export default function Doclist() {
    const docs=[
        'Pasport',
        'Cod',
        'Birth Certification',
        'School Certificate',
        'ZNO results',
    ]
  return (
    <main className="text1">
      <h1>Doclist</h1>
      <ul>
          {docs.map(doc=>(
              <li>
                  {doc}
              </li>
          ))}
      </ul>
    </main>
  );
}

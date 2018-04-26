import React from 'react';
import './style.css';
import {NavLink} from 'react-router-dom';

export default function Sidebar(){
    const menu=[
        {path:'/', title:'Main Menu'},
        {path:'/inspboard', title:'Inspection Board'},
        {path:'/doclist', title:'Document List'},
        {path:'/exshedule',title:'Exams Shedule'},
        {path:'/faculty',title:'Faculty'},
        {path:'/history',title:'Uneversity History'},
        {path:'/history/edit',title:'Edit History'},
    ]

    return(
        <aside className='sidebar'>
            <ul>
            {menu.map(elem=>(
              <li key={elem.title}>
                  <NavLink exact activeClassName="active" to={elem.path}>
                      {elem.title}
                  </NavLink>
              </li>
            ))}
            </ul>
        </aside>
    )
}


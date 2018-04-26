import React from 'react';
import {Link, Route, Switch,} from 'react-router-dom';
import Exshedule from './inpirationHelpers/Exshedule';
import InsperBoardConsist from './inpirationHelpers/InsperBoardConsist';
import StateOrder from './inpirationHelpers/StateOrder';
import Budget from './inpirationHelpers/Budget';   
import Semenec from './inpirationHelpers/Semenec'; 
import Erohin from './inpirationHelpers/Erohin';
 

export default function Inspboard(){
    const menu1=[
        {path:'/inspboard/exshedule1', title:'Расписание вступительных экзаменов'},
        {path:'/inspboard/inspcomstructure', title:'Состав приемной комиссии'},
        {path:'/inspboard/stateorder', title:'Держзамовлення 2017'},
        {path:'/inspboard/budget',title:'Этапы зачисления на бюджетную форму обучения'},
        {path:'/inspboard/Semenec',title:'Валерий Васильевич Семенец'},
        {path:'/inspboard/Erohin',title:'Андрей Леонидович Ерохин'},
    ];
    return(
 <main>
     
     <h1>Inspection Board</h1>
    
     <div class="inner_contents_block">
	   <p>Уважаемые абитуриенты ХНУРЭ! Предлагаем ознакомиться с расписанием вступительных экзаменов:</p>
        <ol>
          <li>На 1-й курс (дневная и заочная формы обучения);</li>
          <li>На старшие курсы на базе диплома младшего специалиста (дневная и заочная формы обучения);</li>
          <li>Вступительные экзамены по специальности для поступающих в магистратуру (для выпускников-бакалавров ХНУРЭ 2018 г.);</li>
          <li>Дополнительные вступительные экзамены по специальности для поступающих в магистратуру с неродственных специальностей (дневная и заочная формы обучения);</li>
          <li>Вступительные экзамены по иностранным языкам для поступающих в магистратуру.</li>
        </ol>
        
            <ol>
          {menu1.map(comp=>{
            return ( <li>
                  <Link to={comp.path}>{comp.title}</Link>
              </li>)
          })}
          </ol>
    
      <Route path='/inspboard/exshedule1' component={Exshedule}></Route>
      <Route path='/inspboard/inspcomstructure' component={InsperBoardConsist}></Route>
      <Route path='/inspboard/stateorder' component={StateOrder}></Route>
      <Route path='/inspboard/budget' component={Budget}></Route>
      <Route path='/inspboard/Semenec' component={Semenec}></Route>
      <Route path='/inspboard/Erohin' component={Erohin}></Route>
	</div>
 </main>
    )
}
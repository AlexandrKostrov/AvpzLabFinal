import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, render } from 'enzyme';
import Docklist from './Faculty';

it('doc test',()=>{
    const component=shallow(<Docklist/>);
    expect(component.find('h1')).toHaveProperty('length',1);
})
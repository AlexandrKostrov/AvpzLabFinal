import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, render } from 'enzyme';
import Faculty from './Faculty';

it('fac test',()=>{
    const component=shallow(<Faculty/>);
    expect(component.find('h3')).toHaveProperty('length',1);
})

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, render } from 'enzyme';
import renderer from 'react-test-renderer';
import Exshedule from './Exshedule';

it("should call function when calculate click",()=>{
    const calcul=jest.fn();
   // const component = <Exshedule  turner={calcul} />;
    const tree = shallow(<Exshedule  turner={calcul} />);
    tree.find('button').simulate('click');
  expect(calcul).toHaveBeenCalled();
})

it("button test",()=>{
    const component = <Exshedule  turner={calcul} />;
    expect(shallow(component).find('button')).toHaveLength(1);
})
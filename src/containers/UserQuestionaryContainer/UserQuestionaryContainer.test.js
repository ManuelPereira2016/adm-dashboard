import React from 'react';
import ReactDOM from 'react-dom';
import UserQuestionaryContainer from './UserQuestionaryContainer';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import { locationMockup } from "./mocks/mocks";
import UserQuestionary from "../../views/Pages/UserQuestionary/UserQuestionary";
import {  Button } from "reactstrap";

describe('Container component)',() => {
  const mockStore = configureStore();
  const initialState = {};

  global.localStorage = {
    getItem: () => "...",
    setItem: () => "..."
  }

  let store,container, component;

  beforeEach(()=>{
    store = mockStore(initialState)
    container = mount(<UserQuestionaryContainer location={locationMockup} store={store} /> )
  });

  it('Render the container', () => {
    expect(container.length).toEqual(1);
  });

  it('Render the children component', () => {
    expect(container.find(UserQuestionary).length).toEqual(1);
  });

  it('The prop location matchs with the mockup.', () => {
    expect(container.prop('location')).toEqual(locationMockup);
  });

  // it('Find the button on the Form and click it.', () => {
  //   container.find(Button).simulate('click');
  // });
});

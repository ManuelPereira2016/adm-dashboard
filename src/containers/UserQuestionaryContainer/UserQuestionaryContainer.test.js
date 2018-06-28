import React from 'react';
import ReactDOM from 'react-dom';
import UserQuestionaryContainer from './UserQuestionaryContainer';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import { locationMockup, revengeMockup } from "./__mocks__/mocks";
import UserQuestionary from "../../views/Pages/UserQuestionary/UserQuestionary";
import {  Button, Label } from "reactstrap";
import { RadioGroup, Radio } from "react-radio-group";
import doApiRequest from '../../api/doApiRequest';

jest.mock('../../api/doApiRequest');

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
    // container = mount(<UserQuestionaryContainer location={locationMockup} store={store} /> )
    container = mount(shallow(<UserQuestionaryContainer location={locationMockup} store={store} />).get(0))
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

  it('All answers should be null at default', () => {
    expect(container.state().data["preguntasYrespuestas"][0].respuesta).toEqual(null)
    expect(container.state().data["preguntasYrespuestas"][1].respuesta).toEqual(null)
    expect(container.state().data["preguntasYrespuestas"][2].respuesta).toEqual(null)
    expect(container.state().data["preguntasYrespuestas"][3].respuesta).toEqual(null)
  });

  it('It should submit and re-render new questions if user get a revenge chance', () => {
    doApiRequest.mockImplementation(() => Promise.resolve(revengeMockup));

    let questions = container.state().data["preguntasYrespuestas"].map(question => question.pregunta);

    questions.forEach((q, i) => {
      container.find(RadioGroup).at(i).props().onChange(0, `${q}`);
    });

    container.find(Button).props().onClick();

    setImmediate(() => {
      container.update();
      expect(container.state().questions_answers).toEqual(revengeMockup.campos.preguntaYRespuesta)

      expect(container.find(RadioGroup).length).toEqual(1)
      expect(container.find(Label).at(0).text()).toEqual("Su fecha de nacimiento es:")
    });
  });
});

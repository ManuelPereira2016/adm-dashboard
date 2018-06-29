import React from 'react';
import ReactDOM from 'react-dom';
import UserQuestionaryContainer from './UserQuestionaryContainer';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import { locationMockup, revengeMockup, approvedMockup } from "./__mocks__/mocks";
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

  it('Data object in state should have all required fields before submit.', () => {
    expect(container.state().data.sexo).toEqual(locationMockup.state.formData.sexo);
    expect(container.state().data.servicio).toEqual(locationMockup.state.formData.servicio);
    expect(container.state().data.documento).toEqual(locationMockup.state.formData.documento);
    expect(container.state().data.email).toEqual(locationMockup.state.formData.email);
  });

  it('it has to show idconsulta value as response after submitting valid answers', async () => {
    doApiRequest.mockImplementation(() => Promise.resolve(approvedMockup));

    let questions = container.state().data["preguntasYrespuestas"].map(question => question.pregunta);

    questions.forEach((q, i) => {
      container.find(RadioGroup).at(i).props().onChange(0, `${q}`);
    });

    await container.find(Button).props().onClick();

    container.update();

    expect(container.state().idValidacion).toEqual(99);
    expect(container.find("h1").text()).toEqual("99");
    expect(container.find(".fail-icon").length).toEqual(0);
  });

  it('It should submit and re-render new questions if user get a revenge chance', async () => {
    doApiRequest.mockImplementation(() => Promise.resolve(revengeMockup));

    let questions = container.state().data["preguntasYrespuestas"].map(question => question.pregunta);

    questions.forEach((q, i) => {
      container.find(RadioGroup).at(i).props().onChange(0, `${q}`);
    });

    await container.find(Button).props().onClick();

    container.update();

    expect(container.state().questions_answers).toEqual(revengeMockup.campos.preguntaYRespuesta)
    expect(container.find(RadioGroup).length).toEqual(1)
    expect(container.find(Label).at(0).text()).toEqual("Su fecha de nacimiento es:")
  });
});

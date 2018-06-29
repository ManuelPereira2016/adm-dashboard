import React from 'react';
import PropTypes from "prop-types";
import ReactDOM from 'react-dom';
import AdminSettingsContainer from './AdminSettingsContainer';
import configureStore from 'redux-mock-store';
import createRouterContext from 'react-router-test-context'
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import { mockServices, mockConfig, mockConfig2 } from "./__mocks__/mocks";
import AdminSettings from "../../views/Pages/AdminSettings/AdminSettings";
import { AppSwitch } from "@coreui/react";
import { Button, Input, Table } from "reactstrap";
import { getServices } from "../../api/service";
import { getConfig, saveConfig } from "../../api/user";

jest.mock("../../api/service", () => {
  return {
    ...require.requireActual("../../api/service"),
    getServices: () => Promise.resolve(mockServices)
  };
});

jest.mock("../../api/user", () => {
  return {
    ...require.requireActual("../../api/user"),
    getConfig: () => Promise.resolve(mockConfig),
    saveConfig: () => Promise.resolve(mockConfig2)
  };
});

describe('Admin Settings Container / Component)',() => {
  const mockStore = configureStore();
  const initialState = {
    modal: {
      isOpen: false,
      modal: {}
    }
  };

  global.localStorage = {
    getItem: () => "...",
    setItem: () => "..."
  }

  let store,container, component;

  beforeEach(()=>{
    const routeContext = createRouterContext();
    store = mockStore(initialState);
    container = mount(<AdminSettingsContainer />, {
      context: { ...routeContext, store: store },
      childContextTypes: { store: PropTypes.object.isRequired, router: PropTypes.object }
    });
  });

  it('Render the container', () => {
    expect(container.length).toEqual(1);
  });

  it('Render the children component', () => {
    expect(container.find(AdminSettings).length).toEqual(1);
  });

  it('Should mockup questions and render the questions', async () => {
    container.find(Input).simulate('change', { target: { value : '1'}});
    const instance = container.instance();

    await instance.loadQuestions();

    container.update()

    expect(container.state().selectedService).toEqual("1");
    expect(container.find(Table).length).not.toEqual(0);
  });

  it('Should only be 1 revancha switch active at time && only sets the last selected by the user', async () => {
    container.find(Input).simulate('change', { target: { value : '1'}});
    const instance = container.instance();

    await instance.loadQuestions();

    container.update()

    // Test if revancha can be enable and disable the previous.
    const eventMockup = { target: { type: "checkbox", checked: true, name: 'revancha' } };
    const getRevancha = (idx) => container.find("input[name='revancha']").at(idx);

    getRevancha(0).simulate('change', eventMockup);

    getRevancha(1).simulate('change', eventMockup);

    getRevancha(2).simulate('change', eventMockup);

    getRevancha(3).simulate('change', eventMockup);

    let count = 0;

    const questions = container.state().questions;

    for (let q in questions) {
        questions[q].revancha ? count++ : null
    }

    const checks = [];

    checks.push(getRevancha(0).props().checked);
    checks.push(getRevancha(0).props().checked);
    checks.push(getRevancha(0).props().checked);
    checks.push(getRevancha(0).props().checked);

    expect(count).toEqual(1);
    expect(checks.every(check => check === true)).toEqual(false);
    expect(getRevancha(3).props().checked).toEqual(true);
    expect(questions["4"].revancha).toEqual(true);
  });

  it('Should submit if questions count is lower or equal to active questions', async () => {
    container.find(Input).simulate('change', { target: { value : '1'}});
    const instance = container.instance();

    await instance.loadQuestions();

    container.update()

    // Real testing
    const eventMockup = { target: { type: "checkbox", checked: false, name: 'activa' } };
    const getCountInput = () => container.find("input[name='questionsCount']");
    const getQuestions = () => container.find("input[name='activa']");

    // We disable all questions now they are not active
    getQuestions().forEach(q => q.simulate('change', eventMockup));

    getCountInput().simulate('change', { target: { value: "6", name: 'questionsCount' }});

    const q = getQuestions();

    for (let i =0; i < 7; i++) q.at(i).simulate('change', { target: {...eventMockup.target, checked: true }});

    expect(container.state().questionsCount).toEqual(6);

    await container.find(Button).at(0).props().onClick();

    container.update();

    // Check message
    expect(container.state().message).toEqual("Configuración actualizada!");
  });

  it('Should not submit if questions count is bigger than active questions', async () => {
    container.find(Input).simulate('change', { target: { value : '1'}});
    const instance = container.instance();

    await instance.loadQuestions();

    container.update()

    // Real testing
    const eventMockup = { target: { type: "checkbox", checked: false, name: 'activa' } };
    const getCountInput = () => container.find("input[name='questionsCount']");
    const getQuestions = () => container.find("input[name='activa']");

    // We disable all questions now they are not active
    getQuestions().forEach(q => q.simulate('change', eventMockup));

    getCountInput().simulate('change', { target: { value: "6", name: 'questionsCount' }});

    const q = getQuestions();

    for (let i =0; i < 5; i++) q.at(i).simulate('change', { target: {...eventMockup.target, checked: true }});

    expect(container.state().questionsCount).toEqual(6);

    await container.find(Button).at(0).props().onClick();

    container.update();

    // Check message
    expect(container.state().message).not.toEqual("Configuración actualizada!");
  });
});

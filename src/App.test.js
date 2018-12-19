import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import mockedDiscogsAPI from './api/mocks/axiosInstance';
import mockedDiscogsAPIResponse from './api/mocks/releases-0.json';
import wait from './utils/test-utils/wait';
import App from './App';

const mountAndWait = async (component) => {
  const wrapper = mount(component);
  await wait();

  return wrapper;
}

// onGet('/users/blacklight/collection/folders/0/releases')
beforeEach(async () => {
  mockedDiscogsAPI.reset();
  mockedDiscogsAPI.onAny().replyOnce(200, {
    ...mockedDiscogsAPIResponse,
  });
});

describe('App', () => {
  it('renders without crashing', async () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);
    await wait();

    ReactDOM.unmountComponentAtNode(div);
  });

  it('should create a new shelf when the "Create New Shelf" button is clicked', async () => {

    const wrapper = await mountAndWait(<App />);

    expect(wrapper.find('Shelf').exists()).not.toBeTruthy();

    wrapper
      .find('button')
      .filterWhere(n => n.text().includes('Create New Shelf'))
      .simulate('click');

    expect(wrapper.find('Shelf').exists()).toBeTruthy();
  });
});

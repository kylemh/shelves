import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import mockedDiscogsAPI from './api/mocks/axiosInstance';
import mockedDiscogsAPIResponse from './api/mocks/releases-0.json';
import wait from './utils/test-utils/wait';
import App from './App';

const mountAndWait = async component => {
  const wrapper = mount(component);
  await wait();

  return wrapper;
};

beforeEach(() => {
  mockedDiscogsAPI.reset();
  mockedDiscogsAPI.onGet('users/blacklight/collection/folders/0/releases').replyOnce(200, {
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

  it('should delete a new shelf when the "Delete" button is clicked', async () => {
    const wrapper = await mountAndWait(<App />);

    expect(wrapper.find('Shelf').exists()).not.toBeTruthy();

    wrapper
      .find('button')
      .filterWhere(n => n.text().includes('Create New Shelf'))
      .simulate('click');

    expect(wrapper.find('Shelf').exists()).toBeTruthy();

    wrapper
      .find('button')
      .filterWhere(n => n.text().includes('Delete Shelf'))
      .simulate('click');

    expect(wrapper.find('Shelf').exists()).not.toBeTruthy();
  });

  it('should show error state on bad API response', async () => {
    mockedDiscogsAPI.reset();
    mockedDiscogsAPI.onGet('users/blacklight/collection/folders/0/releases').replyOnce(404);

    const wrapper = await mountAndWait(<App />);
    wrapper.update();
    expect(wrapper.find('.emptyStateMessage').text()).toStrictEqual('Something is wrong with Discogs... Try again later!');
  })
});

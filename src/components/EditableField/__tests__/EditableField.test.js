import React from 'react';
import { mount, shallow } from 'enzyme';
// import wait from '../../../utils/test-utils/wait';
import EditableField from '../EditableField';

describe('EditableField', () => {
  it('should render', () => {
    const wrapper = shallow(<EditableField initialValue="test" />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should be renderable when it in edit state', () => {
    const wrapper = shallow(<EditableField initialValue="test" />);

    wrapper.setState({ isEditing: true });
    wrapper.update();
    expect(wrapper).toContainExactlyOneMatchingElement('input');

    expect(wrapper).toMatchSnapshot();
  });

  it('should open and close without a value change when clicking edit and then cancle', () => {
    const testValue = 'Trip-hop';
    const wrapper = shallow(<EditableField initialValue={testValue} />);

    wrapper.find('Button').simulate('click');
    wrapper.update();
    expect(wrapper).toContainExactlyOneMatchingElement('input');

    wrapper
      .find('Button')
      .last()
      .simulate('click');
    wrapper.update();
    expect(wrapper).toContainExactlyOneMatchingElement('Button');

    expect(
      wrapper
        .find('span')
        .first()
        .text()
    ).toStrictEqual(testValue);
  });

  it('should open and close without a value change when clicking edit and then submit', () => {
    const testValue = 'French House';
    const wrapper = shallow(<EditableField initialValue={testValue} />);

    wrapper.find('Button').simulate('click');
    wrapper.update();
    expect(wrapper).toContainExactlyOneMatchingElement('input');

    wrapper
      .find('Button')
      .first()
      .simulate('click');
    wrapper.update();
    expect(wrapper).toContainExactlyOneMatchingElement('Button');

    expect(
      wrapper
        .find('span')
        .first()
        .text()
    ).toStrictEqual(testValue);
  });

  it('should save value to final tag when submitting a changed input', () => {
    const wrapper = shallow(<EditableField initialValue="Alternative Rock" tag="h1" />);

    wrapper.find('Button').simulate('click');
    wrapper.update();
    expect(wrapper).toContainExactlyOneMatchingElement('input');

    const newValue = 'Classic Rock';
    wrapper.find('input').simulate('change', { target: { value: newValue } });
    wrapper
      .find('Button')
      .first()
      .simulate('click');
    wrapper.update();
    expect(wrapper).toContainExactlyOneMatchingElement('Button');

    expect(wrapper.find('h1').text()).toStrictEqual(newValue);
  });

  it('should fire passed callback submitting a changed input', () => {
    const mockedCallback = jest.fn();
    const wrapper = shallow(
      <EditableField initialValue="Pop" tag="h1" setValueCallback={mockedCallback} />
    );

    wrapper.find('Button').simulate('click');
    wrapper.update();
    expect(wrapper).toContainExactlyOneMatchingElement('input');

    wrapper.find('input').simulate('change', { target: { value: 'Disco' } });
    expect(mockedCallback).toBeCalledTimes(0);
    wrapper
      .find('Button')
      .first()
      .simulate('click');
    wrapper.update();
    expect(wrapper).toContainExactlyOneMatchingElement('Button');

    expect(mockedCallback).toBeCalledTimes(1);
  });

  it("should keep the initial value if a changed input's submission was cancelled", () => {
    const firstValue = 'Blues';
    const wrapper = mount(<EditableField initialValue={firstValue} tag="h1" />);

    wrapper.find('Button').simulate('click');
    wrapper.update();
    expect(wrapper).toContainExactlyOneMatchingElement('input');

    wrapper.find('input').simulate('change', { target: { value: 'Jazz' } });
    wrapper
      .find('Button')
      .last()
      .simulate('click');
    wrapper.update();
    expect(wrapper).toContainExactlyOneMatchingElement('Button');

    expect(wrapper.find('h1').text()).toStrictEqual(firstValue);
  });
});

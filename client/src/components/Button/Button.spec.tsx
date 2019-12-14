import React from 'react';
import { shallow } from 'enzyme';

import { Button } from '..';

describe('Button', () => {
  it('should contain the correct text', () => {
    const subject = shallow(<Button onClick={() => {}} text='Hello world!' />);
    expect(subject.text()).toEqual('Hello world!');
  });

  it('should emit correct action upon click', () => {
    let pass = false;
    const subject = shallow(<Button onClick={() => { pass = true; }} />);
    subject.find('button').simulate('click');
    expect(pass).toEqual(true);
  });
});

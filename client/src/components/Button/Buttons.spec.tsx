import React from 'react';
import { shallow } from 'enzyme';

import { Button } from '..';

describe('Button', () => {
  it('contains the correct text', () => {
    const subject = shallow(<Button onClick={() => {}} text='Hello world!' />);
    expect(subject.text()).toEqual('Hello world!');
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import { Camera } from '..';
import { matchSnapshot } from '../../matchSnapshot';

describe('Camera', () => {
  it('should render', () => {
    const tree = shallow(<Camera onCaptureImageSuccess={() => {}} />);
    matchSnapshot(tree);
  });
});
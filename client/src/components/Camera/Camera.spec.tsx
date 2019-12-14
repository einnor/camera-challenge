import React from 'react';
import { shallow } from 'enzyme';

import { Camera } from '..';
import { matchSnapshot } from '../../matchSnapshot';

describe('Camera', () => {

  let spy;

  // afterEach(() => spy.mockClear());

  it('should render', () => {
    const tree = shallow(<Camera onCaptureImageSuccess={() => {}} />);
    matchSnapshot(tree);
  });

  it('should render video element so one can take a photo', () => {
    const subject = shallow(<Camera onCaptureImageSuccess={() => {}} />);
    expect(subject.html()).toContain(
      '<div class=\"camera-container\"><video autoplay=\"\" style=\"width:500px;height:300px;margin-bottom:20px\"></video><button class=\"button \"><span>Take Photo</span></button></div>',
    );
  });

  it('should invoke componentDidMount when mounted', () => {
    jest.spyOn(Camera.prototype, 'componentDidMount');
    shallow(<Camera />);
    expect(Camera.prototype.componentDidMount).toHaveBeenCalled();
    Camera.prototype.componentDidMount.mockRestore();
  });

});
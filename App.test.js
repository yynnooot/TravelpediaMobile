import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

//CAMERA
// it('should produce base64 string')
// it('should produce uri')

//GOOGLE
// it('should give a 200 response on clear image')

//ERROR PAGE
// it('should mount error page when image unclear')
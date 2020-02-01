import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

describe('Application', function() {
    it('should render without throwing an error', function() {
        expect(shallow(<App />).contains(<div className="App"></div>)).toBe(
            true,
        );
    });
});

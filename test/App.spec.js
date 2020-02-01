import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../src/App';

describe('Application', () => {
    it('should render without throwing an error', () => {
        expect(shallow(<App />)).toMatchSnapshot();
    });

    it('should display the correct amount of squares', () => {
        const wrapper = mount(<App />);

        expect(wrapper.find('div.app')).toHaveLength(1);
        expect(wrapper.find('div.square')).toHaveLength(16);

        expect(wrapper).toMatchSnapshot();
        wrapper.unmount();
    });

    it('should getOneRandomRGBColor correctly ', () => {
        const wrapper = mount(<App />);

        expect(wrapper.instance().getOneRandomRGBColor()).toMatch(
            /rgb(.*,.*,.*)/,
        );

        expect(wrapper).toMatchSnapshot();
        wrapper.unmount();
    });

    it('should createAllSquares correctly ', () => {
        const wrapper = mount(<App />);

        expect(wrapper.instance().createAllSquares()).toHaveLength(16);

        expect(wrapper).toMatchSnapshot();
        wrapper.unmount();
    });

    it('should switch first and second squares', () => {
        const wrapper = mount(<App />);

        const firstSquareBackground = wrapper.find('#square-0').prop('style')
            .background;
        const secondSquareBackground = wrapper.find('#square-1').prop('style')
            .background;

        wrapper.instance().switchSquares(0, 1);

        wrapper.setProps({});

        expect(wrapper.find('#square-0').prop('style').background).toEqual(
            secondSquareBackground,
        );

        expect(wrapper.find('#square-1').prop('style').background).toEqual(
            firstSquareBackground,
        );

        expect(wrapper).toMatchSnapshot();
        wrapper.unmount();
    });

    it('should switch first and second then second and first squares and be unchanged', () => {
        const wrapper = mount(<App />);

        const firstSquareBackground = wrapper.find('#square-0').prop('style')
            .background;
        const secondSquareBackground = wrapper.find('#square-1').prop('style')
            .background;

        wrapper.instance().switchSquares(0, 1);
        wrapper.instance().switchSquares(1, 0);

        wrapper.setProps({});

        expect(wrapper.find('#square-0').prop('style').background).toEqual(
            firstSquareBackground,
        );

        expect(wrapper.find('#square-1').prop('style').background).toEqual(
            secondSquareBackground,
        );

        expect(wrapper).toMatchSnapshot();
        wrapper.unmount();
    });
});

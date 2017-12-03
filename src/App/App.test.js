/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App test', () => {
  it.skip('should render the correct components', () => {
    const renderedApp = shallow(<App />);

    expect(renderedApp.find('Header').length).toEqual(1);
    expect(renderedApp.find('Search').length).toEqual(1);
    expect(renderedApp.find('ComparisonContainer').length).toEqual(1);
    expect(renderedApp.find('CardContainer').length).toEqual(1);
  });

  it.skip('should match the App snapshot', () => {
    const renderedApp = shallow(<App />);

    expect(renderedApp).toMatchSnapshot();
  });

  it.skip('should be instantiated with the correct default state', ()=> {
    const renderedApp = shallow(<App />);

    expect(renderedApp.state('cards').length).toEqual(181);
    expect(renderedApp.state('comparison')).toEqual([null, null]);
  });

  it.skip('Should render the correct number of cards given the number of items in the cards array and the placeholder cards in the comparison container', () => {
    const renderedApp = mount(<App />);

    expect(renderedApp.find('.Card').length).toEqual(184);
  });

  it.skip('Should replace the first null in the comparison array when a card is clicked', ()=> {
    const renderedApp = mount(<App />);

    const clickedCard = renderedApp.find('.card-content').at(1);

    clickedCard.simulate('click');
    expect(renderedApp.state('comparison')).toEqual(['ACADEMY 20', null]);
    expect(renderedApp.find('.selected').length).toEqual(2);
    expect(renderedApp.find('.selected').at(0).find('h4').text()).toEqual('ACADEMY 20');
  });

  it.skip('Should replace the second null when a second card is clicked', () => {
    const renderedApp = mount(<App />);

    const clickedCard1 = renderedApp.find('.card-content').at(1);

    const clickedCard2 = renderedApp.find('.card-content').at(2);

    clickedCard1.simulate('click');
    expect(renderedApp.state('comparison')).toEqual(['ACADEMY 20', null]);
    clickedCard2.simulate('click');
    expect(renderedApp.state('comparison')).toEqual(['ACADEMY 20', 'ADAMS COUNTY 14']);
    expect(renderedApp.find('.selected').length).toEqual(4);
    expect(renderedApp.find('.selected').at(1).find('h4').text()).toEqual('ADAMS COUNTY 14');
  });

  it.skip('Should not add anything to the comparison array when a third card is clicked', () => {
    const renderedApp = mount(<App />);

    const clickedCard1 = renderedApp.find('.card-content').at(1);

    const clickedCard2 = renderedApp.find('.card-content').at(2);

    const clickedCard3 = renderedApp.find('.card-content').at(3);

    clickedCard1.simulate('click');
    clickedCard2.simulate('click');
    clickedCard3.simulate('click');
    expect(renderedApp.find('.selected').length).toEqual(4);
    expect(renderedApp.state('comparison')).toEqual(['ACADEMY 20', 'ADAMS COUNTY 14']);        
  });
  it.skip('Should remove a district name from the comparisons array and remove the selected class when selected twice', () => {
    const renderedApp = mount(<App />);

    const clickedCard1 = renderedApp.find('.card-content').at(1);

    clickedCard1.simulate('click');
    expect(renderedApp.find('.selected').length).toEqual(2);
    expect(renderedApp.state('comparison')).toEqual(['ACADEMY 20', null]);
    clickedCard1.simulate('click');
    expect(renderedApp.find('.selected').length).toEqual(0);
    expect(renderedApp.state('comparison')).toEqual([null, null]);    
  });

  it.skip('Should render the comparison card after selecting two cards', ()=> {
    const renderedApp = mount(<App />);

    const clickedCard1 = renderedApp.find('.card-content').at(1);

    const clickedCard2 = renderedApp.find('.card-content').at(2);

    clickedCard1.simulate('click');
    clickedCard2.simulate('click');
    expect(renderedApp.find('.displayComparedData').length).toEqual(1);
    expect(renderedApp.find('.displayComparedData').find('h3').at(0).text()).toEqual(' ACADEMY 20 ');
    expect(renderedApp.find('.displayComparedData').find('h3').at(1).text()).toEqual(' Percentage Difference: 74.2%');
    expect(renderedApp.find('.displayComparedData').find('h3').at(2).text()).toEqual(' ADAMS COUNTY 14 ');  
  });

  it.skip('Should update the cards displayed in the card container when a search query is entered', () => {
    const renderedApp = mount(<App />);

    const searchInput = renderedApp.find('Search').find('input');

    expect(renderedApp.find('Card').length).toEqual(184);
    searchInput.simulate('change', {target: { value: 'col'}});
    expect(renderedApp.find('Card').length).toEqual(5);
  });
});
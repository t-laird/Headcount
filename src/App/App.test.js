/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App test', () => {
  it('should render the correct components', () => {
    const renderedApp = shallow(<App />);

    expect(renderedApp.find('Header').length).toEqual(1);
    expect(renderedApp.find('Search').length).toEqual(1);
    expect(renderedApp.find('ComparisonContainer').length).toEqual(1);
    expect(renderedApp.find('CardContainer').length).toEqual(1);
  });

  it('should match the App snapshot', () => {
    const renderedApp = shallow(<App />);

    expect(renderedApp).toMatchSnapshot();
  });

  it('should be instantiated with the correct default state', ()=> {
    const renderedApp = shallow(<App />);

    expect(renderedApp.state('cards').length).toEqual(181);
    expect(renderedApp.state('comparison')).toEqual([null, null]);
  });

  it('Should render the correct number of cards given the number of items in the cards array and the placeholder cards in the comparison container', () => {
    const renderedApp = mount(<App />);

    expect(renderedApp.find('.Card').length).toEqual(184);
  });

  it('Should replace the first null in the comparison array when a card is clicked', ()=> {
    const renderedApp = mount(<App />);

    const clickedCard = renderedApp.find('.card-content').at(1);

    clickedCard.simulate('click');
    expect(renderedApp.state('comparison')).toEqual(['ACADEMY 20', null]);
    expect(renderedApp.find('CardContainer').find('.selected').length).toEqual(1);
    expect(renderedApp.find('.selected').at(1).find('h4').text()).toEqual('ACADEMY 20');
  });

  it('Should replace the second null when a second card is clicked', () => {
    const renderedApp = mount(<App />);

    const clickedCard1 = renderedApp.find('.card-content').at(1);

    const clickedCard2 = renderedApp.find('.card-content').at(2);

    clickedCard1.simulate('click');
    expect(renderedApp.state('comparison')).toEqual(['ACADEMY 20', null]);
    clickedCard2.simulate('click');
    expect(renderedApp.state('comparison')).toEqual(['ACADEMY 20', 'ADAMS COUNTY 14']);
    expect(renderedApp.find('CardContainer').find('.selected').length).toEqual(2);
    expect(renderedApp.find('CardContainer').find('.selected').at(1).find('h4').text()).toEqual('ADAMS COUNTY 14');
  });

  it('Should not add anything to the comparison array when a third card is clicked', () => {
    const renderedApp = mount(<App />);

    const clickedCard1 = renderedApp.find('.card-content').at(1);

    const clickedCard2 = renderedApp.find('.card-content').at(2);

    const clickedCard3 = renderedApp.find('.card-content').at(3);

    clickedCard1.simulate('click');
    clickedCard2.simulate('click');
    clickedCard3.simulate('click');
    expect(renderedApp.find('CardContainer').find('.selected').length).toEqual(2);
    expect(renderedApp.state('comparison')).toEqual(['ACADEMY 20', 'ADAMS COUNTY 14']);        
  });

  it('Should remove a district name from the comparisons array and remove the selected class when selected twice', () => {
    const renderedApp = mount(<App />);

    const clickedCard1 = renderedApp.find('.card-content').at(1);

    clickedCard1.simulate('click');
    expect(renderedApp.find('CardContainer').find('.selected').length).toEqual(1);
    expect(renderedApp.state('comparison')).toEqual(['ACADEMY 20', null]);
    clickedCard1.simulate('click');
    expect(renderedApp.find('CardContainer').find('.selected').length).toEqual(0);
    expect(renderedApp.state('comparison')).toEqual([null, null]);    
  });

  it('Should render the comparison card after selecting two cards', ()=> {
    const renderedApp = mount(<App />);

    const clickedCard1 = renderedApp.find('.card-content').at(1);

    const clickedCard2 = renderedApp.find('.card-content').at(2);

    clickedCard1.simulate('click');
    clickedCard2.simulate('click');
    expect(renderedApp.find('.displayComparedData').length).toEqual(1);
    expect(renderedApp.find('.displayComparedData').find('h3').at(0).text()).toEqual(' ACADEMY 20 ');
    expect(renderedApp.find('.displayComparedData').find('h3').at(1).text()).toEqual('Percentage Difference: 74.2%');
    expect(renderedApp.find('.displayComparedData').find('h3').at(2).text()).toEqual(' ADAMS COUNTY 14 ');  
  });

  it('Should update the cards displayed in the card container when a search query is entered', () => {
    const renderedApp = mount(<App />);

    const searchInput = renderedApp.find('Search').find('input');

    expect(renderedApp.find('Card').length).toEqual(184);
    searchInput.simulate('change', {target: { value: 'col'}});
    expect(renderedApp.find('Card').length).toEqual(5);
  });

  it('Should render the nav component with the default kindergarten data selected', () => {
    const renderedApp = mount(<App />);

    expect(renderedApp.find('Nav').find('.selected').length).toEqual(1);
    expect(renderedApp.find('Nav').find('.selected').text()).toEqual("Kindergartners in full day programs");
  });

  it('Should change the selected data when a different option is selected in the nav', () => {
    const renderedApp = mount(<App />);
    const navButton = renderedApp.find('Nav').find('Button').at(5);

    expect(renderedApp.find('Nav').find('.selected').length).toEqual(1);
    expect(renderedApp.find('Nav').find('.selected').text()).toEqual("Kindergartners in full day programs");
    navButton.simulate('click');
    expect(renderedApp.find('Nav').find('.selected').length).toEqual(1);
    expect(renderedApp.find('Nav').find('.selected').text()).toEqual("School aged children in poverty");
    expect(renderedApp.find('Card').length).toEqual(183);
    expect(renderedApp.state('currentDataFile')).toEqual('School aged children in poverty');
  });

  it('Should render the chart when the chart icon is clicked in the comparison card', () => {
    const renderedApp = mount(<App />);
    const clickedCard1 = renderedApp.find('.card-content').at(1);
    const clickedCard2 = renderedApp.find('.card-content').at(2);

    clickedCard1.simulate('click');
    clickedCard2.simulate('click');

    const comparisonCard = renderedApp.find('ComparisonContainer').find('.displayComparedData');
    const chartButton = comparisonCard.find('.icon-chart-line');

    expect(renderedApp.find('Chart').length).toEqual(0);

    chartButton.simulate('click');

    expect(renderedApp.find('Chart').length).toEqual(1);
  });

  it('Should close the chart when the close button is clicked', () => {
    const renderedApp = mount(<App />);
    const clickedCard1 = renderedApp.find('.card-content').at(1);
    const clickedCard2 = renderedApp.find('.card-content').at(2);

    clickedCard1.simulate('click');
    clickedCard2.simulate('click');

    const comparisonCard = renderedApp.find('ComparisonContainer').find('.displayComparedData');
    const chartButton = comparisonCard.find('.icon-chart-line');

    chartButton.simulate('click');
    expect(renderedApp.find('Chart').length).toEqual(1);

    const closeChartButton = renderedApp.find('Chart').find('Button');
    
    closeChartButton.simulate('click');
    expect(renderedApp.find('Chart').length).toEqual(0);
  });
});
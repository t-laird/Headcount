import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('DistrictRepository iteration 1 - part 2', () =>  {
  const district = new DistrictRepository(kinderData);

  test('findAllMatches defaults to returning all data in an array', () => {
    expect(district.findAllMatches().length).toBe(181);
  });

  test('findAllMatches returns matches in an array, case insensitive', () => {
    expect(district.findAllMatches('ColoRado').length).toBe(2);
  });

  test('findAllMatches finds no matches and returns an empty array when given arguments that dont exist within the data', () => {
    expect(district.findAllMatches('al;dkfjas;dlkjasdfl;').length).toBe(0);
    expect(district.findAllMatches('packers').length).toBe(0);
    expect(district.findAllMatches('df').length).toBe(0);
  });

  test('findAllMatches returns matches in an array, case insensitive', () => {
    expect(district.findAllMatches('ar').length).toBe(16);
  });

  test('findAllMatches returns expected data', () => {
    let expectedData = {"EAST YUMA COUNTY RJ-2": {"2004": 0, "2005": 0, "2006": 0, "2007": 0, "2008": 0, "2009": 0, "2010": 0, "2011": 0, "2012": 0, "2013": 0, "2014": 0}}
    expect(district.findAllMatches('yuma')[0]).toEqual(expectedData)
  })

});

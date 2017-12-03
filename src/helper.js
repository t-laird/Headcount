export default class DistrictRepository {
  constructor(data) {
    this.data = [];
    this.filterData(data);
    this.dataDescriptions = {
      kinderData: 'Kindergartners in full day programs', 
      gradData: 'High-school graduation rates',
      enrollment: 'Student enrollment',
      onlineEnrollment: 'Online student enrollment',
      householdIncome: 'Median household income',
      studentsInPoverty: 'School aged children in poverty',
      titleIstudents: 'Students qualifying for Title I',
      specialEducation: 'Students in special education programs',
      remediationInHigherEducation: 'Remediation in higher education'
    };
  }

  filterData(data) {
    const dataObj = this.createDataObj(data);
    const dataArray = Object.keys(dataObj).map( location => ({[location]: dataObj[location]}) );
      
    this.data = dataArray;    
  }

  createDataObj(data) {
    return data.reduce( (dataObj, dataPoint) => {
      const refineData = isNaN(parseFloat(dataPoint.Data)) 
        ? 0 
        : parseFloat(dataPoint.Data.toFixed(3));

      dataObj[dataPoint.Location] = 
        {
          ...dataObj[dataPoint.Location],
          [dataPoint.TimeFrame]: refineData
        };

      return dataObj;
    }, {});
  }

  findByName(query) {
    if (!query) {
      return undefined;
    }
    const caseInsensitiveQuery = new RegExp(query, 'gi'); 
    const foundData = this.data.find( dataPoint => {
      const district = Object.keys(dataPoint)[0];

      return caseInsensitiveQuery.test(district);
    });

    if (!foundData) {
      return undefined;
    }
    const location = Object.keys(foundData)[0].toUpperCase();
    const data = foundData[Object.keys(foundData)[0]];
    const queryMatch = {
      location, 
      data
    };
    
    return queryMatch;
  }

  findAllMatches(query) {
    const caseInsensitiveQuery = new RegExp(query, 'gi');

    return this.data.filter(dataPoint =>  {
      const district = Object.keys(dataPoint)[0];

      return caseInsensitiveQuery.test(district);
    });
  }

  findAverage(query) {
    const searchedDist = this.findByName(query);
    const numYears = Object.keys(searchedDist.data).length;
    const years = Object.keys(searchedDist.data);

    const totalScore = years.reduce((total, year) => {
      total += searchedDist.data[year];
      return total;
    }, 0);

    const average = totalScore/numYears;
    const roundedAverage = parseFloat(average.toFixed(3));

    return roundedAverage;
  }

  compareDistrictAverages(dist1, dist2) {
    const dist1Avg = this.findAverage(dist1);
    const dist2Avg = this.findAverage(dist2);

    const difference = dist1Avg > dist2Avg 
      ? dist1Avg/dist2Avg - 1 
      : dist2Avg/dist1Avg - 1;
    
    const comparisonObj = {
      [dist1.toUpperCase()]: dist1Avg, 
      [dist2.toUpperCase()]: dist2Avg, 
      compared: parseFloat(difference.toFixed(3))
    };

    return comparisonObj;
  }
}

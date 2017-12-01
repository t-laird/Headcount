export default class DistrictRepository {
  constructor(data) {
    this.data = [];
    this.filterData(data);
  }

  prepData(data) {
    if(Array.isArray(data)) {
      return data
    } else {
      return data[0]
    }
  }
  
  filterData(data) {
    let dataObj = data.reduce( (result, dataPoint) => {
      
      let refineData = 
        isNaN(parseFloat(dataPoint.Data)) ?
          0 : 
          parseFloat(dataPoint.Data.toFixed(3));

      result[dataPoint.Location] = 
        {
          ...result[dataPoint.Location],
          [dataPoint.TimeFrame]: refineData
        };

      return result;
    }, {});

    let dataArray = Object.keys(dataObj).map( location => {
      return {[location]: dataObj[location]};
    });

    this.data = dataArray;    
  }

  findByName(query) {
    if (!query) {
      return undefined;
    }

    let queryRegEx = new RegExp(query, 'gi'); 
    
    let foundData = this.data.find( dataPoint => {
      return queryRegEx.test(Object.keys(dataPoint)[0]);
    });

    if (!foundData) {
      return undefined;
    }

    return {
      location: Object.keys(foundData)[0].toUpperCase(), 
      data: foundData[Object.keys(foundData)[0]]
    };
  }

  findAllMatches(query) {
    let regex = new RegExp(query, 'gi');

    return this.data.filter(dataPoint => 
      regex.test(Object.keys(dataPoint)[0])
    );
  }

  findAverage(query) {
    let searchedDist = this.findByName(query);
    let numYears = Object.keys(searchedDist.data).length;
    let totalScore = Object.keys(searchedDist.data).reduce((total, year) => {
      total += searchedDist.data[year];
      return total;
    }, 0);
    let average = totalScore/numYears;

    return parseFloat(average.toFixed(3));
  }

  compareDistrictAverages(dist1, dist2) {
    let dist1Avg = this.findAverage(dist1);
    let dist2Avg = this.findAverage(dist2);
    let difference = dist1Avg > dist2Avg ? 
      dist1Avg/dist2Avg - 1 : 
      dist2Avg/dist1Avg - 1;
        
    return {
      [dist1.toUpperCase()]: dist1Avg, 
      [dist2.toUpperCase()]: dist2Avg, 
      compared: parseFloat(difference.toFixed(3))};
  }
}

export default class DistrictRepository {
  constructor(data) {
    this.data = [];
    this.filterData(data);
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
}

function FILTER_ALL_COUNT(sheetName, filter1, filter2) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var dataRange = sheet.getDataRange().getValues();
  var count = 0;
  
  for (var i = 0; i < dataRange.length; i++) {
    var colC = dataRange[i][2]
    var colD = dataRange[i][3];
    var colJ = dataRange[i][9];
    if (colC == filter1 && colD == filter2 && (colJ != 0 && colJ != "")) {
      count++;
    }
  }
  return count;
}

function FILTER_ALL_COUNT_FOUR(sheetName, filter1, filter2) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var dataRange = sheet.getDataRange().getValues();
  var count = 0;
  
  for (var i = 0; i < dataRange.length; i++) {
    var colC = dataRange[i][2];
    var colD = dataRange[i][3];
    var colJ = dataRange[i][9];
    if (colC == filter1 && colD == filter2 && (colJ != 0 && colJ != "" && colJ != 4)) {
      count++;
    }
  }
  return count;
}



function FILTER_ALL_COUNT_TOTAL(sheetName, filter1) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var dataRange = sheet.getDataRange().getValues();
  var count = 0;
  
  for (var i = 0; i < dataRange.length; i++) {
    var colC = dataRange[i][2];
    var colD = dataRange[i][3];
    var colJ = dataRange[i][9];
    if (colC == filter1 && (colJ != 0 && colJ != "")) {
      count++;
    }
  }
  return count;
}

function FILTER_ALL_COUNT_TOTAL_FOUR(sheetName, filter1) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var dataRange = sheet.getDataRange().getValues();
  var count = 0;
  
  for (var i = 0; i < dataRange.length; i++) {
    var colC = dataRange[i][2];
    var colD = dataRange[i][3];
    var colJ = dataRange[i][9];
    if (colC == filter1 && (colJ != 0 && colJ != "" && colJ != 4)) {
      count++;
    }
  }
  return count;
}




function CUSTOM_FILTERED_DATA_COUNT(sheetName, filter1, filter2, filter3, filter4) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  const dataRange = sheet.getDataRange().getValue();
  let filteredData = [];
  let count = 0;

  for (let i = 0; i < dataRange.length; i++) {
    let colC = dataRange[i][2];
    let colD = dataRange[i][3];
    let colJ = dataRange[i][9];

    if (colC == filter1 && colD == filter2 && (colJ == filter3 && colJ != filter4)) {
      filteredData.push(dataRange[i]);
      count++;
    }
  }
  return count, filteredData;
}


function CUSTOM_FILTER_DATA(sheetName, filter1, filter2) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var dataRange = sheet.getDataRange().getValues();
  var filteredData = [];
  
  for (var i = 0; i < dataRange.length; i++) {
    var colC = dataRange[i][2];
    var colD = dataRange[i][3];
    var colJ = dataRange[i][9];
    
    if (colC == filter1 && colD == filter2 && (colJ != 0 && colJ != "")) {
      filteredData.push(dataRange[i]);
    }
  }
  
  return filteredData;
}

"use strict";

(function() {
  var spreadsheetContainer = document.getElementById("spreadsheet-container");
  spreadsheetContainer.addEventListener("click", function() {
    if(spreadsheetContainer.classList && 
       typeof spreadsheetContainer.classList.add === "function") {
        spreadsheetContainer.classList.remove("spreadsheet-container-hide");
        spreadsheetContainer.classList.add("spreadsheet-container-show");
    } else {
      spreadsheetContainer.className = "spreadsheet-container-show";
    }
  });
  spreadsheetContainer.addEventListener("mouseleave", function() {
    if(spreadsheetContainer.classList && 
       typeof spreadsheetContainer.classList.remove === "function") {
        spreadsheetContainer.classList.remove("spreadsheet-container-show");
        spreadsheetContainer.classList.add("spreadsheet-container-hide");
    } else {
      spreadsheetContainer.className = "spreadsheet-container-hide";
    }
  });


  var NUM_OF_COLS = 10;
  var NUM_OF_ROWS = 16;
      
  var COLS = "ABCDEFGHIJ";
  var table = document.getElementById("spreadsheet");
  var tr = document.createElement("tr");
  var trResult;
  var inputCell;
  var td, th;
  var row = 1;
  var col = 0;
  
  
  tr.appendChild(document.createElement("th"));
  for(col = 0; col < NUM_OF_COLS; col++) {
    th = document.createElement("th");
    th.className = "cell-heading";
    //td.classList.add("cell-heading");
    th.innerText = COLS[col];
    tr.appendChild(th);
  }
      
  spreadsheet.appendChild(tr);
      
  trResult = document.createElement("tr");
  td = document.createElement("td");
  //td.classList.add("cell-result-heading");
  td.className = "cell-result-heading";
  td.innerText = "R";
  trResult.appendChild(td);
  
  for(col = 0; col < NUM_OF_COLS; col++) {
    td = document.createElement("td");
    td.className = "cell-result";
    td.id = "R" + COLS[col];
    //td.classList.add("cell-result");
    td.innerText = "R" + COLS[col];
    trResult.appendChild(td);
  }
      
  for(var row = 1; row < NUM_OF_ROWS; row++) {
    tr = document.createElement("tr");
    td = document.createElement("td");
    //td.classList.add("cell-heading");
    td.className = "cell-heading";
    td.innerText = row;
    tr.appendChild(td);
        
    for(col = 0; col < NUM_OF_COLS; col++) {
      td = document.createElement("td");
      inputCell = document.createElement("input");
      inputCell.id = COLS[col] + row;
      inputCell.addEventListener("change", runCodeAndTestFunctions);
      td.appendChild(inputCell);
      tr.appendChild(td);
    }
        
    spreadsheet.appendChild(tr);
  }
  
  spreadsheet.appendChild(trResult);
})();
//anchor variables
var mainTable = document.getElementById('contentTable');
var storeForm = document.getElementById('addStoreForm');
storeForm.addEventListener('submit', newStoreHandler);

//Constructor function for objects.
function StoreObjs(name, minCus, maxCus, avgCookies) {
  this.cityName = name;
  this.minMaxCustomers = [minCus, maxCus];
  this.averageCookies = avgCookies;
  this.totalCookies = 0;
  this.salesPerHour = [];
  this.hours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];

  //push created obj into an array.
  StoreObjs.all.push(this);
}

//create prototype method for cookiesPerHour that calculates random total cookies per hour.
StoreObjs.prototype.cookiesPerHour = function() {
  var avgCust = Math.floor(Math.random() * (this.minMaxCustomers[1] - this.minMaxCustomers[0]) + this.minMaxCustomers[0]);
  return Math.floor(avgCust * this.averageCookies);
};

//render will not only populate the arrays but also append to table elements.
StoreObjs.prototype.render = function() {
  //create a row element to hold all the data from a city.
  var tableRow = document.createElement('tr');

  //create a title TD and append to tableRow
  var titleTD = document.createElement('td');
  titleTD.textContent = this.cityName;
  tableRow.appendChild(titleTD);

  //for loop that populates the salesPerHour array and also create TD to hold each individual total cookies per hours.  Then append to TR.
  for(var i = 0; i < this.hours.length; i++) {
    //cookies = the amount of cookies sold per hour.
    var cookies = this.cookiesPerHour();
    //Push total cookies per hour into salesPerHour.
    this.salesPerHour.push(cookies);
    //calculate total cookies of the day.
    this.totalCookies += cookies;
    //this for loop calculates the total cookies per hour from all stores.
    var tableData = document.createElement('td');
    tableData.textContent = cookies;
    tableRow.appendChild(tableData);
  }
  //create row total and append to the end of TR
  var totalRow = document.createElement('td');
  totalRow.textContent = this.totalCookies;
  tableRow.appendChild(totalRow);
  //append final TR to table
  mainTable.appendChild(tableRow);
  //console.log(this.salesPerHour);
};

//store all storeObjs in an array.
StoreObjs.all = [];

//instantiate all the objects
new StoreObjs('Seattle', 23, 65, 6.3);
new StoreObjs('Tokyo', 3, 24, 1.2);
new StoreObjs('Dubai', 11, 38, 3.7);
new StoreObjs('Paris', 20, 38, 2.3);
new StoreObjs('Lima', 2, 16, 4.6);

//store form submit event handler
function newStoreHandler(event) {
  //prevent default behavior for form submit btn
  event.preventDefault();
  //remove event listener to ensure script runs entirely through.
  storeForm.removeEventListener('submit', newStoreHandler);
  //store each input value into its variable accordingly
  var locationName = event.target.locStore.value;
  var minCustomers = event.target.minCus.value;
  var maxCustomers = event.target.maxCus.value;
  var averageCookies = event.target.avgCookies.value;

  //validate to make sure none of the input zero length.
  if(locationName.length !== 0 && minCustomers.length !== 0 && maxCustomers.length !== 0 && averageCookies.length !== 0){
    //instantiate new storeobj
    new StoreObjs(locationName, +minCustomers, +maxCustomers, +averageCookies);
    //add new row and recalculate footer totals.
    addNewRow();
  } else {
    alert('One or more input was empty');
  }
  //clear the inputs in form
  event.target.locStore.value = null;
  event.target.minCus.value = null;
  event.target.maxCus.value = null;
  event.target.avgCookies.value = null;
  //add the event listener back at the end.
  storeForm.addEventListener('submit', newStoreHandler);

}


//header function
function tableHeader() {
  //create a row for header
  var headerTR = document.createElement('tr');
  var headerTitle = document.createElement('th');
  headerTR.appendChild(headerTitle);
  for (var i=0; i < StoreObjs.all[0].hours.length; i++){
    //create a new TD for each hour.
    var headerTD = document.createElement('th');
    headerTD.textContent = StoreObjs.all[0].hours[i];
    //append TD to headerTR.
    headerTR.appendChild(headerTD);
  }
  var headerLastTitle = document.createElement('th');
  headerLastTitle.textContent = 'Daily Location Total:';
  headerTR.appendChild(headerLastTitle);
  mainTable.appendChild(headerTR);
}

//footer function
function tableFooter() {
  var colTotalArray = [];
  //create main TR to hold all footer contents.
  var footerTR = document.createElement('tr');
  //create footer title and append to footerTR.
  var footerTitle = document.createElement('td');
  footerTitle.textContent = 'Hourly Totals:';
  footerTR.appendChild(footerTitle);
  //outer loop runs through the length of salesPerHour array.
  var colTotal = 0;
  for(var i=0; i < StoreObjs.all[0].salesPerHour.length; i++) {
    var colSingleTotal = 0;
    //inner loop runs through the length of objects array.
    for(var k=0; k < StoreObjs.all.length; k++){
      //add up for single column
      colSingleTotal += StoreObjs.all[k].salesPerHour[i];
      //add up for total of all columns
      colTotal += StoreObjs.all[k].salesPerHour[i];
    }
    colTotalArray.push(colSingleTotal);

    //create TD for each single column total and append to footerTR.
    var footerTD = document.createElement('td');
    footerTD.textContent = colSingleTotal;
    footerTR.appendChild(footerTD);
  }
  //create a TD to hold total of all columns.
  var colTotalTD = document.createElement('td');
  colTotalTD.textContent = colTotal;
  footerTR.appendChild(colTotalTD);

  //append footer TR to mainTable
  mainTable.appendChild(footerTR);
}

function generateTable() {
  //create header
  tableHeader();
  //for loop that runs through each object and render.
  for (var i=0; i < StoreObjs.all.length; i++){
    StoreObjs.all[i].render();
  }
  tableFooter();
}

function addNewRow() {
  var lastRow = mainTable.rows.length - 1;
  var newRow = StoreObjs.all.length - 1;
  mainTable.deleteRow(lastRow);
  StoreObjs.all[newRow].render();
  tableFooter();
}

generateTable();



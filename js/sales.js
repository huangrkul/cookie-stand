//lab7
//create a table for anchoring
//create constructor function to hold all object properties
//create prototype for all methods in objects
//create prototype for object.render to populate the table anchor
//table needs total at the end.
//bracket notation will output value as string. this[array[i]]
//nested for loop for hour total of all locations
//create header and footer in separate functions

//table anchor
var mainTable = document.getElementById('contentTable');

//Constructor function for objects.
function StoreObjs(name, minCus, maxCus, avgCookies) {
  this.cityName = name;
  this.minMaxCustomers = [minCus, maxCus];
  this.averageCookies = avgCookies;
  this.totalCookies = 0;
  this.salesPerHour = [];
  this.hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

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

//run through all objects and fetch the salesPerHour array position 0
function tableFooter() {
  var colTotalArray = [];
  //create main TR to hold all footer contents.
  var footerTR = document.createElement('tr');
  //create footer title and append to footerTR.
  var footerTitle = document.createElement('td');
  footerTitle.textContent = 'Column Total';
  footerTitle.appendChild(footerTR);
  //outer loop runs through the length of salesPerHour array.
  for(var i=0; i < StoreObjs.all[0].salesPerHour.length; i++) {
    var colTotal = 0;
    //inner loop runs through the length of objects array.
    for(var k=0; k < StoreObjs.all.length; k++){
      colTotal += StoreObjs.all[k].salesPerHour[i];
    }
    colTotalArray.push(colTotal);
    var footerTD = document.createElement('td');
    footerTD.textContent = colTotal;
    footerTR.appendChild(footerTD);
  }
  mainTable.appendChild(footerTR);
}


function generateTable() {
  //for loop that runs through each object and render.
  for (var i=0; i < StoreObjs.all.length; i++){
    StoreObjs.all[i].render();
  }
  tableFooter();
}

generateTable();


// var locSeattle = {
//   cityName: 'Seattle',
//   minMaxCustomers: [23,65],
//   averageCookies: 6.3,
//   totalCookies: 0,
//   salesPerHour: [],
//   hours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   //method to calculate cookies per hour betwee min and max customers * average cookies per hour.
//   cookiesPerHour: function() {
//     var avgCust = Math.floor(Math.random() * (this.minMaxCustomers[1] - this.minMaxCustomers[0]) + this.minMaxCustomers[0]);
//     return Math.floor(avgCust * this.averageCookies);
//   },
//   //push randomized cookies per hour into salesPerHour and add all the numbers up and store the total in totalCookies.
//   render: function() {
//     for(var i = 0; i < this.hours.length; i++) {
//       //cookies = the amount of cookies sold per hour.
//       var cookies = this.cookiesPerHour();
//       //Push total cookies per hour into salesPerHour.
//       this.salesPerHour.push(cookies);
//       //calculate total cookies of the day.
//       this.totalCookies += cookies;
//     }
//   }
// };


// //this function generates the actual list on sales.html by creating html elements and appending them.
// function locListGenerator(cityObj){
//   var storeObj = cityObj;

//   //Creat parent div and add class .city for styling.  Append to section element.
//   var cityDiv = document.createElement('div');
//   cityDiv.classList.add('city');
//   mainList.appendChild(cityDiv);
//   //create h2 tag for title for the city.  Append to div above.
//   var cityHead = document.createElement('h2');
//   cityHead.classList.add('robo');
//   cityHead.textContent = storeObj.cityName;
//   cityDiv.appendChild(cityHead);
//   //create unordered list. Append to the div.
//   var cityUl = document.createElement('ul');
//   cityUl.classList.add('dataFont');
//   cityDiv.appendChild(cityUl);

//   //generate the list of cookies per hour.  Append to ul above.
//   for(var i = 0; i < storeObj.hours.length; i++) {
//     var cityLi = document.createElement('li');
//     cityLi.textContent = `${storeObj.hours[i]}: ${storeObj.salesPerHour[i]} cookies`;
//     cityUl.appendChild(cityLi);
//   }
//   //finally, generate total number of cookies and append to the ul.
//   var cityTotal = document.createElement('li');
//   cityTotal.textContent = `Total: ${storeObj.totalCookies} cookies`;
//   cityUl.appendChild(cityTotal);
// }



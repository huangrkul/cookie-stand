//lab7
//create a table for anchoring 
//create constructor function to hold all object properties
//create prototype for all methods in objects
//create prototype for object.render to populate the table anchor
//table needs total at the end.
//bracket notation will output value as string. this[array[i]]
//nested for loop for hour total of all locations
//create header and footer in separate functions

var mainTable = document.getElementById('contentTable');

function StoreObjs(name, minCus, maxCus, avgCookies) {
  this.cityName = name;
  this.minMaxCustomers = [minCus, maxCus];
  this.averageCookies = avgCookies;
}

var locSeattle = {
  cityName: 'Seattle',
  minMaxCustomers: [23,65],
  averageCookies: 6.3,
  totalCookies: 0,
  salesPerHour: [],
  hours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  //method to calculate cookies per hour betwee min and max customers * average cookies per hour.
  cookiesPerHour: function() {
    var avgCust = Math.floor(Math.random() * (this.minMaxCustomers[1] - this.minMaxCustomers[0]) + this.minMaxCustomers[0]);
    return Math.floor(avgCust * this.averageCookies);
  },
  //push randomized cookies per hour into salesPerHour and add all the numbers up and store the total in totalCookies.
  render: function() {
    for(var i = 0; i < this.hours.length; i++) {
      //cookies = the amount of cookies sold per hour.
      var cookies = this.cookiesPerHour();
      //Push total cookies per hour into salesPerHour.
      this.salesPerHour.push(cookies);
      //calculate total cookies of the day.
      this.totalCookies += cookies;
    }
  }
};


//this function generates the actual list on sales.html by creating html elements and appending them.
function locListGenerator(cityObj){
  var storeObj = cityObj;

  //Creat parent div and add class .city for styling.  Append to section element.
  var cityDiv = document.createElement('div');
  cityDiv.classList.add('city');
  mainList.appendChild(cityDiv);
  //create h2 tag for title for the city.  Append to div above.
  var cityHead = document.createElement('h2');
  cityHead.classList.add('robo');
  cityHead.textContent = storeObj.cityName;
  cityDiv.appendChild(cityHead);
  //create unordered list. Append to the div.
  var cityUl = document.createElement('ul');
  cityUl.classList.add('dataFont');
  cityDiv.appendChild(cityUl);

  //generate the list of cookies per hour.  Append to ul above.
  for(var i = 0; i < storeObj.hours.length; i++) {
    var cityLi = document.createElement('li');
    cityLi.textContent = `${storeObj.hours[i]}: ${storeObj.salesPerHour[i]} cookies`;
    cityUl.appendChild(cityLi);
  }
  //finally, generate total number of cookies and append to the ul.
  var cityTotal = document.createElement('li');
  cityTotal.textContent = `Total: ${storeObj.totalCookies} cookies`;
  cityUl.appendChild(cityTotal);
}

//adding each object into stores array and use for loop to run through them.
var stores = [locSeattle, locTokyo, locDubai, locParis, locLima];
for (var i=0; i < stores.length; i++){
  stores[i].render();
  locListGenerator(stores[i]);
}

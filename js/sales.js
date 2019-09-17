var mainList = document.getElementById('citiesContainer');

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

//refer to locSeattle for logic explanation
var locTokyo = {
  cityName: 'Tokyo',
  minMaxCustomers: [3,24],
  averageCookies: 1.2,
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

//refer to locSeattle for logic explanation
var locDubai = {
  cityName: 'Dubai',
  minMaxCustomers: [11,38],
  averageCookies: 3.7,
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


//refer to locSeattle for logic explanation
var locParis = {
  cityName: 'Paris',
  minMaxCustomers: [20,38],
  averageCookies: 2.3,
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

//refer to locSeattle for logic explanation
var locLima = {
  cityName: 'Lima',
  minMaxCustomers: [2,16],
  averageCookies: 4.6,
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
      //Push the random cookies per hour to salePerHour array.
      this.salesPerHour.push(cookies);
      //calculate total cookies of the day.
      this.totalCookies += cookies;
    }
  }
};



//this function generates the actual list on sales.html by creating html elements and appending them.
function locListGenerator(cityObj){
  storeObj = cityObj
  //call object literal's render method to populate hours and totalCookies.
  storeObj.render();
  
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

//run the function for each object.
locListGenerator(locSeattle);
locListGenerator(locTokyo);
locListGenerator(locDubai);
locListGenerator(locParis);
locListGenerator(locLima);

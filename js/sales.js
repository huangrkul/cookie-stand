var mainList = document.getElementById('citiesContainer');

var locSeattle = {
  cityName: 'Seattle',
  minMaxCustomers: [23,65],
  averageCookies: 6.3,
  totalCookies: 0,
  salesPerHour: [],
  cookiesPerHourArray: [
    '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  //method to calculate cookies per hour betwee min and max customers * average cookies per hour.
  cookiesPerHour: function() {
    var avgCust = Math.floor(Math.random() * (this.minMaxCustomers[1] - this.minMaxCustomers[0]) + this.minMaxCustomers[0]);
    return Math.floor(avgCust * this.averageCookies);
  },
  //method to concatenate cookiesPerHourArray with random amount of cookies sold per hour in cookiesPerHour while outputting total amount of cookies sold for that day.
  render: function() {
    for(var i = 0; i < this.cookiesPerHourArray.length; i++) {
      //cookies = the amount of cookies sold per hour.
      var cookies = this.cookiesPerHour();
      //concatenate cookiesPerHourArray text with cookies.
      var listText = `${this.cookiesPerHourArray[i]}: ${cookies} cookies`;
      //calculate total cookies of the day.
      this.totalCookies += cookies;
      //rewrite the text in each array into completed string.
      this.salesPerHour.push(listText);
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
  cookiesPerHourArray: [
    '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  //method to calculate cookies per hour betwee min and max customers * average cookies per hour.
  cookiesPerHour: function() {
    var avgCust = Math.floor(Math.random() * (this.minMaxCustomers[1] - this.minMaxCustomers[0]) + this.minMaxCustomers[0]);
    return Math.floor(avgCust * this.averageCookies);
  },
  //method to concatenate cookiesPerHourArray with random amount of cookies sold per hour in cookiesPerHour while outputting total amount of cookies sold for that day.
  render: function() {
    for(var i = 0; i < this.cookiesPerHourArray.length; i++) {
      //cookies = the amount of cookies sold per hour.
      var cookies = this.cookiesPerHour();
      //concatenate cookiesPerHourArray text with cookies.
      var listText = `${this.cookiesPerHourArray[i]}: ${cookies} cookies`;
      //calculate total cookies of the day.
      this.totalCookies += cookies;
      //rewrite the text in each array into completed string.
      this.salesPerHour.push(listText);
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
  cookiesPerHourArray: [
    '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  //method to calculate cookies per hour betwee min and max customers * average cookies per hour.
  cookiesPerHour: function() {
    var avgCust = Math.floor(Math.random() * (this.minMaxCustomers[1] - this.minMaxCustomers[0]) + this.minMaxCustomers[0]);
    return Math.floor(avgCust * this.averageCookies);
  },
  //method to concatenate cookiesPerHourArray with random amount of cookies sold per hour in cookiesPerHour while outputting total amount of cookies sold for that day.
  render: function() {
    for(var i = 0; i < this.cookiesPerHourArray.length; i++) {
      //cookies = the amount of cookies sold per hour.
      var cookies = this.cookiesPerHour();
      //concatenate cookiesPerHourArray text with cookies.
      var listText = `${this.cookiesPerHourArray[i]}: ${cookies} cookies`;
      //calculate total cookies of the day.
      this.totalCookies += cookies;
      //rewrite the text in each array into completed string.
      this.salesPerHour.push(listText);
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
  cookiesPerHourArray: [
    '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  //method to calculate cookies per hour betwee min and max customers * average cookies per hour.
  cookiesPerHour: function() {
    var avgCust = Math.floor(Math.random() * (this.minMaxCustomers[1] - this.minMaxCustomers[0]) + this.minMaxCustomers[0]);
    return Math.floor(avgCust * this.averageCookies);
  },
  //method to concatenate cookiesPerHourArray with random amount of cookies sold per hour in cookiesPerHour while outputting total amount of cookies sold for that day.
  render: function() {
    for(var i = 0; i < this.cookiesPerHourArray.length; i++) {
      //cookies = the amount of cookies sold per hour.
      var cookies = this.cookiesPerHour();
      //concatenate cookiesPerHourArray text with cookies.
      var listText = `${this.cookiesPerHourArray[i]}: ${cookies} cookies`;
      //calculate total cookies of the day.
      this.totalCookies += cookies;
      //rewrite the text in each array into completed string.
      this.salesPerHour.push(listText);
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
  cookiesPerHourArray: [
    '6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  //method to calculate cookies per hour betwee min and max customers * average cookies per hour.
  cookiesPerHour: function() {
    var avgCust = Math.floor(Math.random() * (this.minMaxCustomers[1] - this.minMaxCustomers[0]) + this.minMaxCustomers[0]);
    return Math.floor(avgCust * this.averageCookies);
  },
  //method to concatenate cookiesPerHourArray with random amount of cookies sold per hour in cookiesPerHour while outputting total amount of cookies sold for that day.
  render: function() {
    for(var i = 0; i < this.cookiesPerHourArray.length; i++) {
      //cookies = the amount of cookies sold per hour.
      var cookies = this.cookiesPerHour();
      //concatenate cookiesPerHourArray text with cookies.
      var listText = `${this.cookiesPerHourArray[i]}: ${cookies} cookies`;
      //calculate total cookies of the day.
      this.totalCookies += cookies;
      //rewrite the text in each array into completed string.
      this.salesPerHour.push(listText);
    }
  }
};



//this function generates the actual list on sales.html by creating html elements and appending them.
function locListGenerator(cityObj){
  //call object literal's render method to populate cookiesPerHourArray and totalCookies.
  cityObj.render();
  //Creat parent div and add class .city for styling.  Append to section element.
  var cityDiv = document.createElement('div');
  cityDiv.classList.add('city');
  mainList.appendChild(cityDiv);
  //create h2 tag for title for the city.  Append to div above.
  var cityHead = document.createElement('h2');
  cityHead.textContent = cityObj.cityName;
  cityDiv.appendChild(cityHead);
  //create unordered list. Append to the div.
  var cityUl = document.createElement('ul');
  cityDiv.appendChild(cityUl);
  //generate the list of cookies per hour.  Append to ul above.
  var cityArray = cityObj.salesPerHour;
  for(var i = 0; i < cityArray.length; i++) {
    var cityLi = document.createElement('li');
    cityLi.textContent = cityArray[i];
    cityUl.appendChild(cityLi);
  }
  //finally, generate total number of cookies and append to the ul.
  var cityTotal = document.createElement('li');
  cityTotal.textContent = `Total: ${cityObj.totalCookies} cookies`;
  cityUl.appendChild(cityTotal);
}

//run the function for each object.
locListGenerator(locSeattle);
locListGenerator(locTokyo);
locListGenerator(locDubai);
locListGenerator(locParis);
locListGenerator(locLima);

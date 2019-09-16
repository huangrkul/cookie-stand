var mainList = document.getElementById('citiesContainer');

var locSeattle = {
  cityName: 'Seattle',
  minMaxCustomers: [23,65],
  averageCookies: 6.3,
  cookiesPerHourArray: [
    '6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:','8pm:'],
  //method to calculate cookies per hour betwee min and max customers * average cookies per hour.
  cookiesPerHour: function() {
    var avgCust = Math.floor(Math.random() * (this.minMaxCustomers[1] - this.minMaxCustomers[0]) + this.minMaxCustomers[0]);
    return Math.floor(avgCust * this.averageCookies);
  },
  render: function() {
    for(var i = 0; i < this.cookiesPerHourArray.length; i++) {
      var cookies = this.cookiesPerHour();
      var listText = `${this.cookiesPerHourArray[i]} ${cookies} cookies`;
      this.cookiesPerHourArray[i] = listText;
    }
  }
};

var locTokyo = {
  cityName: 'Tokyo',
  minMaxCustomers: [3,24],
  averageCookies: 1.2,
  cookiesPerHourArray: [
    '6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:','8pm:'],
  //method to calculate cookies per hour betwee min and max customers * average cookies per hour.
  cookiesPerHour: function() {
    var avgCust = Math.floor(Math.random() * (this.minMaxCustomers[1] - this.minMaxCustomers[0]) + this.minMaxCustomers[0]);
    return Math.floor(avgCust * this.averageCookies);
  },
  render: function() {
    for(var i = 0; i < this.cookiesPerHourArray.length; i++) {
      var cookies = this.cookiesPerHour();
      var listText = `${this.cookiesPerHourArray[i]} ${cookies} cookies`;
      this.cookiesPerHourArray[i] = listText;
    }
  }
};

var locDubai = {
  cityName: 'Dubai',
  minMaxCustomers: [11,38],
  averageCookies: 3.7,
  cookiesPerHourArray: [
    '6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:','8pm:'],
  //method to calculate cookies per hour betwee min and max customers * average cookies per hour.
  cookiesPerHour: function() {
    var avgCust = Math.floor(Math.random() * (this.minMaxCustomers[1] - this.minMaxCustomers[0]) + this.minMaxCustomers[0]);
    return Math.floor(avgCust * this.averageCookies);
  },
  render: function() {
    for(var i = 0; i < this.cookiesPerHourArray.length; i++) {
      var cookies = this.cookiesPerHour();
      var listText = `${this.cookiesPerHourArray[i]} ${cookies} cookies`;
      this.cookiesPerHourArray[i] = listText;
    }
  }
};

var locParis = {
  cityName: 'Paris',
  minMaxCustomers: [20,38],
  averageCookies: 2.3,
  cookiesPerHourArray: [
    '6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:','8pm:'],
  //method to calculate cookies per hour betwee min and max customers * average cookies per hour.
  cookiesPerHour: function() {
    var avgCust = Math.floor(Math.random() * (this.minMaxCustomers[1] - this.minMaxCustomers[0]) + this.minMaxCustomers[0]);
    return Math.floor(avgCust * this.averageCookies);
  },
  render: function() {
    for(var i = 0; i < this.cookiesPerHourArray.length; i++) {
      var cookies = this.cookiesPerHour();
      var listText = `${this.cookiesPerHourArray[i]} ${cookies} cookies`;
      this.cookiesPerHourArray[i] = listText;
    }
  }
};

var locLima = {
  cityName: 'Lima',
  minMaxCustomers: [2,16],
  averageCookies: 4.6,
  cookiesPerHourArray: [
    '6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:','8pm:'],
  //method to calculate cookies per hour betwee min and max customers * average cookies per hour.
  cookiesPerHour: function() {
    var avgCust = Math.floor(Math.random() * (this.minMaxCustomers[1] - this.minMaxCustomers[0]) + this.minMaxCustomers[0]);
    return Math.floor(avgCust * this.averageCookies);
  },
  render: function() {
    for(var i = 0; i < this.cookiesPerHourArray.length; i++) {
      var cookies = this.cookiesPerHour();
      var listText = `${this.cookiesPerHourArray[i]} ${cookies} cookies`;
      this.cookiesPerHourArray[i] = listText;
    }
  }
};

function locListGenerator(cityObj){
  cityObj.render();

  var cityDiv = document.createElement('div');
  cityDiv.classList.add('city');
  mainList.appendChild(cityDiv);
  
  var cityHead = document.createElement('h2');
  cityHead.textContent = cityObj.cityName;
  cityDiv.appendChild(cityHead);

  var cityUl = document.createElement('ul');
  cityDiv.appendChild(cityUl);

  var cityArray = cityObj.cookiesPerHourArray;

  for(var i = 0; i < cityArray.length; i++) {
    var cityLi = document.createElement('li');
    cityLi.textContent = cityArray[i];
    cityUl.appendChild(cityLi);
  }
}

locListGenerator(locSeattle);
locListGenerator(locTokyo);
locListGenerator(locDubai);
locListGenerator(locParis);
locListGenerator(locLima);

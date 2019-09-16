var locSeattle = {
  minMaxCustomers: [23,65],
  averageCookies: 6.3,
  //method to calculate cookies per hour betwee min and max customers
  cookiesPerHour: function() {
    return Math.floor(Math.random() * (this.minMaxCustomers[1] - this.minMaxCustomers[0]) + this.minMaxCustomers[0]);
  }
};
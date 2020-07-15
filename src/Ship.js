(function exportShip() {
  function Ship(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.nextPort = itinerary.ports[1];
    this.previousPort = null;
    this.currentPort.addShip(this);
  }

  Ship.prototype = {
    setSail: function setSail() {
      this.previousPort = this.currentPort;
      this.currentPort.removeShip(this);
      this.currentPort = null;
    },
    dock: function dock() {
      const itinerary = this.itinerary;
      const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
      this.currentPort = itinerary.ports[previousPortIndex + 1];
      this.nextPort = itinerary.ports[previousPortIndex + 2];
    },
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = Ship;
  } else {
    window.Ship = Ship;
  }
})();

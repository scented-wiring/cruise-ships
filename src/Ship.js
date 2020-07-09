function Ship(start) {
    this.startingPoint = start;
}

Ship.prototype.setSail = function() {
    this.startingPoint = null;
} 

module.exports = Ship;
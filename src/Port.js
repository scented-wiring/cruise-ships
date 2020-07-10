function Port(name) {
    this.name = name;
    this.ships = [];
    }

Port.prototype = {
    addShip(ship) {
        this.ships.push(ship);
    },

    removeShip(ship) {
        const index = this.ships.indexOf(ship);
        this.ships.splice(index, 1);
    }
}

module.exports = Port;
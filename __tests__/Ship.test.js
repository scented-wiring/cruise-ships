const Ship = require('../src/Ship');

describe('Ship', () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    it('has a starting point', () => {
        const ship = new Ship('Dover');
        expect(ship.startingPoint).toBe('Dover');
    });

    it('can set sail', () => {
        const ship = new Ship('Dover');

        ship.setSail();

        expect(ship.startingPoint).toBeFalsy();
    })
})
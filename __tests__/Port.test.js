const Port = require('../src/Port');
const Ship = require('../src/Ship');

describe('Port', () => {
    describe('with ports', () => {
        let ship
        let port

        beforeEach (() => {
            port = new Port('Dover');
            ship = {};
        })

        it('can be instantiated', () => {
            expect(new Port()).toBeInstanceOf(Object);
        })

        it('has a name', () => {
            expect(port.name).toBe('Dover');
        })

        it('can add a ship', () => {
            port.addShip(ship);

            expect(port.ships).toContain(ship);
        })

        it('can remove a ship', () => {
            const titanic = {};
            const queenMary = {};

            port.addShip(titanic);
            port.addShip(queenMary);
            port.removeShip(queenMary);

            expect(port.ships).toEqual([titanic]);
        })
    })
})
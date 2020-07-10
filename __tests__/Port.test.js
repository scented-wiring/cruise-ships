const Port = require('../src/Port');

describe('Port', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    })

    it('has a name', () => {
        const port = new Port('Liverpool');
        expect(port.name).toBe('Liverpool');
    })

    it('can add a ship', () => {
        const port = new Port('Liverpool');
        const ship = {};

        port.addShip(ship);

        expect(port.ships).toContain(ship);
    })

    it('can remove a ship', () => {
        const port = new Port('Dover');
        const titanic = {};
        const queenMary = {};
        const bounty = {};
        const voyager = {};

        port.addShip(titanic);
        port.addShip(queenMary);
        port.addShip(bounty);
        port.addShip(voyager);
        port.removeShip(queenMary);

        expect(port.ships).toEqual([titanic, bounty, voyager]);
    })
})
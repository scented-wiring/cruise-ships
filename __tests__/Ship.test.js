const Ship = require('../src/Ship');
const Port = require('../src/Port');
const Itinerary = require('../src/Itinerary')

describe('Ship', () => {
    describe('with ports and itinerary', () => {
        let port;
        let ship;
        let dover;
        let calais;
        let itinerary;

        beforeEach(() => {
            port = {
                removeShip: jest.fn(),
                addShip: jest.fn(),
            };

            dover = {
                ...port,
                name: 'Dover',
                ships: []
            };

            calais = {
                ...port,
                name: 'Calais',
                ships: []
            };

            itinerary = new Itinerary([dover, calais]);
            ship = new Ship(itinerary)
        })

        it('can be instantiated', () => {
            expect(ship).toBeInstanceOf(Object);
        })

        it('has a starting point', () => {
            expect(ship.currentPort).toBe(dover);
        })

        it('can set sail', () => {
            ship.setSail();

            expect(ship.currentPort).toBeFalsy();
            expect(dover.removeShip).toHaveBeenCalledWith(ship);
        })

        it('can dock at a different port', () => {
            ship.setSail();
            ship.dock();

            expect(ship.currentPort).toBe(calais);
            expect(calais.addShip).toHaveBeenCalledWith(ship);
        })

        it('can\'t sail further than its itinerary', () => {
            ship.setSail();
            ship.dock();

            expect(() => ship.setSail()).toThrowError('End of itinerary reached');
        })

        it('gets added to port on instantiation', () => {
            expect(port.addShip).toHaveBeenCalledWith(ship);
        })
    })
})
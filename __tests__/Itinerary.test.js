const Itinerary = require('../src/Itinerary');
const Port = require('../src/Port');

describe('Itinerary', () => {
    it('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    })

    it('can have ports', () => {
        const dover = jest.fn();
        const calais = jest.fn();

        const itinerary = new Itinerary([dover, calais]);

        expect(itinerary.ports).toEqual([dover, calais]);
    })
})
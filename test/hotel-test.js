import chai from 'chai';
const expect = chai.expect;
import domUpdates from '../src/domUpdates'
import spies from 'chai-spies';
import Hotel from '../src/Hotel';

chai.use(spies);

let hotel;

describe('Hotel class', () => {
  beforeEach(() => {
    hotel = new Hotel()
  });

  it('should be an instance of Hotel', () => {
    expect(hotel).to.be.an.instanceof(Hotel)
  })

  it('should store all customer data', () => { 
    console.log('hotel: ', hotel.users)
    expect(hotel.users).to.be.an('Array')
  })
});
import chai from 'chai';
const expect = chai.expect;
// import domUpdates from '../src/domUpdates'
import spies from 'chai-spies';
import Hotel from '../src/Hotel';
import data from './sample-data'

chai.use(spies);

let hotel;

describe('Hotel class', () => {
  beforeEach(() => {
    hotel = new Hotel(data)
    // console.log(hotel)
  });

  it('should be an instance of Hotel', () => {
    expect(hotel).to.be.an.instanceof(Hotel)
  })

  it('should store all customer data', () => { 
    // console.log('hotel: ', hotel.users)
    expect(hotel.users).to.be.an('Array')
  });

  it('should return total room service ordered today', () => {
    expect(hotel.dailyRoomService('2019/09/26')).to.equal('28.76')
  })

});
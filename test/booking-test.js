import chai from 'chai';
const expect = chai.expect;
// import index from '../src/index';
import spies from 'chai-spies';
import Booking from '../src/Booking';
import data from './sample-data'
import User from '../src/User';
import domUpdates from '../src/domUpdates';
chai.use(spies);

let booking;

describe('Booking class', () => {
  beforeEach(() => {
    booking = new Booking(data['apiRequestBookings'].Bookings)

  });

  it('should be an instance of Booking', () => {
    expect(booking).to.be.an.instanceof(Booking);
  });


})

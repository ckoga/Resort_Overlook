import chai from 'chai';
const expect = chai.expect;
// import index from '../src/index';
import spies from 'chai-spies';
import Booking from '../src/Booking';
import User from '../src/User';
import domUpdates from '../src/domUpdates';
chai.use(spies);

let booking;

describe('User class', () => {
  beforeEach(() => {
    Promise.all()

  });

  it('should be an instance of Booking', () => {
    expect(booking).to.be.an.instanceof(Booking);
  });

  it('should be able to calculate the total bookings for today', () => {
    expect(booking.calculateRoomsBookedToday(index.getDay())).to.eql();
  });
})

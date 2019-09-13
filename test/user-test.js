import chai from 'chai';
const expect = chai.expect;
import User from '../src/User';
import spies from 'chai-spies';
chai.use(spies);
// chai.spy.on()

let user;

describe('User class', () => {
  beforeEach(() => {
    user = new User()
  });

  it('should be an instance of User class', () => {
    expect(user).to.be.an.instanceof(User);
  });

  it.skip('should be able to find a user', () => {
    expect(user.getUser).to.equal(true)
  })

})


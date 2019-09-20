// import $ from 'jquery';
import 'jquery-ui-bundle';
// import './css/base.scss';


const domUpdates = {

  // displayTabs() {
  //   $('.tabs-conatiner div').hide();
  //   $('.tabs-conatiner div:first').addClass('tab-active')
  // },




  displayDate(date) {
    $('#current-date').text(date)
  },

  displayRoomsBooked(percentage) {
    $('#available-rooms').text(percentage)
  },

  displayTotalRoomService(total) {
    $('#total-orders').text(total)
  },

  displayDailyRevenue(total) {
    $('#daily-revenue').text(total)
  },
 
}

export default domUpdates;
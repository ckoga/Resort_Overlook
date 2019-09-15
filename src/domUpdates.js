// import $ from 'jquery';
// import 'jquery-ui-bundle';
// import './css/base.scss';


const domUpdates = {

  displayDate(date) {
    $('#currentDate').text(date)
  },

  displayRoomsBooked(percentage) {
    $('#available-rooms').text(percentage)
  },

  displayTotalRoomService(total) {
    $('#total-orders').text(total)
  },

}

export default domUpdates;
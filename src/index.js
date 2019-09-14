import $ from 'jquery';
import 'jquery-ui-bundle';
import './css/base.scss';
import Hotel from '../src/Hotel';
import User from '../src/User';
import Room from '../src/Room';
import Booking from '../src/Booking';
import domUpdates from '../src/domUpdates';


$(document).ready(() => {
  $('#ui-tabs').tabs();
  
  let apiRequestUser = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users').then((response) => response.json());

  let apiRequestRooms = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms').then((response) => response.json());

  let apiRequestBookings = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings').then((response) => response.json());

  let apiRequestRoomService = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices').then((response) => response.json());

  let combinedData = {
    "apiRequestUser": {},
    "apiRequestRooms": {},
    "apiRequestBookings": {},
    "apiRequestRoomService": {}
  };

  Promise.all([apiRequestUser, apiRequestRooms, apiRequestBookings, apiRequestRoomService]).then(function (values) {
    combinedData["apiRequestUser"] = values[0];
    combinedData["apiRequestRooms"] = values[1];
    combinedData["apiRequestBookings"] = values[2];
    combinedData["apiRequestRoomService"] = values[3];
    // passUserData(combinedData);
    // passRoomData(combinedData);
    // passBookingData(combinedData);
    // passRoomServiceData(combinedData);
    // console.log('combinedData: ', combinedData['apiRequestBookings'].bookings)
    passHotelData(combinedData);
  });
  
  let hotel = null, user, room, booking, roomService;
  
  function passHotelData(data) {
    hotel = new Hotel(data)
  }
  
  
  
  // hotel.getDate();       
  // domUpdates.displayDate(getDate());
  // domUpdates.dailyRoomsBooked(getDate());
  
  
  
});
        
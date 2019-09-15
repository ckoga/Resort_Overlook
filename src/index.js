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
  
  let apiRequestUser = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
    .then((response) => response.json())
    .catch (error => console.log("error: ", error))

  let apiRequestRooms = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
    .then((response) => response.json())
    .catch(error => console.log("error: ", error))

  let apiRequestBookings = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
    .then((response) => response.json())
    .catch(error => console.log("error: ", error))

  let apiRequestRoomService = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices')
    .then((response) => response.json())
    .catch(error => console.log("error: ", error))

  let combinedData = {
    "apiRequestUser": {},
    "apiRequestRooms": {},
    "apiRequestBookings": {},
    "apiRequestRoomService": {}
  };

  Promise.all([apiRequestUser, apiRequestRooms, apiRequestBookings, apiRequestRoomService])
    .then(values => {
      combinedData["apiRequestUser"] = values[0];
      combinedData["apiRequestRooms"] = values[1];
      combinedData["apiRequestBookings"] = values[2];
      combinedData["apiRequestRoomService"] = values[3];
      return combinedData
    })
    .then(fData => initialization(fData))
    
  let hotel;
    
  function passHotelData(data) {
    hotel = new Hotel(data)
  }
    
    
  function initialization(fData) {
    passHotelData(fData)
    getTodaysDate();
    domUpdates.displayDate(getTodaysDate());
    domUpdates.displayRoomsBooked(hotel.getDailyBookings(getTodaysDate()));
  } 

  console.log('lvl1: ', combinedData)
  console.log('fetch: ', hotel)
  
  function getTodaysDate() {
    let year = new Date().getFullYear()
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();

    return `${year}/${month}/${day}`
  }
 
  // $('#ui-tabs').tabs();
  
  
});
        
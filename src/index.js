import $ from 'jquery';
import './css/base.scss';
import domUpdates from '../src/domUpdates';
// import User from '../src/User';
// import Room from '../src/Room';
// import Booking from '../src/Booking';
// import RoomService from '../src/RoomService';
import Hotel from '../src/Hotel';


let apiRequestUser = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users').then((response) => response.json());

let apiRequestRooms = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms').then((response) => response.json());

let apiRequestBookings = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings').then((response) => response.json());

let apiRequestRoomService = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices').then((response) => response.json());

let combinedData = {
  "apiRequestUser": {},
  "apiRequestRooms":{},
  "apiRequestBookings":{},
  "apiRequestRoomService":{}
};

Promise.all([ apiRequestUser, apiRequestRooms, apiRequestBookings, apiRequestRoomService ]).then(function (values) {
  combinedData["apiRequestUser"] = values[0];
  combinedData["apiRequestRooms"] = values[1];
  combinedData["apiRequestBookings"] = values[2];
  combinedData["apiRequestRoomService"] = values[3];
  // passUserData(combinedData);
  // passRoomData(combinedData);
  // passBookingData(combinedData);
  // passRoomServiceData(combinedData);
  console.log('combinedData: ', combinedData['apiRequestBookings'].bookings)
  passHotelData(combinedData);
});

let hotel, user, room, booking, roomService;

function passHotelData(data) {
  hotel = new Hotel(data['apiRequestUser'].users, data['apiRequestRooms'].rooms, data['apiRequestBookings'].bookings, data['apiRequestRoomService'].roomServices);
}


// function passUserData(data) {
//   console.log(data.apiRequestUser.users)
//   user = new User(data.apiRequestUser.users)
// }

// function passRoomData(data) {
//   console.log(data.apiRequestRooms.rooms)
//   room = new Room(data.apiRequestRooms.rooms)
// }

// function passBookingData(data) {
//   console.log(data.apiRequestBookings.bookings)
//   booking = new Booking(data.apiRequestBookings.bookings)
// }

// function passRoomServiceData(data) {
//   console.log(data.apiRequestRoomService.roomServices)
//   roomService = new RoomService(data.apiRequestRoomService.roomServices)
// }

function getDate() {
  let year = new Date().getFullYear()
  let month = new Date().getMonth() + 1;
  let day = new Date().getDate();

  return `${year}/${month}/${day}`
}

domUpdates.displayDate(getDate());
domUpdates.dailyRoomsBooked(getDate());

// console.log(booking)
// booking.calculateRoomsBookedToday(getDate());


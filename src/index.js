import $ from 'jquery';
import domUpdates from '../src/domUpdates'
import './css/base.scss';
import User from '../src/User'


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
  //  return combinedData;
  passFetchData(combinedData)
});

// console.log(combinedData)
function passFetchData(data) {
  console.log(data.apiRequestUser.users)
  let user1 = new User(data[0])
}



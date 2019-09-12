// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

// console.log('This is the JavaScript entry file - your code begins here.');

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
  console.log(combindedData)
  return combinedData;
});




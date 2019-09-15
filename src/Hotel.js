class Hotel {
  constructor(hotelData) {
    // console.log('hotel: ', hotelData["apiRequestBookings"].bookings)
    this.users = hotelData["apiRequestUser"].users;
    this.rooms = hotelData["apiRequestRooms"].rooms;
    this.bookings = hotelData["apiRequestBookings"].bookings;
    this.roomService = hotelData["apiRequestRoomService"].roomServices;
  }
  
  // getTodaysDate() {
  //   let year = new Date().getFullYear()
  //   let month = new Date().getMonth() + 1;
  //   let day = new Date().getDate();
    
  //   return `${year}/${month}/${day}`
  // }
  
  getDailyRoomService(date) {
    let todaysOrders = this.roomService.filter(order => order.date === date);
    
    return todaysOrders.reduce((acc, bill) => {
      acc += bill.totalCost;
      return acc
    }, 0).toFixed(2);
  }
  
  getDailyBookings(date) {
    // console.log(this.bookings);
    let todaysBookings = this.bookings.filter(booking => booking.date === date);
    
    return (todaysBookings.length / this.rooms.length) * 100 + '%'
  }




}

export default Hotel;
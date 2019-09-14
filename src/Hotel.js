class Hotel {
  constructor(hotelData) {
    this.users = hotelData["apiRequestUser"].users;
    this.rooms = hotelData["apiRequestRooms"].rooms;
    this.bookings = hotelData["apiRequestBookings"].bookings;
    this.roomService = hotelData["apiRequestRoomService"].roomServices;

  }
  getDate() {
    let year = new Date().getFullYear()
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();
    
    return `${year}/${month}/${day}`
  }
  
  dailyRoomService(date) {
    let todaysOrders = this.roomService.filter(order => {
      return order.date === date
    });

    return todaysOrders.reduce((acc, bill) => {
      acc += bill.totalCost;
      return acc
    }, 0).toFixed(2);
  }


}

export default Hotel;
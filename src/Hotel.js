class Hotel {
  constructor(hotelData) {
    this.users = hotelData["apiRequestUser"].users;
    this.rooms = hotelData["apiRequestRooms"].rooms;
    this.bookings = hotelData["apiRequestBookings"].bookings;
    this.roomService = hotelData["apiRequestRoomService"].roomServices;
  }
  
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

  getTotalRevenueToday(date) {
    let roomServiceBills = this.roomService.filter(order => order.date === date).map(bill => bill.totalCost).reduce((acc, bill) => {
      acc += bill
      return acc
    },0);

    let todaysBookings = this.bookings.filter(booking => booking.date === date);

    let roomsBooked = todaysBookings.map(booking => booking.roomNumber)
    
    
    let costPerNightForRoomsBookedToday = roomsBooked.map(num => this.rooms.filter(room => room.number === num)).reduce((acc, array) => {
      return acc.concat(array)
    }, []).reduce((acc, room) => {
      acc += room.costPerNight
      return acc
    }, 0).toFixed(2)

    let dailyRevenue = costPerNightForRoomsBookedToday + roomServiceBills
  

    return dailyRevenue
    
    // costPerNightForRoomsBooked.reduce((acc, room) => {
    //   acc += room.costPerNight
    //   return acc
    // }, 0)

    // return totals.reduce((acc, amount) => {
    //   acc += amount
    //   // console.log(acc)
    //   return acc
    // }, 0)
  }




}

export default Hotel;
var hotel = new Object();
hotel.name = 'Park';
hotel.rooms=120;
hotel.booked=77;
hotel.check= function (){
    return this.rooms - this.booked;
};
var alName =document.getElementById('hotelName');
alName.textContent=hotel.name;
var elRooms=document.getElementById('rooms');
elRooms.textContent=hotel.check();
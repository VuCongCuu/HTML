function Hotel(name,rooms,booked){
    this.name= name;
    this.rooms=rooms,
        this.booked=booked;
    this.checkA=function (){
        return this.rooms-this.booked;
    };
};
var quayHotel = new Hotel('Quay',40,25);
var parkHotel= new Hotel('Park',120,77);
var detailsl1= quayHotel.name+ 'rooms:';
detailsl1 += quayHotel.checkA();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent=detailsl1;
var details2=parkHotel.name+'rooms:';
details2 += parkHotel.checkA();
var elHotel2=document.getElementById('hotel2');
elHotel2.textContent=details2;
export class bookingPlace
{
    constructor(public BookingCode:Number=0,public UserCode:Number=0,public BookingDate?:Date,public TripCode:Number=0,
        public NumberOfPlaces:Number=0, public FullName:string="", public TripDestination:string="", public Date?:Date)
    {}
}
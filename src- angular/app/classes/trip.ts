export class trip
{
    constructor(public TripCode:Number=0, public TripDestination:string="", public TypeCode:Number=0, 
    public Date?:Date, public TripDurationHours:Number=0, public NumberOfAvailablePlaces:Number=0, 
    public Price:Number=0, public Photo:string="", public TypeName:string="", public FirstAidCertificate:Boolean=false)
    {}
}
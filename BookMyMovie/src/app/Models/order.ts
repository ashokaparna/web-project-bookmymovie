
export class order {
    _id: String;
    O_Id: String;
    U_Id: String;
    M_Id: String;
    C_Date: Date;
    Seats: Number;
    Amount: Number;

    constructor(_id: String, OrderId: String, UserId: String,
        MovieId: String, CreatedAt: Date, NoOfSeats: Number, TotalAmount: Number) {
        this._id = _id;
        this.O_Id = OrderId;
        this.U_Id = UserId;
        this.M_Id = MovieId;
        this.C_Date = CreatedAt;
        this.Seats = NoOfSeats;
        this.Amount = TotalAmount;
    }
}

export class order_list {

    O_Id: String;
    U_Id: String;
    M_Id: String;
    C_Date: Date;
    Seats: Number;
    Amount: Number;

    constructor(OrderId: String, UserId: String,
        MovieId: String, CreatedAt: Date, NoOfSeats: Number, TotalAmount: Number) {

        this.O_Id = OrderId;
        this.U_Id = UserId;
        this.M_Id = MovieId;
        this.C_Date = CreatedAt;
        this.Seats = NoOfSeats;
        this.Amount = TotalAmount;
    }
}

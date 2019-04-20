
export class order {
    _id: String;
    User_Id: String;
    Theater_Name: String;
    Movie_Name: String;
    Show_Time: String;
    No_of_seats: Number;
    Total_Amount: Number;
    Creation_Time: String;

    constructor(_id: String, userid: String,
        theatername: String, moviename: String, showtime: String, 
        noofseats: Number, totalamount: Number, creationtime: String) {
        this._id = _id;
        this.User_Id = userid;
        this.Theater_Name = theatername;
        this.Movie_Name = moviename;
        this.Show_Time = showtime;
        this.No_of_seats = noofseats;
        this.Total_Amount = totalamount;
        this.Creation_Time = creationtime;
    }
}

export class order_list {

    User_Id: String;
    Theater_Name: String;
    Movie_Name: String;
    Show_Time: String;
    No_of_seats: Number;
    Total_Amount: Number;
    Creation_Time: String;


 constructor(userid: String,
    theatername: String, moviename: String, showtime: String, 
    noofseats: Number, totalamount: Number, creationtime: String)
        {
        
            this.User_Id = userid;
            this.Theater_Name = theatername;
            this.Movie_Name = moviename;
            this.Show_Time = showtime;
            this.No_of_seats = noofseats;
            this.Total_Amount = totalamount;
            this.Creation_Time = creationtime;
    }
}

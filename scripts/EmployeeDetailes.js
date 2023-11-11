class EmployeeDetailes{
    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
    get profile(){
        return this._profile;
    }
    set profile(profile){
        this._profile=profile;
    }
    get gender(){
        return this._gender
    }
    set gender(gender){
        this._gender=gender;
    }
    get salary(){
        return this._salary;
    }
    set salary(salary){
        this._salary = salary;
    }
    get date(){
        return this._date;
    }
    set date(date){
        this._date = date;
    }
    get month(){
        return this._month;
    }
    set month(month){
        this._month = month;
    }
    get year(){
        return this._year;
    }
    set year(year){
        this._year = year;
    }
    get note(){
        return this._note;
    }
    set note(note){
        this._note = note;
    }
    get department(){
        return this._department
    }
    set department(department){
        this._department = department;
    }
    toString(){
        return "hello world"+this._name+this._note+this._gender+this._profile+this._department+this._date+this._month+this._year+this._salary;
    }
}
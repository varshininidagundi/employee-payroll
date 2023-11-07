class EmployeeDetailes{
    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
     }
    get gender(){
        return this._gender
    }
    set gender(gender){
        this._gender=gender;
    }
    get note(){
        return this._note
    }
    set note(note){
        this._note = note;
    }
    get profile(){
        return this._profile;
    }
    set profile(profile){
        this._profile=profile;
    }
    // get date(){
    //     return this._date;
    // }
    // set date(date){
    //     this._date = date;
    // }
    get salary(){
        return this._salary;
    }
    set salary(salary){
        this._salary = salary;
    }
    // get department(){
    //     return this._department;
    // }
    // set department(department){
    //     this._department= department;
    // }
    toString(){
        return "hello world"+this._name+this._note+this._gender+this._profile+this._department+this._date;
        // return "note string"+this._note;
        // return "hello female"+this._female;
        // return "hello male"+this._male;
        // return "hello one"+this._profile1;
        // return "hello  second"+this._profile4;
    }
}
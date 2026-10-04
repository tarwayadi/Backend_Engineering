//Ek In Memory DB
//save('user-1',{fname, lname, })

//HashMap(Key,Value)
//         ?,  ?
//


// 1{fname, lname, email, contact : {mobile}, address{street,pincode}}
type UserId = string
interface User {
    id    : UserId
    fname : string
    lname? : string //? is for optional keys whenever we create an instance of an object 
    // there need not to be a last name.
    email : string
    contact: {
        mobile : string
    }
    address: {
        street : number
        pin : number
        country : string
    }
}
class InMemoryDB {
    private  _db: Map<UserId , User>
    constructor(){
         this._db = new Map()
    }

    public  insertUser(data : User) : UserId{

        if(this._db.has(data.id)){
            throw new Error(`User with ID ${data.id} already exists`)
        }
        this._db.set(data.id,data)
        return data.id


    }

    public updateUser(id:UserId, updateData: Omit<User, 'id'>) : boolean{
        if(!this._db.has(id)) throw new Error (`User with ID ${id} does not exists`)
        this._db.set(id, {...updateData , id})
        return true
           

    }

    public getUserById(id: UserId): User{
        if(!this._db.has(id)) throw new Error (`User with ID ${id} does not exists`)
        return this._db.get(id)!
    }
}

const myDb =new InMemoryDB()
myDb.insertUser({
    id :'1',
    fname: 'Aditi',
    lname: 'Anand',
    email: 'aditianad@gmail.com',
    contact: {mobile :"9603624761"},
    address: {
        country: 'In',
        pin :700107,
        street: 1

    }
 })

 myDb.updateUser('1',{
    fname: 'Aditi',
    lname: 'Anand',
    email: 'aditianad@gmail.com',
    contact: {mobile :"9603624761"},
    address: {
        country: 'In',
        pin :700107,
        street: 1

 }})
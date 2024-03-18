export default class UserModel{
    constructor(id,name,email,password){
        this.id=id;
        this.name=name;
        this.email=email;
        this.password=password;
    }
    static add(name,email,password){
        let newUser= new UserModel(
            users.length+1,
            name,
            email,
            password
        );
        users.push(newUser);
    }
    static getAll(){
        return users;
    }
    static authenticateUser(email,password){
        for(var i=0;i<users.length;i++){
          if(users[i].email==email && users[i].password==password){
            return true;
          }else{
            return false;
          }

        }
      }
}
var users=[
    new UserModel(
        1,'Chirag','chiragsinghal04@gmail.com','1234'
    ),
    new UserModel(
        2,'Viraaj','singhalviraaj@gmail.com','2345'
    )
]
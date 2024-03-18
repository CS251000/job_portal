import UserModel from "../models/user.model.js";
class UserController{
    postRegister(req,res){
        const {name,email,password}= req.body;
        UserModel.add(name,email,password);
        res.render('login',{errorMessage:null});
    }
    postLogin(req,res){
        const {email,password}= req.body;
        const isValid = UserModel.authenticateUser(email,password);
        if(!isValid){
            return res.render('login',{
                errorMessage:'Invalid Credentials'
            })
        }
        req.session.userEmail= email;
        return res.render('index',{userEmail:req.session.userEmail});
      }
      logout(req,res){
        req.session.destroy((err)=>{
            if(err){
                console.log(err);
            }else{
                res.redirect('/login');
            }
        });
        
    
      }
      
}
export default UserController;
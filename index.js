import  express  from "express";
import ejsLayouts from 'express-ejs-layouts';
import path from 'path';
import JobController from "./src/controllers/jobs.controller.js";
import UserController from "./src/controllers/user.controller.js";
import ApplicantController from "./src/controllers/applicants.controller.js";
import { uploadFile } from "./src/middlewares/resume-upload.middleware.js";
import session from "express-session";
import keygenerator from "keygenerator";
import { auth } from "./src/middlewares/auth.middleware.js";

const app = express();
const jobController = new JobController();
const userController= new UserController();
const applicantController= new ApplicantController();
app.use(ejsLayouts);
app.use(session({
    secret:keygenerator.session_id(),
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false},
}));
app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true }));
app.set(
    'views',
    path.join(path.resolve(), 'src', 'views')
  );
app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/jobs',jobController.getJobs);
app.get('/jobs/:id',jobController.getJobDetail);
app.get('/login',jobController.getLogin);
app.get('/postjob',auth,jobController.getPostjob);
app.post('/postjob',auth,jobController.postPostjob);
app.post('/register',userController.postRegister);
app.post('/login',userController.postLogin);
app.get('/applicants',auth,applicantController.getApplicants);
app.post('/jobs/:id',uploadFile.single('resumePath'),applicantController.postApplication);
app.get('/logout',userController.logout);
app.listen(8000,()=>{
    console.log('server at 8000')
});
// module.exports=app;

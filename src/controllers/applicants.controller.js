import ApplicantModel from "../models/applicant.model.js";
import jobModel from "../models/jobs.model.js";

class ApplicantController{
    getApplicants(req,res){
        var applicants = ApplicantModel.getAll();
        res.render('applicants',{applicants});
      }
      postApplication(req,res){
        const {name,email,contact}=req.body;
        const resumePath= 'resumes/'+req.file.filename;
        ApplicantModel.add(name,email,contact,resumePath);
        const id= req.params.id;
        const jobFound= jobModel.getByID(id);
        if(jobFound){
            res.render('success',{job:jobFound});
        }else{
            res.status(401).send('job not found');
        }
      }
}

export default ApplicantController;
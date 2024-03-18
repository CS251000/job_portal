import jobModel from "../models/jobs.model.js";
class JobController{
    getJobs(req,res){
        var jobs = jobModel.getAll();
        res.render('jobs',{jobs});
    }
    getJobDetail(req,res){
        const id= req.params.id;
        const jobFound= jobModel.getByID(id);
        if(jobFound){
            res.render('jobDetail',{job:jobFound});
        }else{
            res.status(401).send('job not found');
        }
    }
    getLogin(req,res){
        res.render('login');
    }
    getPostjob(req,res){
        res.render('post-job');
    }
    postPostjob(req,res){
        const {jobCategory,jobDesignation,jobLocation,companyName,salary,applyby,skillsReq,noofopenings,jobposted,applicants} = req.body;
            jobModel.add(jobCategory,jobDesignation,jobLocation,companyName,salary,applyby,skillsReq,noofopenings,jobposted,applicants);
            var jobs=jobModel.getAll();
            res.render('jobs',{jobs});
    }
    
}
export default JobController;
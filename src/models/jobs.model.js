export default class jobModel{
     constructor(id,jobCategory,jobDesignation,jobLocation,companyName,salary,applyby,skillsReq,noofopenings,jobposted,applicants){
        this.id= id;
        this.jobCategory=jobCategory;
        this.jobDesignation=jobDesignation;
        this.jobLocation= jobLocation;
        this.companyName= companyName;
        this.salary=salary;
        this.applicants=applicants;
        this.applyby=applyby;
        this.skillsReq=skillsReq;
        this.noofopenings=noofopenings;
        this.jobposted=jobposted;
     }
     static getAll(){
        return jobs;
     }
     static getByID(id){
        return jobs.find((j)=>j.id==id);
     }
     static add(jobCategory,jobDesignation,jobLocation,companyName,salary,applyby,skillsReq,noofopenings,jobposted,applicants) {
        let newJob = new jobModel(
          jobs.length+1,
          jobCategory,
          jobDesignation,
          jobLocation,
          companyName,
          salary,
          applyby,
          skillsReq,
          noofopenings,
          jobposted,
          applicants
        );
        jobs.push(newJob);
      }
}
var jobs=[
    new jobModel(
        1,
        "Tech",
        "SDE",
        "Gurgao HR IND",
        "Coding Ninjas",
        "14-20 LPA",
        "30 AUG 2023",
        ['React','Node','JS','SQL','MongoDB','Express','AWS'],
        5,
        "3/1/2024, 6:45:02 PM",
        1
    ),
    new jobModel(
        2,
        "Tech",
        "Angular developer",
        "Pune IND",
        "Go Digit",
        "6-10 LPA",
        "30 AUG 2023",
        ['Angular','JS','SQL','MongoDB','Express','AWS'],
        7,
        "3/1/2024, 6:45:03 PM",
        0
    ),
    new jobModel(
        3,
        "Tech",
        "SDE",
        "Bangalore IND",
        "Juspay",
        "20-26 LPA",
        "30 AUG 2023",
        ['React','NodeJS','JS','SQL','MongoDB','Express','AWS'],
        3,
        "3/1/2024, 6:45:02 PM",
        0
    ),

]

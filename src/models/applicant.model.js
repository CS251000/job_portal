export default class ApplicantModel{
    constructor(applicantid,name,email,contact,resumePath){
        this.applicantid=applicantid;
        this.name=name;
        this.email=email;
        this.contact=contact;
        this.resumePath=resumePath;
    }
    static getAll(){
        return applicants;
    }
    static add(name,email,contact,resumePath){
        const newApplicant = new ApplicantModel(
            applicants.length+1,name,email,contact,resumePath
        );
        applicants.push(newApplicant);
    
    }
}
var applicants=[
    new ApplicantModel(
        1,
        'Chirag',
        'chiragsinghal04@gmail.com',
        9818907290,
        "https://d33v4339jhl8k0.cloudfront.net/docs/assets/5ba8c7f12c7d3a04dd5ae1a2/images/5fc8f3204664bd7a123ea5a9/file-MdDsf2cTRb.png"

    ),
    new ApplicantModel(
        2,
        'Ashish',
        'ashish@gmail.com',
        9999993478,
        "https://d33v4339jhl8k0.cloudfront.net/docs/assets/5ba8c7f12c7d3a04dd5ae1a2/images/5fc8f3204664bd7a123ea5a9/file-MdDsf2cTRb.png"
    )

];
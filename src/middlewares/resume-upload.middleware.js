import multer from "multer";
const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/resumes/');
    },
    filename: (req, file, cb) => {
      const name =
        req.name + '-' + file.originalname;
      cb(null, name);
    },
  });
  
  export const uploadFile = multer({
    storage: storageConfig,
  });
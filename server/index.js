import express from "express";
import multer from "multer";
import cors from 'cors';
const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null,`${uniqueSuffix}-${file.originalname}` )
  }
})
const upload = multer({storage:storage});

const allowedcors = ['localhost:3000']

app.use(cors({allowedcors,credentials:true}));

app.get('/',(req,res)=>{
    res.json({message:"hello from server"});
})


app.post('/upload/pdf',upload.single('pdf'),(req,res)=>{
    res.json({message:"file uploaded"});
})


app.listen(8000,()=>{console.log("listening at port " ,8000)});


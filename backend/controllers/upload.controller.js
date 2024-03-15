import pdfReader from '../utility/pdf-parser.js'
import {getQuestions, getSummary} from '../utility/gemini_model.js';

export  async function upload(req, res) {
    const file =  req.file;
    let questions = "";
    let summary = "";
    if(file) {
        //console.log(file.path);
        try {  
            const pdfData = await pdfReader(file.path);
            //console.log(pdfData);
            questions = await getQuestions(pdfData);
            summary = await getSummary(pdfData);
            //console.log("In controller",summary);
            res.status(200).send({message:"OK", summary,questions:questions});
        } catch (error) {
            console.error("Reading failed in controller",error);
        }

        
    } else {
        //TODO
        //Change status code to right one
        res.status(400).send({message:"Failed"});
    }

    
}
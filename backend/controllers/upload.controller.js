import pdfReader from '../utility/pdf-parser.js'

export  async function upload(req, res) {
    const file =  req.file
    if(file) {
        console.log(file.path);
        try {  
            const pdfData = await pdfReader(file.path);
            console.log(pdfData);
            /**
             * 
             * send the data to Gemini model
             * 
             */
        } catch (error) {
            console.error("Reading failed in controller",error);
        }

        res.status(200).send({message:"OK"});
    } else {
        //TODO
        //Change status code to right one
        res.status(400).send({message:"Failed"});
    }

    
}
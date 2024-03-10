//import pdf from '../utility/pdf-parser.js';


export  async function upload(req, res) {
    const file =  req.file
    if(file) {
        console.log(file.path);
        //const pdfData = await pdf(file.path);

        res.status(200).send({message:"OK"});
    } else {
        //TODO
        //Change status code to right one
        res.status(400).send({message:"Failed"});
    }

    
}
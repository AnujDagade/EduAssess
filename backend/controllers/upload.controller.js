
export  async function upload(req, res) {
    const file = await req.file
    if(file) {
        res.status(200).send({message:"OK"});
    } else {
        //TODO
        //Change status code to right one
        res.status(400).send({message:"Failed"});
    }

    
}
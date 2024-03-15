import { useEffect, useState } from "react"
import "./NoteSummary.css";

export default function NoteSummary() {
    const [selectedFile, setSelectedFile ] = useState()
    const [summary, setSummary] = useState("")
    const [showTest, setShowTest] = useState(false)
    const [ques, setQue] = useState("")

    function onFileChange(event) {
        setSelectedFile(event.target.files[0])
    }

    /**
     * 
     * This function is called when the user clicks the upload button.
     * It sends the file to the server to be uploaded. using the fetch api.
     */
    async function onFileUpload(event) {
        event.preventDefault();
        alert("You need to wait upto one minute for the file to be processed")
        //create form data and append the file to it
        const formData = new FormData()
        formData.append("file", selectedFile)

        console.log(formData);

        //api call to upload file
        const res = await fetch('https://miniature-space-doodle-jqvp64v647qfgrj-8000.app.github.dev/file/upload/',{
            method:"POST",
            body:formData
        })
        const data = await res.json()
        //console.log(data)

        const dataArr = data.questions.questions;
        const que = dataArr.map((q) => {
            return <div>{q}</div>
        })
        setQue(que);
        console.log(que);
        setSummary(data.summary)
        //alert("")
    }
    function showTst() {
        setShowTest((prev) => !prev)
        console.log(showTest);
    }

    return (
        <div>
            <form >
                <h5>Please only upload pdf</h5>
                <h5>for now we only processing first  page of pdf</h5>
                <label htmlFor="file" className="label">Upload Notes</label>
                <input onChange={onFileChange} type="file" id="file" name="file" className="file" />
                <button onClick={onFileUpload} className="upload">Upload</button>
            </form>
            <div> 
                {ques && <div>Questions on the summary{ques}</div>}
                {summary && <div> <p className="md"><strong>Summary:</strong>{summary}</p></div>}
            </div>
            {/* <button onClick={showTst} className="Test-question">Create Test Questions</button> */}
            {/* <div>
                {showTest && <Test summary = {summary}/>}
            </div> */}
        </div>
    )
}
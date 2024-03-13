import { useEffect, useState } from "react"
import Test from "../Grading/Test"
import "./NoteSummary.css";

export default function NoteSummary() {
    const [selectedFile, setSelectedFile ] = useState()
    const [summary, setSummary] = useState("")
    const [showTest, setShowTest] = useState(false)

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

        //create form data and append the file to it
        const formData = new FormData()
        formData.append("file", selectedFile)

        console.log(formData);

        //api call to upload file
        const res = await fetch('https://miniature-space-doodle-jqvp64v647qfgrj-8000.app.github.dev/file/upload/',{
            method:"POST",
            body:formData
        })
        console.log(await res.json())
        alert("Button pressed")
    }
    function showTst() {
        setShowTest((prev) => !prev)
        console.log(showTest);
    }

    return (
        <div>
            <form >
                <label htmlFor="file" className="label">Upload Notes</label>
                <input onChange={onFileChange} type="file" id="file" name="file" className="file" />
                <button onClick={onFileUpload} className="upload">Upload</button>
            </form>
            <div> 
                {summary && <p>{summary}</p>}
            </div>
            <button onClick={showTst} className="Test-question">Create Test Questions</button>
            <div>
                {showTest && <Test summary = {summary}/>}
            </div>
        </div>
    )
}
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

    function onFileUpload(event) {
        event.preventDefault();
        const formData = new FormData()
        formData.append("file", selectedFile)

        console.log(formData);

        //api call to upload file
    }
    function showTst() {
        setShowTest((prev) => !prev)
        console.log(showTest);
    }

    return (
        <div>
            <form >
                <label htmlFor="file"></label>
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
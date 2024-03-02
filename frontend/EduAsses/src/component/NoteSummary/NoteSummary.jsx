import { useEffect, useState } from "react"

export default function NoteSummary() {
    const [selectedFile, setSelectedFile ] = useState()

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

    return (
        <div>
            <form >
                <label htmlFor="file"></label>
                <input onChange={onFileChange} type="file" id="file" name="file" />
                <button onClick={onFileUpload}>Upload</button>
            </form>
        </div>
    )
}
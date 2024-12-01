import { Link } from "react-router-dom"


function DocumentHeader() {
    return (
        <>
        
            <Link to="/dashboard">
                <div >
                    Back
                </div>
            </Link>
            <div>
                Description
            </div>


        </>
    )
}

export default DocumentHeader
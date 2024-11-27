import { Link } from "react-router-dom"


function DocumentHeader() {
    return (
        <div className="flex justify-between text-lg font-bold">
            <Link to="/dashboard">
                <div >
                    Back
                </div>
            </Link>
            <div>
                Description
            </div>


        </div>
    )
}

export default DocumentHeader
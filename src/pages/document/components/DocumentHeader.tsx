import { Link } from "react-router-dom"
export default function DocumentHeader() {
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
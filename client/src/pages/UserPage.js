import React, {useEffect} from "react";
import Nav from "../components/Nav";

const UserPage = () => {

    useEffect(() => {

    }, [])

    const getProfilePosts = () => {
        fetch('')
    }

    return (
        <div className='app'>
            <Nav />
            <div className="content">
                <div className="container">
                    <div className="post-list-container">

                    </div>
                </div>
            </div>
            <footer>

            </footer>
        </div>
    )
}

export default UserPage;
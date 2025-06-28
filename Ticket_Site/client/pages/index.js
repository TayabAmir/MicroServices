import build from 'next/dist/build'
import React from 'react'

const Home = ({ currentUser }) => {

    return (
        <div>
            {
                currentUser ? (
                    <h1>Hello {currentUser.email.split('@')[0]}!</h1 >
                )
                    : (
                        <h1>You are not signed in</h1>
                    )
            }
        </div >
    )
}

Home.getInitialProps = async (context) => {
    const { data } = buildClient(context).get('/api/users/currentuser')
    return data
}
export default Home 
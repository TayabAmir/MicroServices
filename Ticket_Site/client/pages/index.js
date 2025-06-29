import buildClient from "../api/build-client"
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
    const { data } = await buildClient(context).get('/api/users/currentuser')
    return data
}
export default Home 
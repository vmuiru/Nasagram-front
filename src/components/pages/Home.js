import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <main>
        <Link to='/'>
        <h1>N A S A G R A M</h1>
        </Link>
        <nav>
            <ul>
                {
                    props.user ?
                    <>
                    <li>
                <Link to='' onClick={props.handleLogout}>Logout</Link>
                </li>
                <li>
                <Link to='/pod'>Picture of the Day</Link>
                </li>
                </>
                :
                <>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                <Link to='/Signup'>SignUp</Link>
                </li>
                </>
}

            </ul>
            </nav>
            </main>
            );
    };

export default Home;
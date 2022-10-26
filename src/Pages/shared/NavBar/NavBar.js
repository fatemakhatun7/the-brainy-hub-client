import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl">The Brainy Hub</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                <li><Link to='/'>Courses</Link></li>
                <li>
                <div className='d-flex'>
                    <div>
                        {
                            user?.uid ?
                                <>
                                    <div className="btn-group">
                                        <button className="btn btn-active m-2" onClick={handleLogOut}>Log out</button>
                                    </div>
                                </>
                                :
                                <>
                                    <Link to='/login'>Login</Link>
                                    <Link className='m-2' to='/register'>Register</Link>
                                </>
                        }
                    </div>
                    <Link to="/profile">
                        {user?.photoURL ?
                        <div className="avatar tooltip tooltip-accent" data-tip={user.displayName}>
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL}/>
                            </div>
                        </div>
                            : <FaUser></FaUser>
                        }
                    </Link>
                </div>
                </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
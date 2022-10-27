import React, { useContext } from 'react';
import logo from '../../../assets/images/logo.png';
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
        <div>
            <div className="navbar bg-red-200 mb-2">
                <div className='flex'>
                    <div className="w-8 m-1"><img className='rounded-full' src={logo} alt=""/></div>
                    <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-lg">The Brainy Hub</Link>
                    </div>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
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
            <div>
            <div className="dropdown bg-orange-600 rounded">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/courses'>Courses</Link></li>
                                <li><Link to='/blogs'>Blogs</Link></li>
                                <li><Link to='/faq'>FAQ</Link></li>
                                <li>
                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text mx-2">Dark Mood</span> 
                                        <input type="checkbox" className="toggle"/>
                                    </label>
                                </div>
                                </li>
                            </ul>
                        </div>
            </div>
        </div>

    );
};

export default NavBar;
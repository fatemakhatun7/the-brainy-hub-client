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
            <div className="navbar bg-red-200 mb-2 flex justify-around">
                <div className='flex'>
                    <div className="w-20 m-1"><img className='rounded-full' src={logo} alt=""/></div>
                    <div>
                    <Link className="normal-case text-lg font-bold">The Brainy Hub</Link>
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
                            {user?.uid ?
                            <div className="avatar tooltip tooltip-accent" data-tip={user.displayName}>
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} alt=""/>
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
            <div className='flex justify-around p-2 bg-orange-100'>
                <Link className='hover:bg-orange-200 font-semibold p-2 rounded' to='/'>Home</Link>
                <Link className='hover:bg-orange-200 font-semibold p-2 rounded' to='/courses'>Courses</Link>
                <Link className='hover:bg-orange-200 font-semibold p-2 rounded' to='/blogs'>Blogs</Link>
                <Link className='hover:bg-orange-200 font-semibold p-2 rounded' to='/faq'>FAQ</Link>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text mx-2">Dark Mood</span> 
                        <input type="checkbox" className="toggle"/>
                    </label>
                </div>
            </div>
        </div>

    );
};

export default NavBar;
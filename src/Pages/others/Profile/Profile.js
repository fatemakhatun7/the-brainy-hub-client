import React, { useContext, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { Form } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [password, setPassword] = useState(null);
    const [photo, setPhoto] = useState(null);
    const photoURLRef = useRef(user.photoURL);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(photoURLRef.current.value);
        toast.success("User information has changed successfully.")
    }

    const handleNameChange = event =>{
        setName(event.target.value)
    }

    const handlePasswordChange = event =>{
        setPassword(event.target.value)
    }

    const handlePhotoChange = event =>{
        setPhoto(event.target.value)
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-xl font-bold">User info</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered"  onChange={handleNameChange} defaultValue={user?.displayName} required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered"  onChange={handlePhotoChange} ref={photoURLRef} defaultValue={user?.photoURL}/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" readOnly defaultValue={user?.email} required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required  onChange={handlePasswordChange}/>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
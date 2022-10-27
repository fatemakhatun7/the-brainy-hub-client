import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='mt-5'>
                <h1 className='text-5xl font-bold flex justify-center text-orange-700'>Blogs</h1>
            </div>
        <div className='m-10'>
            <div className='bg-orange-200 rounded mb-5 p-5'>
                <h3 className='font-bold'>Q-01: What is CORS?</h3>
                <p>CORS is an acronym for Cross-Origin Resource Sharing. CORS is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served," then you'd be forgiven if you were more confused than before you'd read that sentence.</p>
            </div>
            <div className='bg-orange-200 rounded mb-5 p-5'>
                <h3 className='font-bold'>Q-02: Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
                <p>Authentication methods: Email-password, Google, Github, Facebook, Tweeter etc.</p>
            </div>
            <div className='bg-orange-200 rounded mb-5 p-5'>
                <h3 className='font-bold'>Q-3: How does the private route work?</h3>
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            </div>
            <div className='bg-orange-200 rounded mb-5 p-5'>
                <h3 className='font-bold'>Q-4: What is Node? How does Node work?</h3>
                <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.</p>
                <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
            </div>
        </div>
        </div>
    );
};

export default Blogs;
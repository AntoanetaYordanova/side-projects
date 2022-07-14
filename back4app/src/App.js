import Parse from 'parse/dist/parse.min.js';
import './App.css';
import * as userService from './services/user';
import * as postServise from './services/post';
import { useState } from 'react';
import { auth } from './firebase-config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// const PARSE_APPLICATION_ID = process.env.REACT_APP_PARSE_APPLICATION_ID;
// const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
// const PARSE_JAVASCRIPT_KEY = '2TieaZhAdOQVeUocph2cP88anyfqXw5C8mKQ0ZyU';
// Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
// Parse.serverURL = PARSE_HOST_URL;

function App() {
    // const signUpUser = async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.currentTarget);
    //     const email = formData.get('email');
    //     const password = formData.get('password');

    //     const newUser = await userService.create(email, password);

    //     setUser(newUser);
    // };
    
    // console.log(auth.currentUser);
    
    onAuthStateChanged(auth, (user) => {
        console.log(user);
    })

    const signup = async (ev) => {
        ev.preventDefault();
        const { email, password } = Object.fromEntries(
            new FormData(ev.currentTarget)
        );
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
        } catch (err) {
            console.log(err);
        }
    };

    const login = async (ev) => {
        ev.preventDefault();
        const { email, password } = Object.fromEntries(
            new FormData(ev.currentTarget)
        );
        
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log(user);
        } catch (err) {
            
        }
    };

    const logout = async () => {
        signOut(auth);
    };

    const [user, setUser] = useState({});

    const postHandler = async (e) => {
        e.preventDefault();
        const { post } = Object.fromEntries(new FormData(e.currentTarget));
        const id = user.id;

        await postServise.create(post, id);
    };

    const commentHandler = async (e) => {
        e.preventDefault();
        const posts = await postServise.findByOwnerId(user.id);
        console.log(posts);
        console.log(posts[0].id);
        postServise.findById(posts[0].id);
        // const mappedPosts = posts.map(p => {
        //   postServise.findById(p.id)

        // })
    };

    // const logoutHandler = () => {
    //     userService.logout();
    // };

    return (
        <div className="App">
            <form method="post" onSubmit={postHandler}>
                <textarea name="post"></textarea>
                <button>Create Post</button>
            </form>
            <form>
                <textarea name="comment"></textarea>
                <button onClick={commentHandler}>Comment</button>
            </form>
            <form onSubmit={signup}>
                <div className="row mb-3">
                    <label
                        htmlFor="inputEmail3"
                        className="col-sm-2 col-form-label"
                    >
                        Email
                    </label>
                    <div className="col-sm-10">
                        <input
                            name="email"
                            type="email"
                            className="form-control"
                            id="inputEmail3"
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label
                        htmlFor="inputPassword3"
                        className="col-sm-2 col-form-label"
                    >
                        Password
                    </label>
                    <div className="col-sm-10">
                        <input
                            name="password"
                            type="password"
                            className="form-control"
                            id="inputPassword3"
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Sign up
                </button>
            </form>
            <form onSubmit={login}>
                <div className="row mb-3">
                    <label
                        htmlFor="inputEmail3"
                        className="col-sm-2 col-form-label"
                    >
                        Email
                    </label>
                    <div className="col-sm-10">
                        <input
                            name="email"
                            type="email"
                            className="form-control"
                            id="inputEmail3"
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label
                        htmlFor="inputPassword3"
                        className="col-sm-2 col-form-label"
                    >
                        Password
                    </label>
                    <div className="col-sm-10">
                        <input
                            name="password"
                            type="password"
                            className="form-control"
                            id="inputPassword3"
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Sign in
                </button>
            </form>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default App;

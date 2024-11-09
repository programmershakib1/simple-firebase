import { GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSingIn = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            console.log(result.user);
            setUser(result.user)
        })
        .catch(error => {
            console.log(error);
            setUser(null)
        })
    }

    const handleGithubSingIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user)
        })
        .catch(error => console.log(error))
    }

    const handleSingOut = () => {
        signOut(auth)
        .then(() => {
            console.log('sing oue done');
            setUser(null)
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="flex flex-col justify-center items-center">
            {
                user ? <button onClick={handleSingOut}  className="bg-red-400 py-2 text-sm px-4 rounded-full">Sing Out</button>:<div className="flex gap-5"><button onClick={handleGoogleSingIn} className="bg-green-400 py-2 text-sm px-4 rounded-full">Login with Google</button><button onClick={handleGithubSingIn} className="bg-green-400 py-2 text-sm px-4 rounded-full">Login with Github</button></div>
            }
            {
                user && <div>
                    <h4>{user.displayName}</h4>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "./App";
import axios from "axios";

function LoginUser() {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e) => {
        setErrorMsg("");
        e.preventDefault();
        try {
            const response = await axios.post(BACKEND_URL + '/api/users/login',{email, password});
            console.log(response);
            if(response?.data?.token && response?.data?._id){
                console.log(response?.data?.token, response?.data?._id);
                navigate("/dashboard");
            }
        } catch (error) {
            setErrorMsg("Invalid Username or Password!");
            console.log(error);
        }

        // Verify Token Later
        // axios.get(USERS_API_URL + '/loggedin')
        // .then(result => console.log(result))
        // .catch(err => console.log(err));

    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h2>Login</h2>
            {errorMsg}
            <form onSubmit={handleSubmit}>
                {/* <div className="mb-3">
                    <label htmlFor="name">
                        <strong>Name</strong>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        autoComplete="off"
                        name="name"
                        className="form-control rounded-0"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div> */}
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        className="form-control rounded-0"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">
                        <strong>Password</strong>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        autoComplete="off"
                        name="password"
                        className="form-control rounded-0"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
            </form>
            <br/>
            <p>Don't have an Account? Click to Register</p>
            <Link to = "/register" className="btn btn-default border w-100 bh-light rounded-0 text-decoration-none">Register</Link>
        </div>
    </div>
    );
}
export default LoginUser;
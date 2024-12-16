import { useState } from 'react';
import './login.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


function Login() {

 const [credentials, setCredentials] = useState({userName: "", password: ""});

 const navigate = useNavigate();

const onTextChange = (args) =>{
      
    var copy = {...credentials};
    copy[args.target.name] = args.target.value;
    setCredentials(copy);
}



const DoLogin = () => {


    axios.post(`http://localhost:9090/login`, credentials)
         .then((result)=>{

         if(result.data.token != null || result.data.token != undefined){

            sessionStorage.setItem("token", result.data.token);
            sessionStorage.setItem("isLoggedIn", "true");

                   navigate("/home");
             }
             else{
                alert("Credential Invalid")
             }  
         })

}


    return ( <>
    <div className="container-fluid">
    <div className="row no-gutter">
       
        <div className="col-md-6 d-none d-md-flex bg-image">
                    
        </div>
        <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">

           
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-7 mx-auto">
                            <h3 className="display-4">Login page!</h3><br />
                                <div className="form-group mb-3">
                                    <input id="inputName" type="text" placeholder="Username" name="userName" value={credentials.userName} onChange={onTextChange} required="" autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4"/>
                                </div>
                                <div className="form-group mb-3">
                                    <input id="inputPassword" type="password" placeholder="Password" name="password" value={credentials.password} onChange={onTextChange} required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                </div>
                        
                                <button onClick={DoLogin} className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                                <div className="text-center d-flex justify-content-between mt-4"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</div>
    </> );
}

export default Login;
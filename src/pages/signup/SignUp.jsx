import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {

  const [inputs,setInputs] = useState({
      fullName: '',
      username: '',
      password: '',
      conformPassword: '',
      gender: ''
  });

  const { loading,signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs,gender});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-blue-500"> CyberConnect</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input 
              value={inputs.fullName} 
              onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
              type="text" placeholder="Eg: John Doe Cristoper" className="w-full input input-bordered h-10" 
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Userame</span>
            </label>
            <input 
              value={inputs.username} 
              onChange={(e) => setInputs({...inputs, username: e.target.value})}
              type="text" placeholder="Eg: johnDoe" className="w-full input input-bordered h-10" 
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input 
                value={inputs.password} 
                onChange={(e) => setInputs({...inputs, password: e.target.value})}
                type="password"
                placeholder="Enter your Password"
                className="w-full input input-bordered h-10"
              />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Conform Password</span>
            </label>
            <input 
                value={inputs.confirmPassword} 
                onChange={(e) => setInputs({...inputs, conformPassword: e.target.value})}
                type="password"
                placeholder="Enter your Password again"
                className="w-full input input-bordered h-10"
              />
          </div>

          <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender} />

          <Link to='/login' className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
            Already have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2">Sign Up</button>
          </div>

        </form>
      </div>
    </div>
  )
}
export default SignUp;

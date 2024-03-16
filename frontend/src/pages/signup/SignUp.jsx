import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg bg-gray-400 shadow-md backdrop-blur-lg backdrop-filter bg-clip-padding bg-opacity-0">
        <h1 className="text-gray-300 text-center text-3xl font-semibold">
          SignUp
          <span className="text-info"> MyChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-info">Full Name</span>
            </label>
            <input
              type="text"
              required
              placeholder="Prantor Hawlader"
              className="input input-bordered w-full h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-info">Username</span>
            </label>
            <input
              type="text"
              required
              placeholder="prantor"
              className="input input-bordered w-full h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-info">Password</span>
            </label>
            <input
              type="password"
              required
              placeholder="Password"
              className="input input-bordered w-full h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-info">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              required
              placeholder="Confirm password"
              className="input input-bordered w-full h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />
          <Link
            to="/login"
            className="text-sm text-blue-300 hover:underline hover:text-blue-500 mt-2 inline-block"
          >
            Already have an account?
          </Link>
          <button
            disabled={loading}
            className="btn btn-block btn-sm btn-info mt-2"
          >
            {loading ? (
              <span className="loading loading-spinner text-info"></span>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg bg-gray-400 shadow-md backdrop-blur-lg backdrop-filter bg-clip-padding bg-opacity-0">
        <h1 className="text-gray-300 text-center text-3xl font-semibold">
          Login
          <span className="text-blue-500"> MyChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-4">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="password"
              placeholder="Enter Username"
              className="input input-bordered w-full h-10"
            />
          </div>
          <div>
            <label className="label p-4">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered w-full h-10"
            />
          </div>
          <Link
            to="/signup"
            className="text-sm text-blue-300 hover:underline hover:text-blue-500 mt-2 inline-block"
          >
            Don&apos;t have an account?
          </Link>
          <button className="btn btn-block btn-sm btn-primary mt-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

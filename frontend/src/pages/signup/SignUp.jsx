import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg bg-gray-400 shadow-md backdrop-blur-lg backdrop-filter bg-clip-padding bg-opacity-0">
        <h1 className="text-gray-300 text-center text-3xl font-semibold">
          SignUp
          <span className="text-info"> MyChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-info">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Prantor Hawlader"
              className="input input-bordered w-full h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-info">Username</span>
            </label>
            <input
              type="text"
              placeholder="prantor"
              className="input input-bordered w-full h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-info">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full h-10"
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
              placeholder="Confirm password"
              className="input input-bordered w-full h-10"
            />
          </div>
          <GenderCheckbox />
          <a
            href="#"
            className="text-sm text-blue-300 hover:underline hover:text-blue-500 mt-2 inline-block"
          >
            Already have an account?
          </a>
          <button className="btn btn-block btn-sm btn-info mt-2">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

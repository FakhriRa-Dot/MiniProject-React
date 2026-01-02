const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-sky-200">
      <header className="flex items-center justify-between px-10 py-4 bg-white">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-blue-300"></div>
          <span className="text-xl">UserMgt</span>
        </div>

        <p>
          Already have an account?{" "}
          <a
            href="#"
            className="text-blue-500 text-decoration-none hover:underline"
          >
            Sign In Here
          </a>
        </p>
      </header>

      <div className="flex justify-center items-center py-16">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-10">
          <h1 className="text-3xl mb-2">Create an Account</h1>
          <p className="text-gray-500 mb-8">
            Get started with your account bussines today:
          </p>

          <form className="space-y-5">
            <div>
              <label className="block font-body mb-1">Your Name:</label>
              <input
                type="text"
                placeholder="e.g Cythe Eji"
                className="w-full border border-gray-300 rounded-lg px-4 py-2
                           placeholder:text-gray-400 focus:outline-none
                           focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block font-body mb-1">Email:</label>
              <input
                type="email"
                placeholder="youremail@gmail.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2
                           placeholder:text-gray-400 focus:outline-none
                           focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block font-body mb-1">Password:</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="at least 8 characters"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10
                             placeholder:text-gray-400 focus:outline-none
                             focus:ring-2 focus:ring-blue-400"
                />
                <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                  <i className="fa fa-eye"></i>
                </span>
              </div>
            </div>

            <div>
              <label className="block font-body mb-1">Confirm Password:</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Re-enter your password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10
                             placeholder:text-gray-400 focus:outline-none
                             focus:ring-2 focus:ring-blue-400"
                />
                <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                  <i className="fa fa-eye"></i>
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2 text-sm text-gray-600 font-body">
              <i className="fa fa-check-circle text-green-500 mt-1"></i>
              <p>
                Password must contain at least 8 characters, including one
                uppercase letter and one number
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600
                         active:scale-[0.98] transition
                         text-white font-accent py-2 rounded-lg shadow-md"
            >
              CREATE ACCOUNT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

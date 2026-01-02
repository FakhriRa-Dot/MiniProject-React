const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="flex w-full max-w-4xl rounded-2xl shadow-xl overflow-hidden bg-white">
        <div className="hidden md:flex md:w-1/2 bg-linear-to-b from-sky-300 via-blue-500 to-blue-900 p-8">
          <div className="flex items-start gap-3 text-white font-bold text-xl">
            <div className="w-8 h-8 bg-white/80 rounded-md" />
            UserMgt
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h1 className="text-4xl font-extrabold mb-2">Hello!</h1>
          <p className="text-gray-500 mb-8">
            Enter your detail below to sign in:
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Email:</label>
              <input
                type="email"
                placeholder="youremail@gmail.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Password:
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="your password"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <span className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer">
                  <i className="fa fa-eye"></i>
                </span>
              </div>
              <div className="text-right mt-1">
                <a href="#" className="text-sm text-blue-500 hover:underline">
                  Forgot Your Password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md transition"
            >
              SIGN IN
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign Up Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

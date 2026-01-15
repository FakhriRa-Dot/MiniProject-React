export default function Home() {
  return (
    <div className="min-h-screen bg-sky-100 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            User Management App
          </h1>
          <p className="text-gray-600">
            Simple authentication demo using Next.js & Tailwind CSS
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div
            className="bg-white rounded-2xl shadow-md p-6 text-center
                hover:shadow-xl transition
                flex flex-col h-full"
          >
            <div
              className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-500
                  text-white flex items-center justify-center
                  text-xl font-bold"
            >
              D
            </div>
            <h2 className="text-lg font-semibold mb-2">Dashboard</h2>
            <p className="text-sm text-gray-500 mb-4">
              View user data and protected content
            </p>
            <a
              href="/dashboard"
              className="mt-auto inline-block bg-blue-500 hover:bg-blue-600
               text-white px-4 py-2 rounded-lg text-sm font-medium"
            >
              Go to Dashboard
            </a>
          </div>

          <div
            className="bg-white rounded-2xl shadow-md p-6 text-center
                hover:shadow-xl transition
                flex flex-col h-full"
          >
            <div
              className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-500
                  text-white flex items-center justify-center
                  text-xl font-bold"
            >
              L
            </div>
            <h2 className="text-lg font-semibold mb-2">Login</h2>
            <p className="text-sm text-gray-500 mb-4">
              Access your account using existing credentials
            </p>
            <a
              href="/login"
              className="mt-auto inline-block bg-blue-500 hover:bg-blue-600
               text-white px-4 py-2 rounded-lg text-sm font-medium"
            >
              Login
            </a>
          </div>

          <div
            className="bg-white rounded-2xl shadow-md p-6 text-center
                hover:shadow-xl transition
                flex flex-col h-full"
          >
            <div
              className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-500
                  text-white flex items-center justify-center
                  text-xl font-bold"
            >
              R
            </div>
            <h2 className="text-lg font-semibold mb-2">Register</h2>
            <p className="text-sm text-gray-500 mb-4">
              Create a new account to get started
            </p>
            <a
              href="/register"
              className="mt-auto inline-block bg-blue-500 hover:bg-blue-600
               text-white px-4 py-2 rounded-lg text-sm font-medium"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

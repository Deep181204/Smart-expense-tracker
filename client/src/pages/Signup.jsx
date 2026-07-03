import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

function Signup() {
  return (
    <AuthLayout title="Create Account">
      <form className="space-y-4">

        <div>
          <label className="block mb-1 font-medium">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="Create a password"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <button
          className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
        >
          Create Account
        </button>

        <p className="text-center">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-blue-600 font-semibold"
          >
            Login
          </Link>
        </p>

      </form>
    </AuthLayout>
  );
}

export default Signup;
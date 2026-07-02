import { useState } from "react";

export default function Form() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-lg mx-auto">
      <h1 className="text-4xl font-semibold mb-6 text-white">
        {isLogin ? "Login" : "Create an account"}
      </h1>
      <form className="w-full space-y-4">
        {!isLogin && (
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 p-3 rounded bg-white text-white outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 p-3 rounded bg-white text-white outline-none"
            />
          </div>
        )}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-white text-white outline-none"
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full p-3 rounded bg-white text-white outline-none"
        />
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <label className="text-white text-sm">
            I agree to the <span className="underline">Terms & Conditions</span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          {isLogin ? "Login" : "Create Account"}
        </button>
      </form>
      <p className="mt-4 text-gray-400">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="ml-1 text-blue-400 underline"
        >
          {isLogin ? "Sign up" : "Log in"}
        </button>
      </p>
    </div>
  );
}

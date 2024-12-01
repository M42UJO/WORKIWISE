import React from "react";

const Signup: React.FC<{ switchView: (view: "signup" | "signin" | "verification") => void }> = ({ switchView }) => {

    return (
        <div className="flex items-center justify-center w-80">
            <div>

                {/* Header */}
                <h2 className="text-2xl font-semibold text-center text-gray-900">Sign up</h2>
                <p className="mt-4 text-sm text-center text-gray-500">
                    Sign up to create an account
                </p>

                {/* Form */}
                <form className="mt-6 space-y-4 ">
                    {/* E-mail */}
                    <div>
                        <label className="block mb-1 text-sm font-semibold text-gray-600" htmlFor="email">
                            E-mail
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Please enter E-mail."
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Username */}
                    <div>
                        <label className="block mb-1 text-sm font-semibold text-gray-600" htmlFor="username">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Please enter Username"
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-1 text-sm font-semibold text-gray-600" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Please enter Password"
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label
                            className="block mb-1 text-sm font-semibold text-gray-600"
                            htmlFor="confirm-password"
                        >
                            Confirm Password
                        </label>
                        <input
                            id="confirm-password"
                            type="password"
                            placeholder="Please enter Confirm password"
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-3 text-white bg-gray-900 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                        onClick={() => switchView("verification")}
                    >
                        Sign up
                    </button>
                </form>

                {/* Footer Links */}
                <div className="text-center mt-4">
                    <button className=" border w-80 py-3 rounded-lg text-sm " onClick={() => switchView("signin")}>
                        Sign in with an existing account
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signup
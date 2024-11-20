import React, { useState } from "react";

const LoginVerification: React.FC<{ switchView: (view: "signup" | "signin" | "verification") => void }> = ({ switchView }) => {
    const [otp, setOtp] = useState<string[]>(Array(6).fill(""));

    // Handle input change
    const handleChange = (value: string, index: number) => {
      if (/^\d$/.test(value) || value === "") {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
  
        // Automatically move to the next input field
        if (value !== "" && index < 5) {
          const nextField = document.getElementById(`otp-${index + 1}`);
          nextField?.focus();
        }
      }
    };
  
    // Handle key press for navigation
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      if (e.key === "Backspace" && otp[index] === "" && index > 0) {
        const prevField = document.getElementById(`otp-${index - 1}`);
        prevField?.focus();
      }
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(`Entered OTP: ${otp.join("")}`);
    };
  
    return (
      <div className="flex items-center justify-center w-80">
        <div>
          {/* Header */}
          <h2 className="text-2xl font-semibold text-center text-gray-900">Verification</h2>
          <p className="mt-4 text-sm text-center text-gray-500">
            We’ve sent a code to <span className="font-medium text-gray-500">123@mail.com</span>
          </p>
  
          {/* OTP Input */}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="flex justify-center space-x-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-12 text-center border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                />
              ))}
            </div>
  
            {/* Resend Code */}
            <p className="text-center text-sm text-gray-500">
              Didn’t get the code?{" "}
              <button
                type="button"
                onClick={() => alert("Code resent!")}
                className="font-medium text-blue-500 hover:underline focus:outline-none text-gray-900"
              >
                Touch to resend
              </button>
            </p>
  
            {/* Action Buttons */}
            <div className="flex justify-between mt-6 text-sm  space-x-4">
              <button
                type="button"
                className="px-4 py-3 text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 w-full"               
                onClick={() => switchView("signin")}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-3 text-white bg-gray-900 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 w-full"
                onClick={() => alert("Verification complete!")}
              >
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

export default LoginVerification
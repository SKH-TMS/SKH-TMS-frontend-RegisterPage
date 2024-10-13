"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="screenMiddleDiv">
      <div className="formDiv">
        <form>
          <h2 className="text-center">Create Account</h2>

          <div>
            <label htmlFor="name" className="formLabel">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="my-6">
            <label htmlFor="email" className="formLabel">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="my-6">
            <label htmlFor="password" className="formLabel">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="my-6">
            <label htmlFor="confirmPassword" className="formLabel">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="formButton">
            Register
          </button>

          <div className="text-center mt-4">
            Already have an account?
            <a href="#">
              <button className="buttonTiny">Login</button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

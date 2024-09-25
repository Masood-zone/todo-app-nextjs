"use client";
import Button from "@/app/todos/ui/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BackIcon from "../../../../public/assets/svgs/back-icon.svg";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <button
        onClick={() => router.push("/intro/welcome")}
        className="self-start"
      >
        <Image src={BackIcon} alt="Back" width={24} height={24} />
      </button>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mt-8 mb-2">Create Account</h1>
        <p>Create an account with us today and enjoy premium features!</p>
      </div>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-400"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@email.com"
            className="mt-1 block w-full px-3 py-2 border  rounded-md "
          />
        </div>
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-400"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            className="mt-1 block w-full px-3 py-2 border  rounded-md "
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-400"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            className="mt-1 block w-full px-3 py-2 border rounded-md "
          />
        </div>
        <Button
          title="Create Account"
          type="submit"
          extraClasses="w-full rounded-full"
        />
      </form>
      <div className="mt-6 text-center">
        <p className="text-gray-400">or</p>
      </div>
      <button className="mt-4 w-full border border-gray-700  py-2 rounded-full flex items-center justify-center">
        Signup with Google
      </button>
      <p className="mt-6 text-center text-gray-400">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-purple-500">
          Login
        </Link>
      </p>
    </div>
  );
}

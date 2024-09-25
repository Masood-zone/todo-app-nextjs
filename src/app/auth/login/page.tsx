"use client";
import Button from "@/app/todos/ui/Button";
import Image from "next/image";
import Link from "next/link";
import BackIcon from "../../../../public/assets/svgs/back-icon.svg";
import { useRouter } from "next/navigation";

export default function LoginScreen() {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <button
        onClick={() => router.push("/intro/welcome")}
        className="self-start"
      >
        <Image src={BackIcon} alt="Back" width={24} height={24} />
      </button>
      <h1 className="text-2xl font-bold mt-8 mb-6">Login</h1>
      <form className="space-y-4">
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
          title="Login"
          type="submit"
          extraClasses="w-full rounded-full"
        />
      </form>
      <div className="mt-6 text-center">
        <p className="text-gray-400">or</p>
      </div>
      <button className="mt-4 w-full border border-gray-700  py-2 rounded-full flex items-center justify-center">
        Login with Google
      </button>
      <p className="mt-6 text-center text-gray-400">
        Don&apos;t have an account?{" "}
        <Link href="/auth/register" className="text-purple-500">
          Register
        </Link>
      </p>
    </div>
  );
}

"use client";
import Button from "@/app/todos/ui/Button";
import { useRouter } from "next/navigation";
import React from "react";

export default function Welcome() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-bold text-4xl text-center text-gray-900 mb-4">
        Welcome to UpTodo
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Please login to your account or create new account to continue
      </p>

      <div className="flex md:w-96 mx-auto flex-col gap-4">
        <Button
          title="Login"
          onClick={() => {
            router.push("/auth/login");
          }}
        />
        <Button
          title="Create Account"
          onClick={() => {
            router.push("/auth/register");
          }}
          format="outline"
        />
      </div>
    </div>
  );
}

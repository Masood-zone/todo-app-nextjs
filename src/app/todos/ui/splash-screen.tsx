"use client";

import React from "react";
import UpTodoLogo from "./upTodo";
import Link from "next/link";

export default function SplashScreen() {
  return (
    <>
      <UpTodoLogo title="UpTodo" />

      <div className="mt-4 px-11 py-2 bg-primary-300 hover:cursor-pointer rounded-md text-white">
        <Link href="/intro">Get Started</Link>
      </div>
    </>
  );
}

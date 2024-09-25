import React from "react";
import Navbar from "./ui/todo-navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col items-start justify-start min-h-screen">
      <Navbar />
      <div className="w-full">{children}</div>
    </div>
  );
}

import React from "react";
import UpTodoLogo from "../todos/ui/upTodo";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex w-screen items-center justify-center h-screen relative p-6">
      <div className="absolute top-0 right-3">
        <UpTodoLogo />
      </div>
      <div className="w-full lg:w-96 xl:w-96">{children}</div>
    </section>
  );
}

export default AuthLayout;

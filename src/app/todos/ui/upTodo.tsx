import Image from "next/image";
import React from "react";
import logo from "../../../../public/assets/svgs/logo.svg";
import Link from "next/link";

export default function UpTodoLogo({ title }: { title?: string }) {
  return (
    <>
      <Link href="/">
        <div className="mb-4">
          <Image
            src={logo}
            alt="UpTodo Logo"
            width={64}
            height={64}
            className="text-text"
          />
        </div>
        <h1 className="text-3xl font-bold">{title}</h1>
      </Link>
    </>
  );
}

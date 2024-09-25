import Image from "next/image";
import React from "react";

export default function IntroCard({
  image,
  title,
  content,
}: {
  image: string;
  title: string;
  content: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center p-6 mb-2 rounded-lg">
      <Image
        src={image}
        alt={title}
        className="w-[271px] h-[296px] object-contain mb-4"
      />
      <h2 className="text-4xl font-semibold mb-2">{title}</h2>
      <p className="text-lg text-center">{content}</p>
    </div>
  );
}

"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import organizeImage from "../../../public/assets/images/organize-slide.svg";
import routineImage from "../../../public/assets/images/routine-slide.svg";
import tasksImage from "../../../public/assets/images/tasks-slide.svg";
import IntroCard from "./ui/intro-card";
import { useRef } from "react";
import Button from "../todos/ui/Button";
import { NavigationOptions } from "swiper/types";
import { useState } from "react";
import Link from "next/link";
import UpTodoLogo from "../todos/ui/upTodo";

export default function Intro() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);

  const introData = [
    {
      image: organizeImage,
      title: "Manage your tasks",
      content: "You can easily manage all of your daily tasks in DoMe for free",
    },
    {
      image: routineImage,
      title: "Create daily routine",
      content:
        "In Uptodo, you can create your personalized routine to stay productive",
    },
    {
      image: tasksImage,
      title: "Organize your tasks",
      content:
        "You can organize your daily tasks by adding them to separate categories",
    },
  ];
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const prevButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="w-full h-screen p-8">
      {/* Logo */}
      <UpTodoLogo />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: nextButtonRef.current,
          prevEl: prevButtonRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (swiper.params.navigation) {
              (swiper.params.navigation as NavigationOptions).nextEl =
                nextButtonRef.current;
              (swiper.params.navigation as NavigationOptions).prevEl =
                prevButtonRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
          setIsFirstSlide(swiper.activeIndex === 0);
          setIsLastSlide(swiper.activeIndex === introData.length - 1);
        }}
        pagination={{ clickable: true }}
        className="relative h-auto"
      >
        {introData.map((item, index) => (
          <SwiperSlide key={index}>
            <IntroCard
              image={item.image}
              title={item.title}
              content={item.content}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-between mt-4">
        {/* Back Button */}
        <Button
          ref={prevButtonRef}
          title="Back"
          extraClasses={` ${
            isFirstSlide ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isFirstSlide} // Disable Back button on first slide
        />

        {/* Next or Get Started Button */}
        {isLastSlide ? (
          <Link href="intro/welcome">
            <Button title="Get Started" />
          </Link>
        ) : (
          <Button ref={nextButtonRef} title="Next" />
        )}
      </div>
    </div>
  );
}

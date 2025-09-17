"use client";
import Link from "next/link";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useMode } from "../contexts/ModeContext";

const slides = [
  {
    title: "WAN 2.2 Image generation",
    desc: "Generate AI images with text-to-image and image-to-image models.",
    button: "Try WAN 2.2",
    img: "/nature1.png",
  },
  {
    title: "FLUX1 Krea",
    desc: "Multi-modal large weights for text + image generation.",
    button: "Explore FLUX1",
    img: "/nature4.png",
  },
  {
    title: "WAN 2.2 Image generation",
    desc: "Generate AI images with text-to-image and image-to-image models.",
    button: "Try WAN 2.2",
    img: "/nature2.png",
  },
  {
    title: "FLUX1 Krea",
    desc: "Multi-modal large weights for text + image generation.",
    button: "Explore FLUX1",
    img: "/nature5.png",
  },
  {
    title: "WAN 2.2 Image generation",
    desc: "Generate AI images with text-to-image and image-to-image models.",
    button: "Try WAN 2.2",
    img: "/nature3.png",
  },
  {
    title: "FLUX1 Krea",
    desc: "Multi-modal large weights for text + image generation.",
    button: "Explore FLUX1",
    img: "/nature6.png",
  },
];

export default function HerosectionSliders() {
  const { theme } = useMode();
  const [index, setIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isXL, setIsXL] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1280px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsXL(e.matches);
    };
    handler(mql);
    mql.addEventListener("change", handler);
    return () => {
      mql.removeEventListener("change", handler);
    };
  }, []);

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
    };
  }, []);

  const slideWidth = isXL ? containerWidth * (2 / 3) : containerWidth;

  const totalSlidesWidth = slideWidth * slides.length;

  const computeTranslateX = () => {
    if (!isXL) {
      return index * slideWidth;
    } else {
      // XL mode
      if (index < slides.length - 1) {
        // for all except last slide, shift so current flush left
        return index * slideWidth;
      } else {
        // if last slide, shift so last slide is flush left
        const shift = totalSlidesWidth - containerWidth;
        // don't shift negative if containerWidth >= totalSlidesWidth
        return shift > 0 ? shift : 0;
      }
    }
  };

  const translateX = computeTranslateX();

  return (
    <section
      className={`w-full overflow-hidden relative mt-5 xl:mt-10 ${
        theme === "dark" ? "bg-black" : "bg-mainBg"
      }`}
    >
      <div ref={containerRef} className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 space-evenly "
          style={{
            transform: `translateX(-${translateX}px)`,
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`
                flex-shrink-0 xl:pr-4 rounded-md
                ${isXL ? "xl:relative" : ""}
              `}
              style={{
                width: `${slideWidth}px`,
                height: isXL ? 500 : 400,
                position: "relative",
              }}
            >
              <Image
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
                width={44}
                height={46}
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-10 text-white">
                <h2 className="text-3xl font-bold">{slide.title}</h2>
                <p className="mt-2 w-[20rem] ">{slide.desc}</p>
                <button className="w-[200px] mt-4 px-4 py-2 bg-white text-black rounded-lg">
                  <Link href="https://oluwaseunsodeeq.github.io/">
                    {slide.button}
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-3">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-black dark:bg-white" : "bg-gray-400"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

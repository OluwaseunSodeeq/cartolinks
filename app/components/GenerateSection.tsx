"use client";
import {
  FaImage,
  FaVideo,
  FaMagic,
  FaBolt,
  FaPaintBrush,
  FaRunning,
  FaFlask,
} from "react-icons/fa";
import { useMode } from "../contexts/ModeContext";

export function GenerateSection() {
  const { theme } = useMode();

  const items = [
    {
      text: "Generate images custom styles with Tailwind",
      label: "Image",
      Icon: FaImage,
    },
    {
      text: "Generate images custom styles with Tailwind",
      label: "Video",
      Icon: FaVideo,
    },
    {
      text: "Generate images custom styles with Tailwind",
      label: "Realtime",
      Icon: FaBolt,
    },
    {
      text: "Generate images custom styles with Tailwind",
      label: "Enhancer",
      Icon: FaMagic,
    },
    {
      text: "Generate images custom styles with Tailwind",
      label: "Edit",
      Icon: FaPaintBrush,
    },
    {
      text: "Generate images custom styles with Tailwind",
      label: "Motion Transfer",
      Icon: FaRunning,
    },
    {
      text: "Generate images custom styles with Tailwind",
      label: "Train",
      Icon: FaFlask,
    },
    {
      text: "Generate images custom styles with Tailwind",
      label: "Video",
      Icon: FaVideo,
    },
    // add other items if needed
  ];

  return (
    <section className="py-10 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Generate</h2>
        <div className="flex items-center flex-wrap justify-evenly gap-y-3 ">
          {items.map(({ label, Icon, text }, idx) => (
            <div
              key={idx}
              className="pointer-cursor flex w-[15rem] xl:w-[19rem] gap-x-3 items-center text-center shadow-md py-2 px-2"
            >
              <div className="p-4 bg-white rounded-full shadow-sm mb-2">
                <Icon size={32} className="text-gray-700" />
              </div>
              <div className="text-left">
                <span className="text-base font-bold">{label}</span>
                <p className="text-base">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

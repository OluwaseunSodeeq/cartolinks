import Image from "next/image";
import React from "react";

export default function UserBtn() {
  return (
    <button className="p-1 rounded-full hover:ring-2 hover:ring-darkGreen">
      <Image
        src="/icons/icon-user.svg"
        alt="User Profile"
        width={24}
        height={24}
      />
    </button>
  );
}

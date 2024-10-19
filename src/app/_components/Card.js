"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

const Card = ({ icon, title, id }) => {
  const router = useRouter();

  const handleClick = () => router.push(`/articles/${id}`);

  return (
    <div className=" flex flex-col gap-2 p-8 bg-white text-black border rounded-lg ">
      {icon}
      <h1 className=" text-2xl">{title}</h1>
      <div className="flex justify-end mt-4">
        <button
          onClick={handleClick}
          className="flex items-center justify-center bg-purple-400 px-4 py-3 rounded-full text-white hover:bg-purple-500"
        >
          <span className="font-semibold">Pelajari</span>
          <ArrowOutwardRoundedIcon />
        </button>
      </div>
    </div>
  );
};

export default Card;

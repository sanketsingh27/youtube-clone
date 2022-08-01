import React from "react";
import { FaRegListAlt, FaRegThumbsUp, FaRegCalendarAlt, FaHistory } from "react-icons/fa";

export default function Sidebar() {
  const links = [
    { label: "playlist", path: "/playlist", logo: <FaRegListAlt /> },
    { label: "likes", path: "/likes", logo: <FaRegThumbsUp /> },
    { label: "Watch Later", path: "/watchlater", logo: <FaRegCalendarAlt /> },
    { label: "history", path: "/history", logo: <FaHistory /> },
  ];
  return (
    <>
      <h1>This is side bar</h1>
      <div className=" border-2 border-blue md:w-64 flex flex-col">{links}</div>{" "}
    </>
  );
}

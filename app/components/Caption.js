"use client";
import "./App.css";

const Caption = ({ title }) => {
    return(
        <span className="bg-[#0a0147] text-white text-xl text-center px-4 py-1 w-fit h-fit mr-4 md:text-3xl md:px-6 md:py-2 whitespace-nowrap">{ title }</span>
    );
}

export default Caption;
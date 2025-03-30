"use client";
import "./App.css";

const Underday = ({ day, heading }) => {
    return (
        <div className="flex flex-row gap-1">
            <p className="underline text-lg md:text-xl">Day { day }</p>
            <p className="text-xl">{heading || ""}</p>
        </div>
    );
}

export default Underday;
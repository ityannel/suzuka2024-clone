"use client";
import "./App.css";

const Header = () => {
    return (
        <header className="h-20 w-full bg-[#edd9c2] text-[#0a0147] flex margin-auto justify-between items-center px-10 shadow-md">
            <h1 className="text-2xl font-bold font-sans">Startup Hub Kosen</h1>
            <div className="flex gap-5 items-center max-lg:hidden">
                <ul className="flex gap-6 text-md font-semibold leading-6 font-sans">
                    <li><a href="https://community-kosen.prossell.online/">Home</a></li>
                    <li><a href="https://community-kosen.prossell.online/events#">Events</a></li>
                    <li><a href="https://community-kosen.prossell.online/teams">Teams</a></li>
                    <li><a href="https://community-kosen.prossell.online/partners">Partners</a></li>
                </ul>
                <div className="flex gap-3">
                    <a href="https://prossell.jp/contact/" className="px-4 py-2 rounded-md bg-black text-[#f8ece7] text-sm">企業の方へ</a>
                    <a href="https://prossell.jp/contact/" className="px-4 py-2 rounded-md bg-black text-[#f8ece7] text-sm">学校の方へ</a>
                </div>
            </div>
        </header>
    );
}

export default Header;
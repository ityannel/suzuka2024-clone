"use client";
import "./App.css";

const Footer = () => {
    return(
        <footer className="py-12 w-full bg-[#edd9c2] text-[#0a0147] flex flex-col margin-auto justify-center items-center px-10 shadow-md gap-4">
            <a href="https://community-kosen.prossell.online/"><h1 className="text-3xl font-bold font-sans">Startup Hub Kosen</h1></a>
            <nav className="flex max-lg:flex-col items-start gap-4 text-sm">
                <a href="https://prossell.jp/">運営会社</a>
                <a href="https://community-kosen.prossell.online/PrivacyPolicy.pdf">プライバシーポリシー</a>
                <a href="https://community-kosen.prossell.online/legal">特別商取引法に基づく表記</a>
                <a href="https://prossell.jp/contact/">お問い合わせ</a>
            </nav>
            <p className="font-sans">Copyright © 2024 Prossell,inc. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
"use client";
import "./App.css";
import Caption from "./Caption.js";
import Underday from "./Underday.js";

const Body = () => {
    return (
        <div className="justify-center w-full flex bg-[url('/bg.svg')] bg-[#E8E1D9] bg-repeat">
            <main className="flex flex-col gap-2 my-8 w-11/12 md:w-7/12 max-w-[1200px]">
                <img className="w-full" src="/nice-illust.svg"/>
                <div className="flex flex-col justify-center w-full bg-white border-4 md:border-8 border-solid border-[#0A0147] text-[#0A0147] gap-12 md:w-full">
                    <div className="flex flex-col gap-4 my-10 font-tsunagi mx-auto w-11/12">
                        <h1 className="font-bold text-center text-[24px] md:text-4xl">
                            <span className="whitespace-nowrap">高専ビジネスコンテスト</span>
                            <span className="whitespace-nowrap">in 鈴鹿高専2024</span>
                        </h1>
                        <div className="flex justify-center gap-2">
                            <span className="h-4 border-b-2 w-12 md:border-b-3 md:w-32"></span>
                            <h2 className="text-lg font-bold whitespace-nowrap md:text-2xl">夢を紡ぎ新しい未来へ</h2>
                            <span className="h-4 border-b-2 w-12 md:border-b-3 md:w-32"></span>
                        </div>
                        <p className="text-sm md:text-lg">　近年、日本のみならず多くの先進国で労働力に関する問題が発生しています。日本でも、副業人材や外国籍人材の活用の取り組みが行われています。 企業では、あらゆる職種で効率化を目的としたサービスが展開されています。
                            <br />　そこで、今回は労働力不足を解決できる新しいビジネスを創造していきます。
                        </p>
                        <button className="bg-[#ff5757] text-white py-4 px-20 w-fit rounded-full mx-auto text-2xl">応募する</button>
                    </div>
                    <div className="flex flex-col gap-4 my-10 font-tsunagi mx-auto w-11/12">
                        <div className="flex flex-col gap-2 md:items-center md:flex-row md:justify-start">
                            <Caption title="テーマ" />
                            <p className="text-2xl text-start">労働力不足を解決できる新しいビジネスを創造する</p>         
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center w-full md:w-10/12 ">
                            <Caption title="日程" />
                            <div className="flex flex-col md:flex-row md:items-center items-start">
                                <div className="text-xl md:text-3xl flex items-end whitespace-nowrap">
                                    <span className="text-4xl md:text-6xl">1</span>月
                                    <span className="text-4xl md:text-6xl">15</span>日（水）
                                </div>
                                <div className="text-xl md:text-3xl flex items-end whitespace-nowrap">
                                    <p className="text-2xl items-center">～</p>
                                    <span className="text-4xl md:text-6xl">1</span>月
                                    <span className="text-4xl md:text-6xl">19</span>日（日）
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 md:items-center md:flex-row md:justify-start">
                            <Caption title="会場" />
                            <div className="flex flex-col">
                                <p className="text-2xl text-start">鈴鹿高専内 企業家工房</p>
                                <p className="text-md text-start">※対面参加が困難な場合は、オンライン可</p>       
                            </div>  
                        </div>
                        <div className="flex flex-col gap-2 md:items-center md:flex-row md:justify-start">
                            <Caption title="対象" />
                            <p className="text-2xl text-start">全国の高専生　全学年・全学科 ※1名の参加も可能です。</p>         
                        </div>
                        <div className="flex flex-col gap-2 md:items-center md:flex-row md:justify-start">
                            <Caption title="応募締切" />
                            <p className="text-xl md:text-3xl flex items-end whitespace-nowrap">
                                    <span className="text-4xl md:text-6xl">1</span>月
                                    <span className="text-4xl md:text-6xl">8</span>日（水）
                            </p>         
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 my-10 font-tsunagi mx-auto w-11/12 border-solid border-2  border-[#0A0147] py-2">
                        <div>
                             <div className="flex justify-center items-start">
                                <span className="h-4 border-b-2 w-12 md:border-b-3 md:w-32 border-dotted"></span>
                                    <p className="text-2xl">プログラム</p>
                                <span className="h-4 border-b-2 w-12 md:border-b-3 md:w-32 border-dotted"></span>
                            </div>
                            <div className="w-23/24 mx-auto gap-4 flex flex-col">
                                <div>
                                    <Underday day="1" heading="キックオフ会"/>
                                    <ul className="mx-10">
                                        <li>・ビジネスコンテストの概要説明</li>
                                        <li>・講義 / 課題調査</li>
                                    </ul>
                                </div>
                                <div>
                                    <Underday day="2"/>
                                    <ul className="mx-10">
                                        <li>・リーンキャンパスの作成</li>
                                        <li>・メンタリング</li>
                                    </ul>
                                </div>
                                <div>
                                    <Underday day="3"/>
                                    <ul className="mx-10">
                                        <li>・学生同士のフィードバック</li>
                                        <li>・メンバーと1on1による指導</li>
                                    </ul>
                                </div>
                                <div>
                                    <Underday day="4"/>
                                    <ul className="mx-10">
                                        <li>・各自追い込み</li>
                                        <li>・資料の事前提出</li>
                                    </ul>
                                </div>
                                <div>
                                    <Underday day="5" heading="最終発表会＆交流会"/>
                                    <ul className="mx-10">
                                        <li>・発表 / 質疑応答</li>
                                        <li>・審査員からのフィードバック</li>
                                        <li>・表彰式</li>
                                        <li>・交流会</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div> 
    );
}

export default Body;
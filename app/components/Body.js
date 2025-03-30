"use client";
import "./App.css";
import Caption from "./Caption.js";
import Underday from "./Underday.js";

const Body = () => {
    return (
        <div className="justify-center w-full flex bg-[url('/bg.svg')] bg-[#E8E1D9] bg-repeat">
            <main className="flex flex-col gap-2 my-8 w-11/12 md:w-7/12 max-w-[1200px]">
                <img className="w-full" src="/nice-illust.svg"/>
                <div className="flex flex-col justify-center w-full bg-white border-4 md:border-8 border-solid border-[#0A0147] text-[#0A0147] md:w-full">
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
                    <div className="flex flex-col gap-4 font-tsunagi mx-auto w-11/12 border-solid border-2 py-4 border-[#0A0147] py-2">
                        <div className="flex justify-center items-start">
                            <span className="h-4 border-b-2 w-12 md:border-b-3 md:w-32 border-dotted"></span>
                                <p className="text-2xl">プログラム</p>
                            <span className="h-4 border-b-2 w-12 md:border-b-3 md:w-32 border-dotted"></span>
                        </div>
                        <div className="w-23/24 mx-auto gap-4 flex flex-col">
                            <div className="flex flex-col md:gap-2">
                                <Underday day="1" heading="キックオフ会"/>
                                <ul className="md:mx-10 text-sm md:text-xl">
                                    <li>・ビジネスコンテストの概要説明</li>
                                    <li>・講義 / 課題調査</li>
                                </ul>
                            </div>
                            <div className="flex flex-col md:gap-2">
                                <Underday day="2"/>
                                <ul className="md:mx-10 text-sm md:text-xl">
                                    <li>・リーンキャンパスの作成</li>
                                    <li>・メンタリング</li>
                                </ul>
                            </div>
                            <div className="flex flex-col md:gap-2">
                                <Underday day="3"/>
                                <ul className="md:mx-10 text-sm md:text-xl">
                                    <li>・学生同士のフィードバック</li>
                                    <li>・メンバーと1on1による指導</li>
                                </ul>
                            </div>
                            <div className="flex flex-col md:gap-2">
                                <Underday day="4"/>
                                <ul className="md:mx-10 text-sm md:text-xl">
                                    <li>・各自追い込み</li>
                                    <li>・資料の事前提出</li>
                                </ul>
                            </div>
                            <div className="flex flex-col md:gap-2">
                                <Underday day="5" heading="最終発表会＆交流会"/>
                                <ul className="md:mx-10 text-sm md:text-xl">
                                    <li>・発表 / 質疑応答</li>
                                    <li>・審査員からのフィードバック</li>
                                    <li>・表彰式</li>
                                    <li>・交流会</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 my-10 font-tsunagi mx-auto w-11/12">
                        <Caption title="審査" />
                        <div>
                            <ul className="list-disc list-outside ml-4">
                                <li>
                                課題解決力<br className="md:hidden"/>
                                <span className="md:inline-block hidden">・・・・・・・・</span>
                                課題を適切に把握し、有効なソリューションを提示できているか
                                </li>
                            </ul>  
                            <ul className="list-disc list-outside ml-4">
                                <li>
                                実現可能性<br className="md:hidden"/>
                                <span className="md:inline-block hidden">・・・・・・・・</span>
                                資金面や法律面等のハードルを解決できている/できそうか
                                </li>
                            </ul>  
                            <ul className="list-disc list-outside ml-4">
                                <li>
                                市場性<br className="md:hidden"/>
                                <span className="md:inline-block hidden">・・・・・・・・</span>
                                マーケットの大きさ、ドメインを適切に認識できているか
                                </li>
                            </ul> 
                            <ul className="list-disc list-outside ml-4">
                                <li>
                                エンジニアリング<br className="md:hidden"/>
                                <span className="md:inline-block hidden">・・・・・・・・</span>
                                課題に対して適切な技術を選定し、イメージできる成果物が改札できているか
                                </li>
                            </ul>   
                            <ul className="list-disc list-outside ml-4">
                                <li>
                                プレゼン力<br className="md:hidden"/>
                                <span className="md:inline-block hidden">・・・・・・・・</span>
                                プレゼンが論理的かつ分かりやすく、徴収者を引き込むような思いがこもっているか
                                </li>
                            </ul> 
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 my-10 font-tsunagi mx-auto w-11/12">
                        <Caption title="賞品" />
                        <div className="w-full flex flex-col gap-8">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="w-full md:w-1/3">
                                    <img src="/amagif.svg" />
                                    <p>【最優秀賞】<br />賞状 + 副賞「Amazonギフト券5万円分 及び 東京オフィスツアー」</p>
                                </div>
                                <div className="w-full md:w-1/3">
                                    <img src="/tokyo-office-tour.svg" />
                                    <p>【協賛企業賞】<br />賞状 + 副賞「東京オフィスツアー」</p>
                                </div>
                                <div className="w-full md:w-1/3">
                                    <img src="/tech-books.svg" />
                                    <p>【プロッセル賞】<br />症状＋副賞「技術系の本」</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-8">
                                <p className="w-full md:w-1/3">【ギイクで賞】<br />賞状</p>
                                <p className="w-full md:w-1/3">【チャレンジ賞】<br />賞状</p>
                                <p className="w-full md:w-1/3">【オーディエンス賞】<br />賞状</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 my-10 font-tsunagi mx-auto w-11/12">
                        <Caption title="審査員" />
                        <div className="flex flex-col gap-4 md:flex-row">
                            <div className="flex flex-row w-2/3 gap-4">
                                <img src="/nagaya.png" className="w-1/2 max-w-[125px] max-h-[125px] rounded-xl"/>
                                <div className="flex flex-col w-1/2 gap-6">
                                    <p>株式会社うるる<br/>取締役CISO</p>
                                    <p>長屋 洋介</p>
                                </div>
                            </div>
                            <div className="flex flex-row w-2/3 gap-4">
                                <img src="/matsunaga.png" className="w-1/2 max-w-[125px] max-h-[125px] rounded-xl"/>
                                <div className="flex flex-col w-1/2 gap-6">
                                    <p>株式会社うるる<br/>エンジニア</p>
                                    <p>松永 直己</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 my-10 font-tsunagi mx-auto w-11/12">
                        <Caption title="審査結果" />
                        <div className="flex flex-col md:flex-row">
                            <p className="md:w-[200px]">・<span className="underline">最優秀賞</span></p>
                            <p>「DOGE」（鈴鹿高専）</p>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <p className="md:w-[200px]">・<span className="underline">うるる賞</span></p>
                            <div className="md:flex-col">
                                <p>「ぬいぐるみの人」（鈴鹿高専）</p>
                                <p>「あ」（鈴鹿高専）</p>
                                <p>「成績が短形波」（鈴鹿高専）</p>
                                <p>「Suzuka vote connect」（鈴鹿高専）</p>
                                <p>「kaksi susia」（石川高専、東京高専）</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <p className="md:w-[200px]">・<span className="underline">Prossell賞</span></p>
                            <p>「人田製作所ソフトウェア開発部」（旭川高専）</p>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <p className="md:w-[200px]">・<span className="underline">ギイクで賞</span></p>
                            <p>「PlantDX」（鈴鹿高専）</p>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <p className="md:w-[200px]">・<span className="underline">チャレンジ賞</span></p>
                            <p>「RWS for Peace」（仙台高専）</p>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <p className="md:w-[200px]">・<span className="underline">オーディエンス賞</span></p>
                            <p>「人田製作所ソフトウェア開発部」（旭川高専）</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 my-10 font-tsunagi mx-auto w-11/12">
                        <Caption title="主催" />
                        <div className="flex-col flex">
                            <img src="suzuka.jpeg" className="w-80 h-auto p-16"/>
                            <div className="flex hover:underline">
                                <p>独立行政法人国立高等専門学校機構 鈴鹿工業高等専門学校</p>
                                <svg xml
                                ns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 my-10 font-tsunagi mx-auto w-11/12">
                        <Caption title="協賛" />
                        <div className="flex-col flex">
                            <img src="ululu.png" className="w-80 h-auto"/>
                            <div className="flex hover:underline">
                                <p>株式会社うるる</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 my-10 font-tsunagi mx-auto w-11/12">
                        <Caption title="運営" />
                        <div className="flex-col flex">
                            <img src="prossell.webp" className="w-80 h-auto p-16"/>
                            <div className="flex hover:underline">
                                <p>株式会社プロッセル</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 my-10 font-tsunagi mx-auto w-11/12">
                        <Caption title="応募フォーム" />
                        <p>応募期間は終了しました。</p>
                    </div>
                    <div className="flex flex-col gap-8 my-10 font-tsunagi mx-auto w-11/12">
                        <Caption title="よくある質問" />
                        <div className="text-xl">
                            <p>Q：キックオフ会には、必ず参加する必要がありますか？</p>
                            <p>A：チームメンバーの誰かが参加するようにしてください。</p>
                        </div>
                        <div className="text-xl">
                            <p>Q：ものづくりはマストですか？</p>
                            <p>A：マストではありません。希望する学生には、プロッセルが全力でサポートしますのでご安心ください。</p>
                        </div>
                        <div className="text-xl">
                            <p>Q：参加する時にグループの結成は必要ですか？</p>
                            <p>A：個人でもグループでも問題ありません。個人で参加されている方でテーマが似ている学生同士をグループ化するようなことも過去にありました。</p>
                        </div>
                        <div className="text-xl">
                            <p>Q：一人での参加は採点に影響はありますか？</p>
                            <p>A：審査には影響はありません。</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 my-10 font-tsunagi mx-auto w-11/12">
                        <Caption title="お問い合わせ" />
                        <div className="flex flex-col gap-8">
                            <p>高専ビジコン運営事務局</p>
                            <p>oncon@prossell.jp</p>
                        </div>
                    </div>
                </div>
            </main>
        </div> 
    );
}

export default Body;
import { useEffect, useState } from 'react';
export default function Navbar() {
    var tabs = [
        "বাংলাদেশ",
        "বিশ্ব",
        "খেলা",
        "বিনোদন",
        "বাণিজ্য",
        "ইসলামী জীবন",
        "জীবনযাপন",
        "বসুন্ধরা শুভসংঘ",
        "ভিডিও",
        "পত্রিকা",
        "ফিচার"
    ]
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) { // Change this value to control when the color changes
            setIsScrolled(true);
            console.log(isScrolled)
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`fixed top-0 left-0 w-full h-auto ${isScrolled ? "bg-white" : "bg-transparent"} duration-200`}>
            <div className="w-full h-auto flex flex-row justify-around items-center p-4">
                <img src="https://www.kalerkantho.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.ff912e57.png&w=256&q=75" alt="logo" />
                <span className={`text-xs ${isScrolled ? "text-black" : "text-white"} duration-200`}>
                    বুধবার ১১ সেপ্টেম্বর ২০২৪, ২৭ ভাদ্র ১৪৩১
                </span>



            </div>
            <div className={`w-full flex justify-center items-center px-4 py-2 ${isScrolled ? "bg-white" : "bg-transparent"} duration-200`}>
                <a className='px-4 py-2 rounded-full bg-red-500 text-white'>সর্বশেষ</a>
                <div className='w-1/2 overflow-hidden mx-4'>
                    <p className={`animate-marquee text-white text-nowrap ${isScrolled ? "text-black" : "text-white"}> যশোরের বেনাপোল স্থলবন্দর দিয়ে গেল সোমবার ভারত থেকে ২ লাখ ৩১ হাজার মুরগির ডিম আমদানি করা হয়েছে। আগামী দুই মাসের মধ্যে বন্দর দিয়ে আরও ৪৭ লাখ ডিম আমদানি করা হবে বলে জানা গেছে। তবে এ নিয়ে বাংলাদেশকে অনেকটা কটাক্ষ করেই সংবাদ প্রকাশ করেছে ভারতীয় কয়েকটি</p>
                </div>
                <a className='px-4 py-2 rounded-full bg-red-500 text-white'>লাইভ টিভি</a>
            </div>
            <div className={`navlinks w-full  flex justify-evenly items-center overflow-x-scroll px-4 py-2 ${isScrolled ? "bg-black" : "bg-transparent"} duration-200`}>
                {
                    tabs.map((tab, index) => (
                        <span className={`nav-link py-2 px-4 rounded hover:bg-[rgba(255,255,255,0.4)] duration-200 text-white`} key={index}>{tab}</span>
                    ))
                }
            </div>
        </div>

    );
}

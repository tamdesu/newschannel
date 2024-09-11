
import { useEffect, useRef } from 'react';
import CardTypeOne from "@/components/card1"
export default function Home() {
    const ref = useRef(null);

  const prev = () => {
    requestAnimationFrame(() => {
      const scrollLeft = ref.current.scrollLeft;
      console.log(scrollLeft)
      const itemWidth = parseInt(
        getComputedStyle(ref.current.children[0]).width
      );
      ref.current.scrollLeft = scrollLeft - itemWidth * 3;
    });
  };

  const next = () => {
    requestAnimationFrame(() => {
      const scrollLeft = ref.current.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(ref.current.children[0]).width
      );
      ref.current.scrollLeft = scrollLeft + itemWidth * 3;
    });
  };

    setTimeout(()=>{
       if(ref.current.scrollLeft >= ref.current.scrollWidth / 2){
        var scrollLeft = ref.current.scrollLeft;
        scrollLeft = 0
       }
       else{
        next()
       }
    }, 2000)
    return (
            <div className="w-full h-full whitespace-nowrap ">
                <div ref={ref} className="flex flex-row space-x-4 overflow-x-scroll scroll-smooth">
                    <CardTypeOne basis={true} />
                    <CardTypeOne basis={true} />
                    <CardTypeOne basis={true} />
                    <CardTypeOne basis={true} />
                </div>
                <button onClick={next}>next</button>
            </div>
    );
}

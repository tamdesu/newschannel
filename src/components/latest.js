"use client"
import Carousel from "@/components/carousel"

export default function Home() {
    
    return (
        <div className="w-full h-[100vh] p-4">
            <div>
                <h1 className="text-4xl text-red-500">
                    সর্বশেষ
                </h1>
                <hr className="w-1/2 bg-red und"></hr>
            </div>
            <br />
            <Carousel />
        </div>
    );
}

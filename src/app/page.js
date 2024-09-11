"use client"
import Navbar from "@/components/NavBar.js"
import Headline from "@/components/headline"
import Latest from "@/components/latest"
export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Headline />
      <Latest />
    </div>
  );
}

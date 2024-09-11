export default function Home({basis}) {
    if(basis){
      return (
        <div className="w-full h-full">
          <div className="w-full aspect-video bg-cover bg-center " style={{ backgroundImage: "url('https://antiguanewsroom.com/wp-content/uploads/2024/09/Egg-prices-header-image-e1725919683815.jpg')" }}>
              <div className="w-full h-full bg-[rgba(0,0,0,0.5)]">
                  <div className="w-full h-full flex flex-col justify-end p-4 overflow-hidden ">
                      <h1 className="text-3xl text-white font-bold">
                          ডিম আমদানি: বাংলাদেশকে নিয়ে ভারতীয় গণমাধ্যমের কটাক্ষ!
                      </h1>
                      <br />
                      <span className=" text-white ">
                          যশোরের বেনাপোল স্থলবন্দর দিয়ে গেল সোমবার ভারত...
                      </span>
                  </div>
              </div>
  
          </div>
        </div>
      );
    }
    else{
      return (
        <div className="w-full h-full">
          <div className="w-full aspect-video bg-cover bg-center " style={{ backgroundImage: "url('https://antiguanewsroom.com/wp-content/uploads/2024/09/Egg-prices-header-image-e1725919683815.jpg')" }}>
              <div className="w-full h-full bg-[rgba(0,0,0,0.5)]">
                  <div className="w-full h-full flex flex-col justify-end p-4">
                      <h1 className="text-3xl text-white font-bold">
                          ডিম আমদানি: বাংলাদেশকে নিয়ে ভারতীয় গণমাধ্যমের কটাক্ষ!
                      </h1>
                      <br />
                      <span className=" text-white ">
                          যশোরের বেনাপোল স্থলবন্দর দিয়ে গেল সোমবার ভারত...
                      </span>
                  </div>
              </div>
  
          </div>
        </div>
      );
    }
  }
  
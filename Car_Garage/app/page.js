export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <div className="flex flex-col  mt-10 rounded-[50px] bg-black shadow-lg p-4 min-h-160 w-full md:w-auto relative">
        <section className="flex flex-col md:flex-row">
          <div>
            <img
              src="https://themehealer.com/php-template/crank-php/assets/images/resources/logo-1.png"
              alt="Next.js Logo"
              width={150}
              height={37}
              priority
              className="ml-30 "
            />
          </div>
          <div className="flex flex-col md:flex-row">
            <div className=" text-white pl-20 pt-3.5 ml-75">Home</div>
            <div className="hidden md:block text-white pl-5 pt-3.5 ">
              About Us
            </div>
            <div className="hidden md:block text-white pl-5 pt-3.5 ">
              Services
            </div>
            <div className="hidden md:block text-white pl-5 pt-3.5 ">Pages</div>
            <div className="hidden md:block text-white pl-5 pt-3.5 ">Blog</div>
            <div className="hidden md:block text-white pl-5 pt-3.5 ">
              Contact
            </div>
            <div className="hidden md:flex ml-10 bg-white rounded-full h-[50px] w-[50px] items-center justify-center hover:bg-gradient-to-r from-emerald-600 to-lime-300">
              <div className="text-red-500">F</div>
            </div>
            <div className="hidden md:flex ml-10 bg-white rounded-full h-[50px] w-[50px] items-center justify-center hover:bg-gradient-to-r from-emerald-600 to-lime-300">
              <div className="text-red-500">W</div>
            </div>
            <div className="hidden md:flex ml-10 bg-white rounded-full h-[50px] w-[50px] items-center justify-center hover:bg-gradient-to-r from-emerald-600 to-lime-300">
              <div className="text-red-500">I</div>
            </div>
            <div className="hidden md:flex ml-10 bg-white rounded-full h-[50px] w-[50px] items-center justify-center hover:bg-gradient-to-r from-emerald-600 to-lime-300">
              <div className="text-red-500">T</div>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-2 gap-1 ">
          <div className="flex flex-col pl-10">
            <div className="font-bold text-[50px] col-span-1 row-span-2 mt-20 w-[70%]">
              {" "}
              Where Quality Is A Service Meets The{" "}
            </div>
        
            <div className="font-bold text-[50px] text-red-500">
              {" "}
              Open Road{" "}
            </div>
            <br></br>
          <div className="text-white border-4 border-red-600 rounded-full h-[70px] w-[200px] text-center pt-4 ml-5 font-bold text-[20px] mt-15 hover:bg-gradient-to-r from-red-500 to-white-100 cursor-pointer hover:text-white-300">
            Get Started
          </div>
          </div>
          <div className="row-span-1 col-span-1">
            <img
              src="https://themehealer.com/php-template/crank-php/assets/images/resources/main-slider-img-1.jpg"
              className=" rounded-[30px] mt-15 w-150  h-120 float-right  mr-20 mb-25"
            />
          </div>
        </div>
      </div>
        <div className = "grid grid-cols-4 divide-x-2 divide-gray-200 border-2 bg-white rounded-[20px] shadow-lg p-4 min-h-50 w-[88%] ml-20 mt-10 -mb-20 absolute -bottom-5 left-2 right-2 ">
           <div className = "flex flex-col">
                <div className = "text-[70px] font-bold text-black text-center mt-5 "> 600+</div>
                <div className = "text-[20px] font-bold text-black mr-5 text-center -mt-2">Team members</div>
           </div>
           <div className = "flex flex-col">
                <div className = "text-[70px] font-bold text-black text-center mt-5 "> 5k+</div>
                <div className = "text-[20px] font-bold text-black mr-5 text-center -mt-2">Service complete</div>
           </div>
           <div className = "flex flex-col">
                <div className = "text-[70px] font-bold text-black text-center mt-5 "> 25+</div>
                <div className = "text-[20px] font-bold text-black mr-5 text-center -mt-2">Awards Won</div>
           </div>
           <div className = "flex flex-col">
                <div className = "text-[70px] font-bold text-black text-center mt-5 "> 3k+</div>
                <div className = "text-[20px] font-bold text-black mr-5 text-center -mt-2">Client Reviews</div>
           </div>
        </div>

      <div className="flex flex-row  mt-70 rounded-[50px] bg-white shadow-lg p-4 min-h-200">
        <section className="flex flex-col">
          <div className="text-red-500 font-bold text-xl ml-160 pt-20">
            Lastest Service
          </div>
          <div className="text-md text-black font-bold text-[40px] pt-5 ml-120">
            Your Trusted Car Provider
          </div>
          <div className="text-md text-black font-bold text-[40px]  ml-130">
            keeping your vehicle
          </div>
          <div className="flex flex-col md:flex-row">
            <button className="border-2 border-black rounded-[5px] bg-white h-80 w-80 mt-30 ml-20 hover:bg-gradient-to-r from-emerald-600 to-lime-300 pt-10 ease-in-out ">
              <div className="flex flex-col text-black font-bold text-[20px] hover:text-white mb-10">
                <div className=" ml-28 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full h-[90px] w-[90px]"></div>
                <div className="text-[15px] pb-17  ">
                  <div className="">Transformation Advising</div>
                  <br></br>
                  <div className="">
                    Car service is essential for maintaining the performance and
                    longevity of your vehicle.<br></br> From oil changes Car
                    service
                  </div>
                </div>
              </div>
            </button>
            <button className="border-2 border-black rounded-[5px] bg-white h-80 w-80 mt-30 ml-40 hover:bg-gradient-to-r from-emerald-600 to-lime-300">
              <div className="flex flex-col text-black font-bold text-[20px] hover:text-white mb-10">
                <div className=" ml-28 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full h-[90px] w-[90px] mt-10"></div>
                <div className="text-[15px] pb-17  ">
                  <div className="text-[25px]">Easy Drive Maintenance</div>
                  <br></br>
                  <div className="">
                    Car service is essential for maintaining the performance and
                    longevity of your vehicle.<br></br> From oil changes Car
                    service
                  </div>
                </div>
              </div>
            </button>
            <button className="border-2 border-black rounded-[5px] bg-white h-80 w-80 mt-30 ml-40  hover:bg-gradient-to-r from-emerald-600 to-lime-300">
              <div className="flex flex-col text-black font-bold text-[20px] hover:text-white mb-10">
                <div className=" ml-28 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full h-[90px] w-[90px] mt-10"></div>
                <div className="text-[15px] pb-17  ">
                  <div className="text-[25px]">Elite Auto Services</div>
                  <br></br>
                  <div className="">
                    Car service is essential for maintaining the performance and
                    longevity of your vehicle.<br></br> From oil changes Car
                    service
                  </div>
                </div>
              </div>
            </button>
          </div>
        </section>
      </div>
      <div className="flex flex-col  min-h-160">
        <section className="flex flex-col">
          <div className="text-red-500 text-[20px] ml-30 pt-30">ABOUT US</div>
          <div className="text-md text-black font-bold text-[40px] pt-5 ml-30">
            Fast and Reliable Car Care<br></br>Your Car Our Priority
          </div>
          <div className="w-[40%] text-black text-lg pt-5 ml-30">
            Car service is essential for maintaining the performance
            andlongevity of your vehicle. From oil changes
          </div>
          <div className="flex flex-row">
            <ui>
              <li className="pt-15 ml-30 text-black text-[20px] font-bold font-stretch-expanded ">
                Fast and Reliable Car Care Your Car Our Priority
              </li>
              <li className="pt-4 ml-30 text-black text-[20px] font-bold ">
                Free with Our Services Care for Your Car
              </li>
              <li className="pt-4 ml-30 text-black text-[20px] font-bold ">
                Top-notch Care for Your Vehicle Your Vehicle
              </li>
              <li className="pt-4 ml-30 text-black text-[20px] font-bold ">
                Expert Service for Your Vehicle Drive Stress
              </li>
              <li className="pt-4 ml-30 text-black text-[20px] font-bold">
                Your Trusted Car Service Provider Keeping
              </li>
            </ui>
            <div className="">
              <img
                src="https://themehealer.com/php-template/crank-php/assets/images/resources/about-one-img-1.jpg"
                width={550}
                height={200}
                className="  rounded-[30px] pl-40 pr-6 "
              />
            </div>
          </div>
          <br></br>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-row  mt-10 rounded-[30px] bg-black shadow-lg p-4 min-h-30 ml-20 mr-20">
              <div className="text-white text-[30px] font-bold pl-20 pt-6">
                Dropbox
              </div>
              <div className="text-white text-[30px] font-bold  pl-30 pt-6">
                Spotify
              </div>
              <div className="text-white text-[30px] font-bold  pl-30 pt-6">
                GIZMODO
              </div>
              <div className="text-white text-[30px] font-bold  pl-30 pt-6">
                coinbase
              </div>
              <div className="text-white text-[30px] font-bold  pl-30 pr-20 pt-6 mb-10">
                slack
              </div>
            </div>
          </div>
        </section>
        <br></br>
        {/* Gallery Section */}
        <div>
          <div className="pt-30">
            <div className="text-red-500 text-[20px] flex-flex-col ml-20 pb-[20px] font-mono font-bold">
              Latest Gallery
            </div>
            <div className="text-black text-[40px] flex-flex-col ml-20 pb-[5px] font-sans font-bold">
              Quality Service, Every Time
            </div>
            <div className = "flex flex-row">
            <div className="text-black text-[40px] flex-flex-col ml-20 pb-[50px] font-sans font-bold">
              Drive Safe Stay Secure
            </div>
            <div className = "ml-100 text-left text-black font-bold text-[15px]">Car service is essential for maintaining the performance and <br></br> longevity of your vehicle. From oil changes.</div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row flex-wrap align-self">
                <img
                  src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-1.jpg"
                  className=" w-[400px] h-[300px] rounded-[20px] ml-20 mb-10 "
                />
                <img
                  src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-2.jpg"
                  className=" w-[400px] h-[200px] rounded-[20px] ml-10 "
                />
                <img
                  src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-3.jpg"
                  className=" w-[400px] h-[300px] rounded-[20px] ml-15 mb-10 "
                />

                <img
                  src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-4.jpg"
                  className=" w-[400px] h-[300px] rounded-[20px] ml-20 mb-10 "
                />
                <img
                  src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-5.jpg"
                  className=" w-[400px] h-[450px] rounded-[20px]  ml-10 mb-60 "
                />
                <img
                  src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-6.jpg"
                  className=" w-[430px] h-[300px] rounded-[20px] ml-10 mb-10 "
                />
              </div>
            </div>
          </div>
        </div>
        {/* End of Gallery Section */}
      </div>
      {/* Footer Section */}

    </div>
  );
}

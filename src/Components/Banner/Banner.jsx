import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full lg:h-[500px]">
      <div id="slide1" className="carousel-item relative w-full ">
        <img
          src="https://i.ibb.co/w0SDyFm/1.jpg"
          className="w-full"
        />
        <div className="absolute  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full">
          <h2 className="text-white text-5xl font-bold">Affordable Price For Car Servicing</h2>
          <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          <div>
            <button className="btn bg-[#FF3811] border-0 text-white hover:text-black">Discover More</button>
            <button className="btn btn-outline">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 bottom-0 transform -translate-y-1/2 left-5 right-5 ">
          <a href="#slide6" className="btn btn-circle hover:bg-[#FF3811] border-0 hover:text-white">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811] border-0 hover:text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/kGbqjj1/2.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-end gap-5 bottom-0 transform -translate-y-1/2 left-5 right-5">
          <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811] border-0 hover:text-white">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811] border-0 hover:text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/4MBzTvW/3.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-end gap-5 bottom-0 transform -translate-y-1/2 left-5 right-5 ">
          <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811] border-0 hover:text-white">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811] border-0 hover:text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/W2VNJYH/4.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-end gap-5 bottom-0 transform -translate-y-1/2 left-5 right-5 ">
          <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811] border-0 hover:text-white">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle hover:bg-[#FF3811] border-0 hover:text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/HdmQK2M/5.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-end gap-5 bottom-0 transform -translate-y-1/2 left-5 right-5 ">
          <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811] border-0 hover:text-white">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle hover:bg-[#FF3811] border-0 hover:text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/MhDVF4m/6.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-end gap-5 bottom-0 transform -translate-y-1/2 left-5 right-5 ">
          <a href="#slide5" className="btn btn-circle hover:bg-[#FF3811] border-0 hover:text-white">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811] border-0 hover:text-white">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;

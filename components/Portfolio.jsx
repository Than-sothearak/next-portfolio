"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const items = [
  {
    id: 1,
    color: "from-green-300 to-blue-300",
    title: "Room for Rent System",
    desc: "With an admin dashboard, owners can oversee bookings, generate invoices, and send notifications, while tenants can view their rental details, request services, and track payment history. Built on modern technologies like Next.js, MongoDB, and Tailwind CSS, the system is fast, secure, and optimized for both desktop and mobile users.",
    img: "/images/project1.png",
    link: "https://main.d1r1l4g50q0t4w.amplifyapp.com/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Next.js Computer Shop",
    desc: "This Computer Shop project is a full-stack e-commerce web application built with Next.js. It offers fast and SEO-friendly product browsing, a smooth shopping cart and checkout flow, and a powerful admin dashboard to manage stock, users, and orders.",
    img: "/images/project2.png",
    link: "https://ecommerce-front-two-nu.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Movie App",
    desc: "A Movie App built with Next.js and Tailwind CSS that lets users explore trending movies, view details, and search for their favorite films.",
    img: "/images/project3.png",
    link: "https://next-movie-beta-one.vercel.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Design Work",
    desc: "Creative designer specializing in graphic design and web design. I create engaging visuals, posters, and modern websites that solve real problems.",
    img: "/images/background.jpg",
    link: "https://photos.app.goo.gl/tM6636yscaYM6315A",
  },
  // {
  //   id: 5,
  //   color: "from-yellow-300 to-orange-300",
  //   title: "POS System",
  //   desc: "Point of Sale web system with cart, checkout and reporting features.",
  //   img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  //   link: "#",
  // },
  // {
  //   id: 6,
  //   color: "from-pink-300 to-purple-400",
  //   title: "Learning Platform",
  //   desc: "E-learning content creation platform with video courses and tests.",
  //   img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
  //   link: "#",
  // },
];

export function Portfolio() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild.offsetWidth + 24; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black/5   ">
      
      <div className="container max-md:w-full px-20 flex flex-col relative">
        {/* Title */}
 
       <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-blue-600">Projects</span>
        </h2>
       

        {/* Scroll Container */}
      <div className="w-full ">
         {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/50 shadow-lg p-3 rounded-full hover:bg-blue-600 hover:text-white transition z-10"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/50 shadow-lg p-3 rounded-full hover:bg-blue-600 hover:text-white transition z-10"
        >
          <FaChevronRight size={20} />
        </button>
          <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-scroll scroll-smooth no-scrollbar"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className={`border p-4 bg-gradient-to-r ${item.color} flex-shrink-0 lg:basis-1/3 md:basis-1/2 basis-full rounded-2xl transition overflow-hidden flex flex-col`}
            >
              {/* Image */}
              <div className="relative w-full h-48 rounded-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow text-white">
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-gray-100 mb-4 flex-grow">
                  {item.desc}
                </p>

                <Link href={item.link} target="_blank">
                  <button className="bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
                    View Project
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

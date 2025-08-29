"use client";
import { useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ProjectsSection() {
const scrollRef = useRef(null);

 const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320; // how much to scroll per click
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const projects = [
    {
      title: "Room for Rent System",
      desc: "Booking, invoices, Telegram bot integration.",
      image: "/projects/room.png",
      link: "#",
      tech: ["Next.js", "MongoDB", "Tailwind"],
    },
    {
      title: "E-commerce Platform",
      desc: "Cart system, checkout, payment integration.",
      image: "/projects/ecommerce.png",
      link: "#",
      tech: ["React", "Node.js", "Stripe"],
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio with animations and SEO.",
      image: "/projects/portfolio.png",
      link: "#",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
    },
    {
      title: "POS System",
      desc: "Point of Sale with cart & checkout features.",
      image: "/projects/pos.png",
      link: "#",
      tech: ["Next.js", "MongoDB", "Recharts"],
    },
    {
      title: "Computer Shop",
      desc: "E-commerce shop for selling PCs & laptops.",
      image: "/projects/computer.png",
      link: "#",
      tech: ["Next.js", "MongoDB", "Tailwind"],
    },
    {
      title: "Movie App",
      desc: "Browse & stream movie trailers.",
      image: "/projects/movie.png",
      link: "#",
      tech: ["React", "TMDB API"],
    },
    {
      title: "News Today",
      desc: "Live news fetching with categories.",
      image: "/projects/news.png",
      link: "#",
      tech: ["React", "Next.js"],
    },
    {
      title: "Event Highlights",
      desc: "Video & design showcase for events.",
      image: "/projects/event.png",
      link: "#",
      tech: ["Adobe Premiere", "Photoshop"],
    },
    {
      title: "Learning Platform",
      desc: "E-learning content creation platform.",
      image: "/projects/elearning.png",
      link: "#",
      tech: ["Next.js", "MongoDB", "AWS S3"],
    },
  ];

  return (
    <section id="projects" className="w-screen h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-blue-600">Projects</span>
        </h2>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-blue-600 hover:text-white transition z-10"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-blue-600 hover:text-white transition z-10"
        >
          <FaChevronRight size={20} />
        </button>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-scroll scroll-smooth no-scrollbar"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
            >
              {/* Project Image */}
              <div className="relative w-full h-40">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-3 text-sm flex-grow">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  className="inline-block text-center bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

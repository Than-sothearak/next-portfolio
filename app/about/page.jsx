"use client"
import React, { useState, useEffect } from 'react';

const SectionComponent = () => {
  const [currentSection, setCurrentSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section'); // Assuming sections are marked with the 'section' tag
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setCurrentSection(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='w-screen h-[100vw] flex flex-col justify-center items-center'>
      {/* Render your sections */}
      <section id="section1" className='w-full h-[4000vw] justify-center items-center flex'>
        Section 1 content
      </section>
      <section id="section2" className='w-full h-[4000vw] justify-center items-center flex'>
        Section 2 content
      </section>
      <section id="section3" className='w-full h-[4000vw] justify-center items-center flex'>
        Section 3 content
      </section>
      {/* Render other sections */}
      {/* Display the ID of the current section */}
      <p>Current Section: {currentSection}</p>
    </div>
  );
};

export default SectionComponent;

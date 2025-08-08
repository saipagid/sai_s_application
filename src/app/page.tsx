'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function FurnitureLandingPage(): JSX.Element {
  return (
    <div className="w-full bg-[#f6d8c6] flex flex-row justify-center items-start min-h-screen">
      {/* Left Content Section */}
      <div className="w-full md:w-[28%] flex flex-col justify-start items-center mt-[100px] md:mt-[202px] px-4 md:px-0">
        <div className="w-full flex flex-col justify-start items-start">
          {/* Main Heading */}
          <h1 className="text-[48px] sm:text-[60px] md:text-[80px] lg:text-[96px] font-poppins font-extrabold leading-[72px] sm:leading-[90px] md:leading-[120px] lg:leading-[144px] text-left uppercase text-[#b88e2f]">
            Furniture
          </h1>
          {/* Subheading */}
          <h2 className="text-[19px] sm:text-[25px] md:text-[32px] lg:text-[38px] font-poppins font-medium leading-[28px] sm:leading-[38px] md:leading-[48px] lg:leading-[57px] tracking-[3px] sm:tracking-[4px] md:tracking-[5px] lg:tracking-[6px] text-left text-[#b88e2f]">
            Landing Page
          </h2>
        </div>
        {/* Description */}
        <p className="w-full text-[14px] sm:text-[16px] md:text-[18px] font-montserrat font-medium leading-[24px] sm:leading-[30px] md:leading-[35px] text-left text-[#111111] mt-[16px] sm:mt-[24px] md:mt-[32px]">
          The e-Commerce Website design template is easy to customize, making it even easier for you to design your next website or project, and speed up your design workflow.
        </p>
        {/* Links Section */}
        <div className="w-full flex flex-col gap-[14px] justify-start items-center mt-[35px] sm:mt-[50px] md:mt-[70px]">
          {/* Website Link */}
          <div className="w-full flex flex-row justify-start items-center">
            <Image 
              src="/images/img_icons8_website_1.png" 
              alt="Website icon" 
              width={38} 
              height={38}
              className="w-[38px] h-[38px]"
            />
            <Link 
              href="https://uiuxexperts.github.io/portfolio/" 
              className="text-[14px] sm:text-[16px] font-montserrat font-medium leading-[21px] text-left underline text-[#000000] ml-[20px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://uiuxexperts.github.io/portfolio/
            </Link>
          </div>
          {/* Dribbble Link */}
          <div className="w-full flex flex-row justify-start items-center">
            <Image 
              src="/images/img_icons8_dribbble.png" 
              alt="Dribbble icon" 
              width={38} 
              height={38}
              className="w-[38px] h-[38px]"
            />
            <Link 
              href="#" 
              className="text-[14px] sm:text-[16px] font-montserrat font-medium leading-[21px] text-left underline text-[#000000] ml-[20px]"
            >
              aashifasheikh12
            </Link>
          </div>
          {/* Behance Link */}
          <div className="w-full flex flex-row justify-start items-start">
            <Image 
              src="/images/img_icons8_behance_1.png" 
              alt="Behance icon" 
              width={38} 
              height={38}
              className="w-[38px] h-[38px] self-center"
            />
            <span className="text-[14px] sm:text-[16px] font-montserrat font-medium leading-[21px] text-left text-[#000000] mt-[4px] ml-[20px]">
              /aashifasheikh12
            </span>
          </div>
        </div>
      </div>
      {/* Right Image Stack Section */}
      <div className="hidden md:flex relative w-[56%] h-[2212px] justify-center items-center self-center ml-[44px]">
        {/* Background Shadow 1 */}
        <div 
          className="absolute top-0 right-0 w-[24%] h-[1034px] bg-[#40434c3f] z-10"
          style={{ boxShadow: '0px 4px 100px #888888ff' }}
        />
        {/* Main Landing Page Image */}
        <Image 
          src="/images/img_funiro_landing_page.png" 
          alt="Funiro landing page preview" 
          width={650} 
          height={1012}
          className="absolute top-0 right-[34px] w-[64%] h-[1012px] object-cover z-20"
        />
        {/* Background Shadow 2 */}
        <div 
          className="absolute top-[94px] left-0 w-[68%] h-[1026px] bg-[#40434c3f] z-30"
          style={{ boxShadow: '0px 4px 107px #888888ff' }}
        />
        {/* Secondary Landing Page Image */}
        <Image 
          src="/images/img_funiro_landing_page_2108x650.png" 
          alt="Funiro landing page extended preview" 
          width={650} 
          height={2108}
          className="absolute top-[104px] left-[1px] w-[62%] h-[2108px] object-cover z-40"
        />
      </div>
    </div>
  );
}
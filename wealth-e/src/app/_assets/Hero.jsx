// This page is for the Hero Section (Tablet Animation)
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";

function Hero() {
  return (
    <section className="bg-gray-50 flex items-center flex-col">
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Your Wealth <br />
                <span
                  className="text-4xl md:text-[6rem] font-bold mt-1 leading-none primary"
                  style={{ color: "#8600FF" }}
                >
                  Perfected BY Precision
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={"/demo_chart.png"}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
            // unoptimized={true} // Disable image optimization temporarily
          />
        </ContainerScroll>
      </div>
    </section>
  );
}

export default Hero;

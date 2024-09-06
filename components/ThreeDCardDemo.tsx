"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
// import Link from "next/link";
import { projects } from "@/data";

export function ThreeDCardDemo() {
  return (
    <>
    <h1 className="text-center font-bold text-3xl">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 -gap-10">
        {
          projects.map(({ id, title, des, img }) => (
            <div key={id} className="w-full max-w-xs mx-auto">
              <CardContainer className="inter-var">
                <CardBody className="bg-black relative group/card w-full h-auto rounded-xl p-4 border border-gray-500">
                  <CardItem
                    translateZ="50"
                    className="line-clamp-1 text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 line-clamp-2 text-sm max-w-full mt-2 dark:text-neutral-300"
                  >
                    {des}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={img}
                      alt="thumbnail"
                      width={500}
                      height={300}
                      className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    />
                  </CardItem>
                  {/* <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {
                        iconLists.map((icon, index) => (
                          <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                            style={{
                              transform: `translateX(-${5 * index * 2}px)`
                            }}>
                            <img src={icon} alt={icon} className="p-2" />
                          </div>
                        ))
                      }
                    </div>
                    <div className="flex items-center justify-center gap-3 border lg:p-3 rounded-2xl bg-black-100 p-2">
                      <p className="text-purple text-[10px] md:text-sm">Check Live Site</p>
                      <FaLocationArrow />
                    </div>
                  </div> */}
                  {/* <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="https://twitter.com/mannupaaji"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Sign up
                    </CardItem>
                  </div> */}
                </CardBody>
              </CardContainer>
            </div>
          ))
        }
      </div>
    </>
  );
}

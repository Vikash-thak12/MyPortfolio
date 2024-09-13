"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <>
      <h1 className="text-center font-bold text-3xl">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 -gap-10">
        {
          projects.map(({ id, title, des, img, iconLists, link }) => (
            <div key={id} className="w-full max-w-xs mx-auto">
              <CardContainer className="inter-var">
                <CardBody className="bg-black relative group/card w-full h-auto rounded-xl p-4 border border-gray-500">
                  <CardItem
                    translateZ="50"
                    className="line-clamp-1 text-xl font-bold text-white"
                  >
                    {title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="line-clamp-2 text-sm max-w-full mt-2 text-gray-400"
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
                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {
                        iconLists.map((icon, index) => (
                          <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                            style={{
                              transform: `translateX(-${5 * index * 2}px)`
                            }}>
                            <Image src={icon} alt={icon} width={32} height={32} />
                          </div>
                        ))
                      }
                    </div>
                    <Link href={link} target="_blank">
                      <div className="flex items-center justify-center gap-3 border lg:p-3 rounded-2xl bg-black-100 p-2 hover:bg-gray-500">
                        <p className="text-purple text-[10px] md:text-sm">Check Live Site</p>
                        <FaLocationArrow />
                      </div>
                    </Link>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          ))
        }
      </div>
    </>
  );
}

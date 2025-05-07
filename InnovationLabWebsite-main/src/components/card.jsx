"use client";
import React, { Component } from "react";
import { PinContainer } from "./3d-pin";

class AnimatedPinDemo extends Component {
  render() {
    const cardsData = [
      {
        title: "Think",
        description: "Your mind id your limit.",
        imageUrl: "./assets/images/think.png",
      },
      {
        title: "Design",
        description: "Your Ideas",
        imageUrl: "./assets/images/design.png",
      },
      {
        title: "Create",
        description: "Your Designs",
        imageUrl: "./assets/images/create.png",
      },
    ];

    return (
      <div className="h-[30rem] w-full flex items-center justify-center">
        <div className="flex flex-row gap-4">
          {cardsData.map((card, index) => (
            <PinContainer title={card.title} key={index}  >
              <div className="card h-[20rem] w-[20rem] flex flex-col p-4 tracking-tight text-slate-100/50">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-2/3 object-cover rounded-lg"
                />
                <h2 className="heading max-w-xs pb-2 mt-2 font-bold text-base text-slate-100">
                  {card.title}
                </h2>
                <p className="para text-base font-normal text-slate-300">
                  {card.description}
                </p>
              </div>
            </PinContainer>
          ))}
        </div>
      </div>
    );
  }
}

export default AnimatedPinDemo;

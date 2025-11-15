"use client";

import { GradientBackground } from "react-gradient-animation";
import { useEffect } from "react";

export function GradientClientComponent() {

    return <div className="relative w-[99vw] h-[300px]" >
        <GradientBackground
            count={30}
            size={{ min: 500, max: 700, pulse: 0 }}
            speed={{ x: { min: 1, max: 4 }, y: { min: 0.25, max: 1 } }}
            colors={{
                background: "#1e1e1e",
                particles: ["#5f6f7e", "#fcf9f8", "#d4c8c8"],
            }}
            blending="overlay"
            opacity={{ center: 0.5, edge: 0 }}
            style={{
                backgroundImage:
                    `url(https://grainy-gradients.vercel.app/noise.svg)`
            }}
        /></div>
}
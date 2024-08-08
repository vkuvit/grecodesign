'use client'
import React from "react"
import styles from "./home.module.scss"
import Image from "next/image"
import { Suspense } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import "animate.css"

gsap.registerPlugin(ScrollTrigger);



export default function Home(){
    return(
        <>
        <div className="min-h-[50vh] w-screen">

        </div>
        </>
    )
}
"use client"

import { motion as m } from "framer-motion"

const textContainer = {
  show: {
    transition: { staggerChildren: 0.05 },
  },
}

const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
}

const TypingText = ({
  title,
  className,
}: {
  title: string
  className?: string
}) => (
  <m.p
    variants={textContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.5 }}
    className={`${className}`}
  >
    {Array.from(title).map((letter, i) => (
      <m.span key={`${i}-letters`} variants={textVariant2}>
        {letter === " " ? "\u00A0" : letter}
      </m.span>
    ))}
  </m.p>
)

export default TypingText

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import {
    FaGraduationCap,
    FaLaptopCode,
    FaLayerGroup,
    FaLightbulb,
    FaChevronLeft,
    FaChevronRight
} from "react-icons/fa"

function About() {

    const nextCard = () => {
        setActiveIndex((prev) => (prev + 1) % cards.length)
    }

    const prevCard = () => {
        setActiveIndex((prev) =>
            prev === 0 ? cards.length - 1 : prev - 1
        )
    }

    const [activeIndex, setActiveIndex] = useState(0)

    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {

        if (isPaused) return

        const interval = setInterval(() => {
            nextCard()
        }, 5000)

        return () => clearInterval(interval)

    }, [isPaused])

    const [flippedCard, setFlippedCard] = useState(null)

    const toggleFlip = (index) => {
        setFlippedCard(flippedCard === index ? null : index)
    }

    const cards = [
        {
            icon: <FaGraduationCap />,
            title: "Education",
            subtitle: "Academic Journey",
            text: "B.E. Computer Science Engineering",
            details:
                "Currently pursuing Computer Science Engineering focusing on core computer science fundamentals, software engineering concepts, and practical development skills, building real-world applications."
        },

        {
            icon: <FaLaptopCode />,
            title: "Focus",
            subtitle: "Development Goals",
            text: "Software Development",
            details:
                "Focused on strengthening my software development skills by building scalable applications, designing efficient solutions, and applying knowledge to solve real-world problems."
        },

        {
            icon: <FaLayerGroup />,
            title: "Practices",
            subtitle: "Hands-on Experience",
            text: "Full Stack • Problem Solving • AI/ML",
            details:
                "Hands-on practice in full-stack development. I also work on problem solving and have training experience in AI and ML concepts such as EDA, Statistical Methods and ML models."
        },

        {
            icon: <FaLightbulb />,
            title: "Interests",
            subtitle: "Curiosity & Exploration",
            text: "AI-Assisted Learning",
            details:
                "Interested in continuously exploring and understanding AI learning methods and diving into different domains of computer science and emerging technologies."
        }
    ]

    const [mouseX, setMouseX] = useState(0)

    return (
        <section
            id="about"
            className="min-h-screen flex items-center px-10 lg:px-20"
        >

            <div className="max-w-7xl mx-auto w-full">

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-center"
                >
                    About <span className="text-blue-400">Me</span>
                </motion.h2>

                <div className="w-20 h-[2px] bg-blue-400 mx-auto mt-3 mb-12 rounded"></div>


                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT TEXT */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-xl"
                    >

                        <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-6">
                            I’m currently a pre-final year Computer Science Engineering student who enjoys
                            understanding how systems work and turning ideas into practical solutions.
                            My learning journey focuses on strengthening core computer science concepts
                            while gaining hands-on experience in software development.
                        </p>

                        <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
                            Along the way, I’ve been exploring full-stack development, problem solving,
                            and the growing field of Artificial Intelligence and Machine Learning.
                            I enjoy experimenting with new technologies, analyzing data and models,
                            and continuously improving my skills through projects, practice,
                            and curiosity-driven learning.
                        </p>

                    </motion.div>


                    {/* RIGHT CARDS */}
                    <div
                        className="relative flex items-center justify-center w-full cursor-pointer"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}

                    >
                        {/*FADE*/}
                        {/* <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-[230px] w-32 bg-gradient-to-r from-[#081429] to-transparent opacity-80 z-10"></div> */}
                        {/* <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[230px] w-32 bg-gradient-to-l from-[#081429] to-transparent opacity-80 z-10"></div> */}

                        {/* LEFT ARROW */}
                        <button
                            onClick={prevCard}
                            className="absolute -left-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full border border-gray-600 bg-[#0f1b33]/90 backdrop-blur hover:border-blue-400 hover:bg-blue-500/10 hover:scale-110 transition duration-300"
                        >
                            <FaChevronLeft className="text-gray-300 text-sm" />
                        </button>

                        {/* CARD SCROLL */}
                        {/* <div className="relative flex items-center justify-center w-full max-w-[520px] h-[260px] mx-auto overflow-hidden"> */}
                        <div className="relative flex items-center justify-center w-full max-w-[650px] h-[350px] mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

                            {cards.map((card, index) => {

                                let position = index - activeIndex

                                if (position > cards.length / 2) {
                                    position -= cards.length
                                }

                                if (position < -cards.length / 2) {
                                    position += cards.length
                                }

                                return (
                                    <motion.div
                                        className="absolute w-[255px] h-[300px] perspective"
                                        onClick={() => {
                                            if (index !== activeIndex) {
                                                setActiveIndex(index)
                                            }
                                        }}
                                        animate={{
                                            x: position * 260,
                                            scale: position === 0 ? 1.08 : 0.85,
                                            opacity: Math.abs(position) > 1 ? 0 : position === 0 ? 1 : 0.6,
                                            zIndex: position === 0 ? 10 : 1,
                                            filter: position === 0 ? "blur(0px)" : "blur(1.3px)"
                                        }}

                                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                    >

                                        <div
                                            className={`relative w-full h-full duration-500 transform-style preserve-3d ${flippedCard === index ? "rotate-y-180" : ""
                                                }`}
                                        >

                                            {/* FRONT */}
                                            <div className="absolute w-full h-full backface-hidden bg-[#0f1b33] rounded-xl border border-gray-700 p-6 flex flex-col justify-between">

                                                {/* Title Row */}
                                                <div className="flex items-center gap-3">

                                                    <div className="text-blue-400 text-2xl">
                                                        {card.icon}
                                                    </div>

                                                    <h3 className="text-xl font-semibold text-white">
                                                        {card.title}
                                                    </h3>

                                                </div>

                                                {/* Subtitle */}
                                                <p className="text-base text-gray-400 mt-2">
                                                    {card.subtitle}
                                                </p>

                                                {/* Divider */}
                                                <div className="w-48 h-[2px] bg-gradient-to-r from-blue-400 to-transparent mt-1"></div>

                                                <p className="text-gray-400 text-base mt-4">
                                                    {card.text}
                                                </p>

                                                <button
                                                    className="mt-4 inline-flex items-center gap-2 text-blue-400 text-sm font-medium hover:text-blue-300 transition group"
                                                    onClick={() => toggleFlip(index)}
                                                >

                                                    View Details

                                                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                                                        →
                                                    </span>

                                                </button>

                                            </div>

                                            {/* BACK */}
                                            <div className="absolute w-full h-full rotate-y-180 backface-hidden bg-[#0f1b33] rounded-xl border border-blue-400 p-6 flex flex-col justify-between">

                                                <div className="flex items-center gap-3">

                                                    <div className="text-blue-400 text-2xl">
                                                        {card.icon}
                                                    </div>

                                                    <h3 className="text-lg font-semibold text-white">
                                                        {card.title}
                                                    </h3>

                                                </div>

                                                <p className="text-gray-400 text-sm leading-relaxed">
                                                    {card.details}
                                                </p>

                                                <button
                                                    className="mt-4 inline-flex items-center gap-2 text-blue-400 text-sm font-medium hover:text-blue-300 transition group"
                                                    onClick={() => toggleFlip(index)}
                                                >

                                                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                                                        ←
                                                    </span>
                                                    Back


                                                </button>

                                            </div>

                                        </div>
                                    </motion.div>
                                )

                            })}

                        </div>

                        {/* RIGHT ARROW */}
                        <button
                            onClick={nextCard}
                            className="absolute -right-14 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center rounded-full border border-gray-600 bg-[#0f1b33]/90 backdrop-blur hover:border-blue-400 hover:bg-blue-500/10 hover:scale-110 transition duration-300"
                        >
                            <FaChevronRight className="text-gray-300 text-sm" />
                        </button>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default About
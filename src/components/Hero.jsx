import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"

import {
    FaJava,
    FaReact,
    FaGitAlt,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
    FaCode,
    FaDatabase
} from "react-icons/fa"

import {
    SiMysql,
    SiPostman,
    SiLeetcode,
    SiSpringboot
} from "react-icons/si"

function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center px-16"
        >

            <div className="grid md:grid-cols-2 gap-20 items-center w-full">

                {/* LEFT SIDE */}
                <div className="max-w-3xl">

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6"
                    >

                        <div className="flex items-center gap-3">

                            <p className="text-3xl md:text-4xl font-semibold text-blue-300 arabic-text">
                                السلام عليكم
                            </p>

                            <span className="text-sm text-gray-400">
                                (Peace be upon you)
                            </span>

                        </div>

                    </motion.div>

                    <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                        I'm{" "}
                        <span className="text-blue-400">
                            <Typewriter
                                words={["Mohamed Eahiya"]}
                                loop={1}
                                cursor
                                cursorStyle="|"
                                typeSpeed={90}
                                delaySpeed={2000}
                            />
                        </span>
                    </h1>

                    {/* INTRO FADE IN */}
                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="text-xl text-gray-300 mt-6 leading-relaxed"
                    >
                        Computer Science Engineering student passionate about building
                        scalable full-stack applications using Java, Spring Boot and React.
                    </motion.p>

                    {/* ROLE FADE IN */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.7, duration: 0.8 }}
                        className="text-gray-400 mt-3"
                    >
                        Backend Developer • REST APIs • Problem Solver
                    </motion.p>

                    {/* BUTTONS FADE IN */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.2, duration: 0.8 }}
                        className="mt-10 flex flex-col items-start gap-4"
                    >

                        {/* Buttons */}
                        <div className="flex gap-6">

                            <a
                                href="#projects"
                                className="bg-blue-600 px-7 py-3 rounded-lg hover:bg-blue-700 transition"
                            >
                                Explore My Works
                            </a>

                            <a
                                href="/resume.pdf"
                                className="border border-blue-400 px-7 py-3 rounded-lg hover:bg-blue-400 hover:text-black transition"
                            >View Resume
                            </a>

                            <a
                                href="#contact"
                                className="border border-white px-7 py-3 rounded-lg hover:bg-white hover:text-black transition"
                            >
                                Connect with Me
                            </a>

                        </div>

                        {/* Internship Line */}
                        <p className="text-sm text-gray-400 mt-2">
                            Open to internships and collaborative projects
                        </p>

                    </motion.div>

                </div>


                {/* RIGHT SIDE FLOATING TECH CLOUD */}

                <div className="relative h-[650px] w-full opacity-90">

                    <motion.div
                        animate={{ y: [0, -80, 40, 0], x: [0, 50, -40, 0], rotate: [0, 20, -15, 0] }}
                        transition={{ duration: 14, repeat: Infinity }}
                        className="absolute text-blue-400 text-8xl top-[5%] left-[10%]"
                    >
                        <FaReact />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 70, -40, 0], x: [0, -40, 30, 0], rotate: [0, -10, 15, 0] }}
                        transition={{ duration: 16, repeat: Infinity }}
                        className="absolute text-green-500 text-8xl top-[5%] right-[10%]"
                    >
                        <SiSpringboot />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -60, 30, 0], x: [0, 40, -30, 0] }}
                        transition={{ duration: 13, repeat: Infinity }}
                        className="absolute text-orange-500 text-8xl top-[28%] left-[20%]"
                    >
                        <FaGitAlt />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 70, -40, 0], x: [0, -30, 40, 0] }}
                        transition={{ duration: 15, repeat: Infinity }}
                        className="absolute text-orange-400 text-8xl top-[30%] right-[20%]"
                    >
                        <SiPostman />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -50, 30, 0], x: [0, 30, -20, 0] }}
                        transition={{ duration: 14, repeat: Infinity }}
                        className="absolute text-green-400 text-8xl top-[45%] left-[5%]"
                    >
                        <FaDatabase />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 60, -40, 0], x: [0, -30, 20, 0] }}
                        transition={{ duration: 13, repeat: Infinity }}
                        className="absolute text-purple-400 text-8xl top-[50%] right-[5%]"
                    >
                        <FaCode />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -70, 40, 0], x: [0, 20, -30, 0] }}
                        transition={{ duration: 16, repeat: Infinity }}
                        className="absolute text-orange-600 text-8xl bottom-[30%] left-[15%]"
                    >
                        <FaHtml5 />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 60, -30, 0], x: [0, -20, 30, 0] }}
                        transition={{ duration: 14, repeat: Infinity }}
                        className="absolute text-blue-500 text-8xl bottom-[25%] right-[15%]"
                    >
                        <FaCss3Alt />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -80, 40, 0], x: [0, 40, -20, 0] }}
                        transition={{ duration: 17, repeat: Infinity }}
                        className="absolute text-orange-400 text-8xl bottom-[10%] left-[25%]"
                    >
                        <FaJava />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 70, -40, 0], x: [0, -30, 20, 0] }}
                        transition={{ duration: 15, repeat: Infinity }}
                        className="absolute text-white text-8xl bottom-[10%] right-[25%]"
                    >
                        <FaGithub />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -70, 40, 0], x: [0, 30, -30, 0] }}
                        transition={{ duration: 16, repeat: Infinity }}
                        className="absolute text-blue-500 text-8xl top-[65%] right-[35%]"
                    >
                        <SiMysql />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 70, -40, 0], x: [0, -20, 30, 0] }}
                        transition={{ duration: 14, repeat: Infinity }}
                        className="absolute text-yellow-400 text-8xl top-[65%] left-[35%]"
                    >
                        <SiLeetcode />
                    </motion.div>

                </div>

            </div>

        </section>
    )
}

export default Hero
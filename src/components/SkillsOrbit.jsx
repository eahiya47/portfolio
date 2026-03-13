import { FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa"
import { SiSpringboot, SiMysql, SiCplusplus } from "react-icons/si"

function SkillsOrbit() {

    const skills = [
        { icon: <FaJava />, angle: 0 },
        { icon: <FaPython />, angle: 45 },
        { icon: <SiCplusplus />, angle: 90 },
        { icon: <FaReact />, angle: 135 },
        { icon: <SiSpringboot />, angle: 180 },
        { icon: <SiMysql />, angle: 225 },
        { icon: <FaHtml5 />, angle: 270 },
        { icon: <FaCss3Alt />, angle: 315 },
    ]

    return (

        <section className="min-h-screen flex items-center justify-center">

            <div className="relative w-[500px] h-[500px] flex items-center justify-center perspective-[1000px]">

                {/* CENTER */}
                <div className="w-28 h-28 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold text-lg shadow-lg">
                    My Skills
                </div>

                {/* ORBIT RING */}
                <div className="absolute w-full h-full border border-blue-400/30 rounded-full animate-spin-slow rotate-x-60">

                    {skills.map((skill, index) => {

                        const radius = 200
                        const angle = skill.angle * (Math.PI / 180)

                        const x = radius * Math.cos(angle)
                        const y = radius * Math.sin(angle)

                        return (

                            <div
                                key={index}
                                className="absolute text-3xl text-blue-400 animate-spin-reverse"
                                style={{
                                    left: `calc(50% + ${x}px)`,
                                    top: `calc(50% + ${y}px)`
                                }}
                            >
                                {skill.icon}
                            </div>

                        )

                    })}

                </div>

            </div>

        </section>

    )

}

export default SkillsOrbit
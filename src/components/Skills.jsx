import { motion } from "framer-motion"

function Skills() {

    const skillGroups = [
        {
            title: "Languages",
            skills: ["Java", "Python", "C++"]
        },
        {
            title: "Frontend",
            skills: ["HTML", "CSS", "React"]
        },
        {
            title: "Backend",
            skills: ["Spring Boot", "REST APIs", "MySQL"]
        },
        {
            title: "AI & Data",
            skills: ["EDA", "Statistical Methods", "ML Models"]
        },
        {
            title: "Tools",
            skills: ["GitHub", "Postman", "Thunder Client", "Swagger", "VS Code"]
        }
    ]

    return (
        <section id="skills" className="min-h-screen flex items-center px-10 lg:px-20">

            <div className="max-w-7xl mx-auto w-full">

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-center"
                >
                    My <span className="text-blue-400">Skills</span>
                </motion.h2>

                <div className="w-20 h-[2px] bg-blue-400 mx-auto mt-3 mb-12"></div>


                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {skillGroups.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-[#0f1b33] border border-gray-700 rounded-xl p-6 hover:border-blue-400 transition duration-300"
                        >

                            <h3 className="text-xl font-semibold text-white mb-5">
                                {group.title}
                            </h3>

                            <div className="flex flex-wrap gap-3">

                                {group.skills.map((skill, i) => (
                                    <motion.span
                                        key={i}
                                        whileHover={{
                                            scale: 1.1,
                                            boxShadow: "0px 0px 12px rgba(59,130,246,0.6)"
                                        }}
                                        className="px-4 py-1 text-sm bg-blue-500/10 border border-blue-400/30 rounded-full text-blue-300 cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}

                            </div>

                        </motion.div>
                    ))}

                </div>

            </div>

        </section>
    )

}

export default Skills
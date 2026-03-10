function Skills() {

    const skills = [
        "Java",
        "Spring Boot",
        "React",
        "SQL",
        "Git",
        "Postman",
        "REST API",
        "HTML",
        "CSS"
    ]

    return (
        <section id="skills" className="py-24 px-6 bg-slate-900">

            <div className="max-w-6xl mx-auto text-center">

                <h2 className="text-4xl font-bold mb-12">
                    Skills
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-slate-800 p-6 rounded-xl hover:bg-blue-600 transition duration-300"
                        >
                            <p className="text-lg font-semibold">{skill}</p>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}

export default Skills
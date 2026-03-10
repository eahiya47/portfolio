function Projects() {

    const projects = [
        {
            title: "Scholarship Management System",
            description:
                "Full-stack web application built with Spring Boot and React that allows students to apply for scholarships and manage applications through REST APIs.",
            tech: "Spring Boot | React | MySQL",
            github: "#"
        },
        {
            title: "Home Gardening Management System",
            description:
                "REST-based backend system to manage home gardening activities with CRUD operations using Spring Data JPA.",
            tech: "Java | Spring Boot | REST API",
            github: "#"
        }
    ]

    return (
        <section id="projects" className="py-24 px-6 bg-slate-800">

            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl font-bold text-center mb-16">
                    Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-8">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-slate-900 p-8 rounded-xl hover:scale-105 transition duration-300"
                        >

                            <h3 className="text-2xl font-bold mb-4">
                                {project.title}
                            </h3>

                            <p className="text-gray-300 mb-4">
                                {project.description}
                            </p>

                            <p className="text-blue-400 mb-6">
                                {project.tech}
                            </p>

                            <a
                                href={project.github}
                                className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700"
                            >
                                View Code
                            </a>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}

export default Projects
function Contact() {
    return (
        <section id = "contact" className="py-24 px-6 bg-slate-900">

            <div className="max-w-4xl mx-auto text-center">

                <h2 className="text-4xl font-bold mb-8">
                    Contact Me
                </h2>

                <p className="text-gray-400 mb-10">
                    I'm always open to discussing new opportunities,
                    collaborations, or interesting projects.
                </p>

                <div className="flex justify-center gap-6 flex-wrap">

                    <a
                        href="mailto:eahiya007@gmail.com"
                        className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
                    >
                        Email Me
                    </a>

                    <a
                        href="https://github.com/"
                        className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://linkedin.com/"
                        className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black"
                    >
                        LinkedIn
                    </a>

                </div>

            </div>

        </section>
    )
}

export default Contact
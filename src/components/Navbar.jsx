function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">

            <div className="flex justify-between items-center px-10 py-4">

                {/* Logo */}
                <h1 className="text-xl font-bold text-blue-400">
                    Eahiya.dev
                </h1>

                {/* Navigation */}
                <ul className="flex gap-8 text-gray-300">

                    <li>
                        <a href="#home" className="hover:text-white transition">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#about" className="hover:text-white transition">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#skills" className="hover:text-white transition">
                            Skills
                        </a>
                    </li>

                    <li>
                        <a href="#projects" className="hover:text-white transition">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#contact" className="hover:text-white transition">
                            Contact
                        </a>
                    </li>

                </ul>

            </div>

        </nav>
    )
}

export default Navbar
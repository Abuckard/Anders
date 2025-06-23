import InfoCard from "./InfoCard";
import { motion } from "framer-motion";


function Hero() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-200 animate-gradient text-white flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                Digital Value Creation
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl mb-8 text-white/90">
                From idea to digital reality.
                We help businesses start, grow and scale with the right strategy, technology and partnerships.
            </p>
            <button className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl shadow hover:bg-slate-200 transition">
                Start Your Journey
            </button>

            <h2 className="text-2xl font-semibold mt-16 mb-4">
                Companies We Are Currently Supporting
            </h2>
            <motion.div
                className="w-24 h-1 mx-auto mb-8 bg-white/50 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            />


            <motion.div
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.2,
                        },
                    },
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <InfoCard icon="🛡️" title="Clarus" description="Clarus offers advanced stone chip protection films for vehicles, combining durability with crystal-clear transparency." link="https://clarusprotect.com/" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <InfoCard icon="🎨" title="Design First" description="Pixel-perfect UX/UI tailored to user goals." link="#" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <InfoCard icon="⚙️" title="Fullstack Dev" description="Modern architecture & rapid delivery." link="#" />
                </motion.div>
            </motion.div>

        </div>

    );
}

export default Hero;

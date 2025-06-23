import InfoCard from "./InfoCard";
function Hero() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-200 animate-gradient text-white flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                Digital Value Creation
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl mb-8 text-white/90">
                We help ambitious companies turn ideas into impactful digital products through strategy, design and code.
            </p>
            <button className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl shadow hover:bg-slate-200 transition">
                Start Your Journey
            </button>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <InfoCard
                    icon="🚀"
                    title="Built for Growth"
                    description="Scalable platforms with React, Node, and cloud."
                    link="#"
                />
                <InfoCard
                    icon="🎨"
                    title="Design First"
                    description="Pixel-perfect UX/UI tailored to user goals."
                    link="#"
                />
                <InfoCard
                    icon="⚙️"
                    title="Fullstack Dev"
                    description="Modern architecture & rapid delivery."
                    link="#"
                />
            </div>


        </div>

    );
}

export default Hero;



// function Hero() {
//     return (
//         <div className="relative min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-200 animate-gradient text-white flex flex-col items-center justify-center px-4 text-center overflow-hidden">
//             {/* Blob bakom rubrik */}
//             <svg
//                 className="absolute -top-40 left-1/2 -translate-x-1/2 opacity-30 blur-3xl"
//                 width="1000"
//                 height="1000"
//                 viewBox="0 0 1000 1000"
//                 xmlns="http://www.w3.org/2000/svg"
//             >
//                 <defs>
//                     <radialGradient id="blobGradient" cx="50%" cy="50%" r="50%">
//                         <stop offset="0%" stopColor="#8b5cf6" />
//                         <stop offset="100%" stopColor="#0ea5e9" />
//                     </radialGradient>
//                 </defs>
//                 <circle cx="500" cy="500" r="400" fill="url(#blobGradient)" />
//             </svg>


//             {/* Innehåll */}
//             <div className="relative z-10">
//                 <h1 className="text-5xl sm:text-6xl font-bold mb-6">
//                     Digital Value Creation
//                 </h1>
//                 <p className="text-lg sm:text-xl max-w-2xl mb-8 text-white/90">
//                     We help ambitious companies turn ideas into impactful digital products
//                     through strategy, design and code.
//                 </p>
//                 <button className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl shadow hover:bg-slate-200 transition">
//                     Start Your Journey
//                 </button>
//             </div>

//             {/* SVG Wave i botten */}
//             <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
//                 <svg
//                     className="relative block w-full h-[120px]"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 1440 320"
//                     preserveAspectRatio="none"
//                 >
//                     <path
//                         fill="#1e1b4b"
//                         d="M0,160 C360,280 1080,40 1440,160 L1440,320 L0,320 Z"
//                     />
//                 </svg>
//             </div>

//         </div>
//     );
// }

// export default Hero;

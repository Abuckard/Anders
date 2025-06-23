// function InfoCard({
//     title = "Example Title",
//     description = "This is a sample description. You can customize this card with props.",
//     icon = "💡",
// }) {
//     return (
//         <div className="mt-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg text-white w-full max-w-md text-center">
//             <div className="text-4xl mb-4">{icon}</div>
//             <h3 className="text-xl font-semibold mb-2">{title}</h3>
//             <p className="text-sm text-slate-200">{description}</p>
//         </div>
//     );
// }

// export default InfoCard;


import { motion } from "framer-motion";

function InfoCard({
    title = "Example Title",
    description = "This is a sample description.",
    icon = "💡",
    link = "#",
}) {
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl transition duration-300 text-white max-w-sm w-full text-center hover:bg-white/20"
        >
            {/* Ikon direkt utan ring */}
            <div className="mb-4 text-4xl">{icon}</div>

            <h3 className="text-xl font-semibold mb-2 group-hover:text-white">
                {title}
            </h3>
            <p className="text-sm text-slate-200 group-hover:text-slate-100">
                {description}
            </p>
        </motion.a>
    );
}

export default InfoCard;

import InfoCard from "./InfoCard";

function FeaturesSection() {
    return (
        <div className="bg-slate-800 py-16 px-4 sm:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
                How We Create Digital Value
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                <InfoCard
                    icon="💡"
                    title="Strategy & Discovery"
                    description="We align business goals with user needs to define the roadmap for success."
                />
                <InfoCard
                    icon="🎨"
                    title="UX & UI Design"
                    description="We craft intuitive, engaging interfaces that elevate your product experience."
                />
                <InfoCard
                    icon="💻"
                    title="Development"
                    description="Modern, scalable web solutions built with React, Node.js, and beyond."
                />
            </div>
        </div>
    );
}

export default FeaturesSection;

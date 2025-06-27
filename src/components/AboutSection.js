import AndersImg from "../assets/Anders.jpg";

function AboutSection() {
    return (
        <section className="backdrop-blur-sm text-white py-20 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <img
                    src={AndersImg}
                    alt="Anders Bylund"
                    className="w-32 h-32 mx-auto rounded-full object-cover mb-6 border-4 border-white/30 shadow-lg"
                />
                <div className="mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet the Founder</h2>
                    <p className="text-slate-200">
                        Anders Bylund is the founder and CEO of Digital Value Creation.
                        With extensive experience in business development, entrepreneurship and digital transformation,
                        he is passionate about helping new ventures succeed and grow in the Swedish market.
                    </p>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Who We Are</h2>
                <p className="max-w-3xl mx-auto text-lg text-slate-200">
                    Digital Value Creation is a Swedish consulting firm specialized in supporting startups and growth companies in turning ideas into scalable businesses.
                    <br /><br />
                    We combine expertise in business development, digital strategy, technology, and product development. Through close partnerships with our clients, we guide new ventures through their journey — from initial idea to fully operational and growing businesses.
                    <br /><br />
                    Whether you're starting something new or scaling up an existing business, we help you define your strategy, build your digital product, and create long-term value.
                </p>
            </div>
        </section>
    );
}

export default AboutSection;

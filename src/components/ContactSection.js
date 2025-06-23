function ContactSection() {
    return (
        <section className="backdrop-blur-sm text-white py-20 px-6">
            <div className="max-w-xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Get in Touch</h2>
                <p className="text-slate-200 mb-8">
                    Interested in working with us? Send us a message and we'll get back to you within 24 hours.
                </p>
                <form className="space-y-4">
                    <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded bg-slate-800/80 text-white" />
                    <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded bg-slate-800/80 text-white" />
                    <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-2 rounded bg-slate-800/80 text-white"></textarea>
                    <button type="submit" className="bg-white text-slate-900 px-6 py-2 rounded font-semibold hover:bg-slate-200 transition">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ContactSection;
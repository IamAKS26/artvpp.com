import HeadphoneScroll from '../components/zenith/HeadphoneScroll';

const ZenithLanding = () => {
    return (
        <main className="bg-[#050505] min-h-screen font-sans selection:bg-white/20 selection:text-white">
            <HeadphoneScroll />

            {/* Additional Content below the scroll if needed */}
            <section className="h-screen flex items-center justify-center bg-[#050505] text-white/40 border-t border-white/5">
                <div className="text-center">
                    <p className="text-sm uppercase tracking-[0.2em] mb-4">Specifications</p>
                    <div className="grid grid-cols-2 gap-x-12 gap-y-8 text-left max-w-2xl mx-auto px-8">
                        <div>
                            <h4 className="text-white/80 font-medium mb-1">Frequency Response</h4>
                            <p>4Hz - 40,000Hz</p>
                        </div>
                        <div>
                            <h4 className="text-white/80 font-medium mb-1">Impedance</h4>
                            <p>32 Ohms</p>
                        </div>
                        <div>
                            <h4 className="text-white/80 font-medium mb-1">Driver Type</h4>
                            <p>Dynamic Closed-Back</p>
                        </div>
                        <div>
                            <h4 className="text-white/80 font-medium mb-1">Connectivity</h4>
                            <p>Bluetooth 5.3 / 3.5mm Jack</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ZenithLanding;

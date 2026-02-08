import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const frameCount = 120; // ezgif-frame-001.jpg to ezgif-frame-120.jpg

const HeadphoneScroll = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Parallax & Scale effects for single image
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1.5]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <div ref={containerRef} className="h-[400vh] relative bg-[#050505]">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Single WebP Asset */}
                <motion.img
                    src="/frames/use.webp"
                    alt="Zenith Headphone"
                    style={{ scale, opacity, y }}
                    className="w-full h-full object-contain"
                />

                {/* Dramatic Vignette */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#050505]/90 pointer-events-none" />
            </div>

            {/* Story Overlays - Positioned absolutely within the scroll container */}
            <OverlaySection top="10%" align="center" text="Zenith X" subtext="Pure Sound." opacity={useTransform(scrollYProgress, [0, 0.15], [1, 0])} />
            <OverlaySection top="35%" align="left" text="Precision Engineering" subtext="Crafted for audio perfection." opacity={useTransform(scrollYProgress, [0.25, 0.35, 0.45], [0, 1, 0])} />
            <OverlaySection top="60%" align="right" text="Titanium Drivers" subtext="Unmatched clarity and depth." opacity={useTransform(scrollYProgress, [0.50, 0.60, 0.70], [0, 1, 0])} />
            <OverlaySection top="85%" align="center" text="Hear Everything" subtext="Pre-order now." opacity={useTransform(scrollYProgress, [0.75, 0.9], [0, 1])} />
        </div>
    );
};

const OverlaySection = ({ top, align, text, subtext, opacity }) => {
    const alignments = {
        left: 'items-start text-left pl-12 md:pl-24',
        center: 'items-center text-center',
        right: 'items-end text-right pr-12 md:pr-24'
    };

    return (
        <motion.div
            style={{ opacity, top }}
            className={`absolute w-full flex flex-col justify-center ${alignments[align]} pointer-events-none z-10 px-6`}
        >
            <h2 className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white/90 to-white/50 tracking-tighter mb-4">
                {text}
            </h2>
            <p className="text-xl md:text-2xl text-white/60 font-light tracking-wide">
                {subtext}
            </p>
        </motion.div>
    );
};

export default HeadphoneScroll;

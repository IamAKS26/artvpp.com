import React from 'react';

const ScrollFrameHeroBackground = () => {
    return (
        <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
            {/* 
                Option B: Single WebP Animation
                Since use.webp is a single file, we cannot scrub it with scroll.
                It will play continuously as a high-quality background.
            */}
            <img
                src="/frames/use.webp"
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Soft Gradient Overlay (Layer 1) matching Theme */}
            {/* Soft Gradient Overlay (Layer 1) matching Theme */}
            {/* Drastically reduced opacity for maximum clarity: 0.10 (Light), 0.20 (Dark) */}
            <div className="absolute inset-0 z-[1] bg-[rgba(255,219,232,0.10)] dark:bg-[rgba(43,0,19,0.20)] transition-colors duration-500" />
        </div>
    );
};

export default ScrollFrameHeroBackground;

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from './Button';

import { Link } from 'react-router-dom';

const ArtistCard = ({ name, specialty, image }) => (
    <div className="flex-shrink-0 w-72 snap-start">
        <Link to={`/creator/${encodeURIComponent(name)}`}>
            <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] mb-4 cursor-pointer">
                <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="primary" size="sm" className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">View Profile</Button>
                </div>
            </div>
            <h3 className="font-bold text-lg text-on-light-text dark:text-on-dark-text group-hover:text-primary transition-colors">{name}</h3>
            <p className="text-sm text-on-light-text-muted dark:text-on-dark-text-muted">{specialty}</p>
        </Link>
    </div>
);

const FeaturedArtistsCarousel = () => {
    const artists = [
        { name: "Sarah Jenkins", specialty: "Oil Portraits", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600" },
        { name: "David Chen", specialty: "Concept Art", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600" },
        { name: "Maria Garcia", specialty: "Murals", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600" },
        { name: "James Wilson", specialty: "Sculpture", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" },
        { name: "Emily Ro", specialty: "Digital Illustration", image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=600" },
    ];

    return (
        <section className="py-12">
            <div className="flex justify-between items-end mb-8 px-4 sm:px-0">
                <div>
                    <h2 className="text-2xl font-bold font-display text-on-light-text dark:text-on-dark-text">Top Rated Creators</h2>
                    <p className="text-on-light-text-muted dark:text-on-dark-text-muted">Hire the best talent for your project.</p>
                </div>
                <Button variant="outline" size="sm">View All</Button>
            </div>

            {/* Horizontal Scroll Container */}
            <div className="flex gap-6 overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar snap-x snap-mandatory">
                {artists.map((artist, idx) => (
                    <ArtistCard key={idx} {...artist} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedArtistsCarousel;

import { Heart, Plus } from 'lucide-react';



const ArtCardDetailed = ({ image, title, artist, price, category }) => {
    return (
        <div className="mb-8 break-inside-avoid">
            <div className="group relative rounded-2xl overflow-hidden bg-gray-100 mb-3 cursor-pointer">
                <img
                    src={image}
                    alt={title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <button className="absolute bottom-4 right-4 px-4 py-2 bg-white text-black font-semibold rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-gray-100">
                    ${price}
                </button>
            </div>

            <div>
                <h3 className="font-semibold text-gray-900 text-base leading-tight">{title}</h3>
                <div className="flex items-center justify-between mt-1">
                    <p className="text-gray-500 text-sm">{artist}</p>
                    {/* Rating or Likes could go here */}
                </div>
            </div>
        </div>
    )
}

export default ArtCardDetailed;

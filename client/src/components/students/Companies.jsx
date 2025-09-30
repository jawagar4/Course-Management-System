import React from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';



const Companies = () => {
    const companyLogos = ["slack", "framer", "netflix", "google", "linkedin", "instagram", "facebook",];

    return (
        <>
          
            {/* Marquee Section */}

            <div className="overflow-hidden w-full relative  mx-auto select-none mx-8 mt-8">
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
                <div className="marquee-inner flex will-change-transform min-w-[200%]" style={{ animationDuration: "15s" }}>
                    <div className="flex">
                        {[...companyLogos, ...companyLogos].map((company, index) => (
                            <img key={index} src={`https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${company}.svg`}
                                alt={company} className="w-full h-full object-cover mx-6" draggable={false} />
                        ))}
                    </div>
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
            </div>
        </>
    );
};
export default Companies;
import React, { useState } from 'react';
import Image from "next/image";

import arrow_left from "@/public/arrow-left.svg";
import arrow_right from "@/public/arrow-right.svg";

interface GaleryProps {
    images: string[]; // Массив URL изображений
}

const Galery: React.FC<GaleryProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [on, setOn] = useState<boolean>(false)

    const nextImage = () => {
        if (images.length <= 1)
            return
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        if (images.length <= 1)
            return
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px', border: '1px solid black', borderRadius: '5px', maxWidth: '400px', margin: 'auto' }}>
            <img
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                style={{ maxWidth: '100%', borderRadius: '5px', marginBottom: '10px' }}
            />
            <div style={{display: "flex", justifyItems: "center", alignItems: "center", justifyContent: "space-between"}}>
                <Image style={{width: "50px", height: "50px"}} src={arrow_left} alt={"arrow-left"} onClick={prevImage} />
                <Image style={{width: "50px", height: "50px"}} src={arrow_right} alt={"arrow-right"}  onClick={nextImage} />
            </div>
            <p>{`${currentIndex + 1} из ${images.length}`}</p>
        </div>
    );
};

export default Galery;

import { useEffect, useState } from 'react'

export default function Carrousel( {items, reverse = false} : {items: string[], reverse?: boolean}) {
    const [slides, setSlides] = useState([] as string[])
    useEffect(() => {
        const slides = []
        for (let i = 0; i < 2 * items.length; i++) {
            slides.push(items[i % items.length])
        }
        setSlides(slides)
    }, [items])
    return (
        <div className="slider before:h-[200px] before:w-[150px] before:absolute before:bg-gradient-to-r before:from-gray-300 before:to-transparent before:z-10 after:h-[200px] after:w-[150px] after:absolute after:bg-gradient-to-r after:from-gray-300 after:to-transparent after:z-10">
            {!reverse && (
                <div className="slide-track">
                    {slides.map((slide, index) => (
                        <div key={index} className="slide">
                            <img className="object-fill w-full h-full" src={slide} alt="" />
                        </div>
                    ))}
                </div>
            )}
            {reverse && (
                <div className="slide-track-reverse">
                    {slides.map((slide, index) => (
                        <div key={index} className="slide">
                            <img className="object-fill w-full h-full" src={slide} alt="" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}



import Image from "next/image"
import Link from "next/link"

export default function DrawsProjects({ images, isLoading, setIsLoading }) {

    return (
        <div className="flex  flex-wrap justify-center">
            {images.map(({ name, src, desc, link }, index) => {
                return (
                    <Link title={name} className="cover relative m-5 overflow-hidden flex w-80 h-40 justify-center items-center rounded-lg" key={index} href={link} target="_blank" referrerPolicy="no-referrer">
                        <span className="info absolute bg-black bg-opacity-90 h-full font-bold w-full flex flex-col items-center justify-center">{name[0].toUpperCase() + name.substr(1)}<p className="text-center mt-5 font-thin">{desc}</p></span>

                        <span className={`absolute w-16 h-16 border-l-4 rounded-full animate-spin my-5 ${!isLoading ? 'hidden' : ''}`}></span>

                        {(src.includes('.mp4')) ?
                            <video className={`w-full h-full object-cover object-center ${isLoading ? 'hidden' : ''}`} src={src} loop autoPlay /> :
                            <Image src={src} alt={desc} fill="cover" loading="eager" className={`images ${isLoading ? 'hidden' : ''}`} sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                                onLoadingComplete={() => setIsLoading(false)}
                            />
                        }
                    </Link>
                )
            })}
        </div>
    )
}
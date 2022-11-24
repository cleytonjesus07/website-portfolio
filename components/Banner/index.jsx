import Image from "next/image";
import { useEffect, useRef } from "react"

export default function Banner({ dataUser }) {
   
    const profilePic = dataUser.avatar_url
    const h2Ref = useRef(), idInterval = useRef();
    useEffect(() => {
        const word = "Bem-vindo ao meu portfólio.😃";
        let index = 0;
        idInterval.current = setInterval(() => {
            if (index >= word.length) {
                return clearInterval(idInterval.current);
            }
            h2Ref.current.innerHTML += word[index++]
        }, 500);

        return () => clearInterval(idInterval.current);
    }, [])
    return (
        <div className="relative bg-slate-800 my-4 rounded-md px-10 max-md:flex-col flex justify-between  items-center h-[350px] ">
            <div className="flex items-center mt-5">
                <h2 ref={h2Ref} className="text-5xl 
                font-light  
                 select-none
                text-center
                ml-11
                max-md:ml-0
                ">
                </h2>
            </div>
            {profilePic && (
                <Image priority={true} src={profilePic} width={400} height={400} className="profile absolute overflow-hidden rounded-full border-solid border-8 border-gray-800 -bottom-20 
                    shadow-inner shadow-black
                    bg-gray-900
                    right-5
                    max-md:right-auto
                    w-80 h-80
                    max-md:w-44 max-md:h-44
                " />
            )}
        </div>
    )
}
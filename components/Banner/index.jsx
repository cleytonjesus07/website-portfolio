import { useEffect, useRef, useState } from "react"

export default function Banner() {
    const [profilePic, setProfilePic] = useState();
    const h2Ref = useRef(), idInterval = useRef();
    useEffect(() => {
        async function getImage() {
            let imageUrl = await fetch('https://api.github.com/users/cleytonjesus07', { cache: 'force-cache' });
            imageUrl = await imageUrl.json();
            setProfilePic(imageUrl.avatar_url)
        }

        const word = "Bem-vindo ao meu portfólio.😃";
        let index = 0;
        idInterval.current = setInterval(() => {
            if (index >= word.length) {
                return clearInterval(idInterval.current);
            }
            h2Ref.current.innerHTML += word[index++]
        }, 500);
        getImage();
        return () => clearInterval(idInterval.current);
    }, [])
    return (
        <div className="relative bg-slate-800 my-4 rounded-md p-4 max-md:flex-col flex justify-between  items-center h-[350px] ">
            <div className="flex items-center h-1/2">
                <h2 ref={h2Ref} className="text-5xl font-light ml-40 max-md:ml-0 select-none">
                </h2>
            </div>
            {profilePic && (
                <div style={{ background: `url(${profilePic})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', zIndex: 1 }} className=" absolute max-md:relative overflow-hidden rounded-full border-solid border-8 border-gray-800 -bottom-20 right-0
                shadow-inner shadow-black
                bg-gray-900
                 w-[400px] h-[400px]
                 max-md:w-44 max-md:h-44
                ">

                </div>
            )}
        </div>
    )
}
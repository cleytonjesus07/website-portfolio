
/* import { useEffect, useRef } from "react"
 */
export default function Banner({ dataUser }) {
    const profilePic = dataUser.avatar_url
   /*  const h2Ref = useRef(), idInterval = useRef();
    */ /*   useEffect(() => {
          typewriter();
          return () => clearInterval(idInterval.current);
      }, []) */

   /*  function typewriter() {
        const word = "Bem-vindo ao meu portfólio.😃";
        let index = 0;
        const timeout = 1000;
        idInterval.current = setInterval(() => {
            if (index >= word.length) {
                return clearInterval(idInterval.current);
            }
            h2Ref.current.innerHTML += word[index++]
        }, timeout);
    } */

    return (
        <div className="relative z-10 my-4 w-[90%]  mx-auto  rounded-md px-10 max-md:flex-col flex justify-between  items-center h-[350px] ">
            
            <div className=" z-10 absolute w-full h-full bg-gradient-to-r from-transparent to-black"></div>
            <div className="banner absolute  w-full h-full bg-no-repeat bg-cover " style={{ backgroundImage: "url(/assets/images/banner.jpg)" }}></div>
            {profilePic && (
                <>
                    <div
                        className={`
                        
                    profile absolute overflow-hidden rounded-full border-solid border-8 border-black -bottom-20 
                    shadow-inner shadow-black
                    bg-black
                    right-5
                    max-md:right-auto
                    w-80 h-80
                    max-md:w-44 
                    max-md:h-44
                    bg-cover
                    bg-no-repeat
                    bg-center
                    `
                        }
                        style={{ zIndex: 999, backgroundImage: `url(${profilePic})` }}
                    >
                    </div>

                </>
            )}
        </div>
    )
}
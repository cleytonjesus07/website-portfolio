import Link from "next/link"
import { BsGithub } from "react-icons/bs"

export default function GitProjects({ repos }) {
    return (
        <div className=" flex flex-wrap justify-center ">
            {
                repos.map(({ name, html_url }, index) => {
                    return (
                        <Link title={name} key={index} href={html_url} referrerPolicy={"no-referrer"} target={"_blank"}>
                            <div className="relative bg-gray-800 overflow-hidden w-80 h-40 m-5 rounded-lg hover:scale-110 transition-all ease-in hover:cursor-pointer flex pl-4 items-center ">
                                <span className="absolute flex justify-end opacity-10 -right-16">
                                    <BsGithub size={200} />
                                </span>
                                {name[0].toUpperCase() + name.substr(1)}
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}
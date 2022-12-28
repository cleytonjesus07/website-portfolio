import Link from "next/link";
import { BsGithub, BsInstagram, BsLink, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiArtstation, SiBehance, SiDeviantart, SiGmail } from "react-icons/si";

export default function SocialMedias() {
    return (
        <>
            <Link title="Link para o meu linktree" className="link border rounded-md p-2 mx-2 my-2" href={"https://linktr.ee/cleyton_jesus07"}><BsLink size={30} /></Link>
            <Link title="Link para o meu linkedin" className="link border rounded-md p-2 mx-2 my-2" href={"https://www.linkedin.com/in/cleyton-jesus-dos-santos-santana-655045149/"}><BsLinkedin size={30} /></Link>
            <Link title="Link para o meu github" className="link border rounded-md p-2 mx-2 my-2" href={"https://github.com/cleytonjesus07"}><BsGithub size={30} /></Link>
            <Link title="Link para o meu instagram" className="link border rounded-md p-2 mx-2 my-2" href={"https://www.instagram.com/cleyton_jesus07/"}><BsInstagram size={30} /></Link>
            <Link title="Link para o meu twitter" className="link border rounded-md p-2 mx-2 my-2" href={"https://twitter.com/cleyton_jesus07"}><BsTwitter size={30} /></Link>
            <Link title="Link para o meu artstation" className="link border rounded-md p-2 mx-2 my-2" href={"https://www.artstation.com/cleyton_jesus07"}><SiArtstation size={30} /></Link>
            <Link title="Link para o meu deviantart" className="link border rounded-md p-2 mx-2 my-2" href={"https://www.deviantart.com/cleytonjesus07"}><SiDeviantart size={30} /></Link>
            <Link title="Link para o meu behance" className="link border rounded-md p-2 mx-2 my-2" href={"https://www.behance.net/cleyton_jesus07"}><SiBehance size={30} /></Link>
            <Link title="Link para o meu behance" className="link border rounded-md p-2 mx-2 my-2" href={"mailto:cleytonjesus007@gmail.com"}><SiGmail size={30} /></Link>

        </>
    )
}
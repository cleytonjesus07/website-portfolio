import Link from "next/link";

export default function Header() {
    return (
        <header className="p-4 flex justify-between rounded-md max-md:flex-col">
            <span className="font-black select-none">
                Cleyton <span className="font-thin">Jesus</span>
            </span>
            <nav className="max-md:mt-5">
                <ul className="flex max-md:justify-center space-x-4 ">
                    <li><Link href={"#sobre"}>Sobre</Link></li>
                    <li><Link href={"#projetos"}>Projetos</Link></li>
                    <li><Link href={"#contato"}>Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}
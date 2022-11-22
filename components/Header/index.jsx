import Link from "next/link";

export default function Header() {
    return (
        <header className="p-4 flex justify-between rounded-md max-md:flex-col">
            <span className="font-black select-none">
                Cleyton <span className="font-thin">Jesus</span>
            </span>
            <nav className="max-md:mt-5">
                <ul className="block space-x-4 text-center">
                    <Link href={"#sobre"}>Sobre</Link>
                    <Link href={"#projetos"}>Projetos</Link>
                    <Link href={"#contato"}>Contato</Link>
                </ul>
            </nav>
        </header>
    )
}
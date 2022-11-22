import Link from "next/link";

export default function Header() {
    return (
        <header className="p-4 flex justify-between rounded-md">
            <span className="font-black select-none">
                Cleyton <span className="font-thin">Jesus</span>
            </span>
            <nav>
                <ul className="flex space-x-4">
                    <Link href={"#sobre"}>Sobre</Link>
                    <Link href={"#projetos"}>Projetos</Link>
                    <Link href={"#contato"}>Contato</Link>
                </ul>
            </nav>
        </header>
    )
}
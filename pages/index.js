import Link from "next/link";
import { useState } from "react";
import Banner from "../components/Banner";
import Container from "../components/Container";
import Header from "../components/Header";
import images from '../public/assets/images';
import { HiOutlineUsers } from 'react-icons/hi'
import { RiUserFollowLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaReact } from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiJavascript1 } from 'react-icons/di'
import { SiTailwindcss } from 'react-icons/si'
import GitProjects from "../components/Projects/GitProjects";
import DrawsProjects from "../components/Projects/DrawsProjects";
import Layout from "../components/Layout";
import SocialMedias from "../components/SocialMedias";

export default function Home({ dataUser, repos }) {

  const [showGitProjects, setShowGitProjects] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  if (!repos?.length && !Object.keys(dataUser).length) {
    return <div className="h-screen w-full flex flex-col-reverse justify-center items-center font-extrabold text-2xl">Um momento, por favor... <span className="w-16 h-16 border-l-4 rounded-full animate-spin my-5"></span></div>
  }

  return (
    <Layout dataUser={dataUser}>
      <div className="px-10 pt-2">
        <Header />
        <Banner dataUser={dataUser} />
        <Container>
          <h2 id="sobre" className="font-bold text-center text-xl">Sobre</h2>
        </Container>
        <div>
          <div><h3 className="ml-10 font-medium text-4xl">{dataUser.name}</h3></div>
          <div className="my-2 ml-10">
            <p>
              {dataUser.bio}
            </p>
            <div className="flex space-x-3 flex-col justify-center items-end mr-10 mt-5">
              <div className="flex space-x-1" title="Seguidores">
                <span>Seguidores: </span>
                <HiOutlineUsers size={20} />
                <p>{dataUser.followers}</p>
              </div>
              <div className="flex space-x-1" title="Seguindo">
                <span>Seguindo: </span>
                <RiUserFollowLine size={20} />
                <p>{dataUser.following}</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-3xl mt-10 ml-10">
          Tecnologias que mais utilizo no momento
        </h2>
        <div className="flex mt-5  items-center space-x-5 ml-10">
          <TbBrandNextjs size={35} title="nextJS" />
          <FaReact size={25} title="ReactJS" />
          <AiFillHtml5 size={25} title="Html 5" />
          <DiCss3 size={25} title="CSS3" />
          <DiJavascript1 size={25} title="Javascript" />
          <SiTailwindcss size={25} title="Tailwind Css" />
        </div>
        <Container>
          <h2 className="font-bold text-center text-xl">Projetos</h2>
        </Container>
        <div className="text-center space-x-10">
          <button type="button" onClick={() => setShowGitProjects(true)} className="bg-gray-800 px-4 py-2 rounded-t-lg w-32" style={{ opacity: showGitProjects ? 1 : .5 }}>Programação</button>
          <button type="button" onClick={() => setShowGitProjects(false)} className="bg-gray-800 px-4 py-2 rounded-t-lg w-32" style={{ opacity: !showGitProjects ? 1 : .5 }}>Ilustração</button>
        </div>
        <div id="projetos">
          {(showGitProjects) ? <GitProjects repos={repos} /> : <DrawsProjects images={images} isLoading={isLoading} setIsLoading={setIsLoading} />}
          <Link title="link para ver mais a respeito dos meus projetos" href={showGitProjects ? "https://github.com/cleytonjesus07?tab=repositories" : "https://www.instagram.com/cleyton_jesus07/"} target="_blank" referrerPolicy="no-referrer" className="font-thin hover:bg-white hover:text-black transition-all  flex my-8 mx-auto justify-center w-48 border rounded-full p-2">Ver mais {showGitProjects ? "projetos" : "ilustrações"}</Link>
        </div>
        <footer id="contato" className="flex flex-col justify-center items-center py-2 h-auto bg-gray-800 mt-10 px-10">
          <div className="block  font-extralight text-center">
            Me siga nas redes sociais
            <div className=" flex justify-center items-center flex-wrap mt-10  ">
              <SocialMedias />
            </div>
          </div>
          <div className="mt-5 font-extralight">
            <span className="text-xs">Desenvolvido por @cleyton_jesus07</span>
          </div>
        </footer>
      </div>
    </Layout>
  )
}






export async function getServerSideProps() {
  // Fetch data from external API


  let dataUser = await fetch('https://api.github.com/users/cleytonjesus07', { cache: 'force-cache' })
  let repos = await fetch('https://api.github.com/users/cleytonjesus07/repos', { next: { revalidate: (60 * 60) } });
  dataUser = await dataUser.json();
  repos = await repos.json();

  /* Selecionando os meus projetos preferidos(total de 6) */

  const desiredRepos = ['music-lobby', 'customSoundPlayer', 'Post-como-o-do-Instagram',
    'Playstation4PasswordScreen', 'PlayerDeVideoCustomizado', 'CloneInstagram']
  const myRepos = [];
  repos.map((repo) => {
    if (desiredRepos.includes(repo.name)) {
      myRepos.push(repo)
    }
  });

  // Pass data to the page via props
  return { props: { dataUser, repos: myRepos } }
}
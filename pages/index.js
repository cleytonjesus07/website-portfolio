import Link from "next/link";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Container from "../components/Container";
import Header from "../components/Header";
import images from '../public/assets/images';
import { BsGithub, BsInstagram, BsTwitter, BsLink, BsLinkedin } from 'react-icons/bs'
import { HiOutlineUsers } from 'react-icons/hi'
import { RiUserFollowLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaReact } from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiJavascript1 } from 'react-icons/di'
import { SiTailwindcss, SiArtstation, SiDeviantart, SiBehance } from 'react-icons/si'
import Head from "next/head";
import Image from "next/image";

export default function Home({ dataUser, repos }) {
  const [showGitProjects, setShowGitProjects] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  /* const [dataUser, setDataUser] = useState();
  const [repos, setRepos] = useState([]); */
  /* useEffect(() => {
    async function getRepos() {
      const arrayRepo = [];
      let user = await fetch('https://api.github.com/users/cleytonjesus07', { cache: 'force-cache' })
      let res = await fetch('https://api.github.com/users/cleytonjesus07/repos', { next: { revalidate: (60 * 60) } });

      user = await user.json();
      res = await res.json();

      res.forEach((repo, index) => {
        if (index > 5) {
          return;
        }
        arrayRepo.push(repo);
      })

      setRepos(arrayRepo)
      setDataUser(user)

    }
    getRepos();
  }, []) */


  if (!repos.length && !dataUser) {
    return <div className="h-screen w-full flex flex-col-reverse justify-center items-center font-extrabold text-2xl">Um momento, por favor... <span className="w-16 h-16 border-l-4 rounded-full animate-spin my-5"></span></div>
  }

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content=" Website/portfólio, onde há os meus projetos.😄" />
        <meta name="keywords" content="HTML, CSS, JavaScript,NEXT JS, Next JS, next js, portfolio, cleyton_jesus07" />
        <meta name="author" content="Cleyton Jesus" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{dataUser.login}</title>
      </Head>
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
          <button onClick={() => setShowGitProjects(true)} className="bg-gray-800 px-4 py-2 rounded-t-lg w-32" style={{ opacity: showGitProjects ? 1 : .5 }}>Programação</button>
          <button onClick={() => setShowGitProjects(false)} className="bg-gray-800 px-4 py-2 rounded-t-lg w-32" style={{ opacity: !showGitProjects ? 1 : .5 }}>Ilustração</button>
        </div>
        <div id="projetos">
          {(showGitProjects) ? <GitProjects repos={repos} /> : <DrawsProjects images={images} isLoading={isLoading} setIsLoading={setIsLoading} />}
          <Link href={showGitProjects ? "https://github.com/cleytonjesus07?tab=repositories" : "https://www.instagram.com/cleyton_jesus07/"} target="_blank" referrerPolicy="no-referrer" className="font-thin hover:bg-white hover:text-black transition-all  flex my-8 mx-auto justify-center w-48 border rounded-full p-2">Ver mais {showGitProjects ? "projetos" : "ilustrações"}</Link>
        </div>
        <footer id="contato" className="flex flex-col justify-center items-center py-2 h-auto bg-gray-800 mt-10 px-10">
          <div className="block  font-extralight text-center">
            Me siga nas redes sociais
            <div className=" flex justify-center items-center flex-wrap mt-10  ">
              <Link className="link border rounded-md p-2 mx-2 my-2" href={"https://linktr.ee/cleyton_jesus07"}><BsLink size={30} /></Link>
              <Link className="link border rounded-md p-2 mx-2 my-2" href={"https://www.linkedin.com/in/cleyton-jesus-dos-santos-santana-655045149/"}><BsLinkedin size={30} /></Link>
              <Link className="link border rounded-md p-2 mx-2 my-2" href={"https://github.com/cleytonjesus07"}><BsGithub size={30} /></Link>
              <Link className="link border rounded-md p-2 mx-2 my-2" href={"https://www.instagram.com/cleyton_jesus07/"}><BsInstagram size={30} /></Link>
              <Link className="link border rounded-md p-2 mx-2 my-2" href={"https://twitter.com/cleyton_jesus07"}><BsTwitter size={30} /></Link>
              <Link className="link border rounded-md p-2 mx-2 my-2" href={"https://www.artstation.com/cleyton_jesus07"}><SiArtstation size={30} /></Link>
              <Link className="link border rounded-md p-2 mx-2 my-2" href={"https://www.deviantart.com/cleytonjesus07"}><SiDeviantart size={30} /></Link>
              <Link className="link border rounded-md p-2 mx-2 my-2" href={"https://www.behance.net/cleyton_jesus07"}><SiBehance size={30} /></Link>
            </div>
          </div>
          <div className="mt-5 font-extralight">
            <span>Desenvolvido por @cleyton_jesus07</span>
          </div>
        </footer>
      </div>
    </>
  )
}


function GitProjects({ repos }) {
  return (
    <div className=" flex flex-wrap justify-center ">
      {
        repos.map(({ name, html_url }, index) => {
          return (
            <Link key={index} href={html_url} referrerPolicy={"no-referrer"} target={"_blank"}>
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

function DrawsProjects({ images, isLoading, setIsLoading }) {

  return (
    <div className="flex  flex-wrap justify-center">
      {images.map(({ name, src, desc, link }, index) => {
        return (
          <Link className="cover relative m-5 overflow-hidden flex w-80 h-40 justify-center items-center" key={index} href={link} target="_blank" referrerPolicy="no-referrer">
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

export async function getServerSideProps() {
  // Fetch data from external API
  let dataUser = await fetch('https://api.github.com/users/cleytonjesus07', { cache: 'force-cache' })
  let repos = await fetch('https://api.github.com/users/cleytonjesus07/repos', { next: { revalidate: (60 * 60) } });
  dataUser = await dataUser.json();
  repos = await repos.json();
  repos = repos.slice(0, 6);

  // Pass data to the page via props
  return { props: { dataUser, repos } }
}
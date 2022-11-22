import Link from "next/link";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Container from "../components/Container";
import Header from "../components/Header";
import images from '../public/assets/images';
import { BsGithub, BsInstagram, BsTwitter, BsLink, BsLinkedin } from 'react-icons/bs'
import { HiOutlineUsers } from 'react-icons/hi'
import { RiUserFollowLine } from 'react-icons/ri'
import Head from "next/head";

export default function Home() {
  const [dataUser, setDataUser] = useState();
  const [repos, setRepos] = useState([]);
  const [showGitProjects, setShowGitProjects] = useState(true);
  useEffect(() => {
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
  }, [])

  if (!repos.length && !dataUser) {
    return <div className="h-screen w-full flex justify-center items-center font-extrabold text-2xl">Um momento, por favor...</div>
  }

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Desenvolvi meu website/portfólio, onde há os meus projetos.😄" />
        <meta name="keywords" content="HTML, CSS, JavaScript,NEXT JS, Next JS, next js, portfolio, cleyton_jesus07" />
        <meta name="author" content="Cleyton Jesus" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{dataUser.login}</title>
      </Head>
      <div className="px-10 pt-2">
        <Header />
        <Banner />
        <Container>
          <h2 id="sobre" className="font-bold text-center text-xl">Sobre</h2>
        </Container>
        <div>
          <div><h3 className="ml-10 font-medium text-4xl">{dataUser.name}</h3></div>
          <div className="my-2 ml-10">
            <p>
              {dataUser.bio}
            </p>
            <div className="flex space-x-3 justify-end items-center mr-10">
              <div className="flex space-x-1" title="Seguidores">
                <HiOutlineUsers size={20} />
                <p>{dataUser.followers}</p>
              </div>
              <div className="flex space-x-1" title="Seguindo">
                <RiUserFollowLine size={20} />
                <p>{dataUser.following}</p>
              </div>
            </div>
          </div>
        </div>
        <Container>
          <h2 className="font-bold text-center text-xl">Projetos</h2>
        </Container>
        <div className="text-center space-x-10">
          <button onClick={() => setShowGitProjects(true)} className="bg-gray-800 px-4 py-2 rounded-t-lg w-32" style={{ opacity: showGitProjects ? 1 : .5 }}>Programação</button>
          <button onClick={() => setShowGitProjects(false)} className="bg-gray-800 px-4 py-2 rounded-t-lg w-32" style={{ opacity: !showGitProjects ? 1 : .5 }}>Ilustração</button>
        </div>
        <div id="projetos">
          {(showGitProjects) ?
            GitProjects(repos)
            : DrawsProjects(images)}
          <Link href={showGitProjects ? "https://github.com/cleytonjesus07?tab=repositories" : "https://www.instagram.com/cleyton_jesus07/"} target="_blank" referrerPolicy="no-referrer" className="font-thin hover:underline flex my-0 mx-auto justify-center  w-80 ">Ver mais {showGitProjects ? "projetos" : "ilustrações"}</Link>
        </div>
        <footer id="contato" className="block py-4 h-40 bg-gray-800 mt-10 text-center">
          <div className="block font-extralight justify-center">
            Me siga nas redes sociais
            <div className="flex space-x-4 justify-center mt-4">
              <Link href={"https://linktr.ee/cleyton_jesus07"}><BsLink size={30} /></Link>
              <Link href={"https://github.com/cleytonjesus07"}><BsGithub size={30} /></Link>
              <Link href={"https://www.instagram.com/cleyton_jesus07/"}><BsInstagram size={30} /></Link>
              <Link href={"https://twitter.com/cleyton_jesus07"}><BsTwitter size={30} /></Link>
              <Link href={"https://www.linkedin.com/in/cleyton-jesus-dos-santos-santana-655045149/"}><BsLinkedin size={30} /></Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}


function GitProjects(repos) {
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

function DrawsProjects(images) {
  return (
    <div className="flex flex-wrap justify-center">
      {images.map(({ name, src, desc, link }, index) => {
        if (!src.includes('.mp4')) {
          return (
            <Link key={index} href={link} target="_blank" referrerPolicy="no-referrer">
              <div className="cover relative bg-gray-800 w-80 h-40 m-5 rounded-lg hover:scale-110 transition-all ease-in hover:cursor-pointer flex  items-center overflow-hidden"
                style={{ background: `url(${src})`, backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
              >
                <span className="absolute bg-black bg-opacity-90 h-full font-bold w-full flex flex-col items-center justify-center">{name[0].toUpperCase() + name.substr(1)}<p className="text-center mt-5 font-thin">{desc}</p></span>
              </div>
            </Link>
          )
        } else {
          return (
            <Link key={index} href={link} target="_blank" referrerPolicy="no-referrer">
              <div className=" cover relative bg-gray-800 w-80 h-40 m-5 rounded-lg hover:scale-110 transition-all ease-in hover:cursor-pointer flex  items-center overflow-hidden"
              >
                <span className=" absolute bg-black bg-opacity-90 h-full flex items-center w-full flex-col justify-center font-bold">{name}<p className="text-center mt-5 font-thin">{desc}</p></span>
                <video className="w-full h-full object-cover object-center" src={src} loop autoPlay />
              </div>
            </Link>
          )
        }
      })}
    </div>
  )
}
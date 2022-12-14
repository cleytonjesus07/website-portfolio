import Head from "next/head";

export default function Layout({children,dataUser}) {

    return (
        <>
            <Head>
                <meta name="title" content="Portf贸lio de Cleyton Jesus"></meta>
                <meta name="description" content="Website/portf贸lio, onde h谩 os meus projetos.馃槃" />
                <meta name="keywords" content="HTML, CSS, JavaScript,NEXT JS, Next JS, next js, portfolio, cleyton_jesus07" />
                <meta name="author" content="Cleyton Jesus" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="google" content="nositelinkssearchbox"></meta>

                {/* ---------------------------*/}
                <meta property="og:type" content="website"></meta>
                <meta property="og:url" content="https://website-portfolio-pink.vercel.app/"></meta>
                <meta property="og:title" content="Portf贸lio de Cleyton Jesus"></meta>
                <meta property="og:description" content="Website/portf贸lio, onde h谩 os meus projetos.馃槃"></meta>
                <meta property="og:image" content={dataUser?.avatar_url}></meta>


                <meta property="twitter:card" content="summary_large_image"></meta>
                <meta property="twitter:url" content="https://website-portfolio-pink.vercel.app/"></meta>
                <meta property="twitter:title" content="Portf贸lio de Cleyton Jesus"></meta>
                <meta property="twitter:description" content="Website/portf贸lio, onde h谩 os meus projetos.馃槃"></meta>
                <meta property="twitter:image" content={dataUser?.avatar_url}></meta>

                {/* --------------------------- */}
                <title>Portf贸lio - @cleyton_jesus07</title>
            </Head>
           {children}
        </>
    )
}
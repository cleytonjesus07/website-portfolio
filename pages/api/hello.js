// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  let repos = await fetch('https://api.github.com/users/cleytonjesus07/repos');
  repos = await repos.json();
  const desiredRepos = ['music-lobby','customSoundPlayer','Post-como-o-do-Instagram',
                        'Playstation4PasswordScreen','PlayerDeVideoCustomizado','CloneInstagram']
  const myRepos = [];
  repos.map((repo) => {
    if (desiredRepos.includes(repo.name)) {
      myRepos.push(repo)
    }
  });

  res.json(myRepos)
}

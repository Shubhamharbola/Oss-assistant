export const getRepoData = async (owner, repo) => {

    const githubUrl = `https://api.github.com/repos/${owner}/${repo}`;
    console.log(githubUrl)
    const response = await fetch(githubUrl);



    const data = await response.json();

    return data;

}

export const repohealth = async (owner, repo) => {
    const githubUrl = `https://api.github.com/repos/${owner}/${repo}`;
    const response = await fetch(githubUrl);

    const data = await response.json()

    const check = {
        hasDescription: !!data.description,
        hasLicense: !!data.license,
        hasHomepage: !!data.homepage,
        hasIssuesEnabled: !!data.has_issues,
        hasWiki: !!data.has_wiki
    }
   return check;
}
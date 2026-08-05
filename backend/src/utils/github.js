

export const extractGit = async(url)=>{
    console.log(url);
    const splitUrl = await url.split("/");
        
        return { owner:splitUrl[splitUrl.length - 2],
        repo: splitUrl[splitUrl.length - 1]
    };
    
}

// const reult = extractGit();
// console.log(reult);
import { getRepoData ,repohealth} from "../service/repoService.js"
import { extractGit } from "../utils/github.js";
//@fetches data of repo
//@route -/api/repository
export const fetchRepodata = async (req, res) => {
    const url = req.query.url

    const splitUrl = url.split("/");
    const owner = splitUrl[splitUrl.length - 2];
    const repo = splitUrl[splitUrl.length - 1];
    try {
        const result = await getRepoData(owner, repo);
        res.json(result);

    } catch (error) {
        console.log(error);
        res.send(error);
    }


}
//@healthcheck
//@route api/repository/health
export const healthcheck = async(req,res)=>{
    console.log(req.query);
    
console.log(req.query.url);
     const url = req.query.url

    const {owner,repo}  = await extractGit(url);
    try {
        const result = await repohealth(owner,repo);
        res.json(result);
        
    } catch (error) {
        res.send(error);
        
    }

}
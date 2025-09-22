import { db, handleRepo } from "./db.js";
import { Octokit } from "@octokit/rest";
import { gitRepo, dbRepoName } from "./types.js";
import dotenv from "dotenv";

dotenv.config();

const octokit = new Octokit({
	auth: process.env.PERSONAL_TOKEN,
	userAgent: "MyPortfolioServer",
	timeZone: "Europe/Belfast",
});

export const addNewRepos = async () => {
	// repos that I can't/don't want to make private and/or
	// that I don't want to be shown.
	const protectedRepos = ["MyPortfolio", "Opinia", "CoPlay"];

	const { data: allRepos } = await octokit.request("GET /user/repos", {
		visibility: "public",
		affiliation: "owner, collaborator", // my repos plus ones i've worked on
		sort: "updated",
		headers: {
			"X-GitHub-Api-Version": "2022-11-28",
		},
	});

	const filteredRepos: gitRepo[] = allRepos.filter(r => !protectedRepos.includes(r.name));

	filteredRepos.forEach(f => handleRepo(f));
};

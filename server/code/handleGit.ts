import { db } from "./db.ts";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
  auth: process.env.PERSONAL_TOKEN,
  userAgent: "MyPortfolioServer",
  timeZone: "Europe/Belfast",
  baseUrl: "https://api.github.com",
});

export const updateDb = async () => {
  // todo : get all my repos, dodge portfolio, update any db entry that is out of date
  const protectedRepos = ["MyPortfolio"];
  const { data: allRepos } = await octokit.request(
    "GET /users/{username}/repos",
    {
      username: "",
    }
  );
};

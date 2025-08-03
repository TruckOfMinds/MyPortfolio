import { db, insertRepoToDb, updateDb } from "./db.ts";
import { Octokit } from "@octokit/rest";
import { Repo, dbRepoName } from "./types.ts";

const octokit = new Octokit({
  auth: process.env.PERSONAL_TOKEN,
  userAgent: "MyPortfolioServer",
  timeZone: "Europe/Belfast",
  baseUrl: "https://api.github.com",
});

export const addNewRepos = async () => {
  const protectedRepos: string[] = ["MyPortfolio"];

  const { data: allRepos }: { data: Repo[] } = await octokit.request(
    "GET /users/{username}/repos",
    {
      username: "TruckOfMinds",
      sort: "updated",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  // ! ERROR W CONNECTION
  const { rows: dbData }: { rows: dbRepoName[] } = await db.query(
    `SELECT repo_name FROM rdmp_repos`
  );
  console.log(dbData);

  const filteredRepos: Repo[] = allRepos.filter(
    (r) => !protectedRepos.includes(r.name)
  );

  filteredRepos.forEach((r) =>
    dbData.find((d) => d.repo_name === r.name) ? updateDb(r) : insertRepoToDb(r)
  );
};

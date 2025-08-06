import { db, insertRepoToDb, updateDb } from "./db.ts";
import { Octokit } from "@octokit/rest";
import { gitRepo, dbRepoName } from "./types.ts";

const octokit = new Octokit({
  auth: process.env.PERSONAL_TOKEN,
  userAgent: "MyPortfolioServer",
  timeZone: "Europe/Belfast",
  baseUrl: "https://api.github.com",
});

export const addNewRepos = async () => {
  const protectedRepos: string[] = ["MyPortfolio"];

  const { data: allRepos }: { data: gitRepo[] } = await octokit.request(
    "GET /users/{username}/repos",
    {
      username: "TruckOfMinds",
      sort: "updated",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  // allRepos.forEach((r) =>
  //   protectedRepos.includes(r.name) ? console.log(r) : null
  // );

  let dbData: dbRepoName[] = [];
  // ! ERROR W CONNECTION
  try {
    const { rows }: { rows: dbRepoName[] } = await db.query(
      `SELECT repo_name FROM rdmp_repos`
    );
    dbData = rows;
  } catch (err) {
    throw new Error("DB Error:" + err);
  }

  if (dbData.length > 0) {
    const filteredRepos: gitRepo[] = allRepos.filter(
      (r) => !protectedRepos.includes(r.name)
    );

    // Object —> Set
    const dbRepos = new Set(dbData.map((d) => d.repo_name));

    filteredRepos.forEach(async (r) =>
      dbRepos.has(r.name) ? await updateDb(r) : insertRepoToDb(r)
    );
  }
};

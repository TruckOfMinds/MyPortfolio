import { Pool } from "pg";
import {
  codeCardProps,
  designCardProps,
  linkProps,
  gitRepo,
  repoProps,
  skillsProps,
  topProps,
} from "./types.js";
import dotenv from "dotenv";

dotenv.config();

export const db = new Pool({
  connectionString: process.env.DB_URL,
});

// * needs to be split into card and page data
export const getDesignCardData = async (): designCardProps => {
  try {
    const { rows } = await db.query(
      `
      SELECT id, name, TO_CHAR(date, 'DD/MM/YYYY') as "date", bio,  
        pros, cons, logo
      FROM rdmp_designs
      ORDER BY date, name DESC;
      `
    );
    return rows;
  } catch (err) {
    throw new Error("DB Error:" + err);
  }
};

export const getSkillsData = async (): skillsProps => {
  try {
    const { rows } = await db.query(
      `
      SELECT * 
      FROM rdmp_technical_skills 
      ORDER BY id ASC;
      `
    );

    return rows;
  } catch (err) {
    throw new Error("DB Error:" + err);
  }
};

export const getCodeCardData = async (): codeCardProps => {
  try {
    const { rows } = await db.query(
      `
      SELECT rdmp_repos.id, rdmp_repos.repo_name AS "name", rdmp_repos.logo, 
        ARRAY_AGG(ARRAY[rdmp_tags.name, rdmp_tags.type]) AS "tags", 
        TO_CHAR(date, 'DD/MM/YYYY') AS "date"
      FROM rdmp_repos
      LEFT OUTER JOIN rdmp_repo_con_tags ON rdmp_repo_con_tags.repo_id = rdmp_repos.id
      JOIN rdmp_tags ON rdmp_tags.id = rdmp_repo_con_tags.tag_id
      GROUP BY rdmp_repos.id
      ORDER BY rdmp_repos.date DESC;
      `
    );
    return rows;
  } catch (err) {
    throw new Error("DB Error:" + err);
  }
};

export const getRepoData = async (repo: string): repoProps => {
  try {
    const { rows } = await db.query(
      `
      SELECT rdmp_repos.id, repo_name, TO_CHAR(date, 'DD/MM/YYYY') as "date", 
        ARRAY(brand_colour, text_colour) as "style", bio, links, owner, rdmp_images.images
      FROM rdmp_repos
      JOIN rdmp_images ON rdmp_images.id = rdmp_repos.image_id
      WHERE repo_name = $1;
      `,
      [repo]
    );
    return rows[0];
  } catch (err) {
    throw new Error("DB Error:" + err);
  }
};

export const getTopRepoData = async (): topProps => {
  try {
    const { rows } = await db.query(
      `
      SELECT rdmp_repos.id, rdmp_repos.repo_name AS "name", rdmp_images.images[2] AS "image", rdmp_repos.date, rdmp_repos.is_code
      FROM rdmp_repos 
      JOIN rdmp_images ON rdmp_images.id = rdmp_repos.image_id
      WHERE rdmp_repos.top = true

      UNION ALL

      SELECT rdmp_designs.id, rdmp_designs.name, rdmp_images.images[2] AS "image", rdmp_designs.date, rdmp_designs.is_code
      FROM rdmp_designs
      JOIN rdmp_images ON rdmp_images.id = rdmp_designs.image_id
      WHERE rdmp_designs.top = true

      ORDER BY date DESC;
      `
    );
    return rows;
  } catch (err) {
    throw new Error("DB Error:" + err);
  }
};

export const getContactData = async (): linkProps => {
  try {
    const { rows } = await db.query(
      `
      SELECT *
      FROM rdmp_contact_links
      ORDER BY id ASC;
      `
    );
    return rows;
  } catch (err) {
    throw new Error("DB Error:" + err);
  }
};

export const handleRepo = (repo: gitRepo) => {
  try {
    db.query(
      `
      INSERT INTO rdmp_repos (repo_name, date, links, owner)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (repo_name) DO UPDATE
      SET (repo_name, date, links) = (EXCLUDED.repo_name, EXCLUDED.date, EXCLUDED.links);
      `,
      [repo.name, repo.updated_at, [repo.homepage, repo.html_url], repo.owner.name]
    );
  } catch (err) {
    throw new Error("DB Error:" + err);
  }
};

export const updateBio = (bio: string, name: string) => {
  try {
    db.query(
      `
      UPDATE rdmp_repos
      SET bio = $1
      WHERE repo_name = $2;
      `,
      [bio, name]
    );
  } catch (err) {
    throw new Error("DB Error:" + err);
  }
};

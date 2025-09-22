drop table if exists rdmp_designs,
rdmp_technical_skills,
rdmp_contact_links,
rdmp_repos,
rdmp_tags,
rdmp_repo_con_tags,
rdmp_images cascade;

create table if not exists rdmp_images (
  id bigint primary key generated always as identity,
  images text[] not null
);

create table if not exists rdmp_technical_skills (
  id bigint primary key generated always as identity,
  name text not null,
  logo_name text not null,
  unique (logo_name)
);

create table if not exists rdmp_repos (
  id bigint primary key generated always as identity,
  image_id bigint references rdmp_images (id),
  logo text,
  repo_name text not null,
  date date not null,
  brand_colour text,
  text_colour text,
  bio text,
  links text[] not null,
  top boolean default false,
  is_code boolean default true,
  unique (repo_name),
  unique (image_id)
);

create table if not exists rdmp_tags (
  id bigint primary key generated always as identity,
  name text not null,
  type text not null,
  unique (name)
);

create table if not exists rdmp_repo_con_tags (
  primary key (repo_id, tag_id),
  repo_id bigint references rdmp_repos (id),
  tag_id bigint references rdmp_tags (id)
);

create table if not exists rdmp_designs (
  id bigint primary key generated always as identity,
  image_id bigint references rdmp_images (id) not null,
  logo text not null,
  name text not null,
  date date not null, -- yyyy-mm-dd
  bio text not null,
  pros text not null,
  cons text not null,
  top boolean default false,
  is_code boolean default false,
  unique (name),
  unique (image_id)
);

-- create table if not exists rdmp_contact_links (
--   id        bigint primary key generated always as identity,
--   link      text not null,
--   style     text not null,
--   logo_name text not null,
--   unique(logo_name)
-- );

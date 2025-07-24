-- drop table if exists rdmp_design_projects, rdmp_technical_skills, rdmp_contact_links, rdmp_repos, rdmp_tags, rdmp_repo_con_tags, rdmp_images;

create table if not exists rdmp_images (
  id     bigint primary key generated as identity,
  images text[<=3] not null
);

create table if not exists rdmp_technical_skills (
  id        bigint primary key generated always as identity,
  name      text not null,
  bg        text not null,
  logo_name text not null,
  unique(logo_name)
);

create table if not exists rdmp_repos (
  id           bigint primary key generated always as identity,
  image_id     bigint references rdmp_images(id) not null,
  repo_name    text not null,
  date         date not null,
  brand_colour text not null,
  text_colour  text not null,
  bio          text not null,
  links        text[3] not null,
  top          boolean not null,
  unique(repo_name, image_id)
);

create table if not exists rdmp_tags (
  id   bigint primary key generated always as identity,
  name text not null,
  type text not null,
  unique(name)
); 

create table if not exists rdmp_repo_con_tags (
  primary key (repo_id, tag_id),
  repo_id bigint references rdmp_repos(id),
  tag_id  bigint references rdmp_tags(id)
);

create table if not exists rdmp_designs (
  id       bigint primary key generated always as identity,
  image_id bigint references rdmp_images(id) not null,
  name     text not null,
  date     date not null, -- yyyy-mm-dd
  bio      text not null,
  expp     text not null,
  expn     text not null,
  unique(image_id)
);

create table if not exists rdmp_contact_links (
  id        bigint primary key generated always as identity,
  link      text not null,
  style     text not null,
  logo_name text not null,
  unique(logo_name)
);






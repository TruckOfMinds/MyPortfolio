insert into
  rdmp_technical_skills (name, logo_name)
values
  ('React', 'react.svg'),
  ('TypeScript', 'ts.svg'),
  ('JavaScript', 'js.svg'),
  ('Figma', 'figma.svg'),
  ('Tailwind', 'tailwind.svg'),
  ('NextJS', 'next.svg'),
  ('Python', 'py.svg'),
  ('PostgreSQL', 'postgres.svg'),
  ('Git', 'git.svg'),
  ('Flask', 'flask.svg'),
  ('SQLite', 'sqlite.svg'),
  ('Canva', 'canva.svg'),
  ('C#', 'cs.svg')
on conflict do nothing;

insert into
  rdmp_images (images)
values
  (
    array[
      '/code-projects/hof1.jpg',
      '/code-projects/hof2.jpg',
      '/code-projects/hof3.jpg',
      '/code-projects/hof4.jpg'
    ]::text[]
  ),
  (
    array[
      '/code-projects/eq1.jpg',
      '/code-projects/eq2.jpg',
      '/code-projects/eq3.jpg',
      '/code-projects/eq4.jpg'
    ]::text[]
  ),
  (
    array[
      '/code-projects/os1.jpg',
      '/code-projects/os2.jpg',
      '/code-projects/os3.jpg',
      '/code-projects/os4.jpg'
    ]::text[]
  ),
  (array['/code-projects/snake1.jpg']::text[]),
  -- design
  (
    array[
      '/design-projects/bt.jpg',
      '/design-projects/bt2.jpg',
      '/design-projects/bt3.jpg',
      '/design-projects/bt4.jpg'
    ]::text[]
  ),
  (
    array[
      '/design-projects/pr1.jpg',
      '/design-projects/pr2.jpg',
      '/design-projects/pr3.jpg',
      '/design-projects/pr4.jpg',
      '/design-projects/pr5.jpg',
      '/design-projects/pr6.jpg',
      '/design-projects/pr7.jpg'
    ]::text[]
  ),
  (
    array[
      '/design-projects/ylc1.jpg',
      '/design-projects/ylc2.jpg',
      '/design-projects/ylc3.jpg',
      '/design-projects/ylc4.jpg',
      '/design-projects/ylc5.jpg',
      '/design-projects/ylc6.jpg'
    ]::text[]
  ),
  (
    array[
      '/design-projects/bof1.jpg',
      '/design-projects/bof2.jpg',
      '/design-projects/bof3.jpg',
      '/design-projects/bof4.jpg',
      '/design-projects/bof5.jpg'
    ]::text[]
  ),
  (
    array[
      '/design-projects/lp1.jpg',
      '/design-projects/lp2.jpg',
      '/design-projects/lp3.jpg',
      '/design-projects/lp4.jpg',
      '/design-projects/lp5.jpg'
    ]::text[]
  )
on conflict do nothing;

insert into
  rdmp_designs (image_id, logo, name, date, bio, pros, cons, top)
values
  (
    5,
    '/logos/bt.svg',
    'Black Ticket',
    date '2024-12-09',
    'Black Ticket is an event web-service that focuses on all variations of evening events. From small dinner gatherings, to late night clubs: your ticket to the night life is waiting.',
    '- Was able to build on ideas to achieve a high-quality final result<br/>- Colour palette is effective and high contrast<br/>- Attempted logo design to an effective degree',
    '- UX could be more considered<br/>- More respect of whitespace needed',
    false
  ),
  (
    6,
    '/logos/pr.svg',
    'Pokémon Resurgence',
    date '2025-01-22',
    'Pokémon Resurgence is a choose your own adventure website that details a bespoke fan-made story, taking place in the Pokémon world where Team Rocket makes its resurgence and attempts to take over.',
    '- Entry into using layout grids in the design process<br/>- Effective translation from low-fi into high-fi<br/>- Designed with development at the forefront<br/>- Minimal design with charm<br/>- Accounted for optimal mobile UX',
    '- Could use more of the whitespace<br/>- Accessibility could be considered more',
    true
  ),
  (
    7,
    '/logos/ylc.svg',
    'YLC Redesign',
    date '2025-03-05',
    'A redesign of the Young Lives vs Cancer charity website, this design is meant to showcase a more concise layout that elevates the charity''s goals.',
    '- Easy to scale to different resolutions<br/>- Focussed on what was necessary for a high user experience<br/>- Created a simpler, more accessible design for any technical literacy level',
    '- Some features on the actual site are not shown<br/>- Not all pages have multiple resolutions',
    false
  ),
  (
    8,
    '/logos/bof.svg',
    'Ball of Fame',
    date '2025-02-11',
    'Ball of Fame is a design for a web-based documentation system for your Pokémon teams that you have journeyed and completed a playthrough with. This site allows you to enter and view any amount of teams from any Pokémon game, and view statistics about your usage patterns.',
    '- Accounted for any screen width<br/>- Easily conveys important information<br/>- I feel i had success with my first icon/symbol designs',
    '- Subpar typography<br/>- Inconsistent logos',
    false
  ),
  (
    9,
    '/logos/lp.svg',
    'Lucaplex',
    date '2025-09-07',
    'Lucaplex is the site for storing and playing your owned, uploaded media for a portable, conveniant way to watch movies and tv shows in high quality, anytime.',
    '- Multiple iterations to create the best user experience<br/>- Clean, consistent UI choices<br/>- Feels familiar to other media sites',
    '- Took time to perfect to current state<br/>- Minimal text may lead to confusion',
    true
  )
on conflict do nothing;

insert into
  rdmp_repos (
    image_id,
    logo,
    repo_name,
    date,
    brand_colour,
    text_colour,
    bio,
    links,
    top,
    owner
  )
values
  (
    1,
    '/logos/hof.svg',
    'Hall of Fame',
    date '2025-08-27',
    '#a15454',
    '#f3f3f3',
    'This Hall of Fame spreedsheet was created by me to document my Pokémon team victories in an external, preserved way with a bespoke search function; It also shows which Pokémon species I have used and how many times. This features the use of query functions, conditional formatting, and an API call to PokeAPI.',
    /* project, github, ... */
    array[
      array[
        'https://docs.google.com/spreadsheets/d/1IcfILulfWmRJHvmKlMhtB1kduqd28Q23wv8qNp70fAw/edit?gid=1493606038#gid=1493606038',
        'Project'
      ]::text[],
      array[null, 'GitHub']::text[]
    ]::text[],
    false,
    'TruckOfMinds'
  ),
  (
    2,
    '/logos/eq.svg',
    'EverQuill',
    date '2025-09-06',
    '#466fd0',
    '#f7d2a1',
    null,
    array[
      array['https://everquill.onrender.com/', 'Project']::text[],
      array[
        'https://github.com/TruckOfMinds/EVERQUILL',
        'GitHub'
      ]::text[]
    ]::text[],
    true,
    'TruckOfMinds'
  ),
  (
    3,
    '/logos/os.svg',
    'OS Project',
    date '2025-09-06',
    '#1B9090',
    '#020A0A',
    null,
    array[
      array[null, 'Project']::text[],
      array[
        'https://github.com/TruckOfMinds/OS-Rolsa-Tech',
        'GitHub'
      ]::text[]
    ]::text[],
    false,
    'TruckOfMinds'
  ),
  (
    4,
    '/logos/snake.svg',
    'Snake Game',
    date '2025-07-03',
    '#2a2a2a',
    '#0000ff',
    null,
    array[
      array[null, 'Project']::text[],
      array['https://github.com/OCSYT/Snake-Game', 'GitHub']::text[]
    ]::text[],
    false,
    'OCSYT'
  )
  -- (null, 'CoPlay', 2025-07-17, '#081221', '#e3e971', null, array()::text[], true)
on conflict do nothing;

insert into
  rdmp_tags (name, type)
values
  ('JavaScript', 'normal'),
  ('TypeScript', 'normal'),
  ('Python', 'normal'),
  ('C#', 'normal'),
  ('ReactJS', 'normal'),
  ('NextJS', 'normal'),
  ('Flask', 'normal'),
  ('Website', 'normal'),
  ('Web-API', 'normal'),
  ('Desktop', 'normal'),
  ('Mobile', 'normal'),
  ('Terminal', 'normal'),
  ('Game', 'normal'),
  ('E-Commerce', 'normal'),
  ('Media-Player', 'normal'),
  ('Documentaion', 'normal'),
  ('Pokémon', 'normal'),
  ('Communication', 'normal'),
  ('Real-Time', 'normal'),
  ('In-Development', 'status'),
  ('Deployed', 'status'),
  ('Database', 'normal'),
  ('Utility', 'normal')
on conflict do nothing;

insert into
  rdmp_repo_con_tags (repo_id, tag_id)
values
  (2, 1),
  (2, 16),
  (2, 17),
  (2, 21),
  (3, 1),
  (3, 5),
  (3, 8),
  (3, 18),
  (3, 21),
  (4, 3),
  (4, 1),
  (4, 8),
  (4, 14),
  (4, 23),
  (5, 4),
  (5, 12),
  (5, 13)
on conflict do nothing;

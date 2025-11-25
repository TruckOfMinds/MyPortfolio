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
    date '2025-11-24',
    '#a15454',
    '#f3f3f3',
    'IyBXaGF0IGlzIHRoaXMKCkhhbGwgb2YgRmFtZSBpcyBhbiBhY3RpdmUgcmVjb3JkIG9mIG15IFBva8OpbW9uIHBsYXl0aHJvdWdoIHRlYW1zIHRoYXQgcmVhY2ggdGhlIGZpbmFsIHN0ZXAvZGVmZWF0IHRoZSBjaGFtcGlvbi4gVGhpcyBzZXJ2ZXMgYXMgYSB3YXkgdG8gZG9jdW1lbnQgYW5kIHByZXNlcnZlIGluZm9ybWF0aW9uIGFib3V0IGVhY2ggb2YgbXkgdGVhbXMsIGFzIHdlbGwgYXMgYSB1dGlsaXR5IGZvciBtZWFzdXJpbmcgd2hpY2ggcG9rZW1vbiBJIHVzZSB0aGUgbW9zdCwgYW5kIHdoaWNoIG9uZXMgSSBkb24ndCB1c2UgZW5vdWdoIQpJdCB3YXMgY3JlYXRlZCBieSBtZSB0byBkb2N1bWVudCBteSBQb2vDqW1vbiB0ZWFtIHZpY3RvcmllcyBpbiBhbiBleHRlcm5hbCwgcHJlc2VydmVkIHdheSB3aXRoIGEgYmVzcG9rZSBzZWFyY2ggZnVuY3Rpb24uIFRoaXMgZmVhdHVyZXMgdGhlIHVzZSBvZiBxdWVyeSBmdW5jdGlvbnMsIGNvbmRpdGlvbmFsIGZvcm1hdHRpbmcsIGFuZCBhbiBBUEkgY2FsbCB0byBgUG9rZUFQSWAuCgojIFdoYXQncyBIZXJlCgpFYWNoIHRlYW0gY29udGFpbnMgNiBtZW1iZXJzLCBlYWNoIGhhdmluZyBpbXBvcnRhbnQgbWV0YWRhdGEgZm9yIHRoYXQgc3BlY2lmaWMgcG9rw6ltb246IHRoZWlyIG5pY2tuYW1lLCBmaW5hbCBsaXN0IG9mIDQgbW92ZXMsIG5hdHVyZSwgYWJpbGl0eSwgaGVsZCBpdGVtLCBpbWFnZSBzaG93aW5nIHRoZWlyIG1vc3QgX3VuaXF1ZV8gZm9ybSBhbmQgbW9yZSBleHRyYSBiaXRzLgpIYWxsIG9mIEZhbWUgYWxzbyBmZWF0dXJlcyBhIF9Ub3RhbHNfIHBhZ2UgdGhhdCB0cmFja3MgaG93IG1hbnkgdGltZXMgYSBzcGVjaWZpYyBwb2vDqW1vbiBmb3JtIGFwcGVhcnMgaW4gdGhlIHRlYW0gYmFuay4gaXQgdXNlcyBhIGdvb2dsZSBzaGVldHMgdGFibGUgdG8gYWxsb3cgZm9yIGZpbHRlcmluZyBhbmQgc29ydGluZyBvZiBpdGVtcywgYXMgd2VsbCBhcyBjbGVhcmx5IHNob3dpbmcgaW1hZ2VzIG9mIHRoZSBwb2vDqW1vbiBhbmQgc2VwYXJhdGVzIGVhY2ggbnVtZXJpYyB2YWx1ZS4KCiMgSG93IHRvIFVzZSBpdAoKVG8gdXNlIHRoZSBzZWFyY2ggZmVhdHVyZSwgeW91IG11c3QgZW50ZXIgdGhlIHNwZWNpZmljIGBpZGAgZm9yIHRoYXQgdGVhbSBlbnRyeTsgdGhlcmVmb3JlIHlvdSBtdXN0IGtub3cgdGhlIHNwZWNpZmljIGluZm9ybWF0aW9uIGVhY2ggY2hhcmFjdGVyIGluIHRoZSBpZCByZXByZXNlbnRzIGluIG9yZGVyIHRvIGFwcGx5IGl0OgpBbiBleGFtcGxlIGlkIGA3NjIwMDJOYCBjYW4gYmUgc3BsaXQgdXAgaW50byA1IHNlY3Rpb25zOgoKfCBTZWN0aW9uIHwgTWVhbmluZyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAp8IDotLS0tLTogfCA6LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB8CnwgICAgNyAgICB8IFRoZSBudW1iZXIgb2YgdGhlIFBva8OpbW9uICoqcmVnaW9uKiogdGhlIGdhbWUgdGFrZXMgcGxhY2UgaW4sIGluIGNocm9ub2xvZ2ljYWwgb3JkZXIuIF9gaS5lLiBLYW50bywgSm9odG8sIEhvZW5uLCBPcnJlLCBTaW5ub2gsIFVub3ZhLCBLYWxvcywgQWxvbGEsIEdhbGFyLCBQYWxkZWFgXyAuIElmIHRoZSBudW1iZXIgZXhjZWVkcyBwYXN0IDksIHRoZW4gaGV4YWRlY2ltYWwgc3ludGF4IHdpbGwgYmUgdXNlZCwgYGUuZy4gMTAgPSBBYC4gSWYgdGhlIGdhbWUgaXMgZmFuLW1hZGUgKHJvbSBoYWNrLCBQb2vDqXJvZ3VlLCBldGMuKSBhbmQgZG9lcyBOT1QgdGFrZSBwbGFjZSBpbiBhbiBvZmZpY2lhbCByZWlnb24gbGlzdGVkIGFib3ZlLCB0aGVuIGEgKipwZXJjZW50KiogKCUpIHdpbGwgYmUgdXNlZCBpbnN0ZWFkLiAqKl9UaGlzIGV4YW1wbGVzIGluZGljYXRlcyB3ZSBhcmUgaW4gdGhlIEthbG9zIHJlZ2lvbi5fKiogfAp8ICAgIDYgICAgfCBUaGUgbnVtYmVyIG9mIHRoZSBQb2vDqW1vbiAqKmdlbmVyYXRpb24qKiB0aGUgZ2FtZSB3YXMgcmVsZWFzZWQsIGluIGNocm9ub2xvZ2ljYWwgb3JkZXIuICoqX1RoaXMgZXhhbXBsZSBpbmRpY2F0ZXMgd2UgYXJlIGluIEdlbmVyYXRpb24gNi5fKiogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAp8ICAgIDIgICAgfCBUaGUgKippbmRleCoqIG9mIHRoZSBnYW1lIGluIHRoZSBsaXN0IG9mIGdhbWVzIHdpdGggdGhlICoqc2FtZSByZWlnb24gYW5kIGdlbmVyYXRpb24qKiB2YWx1ZXMgX+KAlCBTZWUgY2hhcnQgYmVsb3cgZm9yIHRoZSBmdWxsIHJlZmVyZW5jZV8uIElmIHRoZSBnYW1lIGlzIGZhbi1tYWRlIChyb20gaGFjaywgUG9rw6lyb2d1ZSwgZXRjLikgYW5kIGlzIGluIGFuIG9mZmljaWFsIHJlaWdpb24gKGkuZS4gbm8gYCVgIGFyZSBwcmVzZW50KSB0aGVuIGFuZCBgUmAgd2lsbCBiZSBhcHBlbmRlZCB0byBkaXN0aW5ndWlzaCBmcm9tIG9mZmljaWFsIGdhbWVzLiAqKl9UaGlzIGV4YW1wbGUgaW5kaWNhdGVzIHdlIGFyZSBpbiBQb2vDqW1vbiBZLl8qKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAp8ICAgMDAyICAgfCBUaGUgaW5kZXggb2YgdGhlICoqcGxheXRocm91Z2gqKiBmb3IgdGhhdCBzcGVjaWZpYyBnYW1lLCBpbiBjaHJvbm9sb2dpY2FsIG9yZGVyLiAqKl9UaGlzIGV4YW1wbGUgaW5kaWNhdGVzIGl0IGlzIHRoZSAybmQgcGxheXRocm91Z2guXyoqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CnwgICAgTiAgICB8IE9QVElPTkFMIOKAlCBQcmVzZW50IGlmIHRoZSBwbGF5dGhyb3VnaCBpcyBhIE51emxvY2tlLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAoKIyMgRnVsbCBJRCBJbmRleAoKfCAgICAgICAgIEdhbWUgICAgICAgICB8IElEIFJlZmVyZW5jZSB8CnwgOi0tLS0tLS0tLS0tLS0tLS0tLTogfCA6LS0tLS0tLS0tLTogfAp8ICAgICAgICAgUmVkICAgICAgICAgIHwgICAgIDExMSAgICAgIHwKfCAgICAgICAgIEJsdWUgICAgICAgICB8ICAgICAxMTIgICAgICB8CnwgICAgICAgIFllbGxvdyAgICAgICAgfCAgICAgMTEzICAgICAgfAp8ICAgICAgICBHcmVlbiAgICAgICAgIHwgICAgIDExNCAgICAgIHwKfCAgICAgICAgIEdvbGQgICAgICAgICB8ICAgICAyMjEgICAgICB8CnwgICAgICAgIFNpbHZlciAgICAgICAgfCAgICAgMjIyICAgICAgfAp8ICAgICAgIENyeXN0YWwgICAgICAgIHwgICAgIDIyMyAgICAgIHwKfCAgICAgICAgIFJ1YnkgICAgICAgICB8ICAgICAzMzEgICAgICB8CnwgICAgICAgU2FwcGhpcmUgICAgICAgfCAgICAgMzMyICAgICAgfAp8ICAgICAgIEVtZXJhbGQgICAgICAgIHwgICAgIDMzMyAgICAgIHwKfCAgICAgICBGaXJlIFJlZCAgICAgICB8ICAgICAxMzEgICAgICB8CnwgICAgICBMZWFmIEdyZWVuICAgICAgfCAgICAgMTMyICAgICAgfAp8ICAgICAgQ29sbHVzc2V1bSAgICAgIHwgICAgIDQzMSAgICAgIHwKfCBYRDogR2FsZSBvZiBEYXJrbmVzcyB8ICAgICA0MzIgICAgICB8CnwgICAgICAgRGlhbW9uZCAgICAgICAgfCAgICAgNTQxICAgICAgfAp8ICAgICAgICBQZWFybCAgICAgICAgIHwgICAgIDU0MiAgICAgIHwKfCAgICAgICBQbGF0aW51bSAgICAgICB8ICAgICA1NDMgICAgICB8CnwgICAgICBIZWFydCBHb2xkICAgICAgfCAgICAgMjQxICAgICAgfAp8ICAgICBTb3VsIFNpbHZlciAgICAgIHwgICAgIDI0MiAgICAgIHwKfCAgICAgICAgQmxhY2sgICAgICAgICB8ICAgICA2NTEgICAgICB8CnwgICAgICAgIFdoaXRlICAgICAgICAgfCAgICAgNjUyICAgICAgfAp8ICAgICAgIEJsYWNrIDIgICAgICAgIHwgICAgIDY1MyAgICAgIHwKfCAgICAgICBXaGl0ZSAyICAgICAgICB8ICAgICA2NTQgICAgICB8CnwgICAgICAgICAgWCAgICAgICAgICAgfCAgICAgNzYxICAgICAgfAp8ICAgICAgICAgIFkgICAgICAgICAgIHwgICAgIDc2MiAgICAgIHwKfCAgICAgIE9tZWdhIFJ1YnkgICAgICB8ICAgICAzNjEgICAgICB8CnwgICAgQWxwaGEgU2FwcGhpcmUgICAgfCAgICAgMzYyICAgICAgfAp8ICAgICAgICAgU3VuICAgICAgICAgIHwgICAgIDg3MSAgICAgIHwKfCAgICAgICAgIE1vb24gICAgICAgICB8ICAgICA4NzIgICAgICB8CnwgICAgICBVbHRyYSBTdW4gICAgICAgfCAgICAgODczICAgICAgfAp8ICAgICAgVWx0cmEgTW9vbiAgICAgIHwgICAgIDg3NCAgICAgIHwKfCAgIExldHMgZ28gUGlrYWNodSAgICB8ICAgICAxNzEgICAgICB8CnwgICAgTGV0cyBnbyBFZXZlZSAgICAgfCAgICAgMTcyICAgICAgfAp8ICAgICAgICBTd29yZCAgICAgICAgIHwgICAgIDk4MSAgICAgIHwKfCAgICAgICAgU2hpZWxkICAgICAgICB8ICAgICA5ODIgICAgICB8CnwgIEJyaWxsaWFudCBEaWFtb25kICAgfCAgICAgNTgxICAgICAgfAp8ICAgIFNoaW5pbmcgUGVhcmwgICAgIHwgICAgIDU4MiAgICAgIHwKfCAgICBMZWdlbmRzIEFyY2V1cyAgICB8ICAgICA1ODMgICAgICB8CnwgICAgICAgU2NhcmxldCAgICAgICAgfCAgICAgQTkxICAgICAgfAp8ICAgICAgICBWaW9sZXQgICAgICAgIHwgICAgIEE5MiAgICAgIHwKfCAgICAgTGVnZW5kcyBaLUEgICAgICB8ICAgICA3OTEgICAgICB8CnwgICAgICBQb2tlUm9ndWUgICAgICAgfCAgICAgJSUxICAgICAgfAp8ICAgRW1lcmFsZCBTZWFnbGFzcyAgIHwgICAgIDM5MVIgICAgIHwKfCAgICAgICBMYXphcnVzICAgICAgICB8ICAgICAlOTEgICAgICB8Cg==',
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
    'IyBQcmUtRGV2ZWxvcG1lbnQgYW5kIFNRTAoKIyMgRGVzaWducwoKSSBkZXNpZ25lZCB0aGUgbG9nbyBteXNlbGYsIGhvd2V2ZXIsIHRoZSBxdWlsbCBpY29uIHdpdGhpbiBpdCBhbmQgdGhlIG90aGVyIGljb25zIGFyZSBmcm9tIGZpZ21hJ3MgYFNpbXBsZSBEZXNpZ24gU3lzdGVtYCBhbmQgW0ljb25GaW5kZXJdKGh0dHBzOi8vd3d3Lmljb25maW5kZXIuY29tL2ljb25zLzExMTQ0MzM4L3NvZnRfY296eV9mZWF0aGVyX2JpcmRfZmVhdGhlcl9xdWlsbF9pY29uKS4KIVt3aXJlZnJhbWVzLCBwYWxldHRlcyBhbmQgaWNvbnNdKC4vZGVzaWduLnBuZykKCiMjIFNRTAoKIyMjIERpYWdyYW1zCgohW1BoeXNpY2FsIG1vZGVsIGVudGl0eSByZWxhdGlvbnNoaXAgZGlhZ3JhbXNdKC4vaW1hZ2UucG5nKQoKIyMjIENvZGUKCmBgYHNxbApDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyBldmVycXVpbGxfdGFncyAoCiAgaWQgICAgICAgQklHSU5UIFBSSU1BUlkgS0VZIEdFTkVSQVRFRCBBTFdBWVMgQVMgSURFTlRJVFksCiAgdGFnX25hbWUgVEVYVCBOT1QgTlVMTCwKICBjb2xvciAgICBURVhUIE5PVCBOVUxMCik7CgpDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyBldmVycXVpbGxfbWVzc2FnZXMgKAogIGlkICAgQklHSU5UIFBSSU1BUlkgS0VZIEdFTkVSQVRFRCBBTFdBWVMgQVMgSURFTlRJVFksCiAgbmFtZSBWQVJDSEFSKDEwMCkgTk9UIE5VTEwsCiAgdGFnICBJTlRFR0VSIFJFRkVSRU5DRVMgZXZlcnF1aWxsX3RhZ3MoaWQpLAogIG1zZyAgVkFSQ0hBUigyNTUpIE5PVCBOVUxMLAogIGRhdGUgVEVYVCBOT1QgTlVMTAopOwpgYGAKCmBgYHNxbApJTlNFUlQgSU5UTyBldmVycXVpbGxfbWVzc2FnZXMgKG5hbWUsIG1zZywgZGF0ZSkgVkFMVUVTICgnQ2hyaXN0b3BoZXIgTGVlJywgJ1R3aWNlIHRoZSBwcmlkZSwgZG91YmxlIHRoZSBmYWxsLicsICcxMy82LzIwMjUnKSwKKCdJYW4gTWNEaWFybWlkJywgJ0RvIGl0LiA+OiknLCAnMTMvNi8yMDI1JyksICgnRXdhbiBNY0dyZWdnb3InLCAnSGVsbG8gVGhlcmUnLCAnMTIvNi8yMDI1Jyk7CmBgYAoKIyBNeSBTZWxmLVJlZmxlY3Rpb24KClRoaXMgcHJvamVjdCBmZWx0IGEgbG90IGVhc2llciB0byBtZSB0aGFuIHRoZSBvdGhlcnMsIGV2ZW4gdGhvdWdoIGkga25vdyB0aGF0J3Mgbm90IHRydWUuIEkgZ290IHRvIGFjaGllYmUgbW9yZSBzdHJldGNoIGdvYWxzIHRoYW4gSSBoYXZlIGRvbmUgcHJldmlvdXNseSBhbmQgSSBoYXZlIGNvbWUgb3V0IGxlYXJuaW5nIG5ldyBxdWlya3MgYW5kIHNraWxsczsgYmVpbmcgbW9yZSBwcm91ZCBvZiB0aGUgb25lcyBJIGFscmVhZHkgaGF2ZSBhcyB3ZWxsLgoKIyMgV2hhdCBXZW50IFdlbGw/CgotIEkgd2FzIGFibGUgdG8gYWNoaWV2ZSBhbGwgdGhlIG1hbmRhdG9yeSByZXF1aXJlbWVudHMKLSBJIHdhcyBhYmxlIHRvIGVhY2hpZXZlIHNvbWUgcGVyc29uYWwgc3RyZXRjaCBnb2FscyAoaS5lLiB0aGVtZXMpCi0gSSBjb250cm9sbGVkIG15c2VsZiB3aGVuIGRlc2lnbmluZyBpbiBvcmRlciB0byBub3QgbWFrZSBhbiBvdmVyd2hlbG1pbmcgaW50ZXJmYWNlIGFuZCBVWAotIEkgd2FzIGFibGUgdG8gY29ubmVjdCB0byBteSBzZXJ2ZXIgbXVsdGlwbGUgdGltZXMgYW5kIGZlZWwgbW9yZSBjb25maWRlbnQgZG9pbmcgc28KLSBJIGJlbGlldmUgSSBhZGRlZCB0b3dhcmRzIG15IHBlcnNvbmFsIGNvZGUgb3JnYW5pc2F0aW9uIHRocm91Z2ggc3R5bGUgZm9sZGVycyBhbmQgY29uZ3J1ZW50IG5hbWluZyBjb252ZW50aW9ucwotIEkgZGlkIHJlc2VhcmNoIHRvIGZpbmQgYSBuZXctdG8tbWUgbnBtIHBhY2thZ2UgKHJlYWN0LXJlc3BvbnNpdmUpIHRoYXQgSSBjYW4gbG9vayBmb3dhcmQgdG8gdXNpbmcgYW5kIGV4cGxvcmluZyBpbiB0aGUgZnV0dXJlCgojIyBXaGF0IERpZG4ndCBHbyBXZWxsPwoKLSBJIHdlbnQgb3ZlciB0aGUgZGVhZGxpbmUgKOKUrOKUrO+5j+KUrOKUrCkKLSBJIGRpZCBub3QgZ2V0IHRvIGltcGxlbWVudCBsYXlvdXRzIGZvciBzbWFsbGVyIHJlc29sdXRpb25zICh0aG91Z2ggSSBrbm93IHdoYXQgdG8gZG8pCi0gSSBnb3QgY29uZnVzZWQgd2l0aCBtdWx0aXBsZSBgdXNlRWZmZWN0YCBiZWhhdmlvdXJzCiAgLSBbcmV0dXJpbmluZyBhbiBhcnJvdyBmdW5jdGlvbiB0byBjbGVhciB0aGUgaW50ZXJ2YWxdKC4vY2xpZW50L3NyYy9wYWdlcy9Xcml0ZS5qc3gjTDM0KQogIC0gW3doeSB0aGlzIG9uY2xpY2sgYnJlYWtzIHVubGVzcyBJIGRvIGl0IHRocm91Z2ggdXNlRWZmZWN0XSguL2NsaWVudC9zcmMvY29tcG9uZW50cy9EaW1tZXIuanN4I0w5LUwxMykKLSBJIGRpZG4ndCBoYXZlIHRpbWUgdG8gaW1wbGVtZW50IG9yIGZpZ3VyZSBvdXQgb3RoZXIgc3RyZXRjaCBnb2FscyBsaWtlIGZpbHRlcnMgYW5kIGEgZGVsZXRlIGJ1dHRvbgotIEkgZGlkbnQgZ2V0IHRvIHRlc3QgdGFncywgb3IgaW5zZXJ0IGFueSBkdW1teSBkYXRhIGZvciB0aGVtIHNvIHRlY2huaWNhbGx5IHRoZXkncmUgdW51c2VhYmxlCgojIyBXaGF0IEkgY2FuIEltcHJvdmUgb24KCi0gd29ya2luZyBmYXN0ZXIKLSBpbXByb3ZpbmcgbXkga25vd2xlZGdlIHNvIGkga25vdyB3aGF0IHRvIGRvIHNvIEkgY2FuIHdvcmsgZmFzdGVyCi0gc2V0IG1vcmUgYWNoaWV2YWJsZSBtaW5pYXR1cmUgZ29hbHMgc28gdGhhdCBJIGNhbiBtYWtlIG1vcmUgbWFuYWdlYWJsZSBwcm9ncmVzcyAoZXJnbywgd29yayBmYXN0ZXIpCg==',
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

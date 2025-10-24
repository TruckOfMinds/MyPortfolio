import "./style/Contact.css";

import { contactsData } from "@/lib/data";

import { Link } from "react-router";

import Grid from "@/components/Grid";
import Header from "@/components/Header";
import Card from "@/components/Card";

/* In-File Components =>
  - Contacts
*/

export default function ContactPage() {
  return (
    <>
      <title>Contact Me | RD Potfolio</title>
      <main>
        <Grid id="top" className="with-header contact mt-4">
          <Header text="Contact Me" />
          <Card
            colour="gold"
            className="max-w-[93%] min-w-1/2 min-h-1/3 flex items-center justify-center [grid-area:text] text-center h-fit ">
            this is the text
          </Card>
          <Contacts />
        </Grid>
      </main>
    </>
  );
}

const Contacts = () => (
  <Card
    colour="purple"
    className="w-[93%] min-h-4/5 flex flex-wrap items-center justify-center [grid-area:contacts]">
    {contactsData.map(c => (
      <Link
        to={c.link}
        className="rounded-2xl px-8 py-6 text-xl flex items-center gap-4 shadow-ii"
        style={{ backgroundColor: c.hex.bg, color: c.hex.txt }}>
        {typeof c.image === "string" ? (
          <img
            src={c.image}
            alt={c.name + " Logo"}
            loading="lazy"
            // use class so svgs have the same styles
            className="contact-image h-3/4 w-auto text-lg"
          />
        ) : (
          c.image
        )}
        <p className="text-2xl orbit">{c.name}</p>
      </Link>
    ))}
  </Card>
);

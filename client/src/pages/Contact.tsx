import Grid from "@/components/Grid";
import "./style/Contact.css";
import Header from "@/components/Header";
import { contactsData } from "@/lib/data";
import { Link } from "react-router";
import Card from "@/components/Card";

export default function ContactPage() {
  return (
    <>
      <title>Contact Me | RD Potfolio</title>
      <main>
        <Grid id="top" className="with-header">
          <Header text="Contact Me" />
          <Card
            colour="blue"
            className="w-full max-w-max justify-center [grid-area:text] text-center h-fit min-h-10"></Card>
          <Contacts />
        </Grid>
      </main>
    </>
  );
}

const Contacts = () => (
  <section className="w-full min-h-full h-fit flex flex-wrap items-center justify-center">
    {contactsData.map(c => (
      <Link
        to={c.link}
        className="rounded-2xl px-8 py-10 text-xl flex items-center gap-4"
        style={{ backgroundColor: c.hex.bg, color: c.hex.txt }}>
        <img src={c.image} alt={c.name + " Logo"} loading="lazy" className="h-3/4 w-auto" />
        <p>{c.name}</p>
      </Link>
    ))}
  </section>
);

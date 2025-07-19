import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="container">
      <Hero />
      <section className="card p-2 mt-2">
        <h2>About Our Hotel</h2>
        <p>
          Welcome to our luxury hotel, where comfort meets elegance. Enjoy top-class service,
          premium rooms, and world-class amenities.
        </p>
      </section>
    </main>
  );
}

const steps = [
  {
    n: "01",
    title: "Clone with Git",
    body: "In cPanel, open Git Version Control, clone this public repository over HTTPS, and keep the files outside public_html.",
  },
  {
    n: "02",
    title: "Register the app",
    body: "In Application Manager, point the application path at the clone, choose Production, and leave the startup file as app.js.",
  },
  {
    n: "03",
    title: "Install and build",
    body: "In Terminal, export the Node 20 PATH, then run npm install and npm run build. Touch tmp/restart.txt after each pull.",
  },
];

const features = [
  {
    title: "Passenger-ready entry",
    body: "app.js is the file Phusion Passenger looks for. It boots Next.js and respects the PORT Application Manager provides.",
  },
  {
    title: "One page, real content",
    body: "This landing page is the whole site: a hero, deploy steps, and a short studio story so you can confirm the app is being served.",
  },
  {
    title: "Public Git workflow",
    body: "No SSH keys required for the first clone. Pull updates from GitHub, rebuild, and restart Passenger.",
  },
];

export default function Home() {
  return (
    <div>
      <header className="wrap site-header">
        <div className="brand">
          <span className="mark">N</span>
          <div>
            <p className="brand-name">Northline</p>
            <p className="brand-sub">cPanel Application Manager demo</p>
          </div>
        </div>
        <a className="chip" href="#deploy">
          Deploy steps
        </a>
      </header>

      <main>
        <section className="wrap hero">
          <div>
            <p className="kicker">Single-page Next.js</p>
            <h1>A small site you can host on cPanel via Git.</h1>
            <p className="lede">
              Northline is sample content for a Git-to-Application-Manager
              workflow. Clone the public repo, register it with Passenger, build
              once, and this page should appear on your domain.
            </p>
          </div>
          <aside className="snapshot">
            <p className="snapshot-label">Demo snapshot</p>
            <dl>
              <div>
                <dt>Startup file</dt>
                <dd>app.js</dd>
              </div>
              <div>
                <dt>Mode</dt>
                <dd>production</dd>
              </div>
              <div>
                <dt>Node</dt>
                <dd>20</dd>
              </div>
              <div>
                <dt>Pages</dt>
                <dd>1</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section id="deploy" className="band">
          <div className="wrap grid-3">
            {steps.map((step) => (
              <article key={step.n}>
                <p className="step-n">{step.n}</p>
                <h2>{step.title}</h2>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="wrap section">
          <p className="kicker">What you get</p>
          <h2>Enough app to prove the host, not enough to get in the way.</h2>
          <div className="cards">
            {features.map((feature) => (
              <article className="card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="wrap">
          <div className="note">
            <p className="kicker">Studio note</p>
            <blockquote>
              “If this headline renders, Passenger found app.js, Node is
              running, and the Next.js build is being served.”
            </blockquote>
            <p>
              Replace this copy with your product later. The hosting path stays
              the same: Git pull, npm run build, touch tmp/restart.txt.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap site-footer-inner">
          <p>Northline demo · Next.js on cPanel Application Manager</p>
          <p>Public Git clone · production Node app</p>
        </div>
      </footer>
    </div>
  );
}

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
    body: "Run Ensure Dependencies, then npm run build in Terminal. Touch tmp/restart.txt whenever you pull a new commit.",
  },
];

const features = [
  {
    title: "Passenger-ready entry",
    body: "app.js is the file Phusion Passenger looks for. It boots Next.js and respects the PORT Application Manager provides.",
  },
  {
    title: "One page, real content",
    body: "This landing page is the whole site: a hero, deploy steps, and a short studio story so you can confirm SSR is working.",
  },
  {
    title: "Public Git workflow",
    body: "No SSH keys required for the first clone. Pull updates from GitHub, rebuild, and restart Passenger.",
  },
];

export default function Home() {
  return (
    <div className="min-h-full bg-paper text-ink">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-sm font-semibold text-paper">
            N
          </span>
          <div>
            <p className="text-sm font-semibold tracking-wide">Northline</p>
            <p className="text-xs text-muted">cPanel Application Manager demo</p>
          </div>
        </div>
        <a
          href="#deploy"
          className="rounded-full border border-rule px-4 py-2 text-sm transition hover:border-ink"
        >
          Deploy steps
        </a>
      </header>

      <main>
        <section className="mx-auto grid max-w-5xl gap-12 px-6 pb-20 pt-10 md:grid-cols-[1.15fr_0.85fr] md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Single-page Next.js
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
              A small site you can host on cPanel via Git.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              Northline is sample content for a Git-to-Application-Manager
              workflow. Clone the public repo, register it with Passenger, build
              once, and this page should appear on your domain.
            </p>
          </div>
          <aside className="rounded-3xl border border-rule bg-card p-6 shadow-[0_20px_50px_rgba(29,25,20,0.06)]">
            <p className="text-sm uppercase tracking-[0.18em] text-muted">
              Demo snapshot
            </p>
            <dl className="mt-5 space-y-4">
              <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-3">
                <dt className="text-sm text-muted">Startup file</dt>
                <dd className="font-mono text-sm">app.js</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-3">
                <dt className="text-sm text-muted">Mode</dt>
                <dd className="font-mono text-sm">production</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-3">
                <dt className="text-sm text-muted">Node</dt>
                <dd className="font-mono text-sm">20 or 22</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-sm text-muted">Pages</dt>
                <dd className="font-mono text-sm">1</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section id="deploy" className="border-y border-rule bg-card">
          <div className="mx-auto grid max-w-5xl gap-8 px-6 py-16 md:grid-cols-3">
            {steps.map((step) => (
              <article key={step.n}>
                <p className="font-mono text-sm text-accent">{step.n}</p>
                <h2 className="mt-3 font-serif text-2xl">{step.title}</h2>
                <p className="mt-3 leading-7 text-muted">{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            What you get
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl tracking-tight">
            Enough app to prove the host, not enough to get in the way.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-rule bg-card p-6"
              >
                <h3 className="font-serif text-xl">{feature.title}</h3>
                <p className="mt-3 leading-7 text-muted">{feature.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-20">
          <div className="rounded-[2rem] bg-ink px-8 py-12 text-paper md:px-12">
            <p className="text-sm uppercase tracking-[0.2em] text-paper/60">
              Studio note
            </p>
            <blockquote className="mt-4 max-w-3xl font-serif text-3xl leading-snug">
              “If this headline renders, Passenger found app.js, Node is
              running, and the Next.js build is being served.”
            </blockquote>
            <p className="mt-6 text-sm text-paper/70">
              Replace this copy with your product later. The hosting path stays
              the same: Git pull, npm run build, touch tmp/restart.txt.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-rule">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <p>Northline demo · Next.js on cPanel Application Manager</p>
          <p>Public Git clone · production Node app</p>
        </div>
      </footer>
    </div>
  );
}

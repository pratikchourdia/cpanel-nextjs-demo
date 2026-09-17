# Northline — Next.js demo for cPanel

Single-page Next.js site prepared for [cPanel Application Manager](https://docs.cpanel.net/cpanel/software/application-manager/) and [Git Version Control](https://docs.cpanel.net/cpanel/files/git-version-control/). Phusion Passenger starts `app.js` in production.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on cPanel via Git

Clone URL: `https://github.com/pratikchourdia/cpanel-nextjs-demo.git`

### 1. Clone the repository

1. cPanel → **Files** → **Git Version Control** → **Create**.
2. Enable **Clone a Repository**.
3. Paste the clone URL above.
4. Repository Path: a folder in your home directory, for example `repositories/cpanel-nextjs-demo` (not `public_html`).
5. Create the repository.

### 2. Register it in Application Manager

1. cPanel → **Software** → **Application Manager** → **Register Application**.
2. **Application Name:** `northline` (any label is fine).
3. **Deployment Domain:** the domain or subdomain that should serve the app.
4. **Base Application URL:** `/` to serve at the domain root, or a subpath such as `/app`.
5. **Application Path:** the same folder you cloned into.
6. **Deployment environment:** Production.
7. Register the application.

Passenger looks for `app.js` automatically. Do not rename that file.

### 3. Install and build from Terminal

**Do not rely on Ensure Dependencies.** That button often fails on cPanel because it runs npm without `node` on `PATH`, then times out on a large install.

Open **cPanel → Terminal** (or SSH) and run:

```bash
cd /homessd/kjglobalfoods/repositories/cpanel-nextjs-demo
export PATH="/opt/cpanel/ea-nodejs20/bin:$PATH"
git pull origin main
/opt/cpanel/ea-nodejs20/bin/npm install
/opt/cpanel/ea-nodejs20/bin/npm run build
mkdir -p tmp
touch tmp/restart.txt
```

Run these as the cPanel user (`kjglobalfoods`), not root. Next.js 16 defaults to Turbopack, which needs a newer glibc than most cPanel servers have. The `build` script uses Webpack instead.

Visit the domain you registered. You should see the Northline landing page.

If Git **Deploy** is enabled, `.cpanel.yml` runs the same install and build after each pull.

### 4. Update later

```bash
cd /homessd/kjglobalfoods/repositories/cpanel-nextjs-demo
export PATH="/opt/cpanel/ea-nodejs20/bin:$PATH"
git pull origin main
/opt/cpanel/ea-nodejs20/bin/npm install
/opt/cpanel/ea-nodejs20/bin/npm run build
touch tmp/restart.txt
```

## Requirements

- Node.js **20** (`ea-nodejs20`)
- Phusion Passenger via Application Manager
- `npm run build` uses Webpack (`next build --webpack`). Native Turbopack/SWC binaries need GLIBC 2.29+, which older cPanel hosts do not have.

## Logs

Passenger writes Node logs under `logs/` in the application directory. If the site 503s, check that `app.js` exists, `NODE_ENV` is `production`, and `.next` was produced by `npm run build`.

If you register the app on a **subpath**, set `basePath` in `next.config.js` to that same path.

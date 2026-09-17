# Northline — Next.js demo for cPanel

Single-page Next.js site prepared for [cPanel Application Manager](https://docs.cpanel.net/cpanel/software/application-manager/) and [Git Version Control](https://docs.cpanel.net/cpanel/files/git-version-control/). Phusion Passenger starts `app.js` in production.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on cPanel via Git

Use a **public** HTTPS clone URL so cPanel does not need SSH keys.

### 1. Clone the repository

1. cPanel → **Files** → **Git Version Control** → **Create**.
2. Enable **Clone a Repository**.
3. Clone URL: `https://github.com/pratikchourdia/cpanel-nextjs-demo.git`.
4. Repository Path: a folder in your home directory, for example `cpanel-nextjs-demo` (not `public_html`).
5. Create the repository.

### 2. Register it in Application Manager

1. cPanel → **Software** → **Application Manager** → **Register Application**.
2. **Application Name:** `northline` (any label is fine).
3. **Deployment Domain:** the domain or subdomain that should serve the app.
4. **Base Application URL:** `/` to serve at the domain root, or a subpath such as `/app`.
5. **Application Path:** the same folder you cloned into, relative to home (`cpanel-nextjs-demo`).
6. **Deployment environment:** Production.
7. Register the application.

Passenger looks for `app.js` automatically. Do not rename that file.

If your host uses **Setup Node.js App** instead of Application Manager, set:

- Node.js version **20** or **22**
- Application mode **Production**
- Application root: the clone directory
- Application startup file: `app.js`

### 3. Install, build, and start

In Application Manager, run **Ensure Dependencies** (npm install).

Then open **Terminal** (or SSH) and build:

```bash
cd ~/cpanel-nextjs-demo
export PATH="/opt/cpanel/ea-nodejs22/bin:/opt/cpanel/ea-nodejs20/bin:$PATH"
npm run build
mkdir -p tmp
touch tmp/restart.txt
```

Visit the domain you registered. You should see the Northline landing page.

If Git **Deploy** is enabled, `.cpanel.yml` installs dependencies, builds, and touches `tmp/restart.txt` after each pull. Confirm the `ea-nodejs*` path matches the Node version on your server.

### 4. Update later

```bash
# In Git Version Control: Pull or Deploy
cd ~/cpanel-nextjs-demo
export PATH="/opt/cpanel/ea-nodejs22/bin:/opt/cpanel/ea-nodejs20/bin:$PATH"
npm install
npm run build
touch tmp/restart.txt
```

## Requirements

- Node.js **20.9+** or **22** (`ea-nodejs20` / `ea-nodejs22`)
- Phusion Passenger via Application Manager
- `npm run build` must succeed on the server before the first request

## Logs

Passenger writes Node logs under `logs/` in the application directory. If the site 503s, check that `app.js` exists, `NODE_ENV` is `production`, and `.next` was produced by `npm run build`.

If you register the app on a **subpath**, set `basePath` in `next.config.ts` to that same path.

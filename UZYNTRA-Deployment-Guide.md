# 🚀 UZYNTRA Deployment Guide (Vercel + Hostinger Domain)

This guide will help you deploy your **UZYNTRA UI (Next.js project)** live using **Vercel** and connect it to your domain:

👉 **https://uzyntra.com (Hostinger)**

---

# 📌 PHASE 1 — PREPARE YOUR PROJECT

## 1. Ensure project builds successfully

Run locally:

```bash
npm run build
```

If errors → fix before deploying.

---

## 2. Ensure `package.json` is correct

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

---

## 3. Push project to GitHub

```bash
git add .
git commit -m "Production deploy"
git push origin main
```

---

# 📌 PHASE 2 — DEPLOY TO VERCEL

## 1. Go to Vercel

👉 https://vercel.com

---

## 2. Import your GitHub repo

* Click **"Add New Project"**
* Select your repo: `uzyntra-ui`
* Click **Deploy**

---

## 3. Vercel Auto Settings

Vercel will auto-detect:

* Framework: **Next.js**
* Build command: `next build`
* Output: `.next`

Just click:

👉 **Deploy**

---

## 4. Wait for deployment

After ~30–60 seconds:

You’ll get:

```
https://uzyntra-ui.vercel.app
```

---

# 📌 PHASE 3 — CONNECT DOMAIN (HOSTINGER)

## 1. Open Vercel Project

* Go to your project
* Click **Settings → Domains**

---

## 2. Add your domain

Add:

```
uzyntra.com
www.uzyntra.com
```

---

## 3. Vercel will give DNS records

Example:

### For root domain:

```
A Record
Name: @
Value: 76.76.21.21
```

### For www:

```
CNAME
Name: www
Value: cname.vercel-dns.com
```

---

# 📌 PHASE 4 — CONFIGURE HOSTINGER DNS

## 1. Login to Hostinger

👉 https://hpanel.hostinger.com

---

## 2. Go to:

```
Domains → uzyntra.com → DNS / Nameservers
```

---

## 3. Add / Update Records

### A Record

```
Type: A
Host: @
Points to: 76.76.21.21
TTL: Default
```

### CNAME

```
Type: CNAME
Host: www
Points to: cname.vercel-dns.com
```

---

## 4. Remove conflicting records

Delete any:

* Old A records
* Old CNAME for www

---

# 📌 PHASE 5 — WAIT FOR DNS PROPAGATION

⏱️ Time:

* Usually: **5–30 minutes**
* Max: **24 hours**

---

# 📌 PHASE 6 — VERIFY DOMAIN

Open:

👉 https://uzyntra.com
👉 https://www.uzyntra.com

If working → ✅ Done

---

# 📌 PHASE 7 — ENABLE HTTPS (AUTO)

Vercel automatically provides:

🔒 SSL Certificate
🔒 HTTPS redirect

No setup required.

---

# 📌 OPTIONAL (IMPORTANT FOR PRODUCTION)

## 1. Set Primary Domain

In Vercel:

* Go to Domains
* Set:

```
Primary: uzyntra.com
Redirect: www → uzyntra.com
```

---

## 2. Add Environment Variables (if needed)

```
VERCEL_ENV
NEXT_PUBLIC_API_URL
```

---

## 3. Optimize Performance

Enable:

* Edge Network (default)
* Image optimization (Next.js)
* Compression (automatic)

---

# 📌 COMMON ISSUES & FIXES

## ❌ Domain not working

✔ Check:

* DNS records correct
* No duplicate A records
* Wait propagation

---

## ❌ Build fails

Run locally:

```bash
npm run build
```

Fix errors → redeploy

---

## ❌ Styling broken

✔ Ensure Tailwind is properly configured
✔ Check `globals.css` is imported

---

## ❌ Routes not working

Ensure:

```
src/app/
```

structure is correct (App Router)

---

# 📌 DEPLOYMENT FLOW SUMMARY

```
Local → GitHub → Vercel → Hostinger DNS → Live Site
```

---

# 🎯 FINAL RESULT

Your site will be live at:

👉 https://uzyntra.com
👉 Global CDN (fast worldwide)
👉 Auto SSL secure
👉 Production-ready

---

# 🔥 NEXT STEP (AFTER GOING LIVE)

After launch, improve:

* UI (your Phase V2)
* Performance
* SEO
* Analytics
* Backend integration

---

# 🛡️ UZYNTRA STATUS

✔ Live
✔ Public
✔ Ready to showcase
✔ Ready for upgrades

---

If you want next:

👉 I can give you:

* SEO setup (Phase 10)
* Analytics (Google + Plausible)
* Performance optimization
* Production checklist

Just say 👍

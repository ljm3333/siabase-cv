<div align="center">
    <a href="https://siabase-cv.web.app/" target="_blank">
        <img src="https://github.com/DrNguyen2525/siabase-cv/blob/master/client/static/images/full-logo-light.svg" alt="logo" width="500" />
    </a>
</div>
<p>
  <img src="https://img.shields.io/badge/version-1.0-blue.svg" alt="version-badge" />
</p>

# Content

- [Overview](#overview)
- [Features](#overview)
- [Building from source](#building-from-source)
- [Live demo](#live-demo)
- [Explanation](#explanation)

# Overview

[**SiabaseCV**](https://siabase-cv.web.app/) is a free and open source resume builder that is built leveraging [Skynet](https://siasky.net/) decentralized CDN and [Namebase](https://www.namebase.io/) top-level domain (TLD) name registrar to make the mundane tasks of creating, updating and sharing your CV as easy as writing alphabet. With this app, you can create multiple resumes, share them with recruiters through a unique link and print as PDF, all for free, no advertisements, without losing the integrity and privacy of your data.

You have complete control over what goes into your resume, how it looks, what colors, what templates, even the layout in which sections placed. Want a dark mode resume? It’s as easy as editing 3 values and you’re done. You don’t need to wait to see your changes either. Everything you type, everything you change, appears immediately on your resume and gets updated in real time.

# Features

- Manage multiple resumes with one account
- Sync your data across devices
- Sign in with Google, or sign in anonymously just to test the app
- Send your resume to others with a unique sharable link
- Choose from 6 vibrant templates and more coming soon
- Structure sections and change layouts the way you want to
- Rename sections according to your language/industry
- Mix and match colors to any degree, even a dark mode resume
- Pick from a variety of crisp and clear fonts
- Import your existing [JSON Resume](https://jsonresume.org/) in one click
- No advertisements, no data sharing, no marketing emails

# Building from source

**1. Clone this repository to your computer**

`git clone git@github.com:DrNguyen2525/siabase-cv.git`

**2. Launch the back-end server**

Open a terminal tab, navigate to `server` directory and install dependencies

`cd server`

`yarn`

Make a copy of `.env.example` file, name it `.env` and leave your client side host there. This app leverage [Gatsby](https://www.gatsbyjs.org/) for front-end development and Gatsby run at port `8000` by default.

I also implemented an API for registering **Namebase** domain name in order to _handshake_ with a **Skylink** you provide. If you want to, make sure to provide your Namebase credentials too. Otherwise, just left it blank.

```
ACCESS_KEY=
SECRET_KEY=

DEV_CLIENT_HOST=http://localhost:8000
PROD_CLIENT_HOST=<YOUR_PUBLIC_CLIENT_HOSTING>
```

Then wake it up
`yarn start`

**3. Launch the front-end server**

Open another terminal tab, navigate to `client` directory and install dependencies

`cd client`

`yarn`

This project use Firebase Authentication and their Realtime Database for storing users and resumes, so please go to [Firebase](https://firebase.google.com/) and create a Firebase project yourself.
After that, make a copy of `.env.example` file, name it `.env` and fill it with your Firebase credentials

```
FIREBASE_APIKEY=
FIREBASE_APPID=
FIREBASE_AUTHDOMAIN=
FIREBASE_DATABASEURL=
FIREBASE_MEASUREMENTID=
FIREBASE_MESSAGINGSENDERID=
FIREBASE_PROJECTID=
FIREBASE_STORAGEBUCKET=
```

Next, create two new `.env.development` file and `.env.production` file, then give them your host information as `SERVER_HOST` environment variable

`.env.development` (Express Server)

```
SERVER_HOST=http://localhost:5000
```

`.env.production` file

```
SERVER_HOST=<YOUR_PUBLIC_SERVER_HOSTING>
```

Finally, wake it up and chill

`yarn start`

# Live demo

A demo is worth a thousand words. Give it a try [here](https://siabase-cv.web.app/).

# Explanation

Explanation video is available [here](https://siasky.net/AABZPQuUx55E_Qp1ZDe6w2q7rKBthcfYkg_jXQFpYupSiQ/).

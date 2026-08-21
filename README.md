# KATAPAYADI
**An Ancient Indian Numerical Encoding System — Educational Indian Knowledge Systems (IKS) Web Application**

An interactive, purely client-side web application for exploring, learning, and verifying the classical Indian **Katapayadi (कटापयादि)** alphanumeric encoding system.

---

## 1. Project Overview
Developed in classical India and particularly refined in the Kerala school of astronomy and mathematics (7th–14th century CE), **Katapayadi** is an alphanumeric system that maps consonants to decimal digits (0–9). It allowed ancient scholars, astronomers, and poets to encode complex numerical constants, astronomical chronograms (*vakyas*), and mathematical ratios (such as $\pi$) into fluid, memorable Sanskrit verses.

This application provides:
1. **Create Mnemonic / Forward Converter**: Convert numeric digit sequences into candidate Katapayadi consonant groups, generate pronounceable mnemonic patterns, and explain how vowels are added.
2. **Learn Katapayadi**: Educational breakdown of origins, the canonical 10-group consonant matrix, the role of vowels (*svaras*), and the classical reading direction rule *“अङ्कानां वामतो गतिः”* (numbers move from right to left).
3. **Reverse Check (Word ➔ Number)**: Verify how Sanskrit words or transliterated phonetic strings resolve back to numerical values with a step-by-step breakdown.
4. **Modern Computing Connection**: Conceptual bridge between Katapayadi and modern computer science concepts (ASCII/Unicode character encodings, lookup tables, hash buckets, and BIP-39 mnemonic seed phrases).

---

## 2. Technical Architecture & GitHub Pages Compatibility
- **Architecture**: 100% Client-Side Static Single Page Application (SPA).
- **Backend / Server Required**: **None** (No Node.js runtime, Python, Express, or external database needed in production).
- **API Keys / Secrets**: **None** (Fully self-contained, rule-based algorithm).
- **Environment Variables**: **None**.
- **Deployment Platform**: **GitHub Pages**, Vercel, Netlify, Cloudflare Pages, or any standard static web host.

---

## 3. Project Structure
```text
katapayadi-project/
├── index.html                  # HTML5 Entry Point
├── package.json                # Project dependencies and build scripts
├── vite.config.ts              # Vite configuration (with relative base './' for GitHub Pages)
├── tsconfig.json               # TypeScript configuration
├── src/
│   ├── main.tsx                # Application mounting point
│   ├── App.tsx                 # Main layout and tab navigation controller
│   ├── index.css               # Global styling (Tailwind CSS)
│   ├── types.ts                # Clean TypeScript interfaces for Katapayadi models
│   ├── katapayadiLogic.ts      # Unified central Katapayadi algorithm & phonetic parser
│   └── components/
│       ├── Navbar.tsx          # Top navigation bar and mobile menu drawer
│       ├── HomeSection.tsx     # Overview, visual flow, and quick-access cards
│       ├── CreateMnemonicSection.tsx # Number ➔ Consonants ➔ Mnemonic pattern generator
│       ├── LearnSection.tsx    # Canonical rules, mapping table & historical background
│       ├── ReverseCheckSection.tsx   # Word/Pattern ➔ Number step-by-step verification tool
│       ├── ModernConnectionSection.tsx # Bridge to computer science & data encoding
│       └── Footer.tsx          # Educational reference footer
└── README.md                   # Complete documentation and deployment guide
```

---

## 4. Canonical Katapayadi Mapping Matrix

The application uses **one single, unified mapping table** for both forward and reverse conversions:

| Digit | Transliteration (IAST) | Devanagari Consonants | Linguistic Category |
|:---:|:---|:---|:---|
| **1** | Ka, Ṭa, Pa, Ya | क, ट, प, य | First series of 4 foundational consonants |
| **2** | Kha, Ṭha, Pha, Ra | ख, ठ, फ, र | Second series |
| **3** | Ga, Ḍa, Ba, La | ग, ड, ब, ल | Third series |
| **4** | Gha, Ḍha, Bha, Va | घ, ढ, भ, व | Fourth series |
| **5** | Ṅa, Ṇa, Ma, Śa | ङ, ण, म, श | Nasals & palatal sibilant |
| **6** | Ca, Ta, Ṣa | च, त, ष | Palatal stop, dental stop, retroflex sibilant |
| **7** | Cha, Tha, Sa | छ, थ, स | Aspirated stops & dental sibilant |
| **8** | Ja, Da, Ha | ज, द, ह | Voiced stops & aspirate |
| **9** | Jha, Dha | झ, ध | Voiced aspirated stops |
| **0** | **Ña, Na** | **ञ, न** | **Nasal consonants mapping to digit 0** |
| *—* | *Vowels (a, i, u, e, o...)* | *अ, आ, इ, ई, उ...* | *No numeric value (ignored in calculations)* |

---

## 5. Local Setup & Run

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Steps
1. Clone or download the repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo-name>.git
   cd <your-repo-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

---

## 6. How to Deploy on GitHub Pages (Step-by-Step)

### Option A: Using GitHub Actions (Recommended & Fully Automated)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Katapayadi application"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. On GitHub, go to your repository **Settings** ➔ **Pages**.
3. Under **Build and deployment** ➔ **Source**, select **GitHub Actions**.
4. Create a workflow file at `.github/workflows/deploy.yml` with the following content:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: 'pages'
     cancel-in-progress: true

   jobs:
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
         - name: Set up Node
           uses: actions/setup-node@v4
           with:
             node-version: 20
         - name: Install dependencies
           run: npm install
         - name: Build
           run: npm run build
         - name: Setup Pages
           uses: actions/configure-pages@v4
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: './dist'
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```
5. Commit and push. GitHub Actions will automatically compile the project into static files in `dist/` and publish your live website!

### Option B: Using `gh-pages` Package
1. Run the build command locally:
   ```bash
   npm run build
   ```
2. The compiled static HTML, CSS, and JS bundle will be generated in the `dist/` directory.
3. Deploy the `dist` folder to your `gh-pages` branch.

---

## 7. Academic Disclaimer
*Katapayadi is a historical Indian Knowledge Systems (IKS) mnemonic and numerical representation system. It was designed to assist human memory and oral recitation—not as a modern cryptographic encryption algorithm.*


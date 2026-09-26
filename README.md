# 11th URPSAN Annual National Conference — Lagos'26 Landing Page

An official, modern, mobile-first conference landing page built for the **11th URPSAN Annual National Conference (Lagos'26)**, organized by the **Urban and Regional Planning Students Association of Nigeria (URPSAN National Body)**.

This website is designed as the single digital destination for attendees scanning the **one QR code** printed on the official conference flyer.

---

## 🌟 Conference Overview

- **Event**: 11th URPSAN Annual National Conference
- **Location Brand**: LAGOS'26
- **Theme**: *"Equipping Future-Ready Planners: Harnessing Digital Innovation for Smart, Sustainable, and Resilient Communities"*
- **Date**: 20th – 23rd October, 2026
- **Venue**: University of Lagos (UNILAG), Lagos State, Nigeria
- **Current Fee**: **₦15,000** (Late Payment / Active Rate)
- **Early Bird**: **₦10,000** (Closed / Expired 18th September)
- **Official Inquiries**: `0812 148 2364` & `0810 561 1496`

---

## 🎛️ Central Configuration (`src/data/conference.js`)

All conference details, pricing, contact numbers, and URLs are centralized in one file:
👉 **`src/data/conference.js`**

### 1. How to change the Registration URL:
Open `src/data/conference.js` and locate:
```javascript
registrationUrl: "#",
```
Replace `"#"` with your live link (e.g., Google Form, Paystack, Ticketlake):
```javascript
registrationUrl: "https://paystack.com/pay/urpsan-lagos26",
```
*Note: While set to `"#"` or empty, clicking "Register Now" displays an interactive dialog informing visitors that the online portal is opening shortly and provides direct call/WhatsApp buttons to the secretariat.*

### 2. How to update Phone Numbers:
Open `src/data/conference.js` and edit `contact1` or `contact2`:
```javascript
contact1: {
  display: "0812 148 2364",
  tel: "+2348121482364",
  raw: "2348121482364",
},
contact2: {
  display: "0810 561 1496",
  tel: "+2348105611496",
  raw: "2348105611496",
}
```

### 3. How to update Conference Dates or Fees:
All fees and dates are editable directly in `src/data/conference.js`:
- `currentFee: "₦15,000"`
- `earlyBirdFee: "₦10,000"`
- `date: "20th – 23rd October, 2026"`
- `venue: "University of Lagos (UNILAG), Lagos State."`

---

## 📱 User Journey & One QR Code Integration

```
PHYSICAL CONFERENCE FLYER
          ↓
     ONE QR CODE (Printed on flyer)
          ↓
CONFERENCE LANDING PAGE (https://your-domain.com)
          ↓
- Explore Theme & Mission
- View Venue & Google Maps Directions
- Check Active Fee (₦15,000)
- Register Online (External URL)
- Call Secretariat / Chat on WhatsApp
```

> [!IMPORTANT]
> The QR code should **ONLY** encode your final live website URL (e.g. `https://urpsan-lagos26.org` or your deployed Vercel/Netlify link). Do not encode phone numbers or bank accounts into the QR code.

---

## 🚀 Running the Project Locally

### Prerequisites
- Node.js 18+ (tested on Node 24)
- npm

### 1. Start Development Server
```bash
npm run dev
```
*(On Windows PowerShell if scripts are restricted, run: `cmd /c "npm run dev"`)*

Open your browser at `http://localhost:5173`.

### 2. Build for Production
```bash
npm run build
```
Generates an ultra-optimized static bundle in the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Options

### Option A: Vercel (Recommended)
1. Push this project to GitHub.
2. Go to [Vercel](https://vercel.com) and click **Import Project**.
3. Framework Preset: **Vite**.
4. Click **Deploy**.

### Option B: Netlify
1. Connect your repository on Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy Site**.

### Option C: GitHub Pages / Cloudflare Pages / Firebase
Deploy the compiled `dist/` folder directly.

---

## 🔒 Security & Compliance
- **No Bank Account Details**: In accordance with conference requirements, the Zenith Bank account number from the physical flyer has been completely excluded from the public code and UI.
- **Accessible & Responsive**: Tested across 320px, 375px, 390px, 768px, 1024px, and desktop viewports.
- **Fast Performance**: Zero heavy dependencies; standard React 19 + Tailwind v4 + Lucide React.

# CrowdFund Platform Setup

## Installation Instructions

Follow these steps to set up and run the CrowdFund platform:

### 1. Install Dependencies
```bash
npm install
```

### 2. Install Additional Required Packages
```bash
npm install framer-motion
npm install -D tailwindcss postcss autoprefixer
```

### 3. Run the Development Server
```bash
npm run dev
```

### 4. Open in Browser
Navigate to `http://localhost:5173` to view the application.

## Features Included

✅ **Modern React + Vite Setup**
✅ **Tailwind CSS with Custom Design System**
✅ **Framer Motion Animations**
✅ **Responsive Design**
✅ **Campaign Management (Create, View, Donate)**
✅ **Search & Filter Functionality**
✅ **Local Storage Persistence**
✅ **Sample Campaign Data**
✅ **Professional UI/UX Design**

## Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS with custom color palette
- **Animations**: Framer Motion
- **Font**: Google Fonts (Poppins)
- **Icons**: Emoji-based for simplicity
- **Storage**: localStorage for campaign persistence

## Design Features

- Soft gradients with lavender, pink, and indigo tones
- Rounded corners (rounded-2xl) and shadows
- Smooth hover animations
- Mobile-responsive grid layouts
- Professional startup-style landing page design

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation with logo and menu
│   ├── Hero.jsx           # Hero section with CTA buttons
│   ├── CampaignCard.jsx   # Individual campaign display
│   ├── CreateCampaignForm.jsx # Modal for creating campaigns
│   ├── DonateModal.jsx    # Modal for donations
│   └── Footer.jsx         # Footer with branding
├── App.jsx               # Main application component
├── main.jsx             # React entry point
└── index.css           # Global styles with Tailwind
```

The platform is ready to use and includes sample campaigns to demonstrate functionality!
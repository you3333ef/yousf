# 🚀 Payment System - Refactored with 14 Couriers

A modern, pixel-perfect payment system supporting 14 Gulf region shipping companies with dynamic currency detection and secure payment flows.

## ✨ Features

### 🎨 Pixel-Perfect UI
- Clean, responsive design with SSL security badge
- Modern card inputs with absolute-positioned icons
- Two-dropdown expiry date selector (Month/Year)
- Proper shadow effects and rounded corners

### 🏢 14 Courier Support
1. **FedEx** - International shipping
2. **DHL** - Express delivery
3. **Aramex** - Middle East logistics
4. **UPS** - Global shipping
5. **SMSA Express** - Saudi Arabia
6. **SPL** - Saudi Post Logistics
7. **iMile** - NEW - China-Gulf shipping
8. **J&T Express** - NEW - Southeast Asia courier
9. **Ay Makan** - NEW - Gulf region delivery
10. **Postaplus** - NEW - International courier
11. **Ubex** - NEW - Global express
12. **Emirates Post** - UAE national postal
13. **Zajil** - Saudi express delivery
14. **Naqel Express** - Saudi logistics

### 💰 Dynamic Currency Detection
Automatically detects currency based on country:
- 🇸🇦 Saudi Arabia (SA) → SAR
- 🇦🇪 UAE (AE) → AED
- 🇰🇼 Kuwait (KW) → KWD
- 🇶🇦 Qatar (QA) → QAR
- 🇦🇪 Oman (OM) → OMR
- 🇧🇭 Bahrain (BH) → BHD

### 🔒 Security
- SSL 256-bit encryption badge
- Secure payment flow
- OTP verification
- Data encryption

## 🛠️ Tech Stack

- **React 18** + TypeScript
- **Vite** - Lightning fast build tool
- **Tailwind CSS** - Utility-first CSS
- **Shadcn/ui** - Modern UI components
- **React Router DOM** - Client-side routing
- **React Query** - Data fetching
- **Supabase** - Backend & Database
- **Lucide React** - Beautiful icons

## 📱 Payment Flow

```
1. Recipient Information
   ↓ (URL params: ?country=SA&currency=SAR)
2. Payment Details
   ↓
3. Card Information (Card number, Expiry, CVV)
   ↓ (Month/Year dropdowns)
4. OTP Verification
   ↓
5. Receipt Confirmation
```

## 🚀 Deployment

### Option 1: Deploy via Git (Recommended)

```bash
# 1. Connect to Netlify
#    - Go to https://app.netlify.com/
#    - Click "New site from Git"
#    - Connect GitHub
#    - Select this repository

# 2. Configure build
#    Build command: npm run build
#    Publish directory: dist

# 3. Add environment variables
#    VITE_SUPABASE_URL=your_supabase_url
#    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# 4. Deploy!
```

### Option 2: Deploy with CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

### Option 3: Deploy via API

```bash
# Get your Netlify token and site ID
export NETLIFY_TOKEN="your_token"
export NETLIFY_SITE_ID="your_site_id"

# Run deployment script
./deploy.sh
```

## 📋 Environment Variables

Create a `.env` file:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🎯 Quick Start

```bash
# Clone the repository
git clone https://github.com/you3333ef/paym.git
cd paym

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── payment/        # Payment-specific components
│   │   ├── PaymentCard.tsx
│   │   ├── PaymentFormField.tsx
│   │   ├── PaymentExpiryField.tsx (NEW)
│   │   └── PaymentHeader.tsx
│   └── ui/             # Shadcn/ui components
├── pages/              # Application pages
│   ├── PaymentRecipient.tsx
│   ├── PaymentDetailsTheme.tsx
│   ├── PaymentCardInputTheme.tsx (NEW)
│   └── PaymentOTPTheme.tsx
├── themes/             # Theme configuration
│   └── themeConfig.ts  # 14 couriers + currency helper (UPDATED)
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
└── utils/              # Helper functions
```

## 🔧 Key Updates

### v2.0.0 - Major Refactor
- ✅ Added 5 new Gulf couriers (iMile, J&T, Ay Makan, Postaplus, Ubex)
- ✅ Implemented `getCurrency()` helper for dynamic currency detection
- ✅ Refactored PaymentCard with pixel-perfect styling
- ✅ Added SSL 256-bit security badge to all payment cards
- ✅ Created PaymentExpiryField with Month/Year dropdowns
- ✅ Updated card number placeholder to "0000 0000 0000 0000"
- ✅ Implemented URL params navigation (country & currency)
- ✅ Updated all payment pages for seamless state preservation

## 🧪 Testing

Test all payment flows:
1. Test with different countries (SA, AE, KW, QA, OM, BH)
2. Verify currency detection works correctly
3. Test expiry date dropdowns (Month/Year)
4. Test OTP flow
5. Verify responsive design

## 📸 Screenshots

### Payment Form (Pixel-Perfect)
- Clean card design with shadow
- SSL security badge at bottom
- Icon-positioned inputs (h-12 height)
- Expiry with dual dropdowns
- Masked CVV input

### Payment Flow
- Step-by-step progress indicator
- URL params preserve state
- Theme consistency across pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with ❤️ using React + TypeScript
- UI components by Shadcn/ui
- Icons by Lucide React
- Deployment on Netlify

## 📊 Repository Migration

This repository was migrated to demonstrate showing all companies per country in the dropdown selection.

---

**Live Demo:** [View on Netlify](https://app.netlify.com/)

**GitHub:** https://github.com/you3333ef/paym

**Author:** Yousef

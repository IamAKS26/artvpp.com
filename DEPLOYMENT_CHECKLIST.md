# ✅ ArtVPP Submission & Deployment Checklist

Use this checklist to ensure your project is 100% ready for submission and deployment.

## 1. 🧹 Code Quality & Cleanup
- [ ] **Remove Console Logs**: Search for `console.log` in the codebase and remove unnecessary debugging logs.
- [ ] **Check Imports**: Ensure there are no unused imports (VS Code usually grays them out).
- [ ] **Format Code**: Run a final formatter (Prettier) to ensure consistent indentation and style.
- [ ] **Fix Linter Warnings**: Address any yellow squiggly lines in your components.

## 2. 🧪 Functional Testing (The "Judge" Walkthrough)
- [ ] **Guest Flow**:
    - [ ] Open incognito window.
    - [ ] Navigate to Home -> Shop.
    - [ ] Add an item to Cart -> Verify Cart Drawer opens.
    - [ ] Go to Product Detail -> Add to Cart -> Verify Quantity updates.
- [ ] **Vendor Flow**:
    - [ ] Login as `vendor@artvpp.com` / `vendor`.
    - [ ] Verify redirect to Vendor Dashboard.
    - [ ] Check if Stats (Sales/Earnings) are displayed.
- [ ] **Admin Flow**:
    - [ ] Login as `admin@artvpp.com` / `admin`.
    - [ ] Verify redirect to Admin Dashboard.
- [ ] **Responsiveness**:
    - [ ] Resize browser to Mobile width (iPhone size).
    - [ ] Check Hamburger Menu functionality.
    - [ ] Check Shop Grid stack (1 column on mobile).

## 3. 🚀 Build & Performance
- [ ] **Production Build**: 
    - Run `npm run build` locally.
    - Verify that no errors occur during the build process.
- [ ] **Preview Build**:
    - Run `npm run preview` to test the production build locally.
- [ ] **Assets**:
    - Ensure all images are loading correctly (no broken links).
    - Check if the Favicon is visible.

## 4. 🌐 Deployment (Vercel/Netlify)
- [ ] **Connect Repository**: Push your code to GitHub.
- [ ] **Environment Variables**: Since this is a frontend-only demo, ensure you **don't** have any strictly required `.env` variables that would break the build if missing.
- [ ] **Build Command**: Ensure Vercel/Netlify uses `npm run build` and publish directory is `dist`.
- [ ] **Route Rewrites**: 
    - **Critical**: For Single Page Apps (SPA) like React, you must handle routing.
    - **Vercel**: Usually handles this automatically.
    - **Netlify**: Add a `_redirects` file in `public/` containing:
      ```
      /*  /index.html  200
      ```
      This prevents "404 Not Found" on refresh.

## 5. 📄 Final Submission Materials
- [ ] **README.md**: Is it clear? Does it have the demo login info?
- [ ] **Screenshots**: Take 3-4 high-quality screenshots of Home, Shop, and Dashboards.
- [ ] **Video Demo**: Record a 1-minute loom/screen capture walking through the "Happy Path" (Home -> Shop -> Cart -> Login -> Dashboard).

---

**Good luck with the submission! 🚀**

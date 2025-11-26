# Calendly Online Booking Setup Guide

## ✅ What I've Added

I've integrated Calendly into your website to allow clients to book consultations online 24/7!

### Changes Made:
1. ✅ Created `CalendlyWidget.jsx` component
2. ✅ Added "Book Online" button to hero section (replaces "Request Consultation")
3. ✅ Added translations in all 3 languages (EN/FR/AR)
4. ✅ Updated `.env.example` with Calendly URL configuration

---

## 🚀 How to Complete the Setup

### Step 1: Create Your Free Calendly Account

1. Go to [https://calendly.com/signup](https://calendly.com/signup)
2. Sign up with your email (FREE plan is perfect)
3. Complete the onboarding

### Step 2: Create an Event Type

1. In Calendly dashboard, click **"Create Event Type"**
2. Choose **"One-on-One"**
3. Configure your consultation:
   - **Event name**: "Legal Consultation" or "Consultation Juridique"
   - **Duration**: 30 minutes (or your preference)
   - **Location**: Phone call, Video call, or In-person
   - **Availability**: Set your working hours

### Step 3: Get Your Calendly URL

1. After creating the event, Calendly will give you a URL like:
   ```
   https://calendly.com/your-username/consultation
   ```
2. Copy this URL

### Step 4: Add URL to Your Website

1. Open your `.env` file (in the root of your project)
2. Add this line:
   ```
   VITE_CALENDLY_URL=https://calendly.com/your-username/consultation
   ```
3. Replace `your-username/consultation` with your actual Calendly URL

### Step 5: Restart Dev Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

---

## 🎯 How It Works

### For Visitors:
1. Click "Book Online" / "Réserver en Ligne" / "احجز عبر الإنترنت" button
2. Calendly popup opens
3. They select a time slot
4. Enter their details
5. Receive confirmation email

### For You:
1. Get email notification when someone books
2. Event automatically added to your Google Calendar
3. Automatic reminders sent to both parties
4. Can reschedule/cancel from Calendly dashboard

---

## 📱 Mobile App

Download the Calendly mobile app to manage bookings on the go:
- **iOS**: [App Store](https://apps.apple.com/app/calendly/id1451094657)
- **Android**: [Google Play](https://play.google.com/store/apps/details?id=com.calendly.app)

---

## 🎨 Customization Options (Optional)

### In Calendly Dashboard:

1. **Branding** (Paid plans):
   - Add your logo
   - Customize colors
   - Remove Calendly branding

2. **Questions**:
   - Add custom questions (e.g., "What type of legal matter?")
   - Collect phone numbers
   - Get case details upfront

3. **Notifications**:
   - Email reminders
   - SMS reminders (paid)
   - Calendar invites

4. **Integrations**:
   - Google Calendar ✅ (Free)
   - Zoom meetings
   - Google Meet
   - Microsoft Teams

---

## ✨ What's Next?

After you add your Calendly URL to `.env`:

1. Test it yourself - click the "Book Online" button
2. Try booking a test appointment
3. Check if you receive the email
4. Verify it appears in your calendar

---

## 🆘 Troubleshooting

**Button doesn't work?**
- Make sure you added `VITE_CALENDLY_URL` to `.env`
- Restart the dev server after adding the URL
- Check the browser console for errors

**Popup doesn't open?**
- Clear browser cache
- Try in incognito mode
- Check if popup blockers are disabled

---

## 💡 Pro Tips

1. **Set buffer time** between appointments (e.g., 15 min)
2. **Limit bookings** to prevent overbooking
3. **Add your timezone** clearly
4. **Use confirmation page** to set expectations
5. **Enable email reminders** to reduce no-shows

---

Need help? Let me know! 🚀

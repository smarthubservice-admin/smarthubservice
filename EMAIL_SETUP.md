# EmailJS Integration Guide

## Overview
EmailJS allows you to send emails directly from JavaScript without a backend server. This guide walks you through the complete setup.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com)
2. Click **Sign Up** (or Sign In if you have an account)
3. Create your account using email or social login
4. Verify your email address

## Step 2: Set Up Email Service

1. Go to **Email Services** in your dashboard
2. Click **Add Service**
3. Select **Gmail** (or your preferred email provider)
4. Authorize EmailJS to access your email account
5. Complete the setup process
6. **Copy your Service ID** (looks like `service_xxxxxxxxx`)

## Step 3: Create Email Template

### Create Admin Notification Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Name it: `contact_form_template` (or your preferred name)
4. Set up the template:

**Email Address:** `{{to_email}}` (this will be `smarthubserviceinfo@gmail.com`)

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Template Body:**
```
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #007bff; color: white; padding: 20px; text-align: center; }
        .content { background-color: #f9f9f9; padding: 20px; border-radius: 5px; }
        .field { margin-bottom: 15px; }
        .field-label { font-weight: bold; color: #333; }
        .field-value { color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>New Contact Form Submission</h2>
        </div>
        <div class="content">
            <div class="field">
                <div class="field-label">Name:</div>
                <div class="field-value">{{from_name}}</div>
            </div>
            <div class="field">
                <div class="field-label">Email:</div>
                <div class="field-value">{{from_email}}</div>
            </div>
            <div class="field">
                <div class="field-label">Message:</div>
                <div class="field-value">{{message}}</div>
            </div>
            <hr>
            <p><em>This message was sent from the Smart Hub Service website contact form.</em></p>
        </div>
    </div>
</body>
</html>
```

5. Click **Save** and copy the **Template ID** (looks like `template_xxxxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** settings in your dashboard
2. Select **API Keys**
3. Copy your **Public Key** (looks like `abc123xyz...`)
4. ⚠️ This is safe to share (it's public), but keep your Private Key secret!

## Step 5: Update Your Code

Replace the three placeholders in `index.html`:

```javascript
// Line 1: Replace YOUR_PUBLIC_KEY
emailjs.init("YOUR_PUBLIC_KEY");

// Line 2: Replace YOUR_SERVICE_ID
'YOUR_SERVICE_ID',

// Line 3: Replace YOUR_TEMPLATE_ID
'YOUR_TEMPLATE_ID',
```

### Example (Your actual credentials would look like):
```javascript
emailjs.init("abcdef123456ghij");
await emailjs.send(
    'service_abc123def456',
    'template_xyz789uvw012',
    { ... }
);
```

## Step 6: Test It Out

1. Open your website at `http://localhost:8000`
2. Scroll to the **Contact Us** section
3. Fill in the contact form:
   - Name: `Test User`
   - Email: `your-test-email@gmail.com`
   - Message: `This is a test message`
4. Click **Send Message**
5. Check `smarthubserviceinfo@gmail.com` for the email

## How It Works

```
[User submits form]
         ↓
[JavaScript captures data]
         ↓
[EmailJS library processes]
         ↓
[Sends to EmailJS API]
         ↓
[EmailJS sends via your Gmail account]
         ↓
[Email arrives at smarthubserviceinfo@gmail.com]
```

## Features of This Setup

✅ **No backend server needed** - Pure client-side  
✅ **Free tier: 200 emails/month** - Perfect for contact forms  
✅ **Easy setup** - Just 5 steps  
✅ **Secure** - Gmail handles authentication  
✅ **Professional emails** - HTML templates  
✅ **Easy to maintain** - No code to update  

## Troubleshooting

### Email not sending?

**Check 1:** Verify your credentials in `index.html`
- Are `PUBLIC_KEY`, `SERVICE_ID`, and `TEMPLATE_ID` correct?

**Check 2:** Open browser console (F12 → Console)
- Look for any error messages

**Check 3:** Verify EmailJS account
- Can you login to emailjs.com?
- Is your Gmail service connected?
- Is your template created?

### "Invalid credentials" error?

- Copy/paste your IDs directly from EmailJS dashboard
- No typos or extra spaces

### Emails going to spam?

- Add your domain to Gmail whitelist
- Use a branded email signature
- Configure SPF/DKIM records for your domain

### Rate limiting issues?

- Free tier: 200 emails/month
- Upgrade to Premium if you need more
- Add delay between submissions if testing

## Email Limits

| Plan | Emails/Month | Price |
|------|-------------|-------|
| Free | 200 | $0 |
| Starter | 10,000 | $15 |
| Pro | 100,000 | $25 |
| Business | Unlimited | $99 |

## Advanced: Add Confirmation Email to User

To send a confirmation email to the user who submitted the form, create another template:

1. Create template: `confirmation_email_template`
2. Use EmailJS to send to `{{from_email}}`
3. Add another `emailjs.send()` call in your form handler

## File Structure

```
smarthubservice/
├── index.html          # Updated with EmailJS integration
├── README.md           # Project documentation
└── EMAIL_SETUP.md      # This file
```

## Next Steps

1. ✅ Create EmailJS account
2. ✅ Set up Gmail service
3. ✅ Create email template
4. ✅ Get your credentials
5. ✅ Update index.html
6. ✅ Test the form
7. ✅ Deploy to production

## Support

- EmailJS Docs: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

---

**Last Updated:** January 9, 2026

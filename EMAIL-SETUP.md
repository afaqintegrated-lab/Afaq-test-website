# Email Setup Guide - AFAQ Store

## Overview
The checkout system now sends **real emails** to `afaqintegrated@gmail.com` when customers place orders.

## How It Works

### 1. Customer Submits Order
- Customer fills out checkout form with their details
- System validates all information
- Form data + cart items sent to PHP backend

### 2. Backend Processing (`api/send-order.php`)
- Receives order data via POST request
- Generates unique order number: `AFAQ-{timestamp}-{random}`
- Creates two beautiful HTML emails:
  - **Internal Email** → Sent to `afaqintegrated@gmail.com`
  - **Customer Confirmation** → Sent to customer's email

### 3. Email Contents

#### Internal Email (to AFAQ):
- 📋 Order number, date, and time
- 👤 Customer information (name, email, phone, message)
- 🛒 Complete order details with quantities and prices
- 💰 Total price
- 🔔 Action items checklist

#### Customer Email:
- ✅ Order confirmation message
- 📦 Order number for reference
- 📋 Order summary
- 💰 Total price
- 📞 Contact information

## Setup Instructions

### Option 1: PHP Mail (Basic - Works on Most Hosts)
**Current Implementation** - Already configured!

The `api/send-order.php` file uses PHP's built-in `mail()` function.

**Requirements:**
- PHP hosting with mail() function enabled
- Most shared hosting providers support this

**No configuration needed!** Just upload to server.

### Option 2: SMTP (Recommended for Better Deliverability)

If emails aren't being delivered, use SMTP instead:

1. **Install PHPMailer** (optional but recommended):
```bash
composer require phpmailer/phpmailer
```

2. **Update send-order.php** to use SMTP:
```php
use PHPMailer\PHPMailer\PHPMailer;

$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'afaqintegrated@gmail.com';
$mail->Password = 'your-app-password'; // Generate from Google
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;
```

3. **Generate Gmail App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification
   - App passwords → Generate new
   - Copy password and use in code

## Development vs Production

### The checkout system automatically detects the environment:

**Development Mode** (localhost, 127.0.0.1, or port 5500):
- ✅ Order submission works without PHP server
- ✅ Order details logged to browser console
- ✅ Success message includes "(وضع التطوير - تحقق من Console)"
- ⚠️ No actual emails sent
- 📝 Check browser console (F12) to see order details

**Production Mode** (live server):
- ✅ Sends real emails to afaqintegrated@gmail.com
- ✅ Customer receives confirmation email
- ✅ Full order tracking

## Testing

### Local Testing (Development)
Just open the site in your browser! The system will work in development mode.

1. **MailHog** (Email testing tool):
```bash
# Install MailHog
brew install mailhog
# Run it
mailhog
# Update PHP to use localhost:1025
```

2. **Mailtrap.io** (Free email testing):
   - Sign up at mailtrap.io
   - Get SMTP credentials
   - Update send-order.php with Mailtrap settings

### Production Testing
1. Upload files to your hosting server
2. Place a test order
3. Check `afaqintegrated@gmail.com` inbox
4. Customer should also receive confirmation

## Troubleshooting

### Emails Not Sending?

**Check 1: PHP mail() enabled**
```php
<?php
if (function_exists('mail')) {
    echo "mail() is available";
} else {
    echo "mail() is NOT available - use SMTP";
}
?>
```

**Check 2: Server logs**
```bash
tail -f /var/log/mail.log
```

**Check 3: Spam folder**
- Check afaqintegrated@gmail.com spam folder
- Mark as "Not Spam" if found there

**Check 4: Email headers**
Make sure your hosting allows sending from:
- `noreply@afaqinfotech.com`

If not, change to your domain:
```php
$headers .= "From: AFAQ Store <noreply@yourdomain.com>" . "\r\n";
```

### Common Issues

**Issue**: Emails go to spam
**Solution**:
- Use SMTP with proper authentication
- Add SPF/DKIM records to DNS
- Use verified domain email

**Issue**: "mail() function disabled"
**Solution**: Use SMTP method (Option 2 above)

**Issue**: "Could not instantiate mail function"
**Solution**: Contact hosting provider to enable mail()

## File Structure
```
afaq-website-html/
├── api/
│   └── send-order.php       # Email sending backend
├── checkout.html            # Checkout page
└── js/
    └── checkout.js          # Frontend checkout logic
```

## Security Notes

✅ Input validation on frontend
✅ Server-side validation in PHP
✅ HTML special characters escaped
✅ CORS headers configured
✅ POST method only

## Email Templates

Both emails use responsive HTML with:
- Gradient headers (purple/pink for AFAQ, green for customer)
- Professional layout
- Proper RTL support
- Mobile-friendly design
- Clear call-to-actions

## Support

For issues, contact:
- Email: info@afaqinfotech.com
- Developer: Check server logs and PHP error log

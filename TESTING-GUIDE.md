# Testing Guide - AFAQ Store Checkout

## ✅ Testing Locally (Development)

### How to Test Right Now:

1. **Open checkout page** in your browser (with Live Server or any local server)
2. **Fill out the form** with test data:
   - Name: Test Customer
   - Email: test@example.com
   - Phone: 0512345678
   - Message: (optional)
3. **Click "إرسال الطلب"**
4. **Open Browser Console** (F12 → Console tab)
5. **See order details** logged like this:

```
=== DEVELOPMENT MODE - ORDER DETAILS ===
Order Data: {customerData: {...}, cartItems: [...], totalPrice: 45000}
Customer: Test Customer
Email: test@example.com
Phone: 0512345678
Total: 45000 ر.س
Products:
- نظام إدارة القطاع الصحي x1 = 45000 ر.س
========================================
```

6. **Success toast appears** with message including "(وضع التطوير - تحقق من Console)"
7. **Cart is cleared** automatically
8. **Redirects to store** after 3 seconds

### What Happens in Development Mode:

✅ Form validation works normally
✅ Order is processed locally
✅ Success/error messages work
✅ Cart gets cleared
✅ Order number is generated
⚠️ **NO emails are sent** (because PHP can't run on static servers)
📝 **Order details are logged to console** for you to verify

---

## 🚀 Testing on Production Server

### After Uploading to Server:

1. **Upload all files** to your hosting
2. **Make sure PHP is enabled** on your server
3. **Open the live website**
4. **Place a test order**
5. **Check** `afaqintegrated@gmail.com` inbox
6. **Customer email** should arrive at the email you entered

### What Happens in Production Mode:

✅ All form validation works
✅ Order sent to `api/send-order.php`
✅ **Email sent to afaqintegrated@gmail.com**
✅ **Confirmation email sent to customer**
✅ Success message appears
✅ Cart is cleared
✅ Redirects to store

---

## 🔍 Viewing Order Details (Development)

### Browser Console (F12):
The console shows exactly what would be sent to the server:

```javascript
{
  customerData: {
    fullName: "Test Customer",
    email: "test@example.com",
    phone: "0512345678",
    message: "Please call me in the morning"
  },
  cartItems: [
    {
      id: "healthcare-management-system",
      name: "نظام إدارة القطاع الصحي",
      price: 45000,
      quantity: 1,
      category: "أنظمة إدارة الأعمال"
    }
  ],
  totalPrice: 45000,
  orderDate: "2025-01-11T10:30:45.123Z"
}
```

---

## 📧 Email Preview

### When uploaded to server, you'll receive this:

**To: afaqintegrated@gmail.com**
```
Subject: 🛒 طلب جديد AFAQ-1736593845-456 - Test Customer

[Beautiful HTML Email with:]
- Order number and date
- Customer details
- Product list
- Total price
- Action checklist
```

**To: Customer Email**
```
Subject: ✅ تأكيد طلبك AFAQ-1736593845-456 - آفاق المتكاملة

[Beautiful HTML Email with:]
- Order confirmation
- Order number
- Product summary
- Total price
- Contact info
```

---

## 🐛 Troubleshooting

### "405 Method Not Allowed" Error
✅ **This is normal on localhost!** The system automatically switches to development mode.
📝 Check the console - you'll see the order details there.

### "Failed to fetch" Error
✅ **This is normal on localhost!** The fallback mechanism will handle it.
📝 Order will still process in development mode.

### No Console Output?
1. Open DevTools (F12)
2. Click "Console" tab
3. Submit order again
4. Look for "=== DEVELOPMENT MODE - ORDER DETAILS ==="

### On Production - Emails Not Arriving?
1. Check spam folder in afaqintegrated@gmail.com
2. Verify PHP mail() is enabled on server
3. Check server error logs
4. See EMAIL-SETUP.md for SMTP alternative

---

## ✨ Features Working in Both Modes

| Feature | Development | Production |
|---------|-------------|------------|
| Form validation | ✅ | ✅ |
| Required fields | ✅ | ✅ |
| Email format check | ✅ | ✅ |
| Phone format check | ✅ | ✅ |
| Order processing | ✅ | ✅ |
| Order number generation | ✅ | ✅ |
| Cart clearing | ✅ | ✅ |
| Success message | ✅ | ✅ |
| Error handling | ✅ | ✅ |
| **Email to AFAQ** | ❌ | ✅ |
| **Email to Customer** | ❌ | ✅ |

---

## 🎯 Quick Test Checklist

### Development (Localhost):
- [ ] Form validates correctly
- [ ] Required fields show errors
- [ ] Order details appear in console
- [ ] Success message shows "(وضع التطوير)"
- [ ] Cart is cleared
- [ ] Redirects to store

### Production (Live Server):
- [ ] Form validates correctly
- [ ] Order submits successfully
- [ ] Email arrives at afaqintegrated@gmail.com
- [ ] Customer receives confirmation
- [ ] Success message shows
- [ ] Cart is cleared
- [ ] Redirects to store

---

## 📞 Support

- **Email Issues**: See EMAIL-SETUP.md
- **Form Issues**: Check browser console for errors
- **Server Issues**: Check PHP error logs

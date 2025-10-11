<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get POST data
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate data
if (!isset($data['customerData']) || !isset($data['cartItems']) || empty($data['cartItems'])) {
    http_response_code(400);
    echo json_encode(['error' => 'بيانات غير مكتملة']);
    exit();
}

$customerData = $data['customerData'];
$cartItems = $data['cartItems'];
$totalPrice = $data['totalPrice'] ?? 0;

// Generate order number
$orderNumber = 'AFAQ-' . time() . '-' . rand(100, 999);
$orderDate = date('Y-m-d');
$orderTime = date('H:i:s');

// Prepare email to AFAQ (afaqintegrated@gmail.com)
$to = 'afaqintegrated@gmail.com';
$subject = '🛒 طلب جديد ' . $orderNumber . ' - ' . $customerData['fullName'];

// Build order items HTML
$orderItemsHtml = '';
foreach ($cartItems as $item) {
    $itemTotal = $item['price'] * $item['quantity'];
    $orderItemsHtml .= '
        <div style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
            <div><strong>' . htmlspecialchars($item['name']) . '</strong></div>
            <div>الكمية: ' . $item['quantity'] . ' × ' . number_format($item['price']) . ' ر.س = <strong>' . number_format($itemTotal) . ' ر.س</strong></div>
        </div>
    ';
}

// HTML email template for AFAQ
$messageHtml = '
<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
    <meta charset="utf-8">
    <title>طلب جديد - آفاق</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f3f4f6;">
    <div style="max-width: 600px; margin: 20px auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <div style="background: linear-gradient(135deg, #582a6e 0%, #e3237b 100%); color: white; padding: 30px 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">🛒 طلب جديد من متجر آفاق</h1>
        </div>
        <div style="padding: 30px 20px; line-height: 1.8; color: #374151;">
            <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin: 15px 0; border-right: 4px solid #582a6e;">
                <h3 style="color: #582a6e; margin-top: 0;">📋 معلومات الطلب</h3>
                <div><strong>رقم الطلب:</strong> ' . $orderNumber . '</div>
                <div><strong>تاريخ الطلب:</strong> ' . $orderDate . '</div>
                <div><strong>الوقت:</strong> ' . $orderTime . '</div>
            </div>

            <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin: 15px 0; border-right: 4px solid #582a6e;">
                <h3 style="color: #582a6e; margin-top: 0;">👤 بيانات العميل</h3>
                <div><strong>الاسم الكامل:</strong> ' . htmlspecialchars($customerData['fullName']) . '</div>
                <div><strong>البريد الإلكتروني:</strong> ' . htmlspecialchars($customerData['email']) . '</div>
                <div><strong>رقم الهاتف:</strong> ' . htmlspecialchars($customerData['phone']) . '</div>';

if (!empty($customerData['message'])) {
    $messageHtml .= '<div style="margin-top: 10px;"><strong>رسالة إضافية:</strong><br/><em>' . nl2br(htmlspecialchars($customerData['message'])) . '</em></div>';
}

$messageHtml .= '
            </div>

            <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin: 15px 0; border-right: 4px solid #582a6e;">
                <h3 style="color: #582a6e; margin-top: 0;">🛒 تفاصيل الطلب</h3>
                ' . $orderItemsHtml . '
                <div style="font-size: 20px; font-weight: bold; color: #582a6e; padding: 15px; background: #f3f4f6; border-radius: 8px; margin-top: 15px; text-align: center;">
                    المجموع الكلي: ' . number_format($totalPrice) . ' ر.س
                </div>
            </div>

            <div style="background: #fef3c7; border: 2px solid #fbbf24; border-radius: 8px; padding: 15px; margin: 20px 0;">
                <h3 style="color: #92400e; margin-top: 0;">🔔 الإجراءات المطلوبة:</h3>
                <ul style="margin: 10px 0; padding-right: 20px;">
                    <li>التواصل مع العميل خلال 24 ساعة</li>
                    <li>تأكيد تفاصيل الطلب</li>
                    <li>ترتيب عملية الدفع</li>
                    <li>تفعيل الخدمات بعد تأكيد الدفع</li>
                </ul>
            </div>
        </div>
        <div style="background: #374151; color: white; padding: 20px; text-align: center; font-size: 14px;">
            <p style="margin: 5px 0;">هذا الإيميل تم إرساله تلقائياً من متجر آفاق المتكاملة</p>
            <p style="margin: 5px 0; opacity: 0.8;">تاريخ الإرسال: ' . date('Y-m-d H:i:s') . '</p>
        </div>
    </div>
</body>
</html>
';

// Email headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: AFAQ Store <noreply@afaqinfotech.com>" . "\r\n";
$headers .= "Reply-To: " . $customerData['email'] . "\r\n";

// Send email to AFAQ
$emailSent = mail($to, $subject, $messageHtml, $headers);

if (!$emailSent) {
    // Log error but don't fail the request
    error_log('Failed to send email for order: ' . $orderNumber);
}

// Send confirmation email to customer
$customerSubject = '✅ تأكيد طلبك ' . $orderNumber . ' - آفاق المتكاملة';
$customerHtml = '
<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
    <meta charset="utf-8">
    <title>تأكيد طلبك - آفاق</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f3f4f6;">
    <div style="max-width: 600px; margin: 20px auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: white; padding: 30px 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">✅ تم استلام طلبك بنجاح</h1>
        </div>
        <div style="padding: 30px 20px; line-height: 1.8; color: #374151;">
            <p>مرحباً <strong>' . htmlspecialchars($customerData['fullName']) . '</strong>,</p>
            <p>شكراً لتسوقك من آفاق المتكاملة لتكنولوجيا المعلومات. تم استلام طلبك بنجاح وسيتواصل معك فريقنا خلال 24 ساعة لتأكيد الطلب وترتيب عملية الدفع والتفعيل.</p>

            <div style="background: #f0fdf4; border: 2px solid #86efac; border-radius: 8px; padding: 20px; margin: 20px 0; text-align: center;">
                <div style="color: #065f46; margin-bottom: 8px;">رقم الطلب</div>
                <div style="font-size: 20px; font-weight: bold; color: #059669; font-family: monospace;">' . $orderNumber . '</div>
            </div>

            <div style="margin: 10px 0; padding: 10px; background: #f9fafb; border-radius: 6px;"><strong>تاريخ الطلب:</strong> ' . $orderDate . '</div>
            <div style="margin: 10px 0; padding: 10px; background: #f9fafb; border-radius: 6px;"><strong>المجموع الكلي:</strong> ' . number_format($totalPrice) . ' ر.س</div>

            <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <h3 style="margin-top: 0; color: #374151;">ملخص الطلب:</h3>
                ' . $orderItemsHtml . '
            </div>

            <div style="font-size: 20px; font-weight: bold; color: #059669; text-align: center; padding: 15px; background: #ecfdf5; border-radius: 8px; margin: 15px 0;">
                المجموع: ' . number_format($totalPrice) . ' ر.س
            </div>

            <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
                💡 يرجى حفظ رقم الطلب للمراجعة المستقبلية.
            </p>
        </div>
        <div style="background: #065f46; color: white; padding: 20px; text-align: center; font-size: 14px;">
            <p style="margin: 5px 0;">لأي استفسار، تواصل معنا:</p>
            <p style="margin: 5px 0; font-weight: bold;">info@afaqinfotech.com</p>
            <p style="margin: 15px 0 5px 0; opacity: 0.8; font-size: 12px;">آفاق المتكاملة لتكنولوجيا المعلومات</p>
        </div>
    </div>
</body>
</html>
';

$customerHeaders = "MIME-Version: 1.0" . "\r\n";
$customerHeaders .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$customerHeaders .= "From: AFAQ Store <noreply@afaqinfotech.com>" . "\r\n";

mail($customerData['email'], $customerSubject, $customerHtml, $customerHeaders);

// Return success response
http_response_code(200);
echo json_encode([
    'success' => true,
    'orderNumber' => $orderNumber,
    'message' => 'تم إرسال طلبك بنجاح! سيتم التواصل معك قريباً.',
    'emailSent' => $emailSent
]);
?>

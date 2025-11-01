<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set headers
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit();
}

// Get JSON data
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate data
if (!$data || !isset($data['name']) || !isset($data['email']) || !isset($data['phone']) || !isset($data['message'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Missing required fields']);
    exit();
}

// Extract data
$name = trim($data['name']);
$company = isset($data['company']) ? trim($data['company']) : '';
$email = trim($data['email']);
$phone = trim($data['phone']);
$service = isset($data['service']) ? trim($data['service']) : 'غير محدد';
$message = trim($data['message']);

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid email address']);
    exit();
}

// Generate inquiry number
$inquiryNumber = 'INQ-' . date('YmdHis') . '-' . rand(100, 999);
$currentDate = date('Y-m-d H:i:s');

// Service labels
$serviceLabels = [
    'consultation' => 'استشارة مجانية',
    'website' => 'تطوير موقع إلكتروني',
    'software' => 'تطوير برمجيات',
    'mobile' => 'تطوير تطبيق جوال',
    'erp' => 'نظام ERP',
    'crm' => 'نظام CRM',
    'hospital' => 'نظام إدارة مستشفيات',
    'school' => 'نظام إدارة مدارس',
    'security' => 'حلول الأمن السيبراني',
    'cloud' => 'الحوسبة السحابية',
    'network' => 'حلول الشبكات',
    'other' => 'أخرى'
];
$serviceLabel = isset($serviceLabels[$service]) ? $serviceLabels[$service] : $service;

// Prepare email to company
$toCompany = 'afaqintegrated@gmail.com';
$subjectCompany = '📧 استفسار جديد من ' . $name . ' - ' . $inquiryNumber;

$companyMessage = '
<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>استفسار جديد</title>
</head>
<body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: #f5f5f5;">
    <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">

        <!-- Header -->
        <div style="background: linear-gradient(135deg, #582a6e 0%, #e3237b 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">📧 استفسار جديد</h1>
            <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">من موقع آفاق المتكاملة</p>
        </div>

        <!-- Content -->
        <div style="padding: 30px; line-height: 1.8; color: #333;">

            <!-- Inquiry Info -->
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-right: 4px solid #582a6e;">
                <h2 style="color: #582a6e; margin: 0 0 15px 0; font-size: 18px;">📋 معلومات الاستفسار</h2>
                <p style="margin: 5px 0;"><strong>رقم الاستفسار:</strong> ' . htmlspecialchars($inquiryNumber) . '</p>
                <p style="margin: 5px 0;"><strong>التاريخ والوقت:</strong> ' . htmlspecialchars($currentDate) . '</p>
            </div>

            <!-- Customer Info -->
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-right: 4px solid #582a6e;">
                <h2 style="color: #582a6e; margin: 0 0 15px 0; font-size: 18px;">👤 بيانات العميل</h2>
                <p style="margin: 5px 0;"><strong>الاسم:</strong> ' . htmlspecialchars($name) . '</p>';

if (!empty($company)) {
    $companyMessage .= '<p style="margin: 5px 0;"><strong>الشركة:</strong> ' . htmlspecialchars($company) . '</p>';
}

$companyMessage .= '
                <p style="margin: 5px 0;"><strong>البريد الإلكتروني:</strong> <a href="mailto:' . htmlspecialchars($email) . '" style="color: #582a6e;">' . htmlspecialchars($email) . '</a></p>
                <p style="margin: 5px 0;"><strong>رقم الهاتف:</strong> <a href="tel:' . htmlspecialchars($phone) . '" style="color: #582a6e;">' . htmlspecialchars($phone) . '</a></p>
                <p style="margin: 5px 0;"><strong>الخدمة المطلوبة:</strong> ' . htmlspecialchars($serviceLabel) . '</p>
            </div>

            <!-- Message -->
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-right: 4px solid #582a6e;">
                <h2 style="color: #582a6e; margin: 0 0 15px 0; font-size: 18px;">💬 نص الرسالة</h2>
                <div style="background: white; padding: 15px; border-radius: 5px; white-space: pre-wrap; line-height: 1.6;">' . nl2br(htmlspecialchars($message)) . '</div>
            </div>

            <!-- Action Button -->
            <div style="text-align: center; margin: 30px 0;">
                <a href="mailto:' . htmlspecialchars($email) . '?subject=رد على استفسارك ' . htmlspecialchars($inquiryNumber) . '" style="display: inline-block; background: linear-gradient(135deg, #582a6e 0%, #e3237b 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">الرد على العميل</a>
            </div>

        </div>

        <!-- Footer -->
        <div style="background: #2d3748; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">تم الإرسال تلقائياً من نموذج التواصل</p>
            <p style="margin: 10px 0 0 0; font-size: 12px; opacity: 0.8;">آفاق المتكاملة لتكنولوجيا المعلومات</p>
        </div>

    </div>
</body>
</html>
';

// Email headers for company
$headersCompany = "MIME-Version: 1.0\r\n";
$headersCompany .= "Content-type: text/html; charset=UTF-8\r\n";
$headersCompany .= "From: AFAQ Contact Form <noreply@afaqinfotech.com>\r\n";
$headersCompany .= "Reply-To: " . $email . "\r\n";

// Send email to company
$emailSentToCompany = @mail($toCompany, $subjectCompany, $companyMessage, $headersCompany);

// Prepare confirmation email to customer
$subjectCustomer = '✅ تأكيد استلام رسالتك - آفاق المتكاملة';

$customerMessage = '
<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تأكيد استلام رسالتك</title>
</head>
<body style="margin: 0; padding: 20px; font-family: Arial, sans-serif; background-color: #f5f5f5;">
    <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">

        <!-- Header -->
        <div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">✅ تم استلام رسالتك بنجاح</h1>
        </div>

        <!-- Content -->
        <div style="padding: 30px; line-height: 1.8; color: #333;">

            <p style="font-size: 16px;">مرحباً <strong>' . htmlspecialchars($name) . '</strong>,</p>

            <p style="font-size: 16px;">شكراً لتواصلك مع آفاق المتكاملة لتكنولوجيا المعلومات. تم استلام رسالتك بنجاح وسيتواصل معك فريقنا خلال 24 ساعة.</p>

            <!-- Inquiry Number -->
            <div style="background: #d1fae5; border: 2px solid #86efac; border-radius: 8px; padding: 20px; margin: 25px 0; text-align: center;">
                <p style="margin: 0 0 10px 0; color: #065f46; font-size: 14px; font-weight: bold;">رقم الاستفسار</p>
                <p style="margin: 0; font-size: 24px; font-weight: bold; color: #059669; font-family: monospace;">' . htmlspecialchars($inquiryNumber) . '</p>
            </div>

            <!-- Summary -->
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #374151; margin: 0 0 15px 0;">ملخص رسالتك:</h3>
                <p style="margin: 5px 0;"><strong>الخدمة المطلوبة:</strong> ' . htmlspecialchars($serviceLabel) . '</p>
                <div style="margin-top: 15px; background: white; padding: 15px; border-radius: 5px;">
                    <strong>الرسالة:</strong><br>
                    <div style="margin-top: 10px; white-space: pre-wrap; line-height: 1.6;">' . nl2br(htmlspecialchars($message)) . '</div>
                </div>
            </div>

            <p style="color: #6b7280; font-size: 14px;">💡 يرجى حفظ رقم الاستفسار للمراجعة المستقبلية.</p>

        </div>

        <!-- Footer -->
        <div style="background: #065f46; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0 0 10px 0; font-size: 14px;">للتواصل معنا:</p>
            <p style="margin: 5px 0; font-weight: bold;">📧 info@afaqinfotech.com</p>
            <p style="margin: 5px 0; font-weight: bold;">📞 +966573673270</p>
            <p style="margin: 15px 0 0 0; font-size: 12px; opacity: 0.8;">آفاق المتكاملة لتكنولوجيا المعلومات</p>
        </div>

    </div>
</body>
</html>
';

// Email headers for customer
$headersCustomer = "MIME-Version: 1.0\r\n";
$headersCustomer .= "Content-type: text/html; charset=UTF-8\r\n";
$headersCustomer .= "From: AFAQ <noreply@afaqinfotech.com>\r\n";

// Send confirmation email to customer
$emailSentToCustomer = @mail($email, $subjectCustomer, $customerMessage, $headersCustomer);

// Log the attempt
error_log("Contact form submission - Inquiry: $inquiryNumber, Email to company: " . ($emailSentToCompany ? 'SUCCESS' : 'FAILED') . ", Email to customer: " . ($emailSentToCustomer ? 'SUCCESS' : 'FAILED'));

// Return success response
http_response_code(200);
echo json_encode([
    'success' => true,
    'inquiryNumber' => $inquiryNumber,
    'message' => 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.',
    'emailSent' => $emailSentToCompany
]);
?>

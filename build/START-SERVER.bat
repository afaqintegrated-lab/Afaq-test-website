@echo off
echo ===============================================
echo    AFAQ Website - Development Server
echo ===============================================
echo.
echo Starting local PHP server...
echo.
echo Server will run on: http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo.
echo ===============================================
echo.

cd /d "%~dp0"

REM Check if PHP is available
php -v >nul 2>&1
if %errorlevel% neq 0 (
    echo PHP not found! Trying Python instead...
    echo.
    python -m http.server 8000
) else (
    echo PHP found! Starting PHP server...
    echo.
    php -S localhost:8000
)

pause

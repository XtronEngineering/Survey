@echo off
REM ================================================
REM  Xtron Survey Backend - Start Script
REM ================================================

echo.
echo ╔═══════════════════════════════════════════════════╗
echo ║    XTRON MSME SURVEY - BACKEND SERVER STARTER    ║
echo ╚═══════════════════════════════════════════════════╝
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ ERROR: Node.js is not installed!
    echo.
    echo Please install Node.js from: https://nodejs.org/
    pause
    exit /b 1
)

echo ✓ Node.js found: 
node --version
echo.

REM Navigate to backend folder
cd /d "%~dp0"
if not exist "server.js" (
    echo ❌ ERROR: server.js not found!
    echo Please run this script from the backend folder.
    pause
    exit /b 1
)

REM Check .env file
if not exist ".env" (
    echo ❌ ERROR: .env file not found!
    echo Please create .env file with your Supabase credentials.
    pause
    exit /b 1
)

echo ✓ .env file found
echo.

REM Install dependencies if needed
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    call npm install
    echo.
)

REM Start server
echo 🚀 Starting backend server...
echo.
node server.js

pause

@echo off
echo Starting Website Template Library...

:: Check if Node.js is installed
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo Node.js is required to run the Website Template Library.
    echo Please install Node.js from https://nodejs.org/
    echo.
    pause
    exit /b
)

:: Run the server and open browser
echo Starting local server on http://localhost:3000
start "Website Library Server" cmd /c "node launcher\server.js"

:: Wait 1.5 seconds for the server to start
timeout /t 2 /nobreak >nul

:: Open browser
start http://localhost:3000

@echo off
REM Automatic Git Push Script for Frontend and Backend
REM Usage: auto-push.bat [commit message]

setlocal

if "%1"=="" (
    set COMMIT_MSG=Auto-commit: Update frontend and backend code
) else (
    set COMMIT_MSG=%*
)

echo === Auto-Push Script ===
echo Repository: https://github.com/vikasjakkula/reactdev024.git
echo.

cd /d "%~dp0"

REM Check if git is initialized
if not exist .git (
    echo Error: Not a git repository!
    exit /b 1
)

REM Check for changes
git status --porcelain >nul 2>&1
if errorlevel 1 (
    echo No changes to commit. Working tree is clean.
    exit /b 0
)

echo Changes detected:
git status --short
echo.

REM Stage all changes
echo Staging all changes...
git add frontend/
git add backend/
git add .gitignore
git add README.md
git add SETUP.md
git add *.ps1
git add *.bat

REM Commit changes
echo Committing changes...
git commit -m "%COMMIT_MSG%"

REM Push to remote
echo Pushing to origin/main...
git push origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo Successfully pushed to GitHub!
    echo Repository: https://github.com/vikasjakkula/reactdev024.git
) else (
    echo.
    echo Error pushing to GitHub!
    exit /b 1
)

endlocal


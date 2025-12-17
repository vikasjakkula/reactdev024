# Automatic Git Push Script for Frontend and Backend
# This script automatically stages, commits, and pushes all changes

param(
    [string]$Message = "Auto-commit: Update frontend and backend code"
)

Write-Host "=== Auto-Push Script ===" -ForegroundColor Cyan
Write-Host "Repository: https://github.com/vikasjakkula/reactdev024.git" -ForegroundColor Yellow
Write-Host ""

# Navigate to project root
$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $projectRoot

# Check if git is initialized
if (-not (Test-Path .git)) {
    Write-Host "Error: Not a git repository!" -ForegroundColor Red
    exit 1
}

# Check for changes
$status = git status --porcelain
if (-not $status) {
    Write-Host "No changes to commit. Working tree is clean." -ForegroundColor Green
    exit 0
}

Write-Host "Changes detected:" -ForegroundColor Yellow
git status --short
Write-Host ""

# Stage all changes (frontend and backend)
Write-Host "Staging all changes..." -ForegroundColor Cyan
git add frontend/
git add backend/
git add .gitignore
git add README.md
git add SETUP.md
git add *.ps1
git add *.bat

# Commit changes
Write-Host "Committing changes..." -ForegroundColor Cyan
git commit -m $Message

# Push to remote
Write-Host "Pushing to origin/main..." -ForegroundColor Cyan
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✓ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "Repository: https://github.com/vikasjakkula/reactdev024.git" -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "✗ Error pushing to GitHub!" -ForegroundColor Red
    exit 1
}


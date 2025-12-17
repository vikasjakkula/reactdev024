# Push only backend code
param(
    [string]$Message = "Update backend code"
)

Write-Host "=== Pushing Backend Code ===" -ForegroundColor Cyan

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $projectRoot

git add backend/
git add backend/.gitignore
git commit -m $Message
git push origin main

Write-Host "✓ Backend code pushed!" -ForegroundColor Green


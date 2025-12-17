# Push only frontend code
param(
    [string]$Message = "Update frontend code"
)

Write-Host "=== Pushing Frontend Code ===" -ForegroundColor Cyan

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $projectRoot

git add frontend/
git add frontend/.gitignore
git commit -m $Message
git push origin main

Write-Host "✓ Frontend code pushed!" -ForegroundColor Green


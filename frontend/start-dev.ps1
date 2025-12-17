# PowerShell script to start Vite dev server
# This works around the ampersand issue in folder names
Set-Location $PSScriptRoot
node node_modules\vite\bin\vite.js


# Automatic Push Guide

This project includes automation scripts to automatically push frontend and backend code to GitHub.

## Repository
**https://github.com/vikasjakkula/reactdev024.git**

## Available Scripts

### 1. Auto-Push All (Frontend + Backend)
Automatically stages, commits, and pushes all changes from both frontend and backend.

**PowerShell:**
```powershell
.\auto-push.ps1
.\auto-push.ps1 "Your custom commit message"
```

**Batch (Windows):**
```cmd
auto-push.bat
auto-push.bat "Your custom commit message"
```

### 2. Push Frontend Only
Push only frontend code changes.

**PowerShell:**
```powershell
.\push-frontend.ps1
.\push-frontend.ps1 "Update React components"
```

### 3. Push Backend Only
Push only backend code changes.

**PowerShell:**
```powershell
.\push-backend.ps1
.\push-backend.ps1 "Update API endpoints"
```

## Automatic Push on Commit

A **Git post-commit hook** is configured to automatically push after every commit. This means:

1. Make your changes
2. Commit normally: `git commit -m "Your message"`
3. The hook automatically pushes to GitHub!

To disable auto-push, rename or delete `.git/hooks/post-commit`

## Manual Push

If you prefer manual control:

```bash
git add frontend/ backend/
git commit -m "Your message"
git push origin main
```

## Usage Examples

### Example 1: Push all changes
```powershell
.\auto-push.ps1
```

### Example 2: Push with custom message
```powershell
.\auto-push.ps1 "Added new React hooks examples"
```

### Example 3: Push only frontend
```powershell
.\push-frontend.ps1 "Updated components"
```

### Example 4: Push only backend
```powershell
.\push-backend.ps1 "Added new API endpoints"
```

## Notes

- All scripts check for changes before committing
- Scripts will skip if there are no changes
- The post-commit hook runs automatically after every commit
- Scripts handle the ampersand in folder name correctly


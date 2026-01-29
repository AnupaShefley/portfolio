# Setup Guide - Installing Node.js

## Node.js is Not Installed

To run this portfolio project, you need to install Node.js (which includes npm).

## Installation Steps

### Option 1: Download from Official Website (Recommended)

1. **Visit the Node.js website:**
   - Go to: https://nodejs.org/
   - Download the **LTS (Long Term Support)** version for Windows
   - Choose the Windows Installer (.msi) for your system (64-bit recommended)

2. **Run the Installer:**
   - Double-click the downloaded `.msi` file
   - Follow the installation wizard
   - **Important:** Make sure to check the box that says "Add to PATH" during installation
   - Complete the installation

3. **Verify Installation:**
   - Close and reopen your terminal/PowerShell
   - Run these commands to verify:
     ```powershell
     node --version
     npm --version
     ```
   - You should see version numbers (e.g., `v20.11.0` and `10.2.4`)

### Option 2: Using Chocolatey (If you have it installed)

If you have Chocolatey package manager installed:

```powershell
choco install nodejs-lts
```

### Option 3: Using Winget (Windows Package Manager)

If you have Windows 11 or Windows 10 with winget:

```powershell
winget install OpenJS.NodeJS.LTS
```

## After Installation

1. **Restart your terminal/PowerShell** (important - this refreshes the PATH)

2. **Navigate to your project directory:**
   ```powershell
   cd "C:\Cursor Repo"
   ```

3. **Install project dependencies:**
   ```powershell
   npm install
   ```

4. **Start the development server:**
   ```powershell
   npm run dev
   ```

5. **Open your browser:**
   - Navigate to: http://localhost:3000
   - You should see your portfolio site!

## Troubleshooting

### If npm is still not recognized after installation:

1. **Restart your computer** - Sometimes Windows needs a full restart to update PATH
2. **Check PATH manually:**
   - Press `Win + R`, type `sysdm.cpl`, press Enter
   - Go to "Advanced" tab → "Environment Variables"
   - Under "System variables", find "Path" and click "Edit"
   - Look for entries like:
     - `C:\Program Files\nodejs\`
     - `C:\Users\YourUsername\AppData\Roaming\npm`
   - If missing, add them manually

### Verify Node.js Installation Location:

Node.js is typically installed to:
- `C:\Program Files\nodejs\` (for all users)
- Or `C:\Users\YourUsername\AppData\Roaming\npm` (for current user)

## What You're Installing

- **Node.js**: JavaScript runtime that allows you to run JavaScript on your computer
- **npm**: Node Package Manager - used to install JavaScript libraries and dependencies

Both come together in the Node.js installer.

## Next Steps

Once Node.js is installed and verified:

1. Run `npm install` in the project directory
2. Run `npm run dev` to start the development server
3. Your portfolio will be available at http://localhost:3000

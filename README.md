
```bash
# 1. Download and install nvm (if you don't already have it)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# 2. Reload your shell configuration so nvm is recognized
source ~/.bashrc

# 3. Install the latest Long Term Support (LTS) version of Node.js (Node 20 or 22)
nvm install --lts

# 4. Tell nvm to use it
nvm use --lts

# 5. Verify you are on a newer version (should say v20.x.x or v22.x.x)
node -v

# Create project
cd ~/workspace
npm create vite@latest lidar_example -- --template vanilla
cd lidar_example

# Install deps
npm install maplibre-gl maplibre-gl-lidar

npm run dev
```


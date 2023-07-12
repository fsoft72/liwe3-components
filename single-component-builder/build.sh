#!/bin/bash

# Build the single component
# and create the correct package.json

# The source directory must contain a package.json
if [ ! -f "src/package.json" ]; then
  echo "No package.json found in the src directory"
  exit 1
fi

# clear the 'lib' directory
rm -rf lib

# Run the build script
pnpm build

# Copy the package.json and styles.css from the src directory
cp src/package.json lib/.
if [ -e "src/styles.css" ]; then
    cp src/styles.css lib/.
fi
if [ -e "src/credits.md" ]; then
    cp src/credits.md lib/.
fi

# Add 'use client' as the first line of lib/index.js
sed -i "1s/^/'use client';\n/" lib/index.js

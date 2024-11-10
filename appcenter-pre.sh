#!/usr/bin/env bash

echo "Running custom npm install with --legacy-peer-deps flag"

# Navigate to the project directory if not in the root
# cd path/to/your/project

# Install dependencies with legacy peer deps
npm install --legacy-peer-deps

# Optional: Verify installation
npm ls || true

#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status.
set -e

echo "Running custom npm install with --legacy-peer-deps flag"

# Navigate to the project directory if necessary
# cd path/to/your/project

# Install dependencies with legacy peer deps
npm install --legacy-peer-deps

# Optional: Verify installation
npm ls || true

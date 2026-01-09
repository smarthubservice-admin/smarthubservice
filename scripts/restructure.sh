#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

echo "Creating public/ directory..."
mkdir -p public

move_if_exists() {
  if [ -e "$1" ]; then
    echo "Moving $1 -> public/"
    mv "$1" public/ || { echo "Failed to move $1"; exit 1; }
  else
    echo "Skipping $1 (not found)"
  fi
}

move_if_exists css
move_if_exists img
move_if_exists js
move_if_exists "font-awesome-4.7.0"
move_if_exists privacy-policy.html
move_if_exists terms-of-service.html

echo "Restructure complete. Public files are under ./public/"

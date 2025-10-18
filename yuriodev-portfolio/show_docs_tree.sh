#!/bin/bash

# Script to show file tree for documents, excluding .docs and .claude folders, and all JS/TS files
# This version lists document files (md, html, css, json, txt, manifest) excluding generated folders

echo "Document files (excluding .docs, .claude, node_modules, dist, build, .git, and JS/TS files):"
echo ""

find . -type f \( -name "*.md" -o -name "*.html" -o -name "*.css" -o -name "*.json" -o -name "*.txt" -o -name "*.manifest" -o -name "*.webmanifest" -o -name "*.gitignore" \) \
     -not -path './node_modules/*' \
     -not -path './.docs/*' \
     -not -path './.claude/*' \
     -not -path './dist/*' \
     -not -path './build/*' \
     -not -path './.git/*' \
     -not -path './vite/*' \
     | sort
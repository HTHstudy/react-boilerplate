#!/bin/bash

# Settings JSON file path
SETTINGS_FILE=".vscode/settings.json"

# Check if the settings file already exists
if [ -f "$SETTINGS_FILE" ]; then
  echo "Settings file already exists at $SETTINGS_FILE. Deleting the existing file."
  rm "$SETTINGS_FILE"
fi

# Create .vscode directory if it doesn't exist
mkdir -p "$(dirname "$SETTINGS_FILE")"

# Create a new settings file
cat <<EOF > "$SETTINGS_FILE"
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "editor.formatOnSave": true,
  "cSpell.words": ["zustand", "tanstack", "todos"],
}
EOF

echo "Settings file created at $SETTINGS_FILE"
yarn dlx @yarnpkg/sdks vscode
yarn

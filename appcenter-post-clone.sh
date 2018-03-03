#!/usr/bin/env bash

ENV_FILE="$APPCENTER_SOURCE_DIRECTORY/.env"

echo Creating environment config file...

# Create `.env` file in project root. This file hosts the env variables
touch $ENV_FILE

# Write environment config to file, hiding from build logs
tee $ENV_FILE > /dev/null <<EOF
# Environment
NODE_ENV=$NODE_ENV
EOF

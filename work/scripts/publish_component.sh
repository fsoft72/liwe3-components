#!/bin/bash

# This script runs the npm publish on the selected component.
#
# Usage: publish_component.sh <component directory>

# if no argument is provided, print usage and exit
if [ $# -eq 0 ]; then
    echo "Usage: $0 <component directory>"
    exit 1
fi

COMP=$1

cd $COMP

# Check if package.json exists in the component directory
if [ ! -e "package.json" ]; then
    echo "package.json does not exist in $COMP."
    exit 1
fi

# Check if private: false is set in package.json
if [ $(jq -r '.private' package.json) != "false" ]; then
    echo "private: false is not set in package.json."
    exit 1
fi

npm publish --access=public
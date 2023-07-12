#!/bin/bash

# This script builds all components from source code.
# It gets the components directory as an argument and builds all components into DESTINATION_DIR.

# if no argument is provided, print usage and exit
if [ $# -eq 0 ]; then
    echo "Usage: $0 <destination directory>"
    echo ""
    exit 1
fi

# Check if we are in the project root directory
if [ ! -e single-component-builder ]; then
    echo "Please run this script from the project root directory."
    exit 1
fi

DESTINATION_DIR=$1

# Cycle through all components in the components directory
for COMPONENT_NAME in src/components/*
do
    ./work/scripts/build_component.sh "$COMPONENT_NAME" "$DESTINATION_DIR"
done
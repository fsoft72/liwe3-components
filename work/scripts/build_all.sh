#!/bin/bash

# This script builds all components from source code.
# It gets the components directory as an argument and builds all components into DESTINATION_DIR.

# Check if we are in the project root directory
if [ ! -e single-component-builder ]; then
    echo "Please run this script from the project root directory."
    exit 1
fi

mkdir -p dist/components

# Get current working directory
CURRENT_DIR=$(pwd)

DESTINATION_DIR=$CURRENT_DIR/dist/components

# Cycle through all components in the components directory
for COMPONENT_NAME in src/components/*
do
    ./work/scripts/build_component.sh "$COMPONENT_NAME" "$DESTINATION_DIR"
done

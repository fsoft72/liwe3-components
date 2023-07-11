#!/bin/bash

COMPONENTS_DIR="src/components"
BUILD_DIR="single-component-builder"

# This script is used to build a component from source code.
# It gets the component directory as an argument and builds it.

# if no argument is provided, print usage and exit
if [ $# -eq 0 ]; then
    echo "Usage: $0 <component directory>"
    exit 1
fi

# Check if we are in the project root directory
if [ ! -e single-component-builder ]; then
    echo "Please run this script from the project root directory."
    exit 1
fi

COMPONENT_NAME=$1

# If COMPONENT_NAME ends with a slash, remove it
COMPONENT_NAME=${COMPONENT_NAME%/}

# We keep only the last part of the path
COMPONENT_NAME=${COMPONENT_NAME##*/}

echo "Building component $COMPONENT_NAME..."

# Check if the component directory exists
if [ ! -e "$COMPONENTS_DIR/$COMPONENT_NAME" ]; then
    echo "Component $COMPONENT_NAME does not exist."
    exit 1
fi

# Check if the component directory contains a package.json file
if [ ! -e "$COMPONENTS_DIR/$COMPONENT_NAME/package.json" ]; then
    echo "Component $COMPONENT_NAME does not contain a package.json file."
    exit 1
fi

# Copy all data from the component directory to the build directory
cp "$COMPONENTS_DIR/$COMPONENT_NAME/"* "$BUILD_DIR/src"

# Move to the build directory
cd "$BUILD_DIR"
pnpm install

# Build the component
./build.sh
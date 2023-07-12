#!/bin/bash

COMPONENTS_DIR="src/components"
BUILD_DIR="single-component-builder"

# This script is used to build a component from source code.
# It gets the component directory as an argument and builds it.

# if no argument is provided, print usage and exit
if [ $# -eq 0 ]; then
    echo "Usage: $0 <component directory> [<destination directory>]"
    echo ""
    echo "- destination directory is optional and if provided, the component will be copied inside it"
    exit 1
fi

# Check if we are in the project root directory
if [ ! -e single-component-builder ]; then
    echo "Please run this script from the project root directory."
    exit 1
fi

COMPONENT_NAME=$1
DESTINATION_DIR=$2

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

cd $COMPONENTS_DIR/$COMPONENT_NAME

# Change the package.json version number by adding a +1 in the last build number
# The version number is in the format x.y.z
# The build number is the last number in the version number
# The build number is incremented by 1

# Get the version number from the package.json
version=$(jq -r '.version' package.json)

# Get the build number from the version number
build=$(echo $version | cut -d. -f3)

# Increment the build number
build=$(($build + 1))

# Create the new version number
new_version=$(echo $version | cut -d. -f1,2).$build

# Update the version number in the package.json
jq ".version = \"$new_version\"" package.json > package.json.tmp
mv package.json.tmp package.json

cd -

# Copy all data from the component directory to the build directory
cp "$COMPONENTS_DIR/$COMPONENT_NAME/"* "$BUILD_DIR/src"

# Move to the build directory
cd "$BUILD_DIR"
rm src/*stories*
pnpm install

# Build the component
./build.sh

# If DESTINATION_DIR is provided, copy the component to it
if [ ! -z "$DESTINATION_DIR" ]; then
    # If DESTINATION_DIR ends with a slash, remove it
    DESTINATION_DIR=${DESTINATION_DIR%/}

    # if DESTINATION_DIR does not exist, create it
    if [ ! -e "$DESTINATION_DIR" ]; then
        mkdir -p "$DESTINATION_DIR"
    fi

    # Create the $DESTINATION_DIR/$COMPONENT_NAME directory
    mkdir -p "$DESTINATION_DIR/$COMPONENT_NAME"

    # Copy the component to DESTINATION_DIR
    cp lib/* "$DESTINATION_DIR/$COMPONENT_NAME"
fi
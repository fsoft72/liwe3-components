#!/bin/bash

# Publish all components to npm
for COMPONENT_NAME in dist/components/*
do
    echo "COMPONENT_NAME: $COMPONENT_NAME"
    ./work/scripts/publish_component.sh "$COMPONENT_NAME"
done
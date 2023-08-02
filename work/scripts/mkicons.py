#!/usr/bin/env python3

import os
import sys

# The first argument is the path to the icons repository
repo = sys.argv[1]

# if the repo does not contain the 'optimied' directory, throw an error
if not os.path.isdir(os.path.join(repo, "optimized")):
    print('The icons repository does not contain the "optimized" directory')
    sys.exit(1)

# cycle through the icons in the optimized directory
for icon in os.listdir(os.path.join(repo, "optimized", "24", "solid")):
    # if the icon is not a png file, skip it
    if not icon.endswith(".svg"):
        continue

    # get the name of the icon without the extension
    name = icon[:-4]

    # split the name on '-' and return the captalized version of all words
    # joined by a space
    name = "".join([word.capitalize() for word in name.split("-")])

    # read the svg file
    svg = open(os.path.join(repo, "optimized", "24", "solid", icon), "r").read()

    # replace some attributes
    reps = [
        ("fill-rule", "fillRule"),
        ("clip-rule", "clipRule"),
        ("stroke-linecap", "strokeLinecap"),
        ("stroke-linejoin", "strokeLinejoin"),
        ("stroke-width", "strokeWidth"),
    ]
    for r in reps:
        svg = svg.replace(r[0], r[1])

    # create the icon file
    fout = open(name + ".tsx", "w")
    fout.write(
        """import { IconProps, mkIcon } from './IconUtils';

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default ( props: IconProps ) => {
    return mkIcon(
        %s
        , props );
};"""
        % svg
    )

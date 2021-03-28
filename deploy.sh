#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# stage the build output directory
git add dist/*

# Commit deploy
git commit -m 'deployment'

# push the contents within the dist folder to gh-pages to be deployed
git subtree push --prefix dist origin gh-pages

echo "\xf0\x9f\x8e\x89 Successfully pushed dist contents to gh-pages branch to be deployed!"
echo "\xF0\x9F\x94\x8D View this at http://www.kevinmlogan.com/vue-a11y"
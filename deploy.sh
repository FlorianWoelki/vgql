#!/bin/bash

rm -rf img/ &&
rm -rf css/ &&
rm -rf js/ &&
rm -rf index.html &&
npm run build && 
mv dist/* .

git add .
git commit -m "build: deploy new version"
git push -u origin gh-pages
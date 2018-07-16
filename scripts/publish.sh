rm -rf package
mkdir package
cp -r dist/* package/
cp readme.md package/
cp package.json package/
cp license package/
cd ./package
npm run semantic-release
cd ..

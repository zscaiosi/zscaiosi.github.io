TAG=$1
DESCRIPTION=$2
mv consensus-website/build/* .
git add .
git commit -a -m '[$TAG] $DESCRIPTION'
TAG=$1
DESCRIPTION=$2
rsync -a -v consensus-website/build/* .
git add .
git commit -a -m "[$TAG] $DESCRIPTION"
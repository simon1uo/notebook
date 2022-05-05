#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
currentDate=$(date +%Y-%m-%d-%H:%M)

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github pages
#echo 'simon1uo.github.io' >CNAME

if [ -z "$GITHUB_TOKEN" ]; then
  msg='deployed: '
  githubUrl=git@github.com:simon1uo/notebook.git
else
  msg='githubActions: '
  githubUrl=https://simon1uo:${GITHUB_TOKEN}@github.com/simon1uo/notebook.git
  git config --global user.name "simon1uo"
  git config --global user.email "simonlaw910@gmail.com"
fi
git init
git add -A
git commit -m "${msg} 📣 notebook updated:${currentDate}"
git push -f $githubUrl main:gh-pages # 推送到github gh-pages分支

cd -
rm -rf docs/.vuepress/dist

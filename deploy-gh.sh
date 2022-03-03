#!/bin/sh
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd dist

time=$(date "+%Y%m%d-%H%M%S")

git init
git add -A
git commit -m $time
## 把上面的 <USERNAME> 换成你自己的 Github 用户名，<REPO> 换成仓库名，比如我这里就是：
git push -f git@github.com:sdutitlab/sdutitlab.github.io.git master

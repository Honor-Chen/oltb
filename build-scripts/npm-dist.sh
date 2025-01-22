#!/bin/bash
TReset='\033[0m'
TCyan='\033[0;36m'

# 主要功能：生成压缩后的 oltb.min.js 和 oltb.min.css 文件
# 依赖：npm run build:lib
# 步骤：
# 1. 移除旧的dist目录
# 2. 创建新的dist目录
# 3. 拷贝src目录到dist目录
# 4. 拷贝package.json、LICENSE、README.md、README_INTERNAL.md到dist目录
# 5. 清理dist目录下.test.js文件
# 6. 使用rollup打包IIFE lib到dist目录

# 0
echo -e "\n$TCyan[0/6]$TReset. Starting new dist-build"

# 1
rm -rf ./dist
echo -e "\n$TCyan[1/6]$TReset. Old dist removed"

# 2
mkdir ./dist
mkdir ./dist/dist
mkdir ./dist/src
mkdir ./dist/src/oltb
echo -e "\n$TCyan[2/6]$TReset. New dist directory created"

# 3
cp -r ./src/oltb/js ./dist/src/oltb
cp -r ./src/oltb/scss ./dist/src/oltb
cp -r ./src/oltb/assets ./dist/src/assets
echo -e "\n$TCyan[3/6]$TReset. Copied src files"

# 4
cp ./package.json ./dist/package.json
cp ./LICENSE ./dist/LICENSE
cp ./README.md ./dist/README.md
cp ./README_INTERNAL.md ./dist/README_INTERNAL.md
echo -e "\n$TCyan[4/6]$TReset. Copied documentation files"

# 5
find dist -type f -name '*.test.js' -exec rm -f {} \;
echo -e "\n$TCyan[5/6]$TReset. Cleaned dist from .test.js files"

# 6
npm run build:lib
echo -e "\n$TCyan[6/6]$TReset. Rollup created IIFE lib"

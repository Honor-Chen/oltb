#!/bin/bash
TReset='\033[0m'
TCyan='\033[0;36m'

# !!!注意：构建 demo 完成后，需以 demo 目录为工作目录，运行 serve 命令启动本地服务，否则部分资源加载失败。
# 主要功能：构建可演示的 demo
# 1. 删除旧的demo目录
# 2. 创建新的demo目录
# 3. 使用 parcel 打包 demo
# 4. 拷贝 assets 目录到 demo
# 5. 拷贝 images 目录到 demo

# 0
echo -e "\n$TCyan[0/5]$TReset. Starting new demo-build"

# 1
rm -rf ./demo
rm -rf .parcel-cache/
echo -e "\n$TCyan[1/5]$TReset. Old demo removed"

# 2
mkdir ./demo
echo -e "\n$TCyan[2/5]$TReset. New demo directory created"

# 3
npm run build:demo
echo -e "\n$TCyan[3/5]$TReset. Parcel created demo"

# 4
cp -r ./src/oltb/assets ./demo
echo -e "\n$TCyan[4/5]$TReset. Assets directory copied to demo"

# 5
cp -r ./dev/images ./demo
echo -e "\n$TCyan[5/5]$TReset. Images directory copied to demo"

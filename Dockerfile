# 使用 Node.js 官方镜像，选择一个合适的版本
FROM node:22.11.0

# 设置工作目录
WORKDIR /UniGuide

# 复制 package.json 和 package-lock.json (如果存在)
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制项目文件到工作目录
COPY . .

# 在容器中构建项目
RUN npm run build

# 使用 Nginx 作为静态文件服务器
FROM nginx:alpine

# 将构建的 React 项目复制到 Nginx 的 html 目录
COPY --from=0 /UniGuide/dist /usr/share/nginx/html

# 暴露 Nginx 的 80 端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]

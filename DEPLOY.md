# GitHub Pages 部署指南

## 快速部署步骤

### 1. 创建GitHub仓库

1. 在GitHub上创建一个新仓库（例如：`hit-ciscn`）
2. 将代码推送到仓库：

```bash
git init
git add .
git commit -m "Initial commit: 全国大学生信息安全竞赛主页"
git branch -M main
git remote add origin https://github.com/yourusername/hit-ciscn.git
git push -u origin main
```

### 2. 启用GitHub Pages

1. 进入仓库的 **Settings** 页面
2. 在左侧菜单中找到 **Pages**
3. 在 **Source** 部分，选择 **GitHub Actions**
4. 保存设置

### 3. 自动部署

- 当代码推送到 `main` 分支时，GitHub Actions 会自动构建并部署
- 部署完成后，网站地址为：`https://yourusername.github.io/hit-ciscn/`

### 4. 验证部署

- 等待几分钟后，访问你的GitHub Pages地址
- 如果看到网站正常显示，说明部署成功

## 手动触发部署

如果需要手动触发部署：

1. 进入仓库的 **Actions** 标签页
2. 选择 **Deploy to GitHub Pages** workflow
3. 点击 **Run workflow** 按钮

## 故障排除

### 部署失败

1. 检查 **Actions** 标签页中的错误信息
2. 确保 `.github/workflows/deploy.yml` 文件存在且格式正确
3. 确保仓库已启用 GitHub Pages 并选择 GitHub Actions 作为源

### 页面404错误

1. 确保 `index.html` 文件在仓库根目录
2. 检查 GitHub Pages 设置是否正确
3. 等待几分钟后重试（部署可能需要一些时间）

### 样式或脚本不加载

1. 检查文件路径是否正确（确保使用相对路径）
2. 检查浏览器控制台是否有错误信息
3. 确保所有文件都已提交到仓库

## 更新网站内容

1. 修改本地文件
2. 提交更改：
```bash
git add .
git commit -m "Update content"
git push
```
3. GitHub Actions 会自动重新部署

## 自定义域名（可选）

如果需要使用自定义域名：

1. 在仓库根目录创建 `CNAME` 文件，内容为你的域名（例如：`ciscn.xxuniversity.edu.cn`）
2. 在你的域名DNS设置中添加CNAME记录，指向 `yourusername.github.io`
3. 在GitHub Pages设置中启用自定义域名

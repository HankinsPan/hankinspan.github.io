const fs = require('fs');
const path = require('path');

// 根目录
const rootDir = 'docs/public/pages/js30';

// 递归遍历目录并处理HTML文件
function processDirectory(directory) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error(`无法读取目录: ${directory}`, err);
      return;
    }

    files.forEach(file => {
      const fullPath = path.join(directory, file);

      fs.stat(fullPath, (err, stats) => {
        if (err) {
          console.error(`无法获取文件状态: ${fullPath}`, err);
          return;
        }

        if (stats.isDirectory()) {
          processDirectory(fullPath); // 递归处理子目录
        } else if (path.extname(fullPath) === '.html') {
          processHtmlFile(fullPath); // 处理HTML文件
        }
      });
    });
  });
}

// 处理HTML文件，替换指定字符串
function processHtmlFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`无法读取文件: ${filePath}`, err);
      return;
    }

    const updatedData = data.replace(/\.\/\.\.\/\.\.\/assets/g, '/assets');

    fs.writeFile(filePath, updatedData, 'utf8', err => {
      if (err) {
        console.error(`无法写入文件: ${filePath}`, err);
      } else {
        console.log(`文件已更新: ${filePath}`);
      }
    });
  });
}

// 开始处理根目录
processDirectory(rootDir);

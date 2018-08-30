const ghpages = require('gh-pages');
const fs = require('fs');
const path = require('path');

const getDirectoryFiles = (dirPath) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirPath, (err, fileNames) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(fileNames);
    });
  });
};

const publishGithubPages = () => {
  return new Promise((resolve, reject) => {
    ghpages.publish('dist', {
      user: {
        name: 'HT2 Bot',
        email: 'hello@ht2labs.com'
      },
      repo: `https://${process.env.GH_TOKEN}@github.com/ht2-labs/mural.git`,
      silent: true,
      message: 'ci(gh-pages): Publishes new changes [ci skip].'
    }, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    })
  });
};

const copyFile = (src, dest) => {
  return new Promise((resolve, reject) => {
    fs.copyFile(src, dest, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  })
};

const main = async () => {
  const srcPath = '.netlify';
  const destPath = 'dist';
  const fileNames = await getDirectoryFiles(srcPath);
  await Promise.all(fileNames.map(async (fileName) => {
    return copyFile(path.join(srcPath, fileName), path.join(destPath, fileName));
  }));
  await publishGithubPages();
};

main().then(() => {
  console.log('Published to GH Pages');
}).catch((err) => {
  console.error(err);
});

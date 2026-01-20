const fs = require("fs");
const path = require("path");

const iconColors = {
  facebook: "#1877F2",
  instagram: "#E4405F",
  youtube: "#FF0000",
};

function processFiles(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      processFiles(filePath);
    } else if (file.endsWith(".jsx")) {
      let content = fs.readFileSync(filePath, "utf-8");
      let modified = false;

      // Replace Facebook
      if (content.includes('FaFacebookF') && content.includes('color="white"')) {
        const newContent = content.replace(
          /(<FaFacebookF\s+size=\{\d+\}\s+)color="white"/g,
          `$1color="${iconColors.facebook}"`
        );
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      }

      // Replace Instagram
      if (content.includes('FaInstagram') && content.includes('color="white"')) {
        const newContent = content.replace(
          /(<FaInstagram\s+size=\{\d+\}\s+)color="white"/g,
          `$1color="${iconColors.instagram}"`
        );
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      }

      // Replace YouTube
      if (content.includes('FaYoutube') && content.includes('color="white"')) {
        const newContent = content.replace(
          /(<FaYoutube\s+size=\{\d+\}\s+)color="white"/g,
          `$1color="${iconColors.youtube}"`
        );
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      }

      if (modified) {
        fs.writeFileSync(filePath, content, "utf-8");
        console.log(`✅ ${path.relative(process.cwd(), filePath)}`);
      }
    }
  });
}

const componentsDir = path.join(__dirname, "src", "Components");
if (fs.existsSync(componentsDir)) {
  processFiles(componentsDir);
  console.log("\n✨ Done! All social media icons are now colorful!");
} else {
  console.log("Components directory not found");
}

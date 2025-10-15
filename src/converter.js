import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { JSDOM } from 'jsdom';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class AIWebRewriter {
  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY || 'your-api-key-here'
    });
  }

  async readHTMLFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      return content;
    } catch (error) {
      console.error(`Error reading file: ${error.message}`);
      throw error;
    }
  }

  parseHTML(htmlContent) {
    const dom = new JSDOM(htmlContent);
    const document = dom.window.document;
    
    // Extract styles
    const styles = Array.from(document.querySelectorAll('style')).map(s => s.textContent);
    
    // Extract scripts (only inline scripts, not external)
    const scripts = Array.from(document.querySelectorAll('script'))
      .filter(s => !s.src && s.textContent.trim())
      .map(s => s.textContent);
    
    // Remove style and script tags from the document for clean HTML
    document.querySelectorAll('style').forEach(el => el.remove());
    document.querySelectorAll('script').forEach(el => {
      if (!el.src && el.textContent.trim()) {
        el.remove();
      }
    });
    
    return {
      title: document.title,
      styles: styles,
      scripts: scripts,
      body: document.body.innerHTML,
      head: document.head.innerHTML
    };
  }

  async analyzeWithAI(htmlStructure) {
    const prompt = `Analyze this HTML structure and suggest how to split it into a proper project structure:

Title: ${htmlStructure.title}
Styles: ${htmlStructure.styles.length} style blocks found
Scripts: ${htmlStructure.scripts.length} script blocks found

Suggest a project structure with:
1. Separate CSS files for styling
2. Separate JS files for functionality
3. A clean HTML structure
4. Proper organization of assets

Return the suggestion as JSON with keys: structure, files, recommendations`;

    try {
      const response = await this.openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are an expert web developer helping to restructure HTML files into proper project structures.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
      });

      return response.choices[0].message.content;
    } catch (error) {
      console.error('Error calling OpenAI API:', error.message);
      return this.getFallbackStructure();
    }
  }

  getFallbackStructure() {
    return JSON.stringify({
      structure: {
        'index.html': 'Main HTML file',
        'css/': 'Stylesheets directory',
        'css/main.css': 'Main stylesheet',
        'js/': 'JavaScript directory',
        'js/main.js': 'Main JavaScript file',
        'assets/': 'Images and other assets'
      },
      files: [
        'index.html',
        'css/main.css',
        'js/main.js'
      ],
      recommendations: [
        'Separate inline styles into CSS files',
        'Extract inline scripts into JS files',
        'Organize assets into dedicated folders',
        'Use semantic HTML5 elements'
      ]
    });
  }

  async convertFile(inputPath, outputDir = './output') {
    console.log(`\n🚀 Starting conversion of: ${inputPath}\n`);

    // Read and parse HTML
    const htmlContent = await this.readHTMLFile(inputPath);
    const htmlStructure = this.parseHTML(htmlContent);
    
    console.log('📄 Parsed HTML structure:');
    console.log(`  - Title: ${htmlStructure.title}`);
    console.log(`  - Styles: ${htmlStructure.styles.length} blocks`);
    console.log(`  - Scripts: ${htmlStructure.scripts.length} blocks\n`);

    // Analyze with AI
    console.log('🤖 Analyzing with AI...\n');
    const aiSuggestion = await this.analyzeWithAI(htmlStructure);
    
    console.log('💡 AI Suggestions:');
    console.log(aiSuggestion);
    console.log('\n');

    // Create output structure
    console.log(`📁 Creating project structure in: ${outputDir}\n`);
    this.createProjectStructure(outputDir, htmlStructure, aiSuggestion);

    console.log('✅ Conversion complete!\n');
    return { htmlStructure, aiSuggestion };
  }

  createProjectStructure(outputDir, htmlStructure, aiSuggestion) {
    // Create base directories
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const cssDir = path.join(outputDir, 'css');
    const jsDir = path.join(outputDir, 'js');
    const assetsDir = path.join(outputDir, 'assets');

    [cssDir, jsDir, assetsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });

    // Extract and save CSS
    if (htmlStructure.styles.length > 0) {
      const cssContent = htmlStructure.styles.join('\n\n');
      fs.writeFileSync(path.join(cssDir, 'main.css'), cssContent);
      console.log('  ✓ Created css/main.css');
    }

    // Extract and save JS
    const scriptContents = htmlStructure.scripts.filter(s => s && !s.startsWith('http'));
    if (scriptContents.length > 0) {
      const jsContent = scriptContents.join('\n\n');
      fs.writeFileSync(path.join(jsDir, 'main.js'), jsContent);
      console.log('  ✓ Created js/main.js');
    }

    // Create cleaned HTML
    const cleanHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${htmlStructure.title || 'Converted Website'}</title>
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
    ${htmlStructure.body}
    <script src="js/main.js"></script>
</body>
</html>`;

    fs.writeFileSync(path.join(outputDir, 'index.html'), cleanHTML);
    console.log('  ✓ Created index.html');

    // Save AI suggestions
    fs.writeFileSync(
      path.join(outputDir, 'AI_SUGGESTIONS.md'),
      `# AI Analysis and Suggestions\n\n${aiSuggestion}\n`
    );
    console.log('  ✓ Created AI_SUGGESTIONS.md');

    // Create README
    const readme = `# Converted Web Project

This project was automatically generated from a single HTML file using AI-powered conversion.

## Project Structure

\`\`\`
.
├── index.html          # Main HTML file
├── css/
│   └── main.css       # Extracted styles
├── js/
│   └── main.js        # Extracted scripts
├── assets/            # Place images and other assets here
└── AI_SUGGESTIONS.md  # AI-generated recommendations
\`\`\`

## Getting Started

Simply open \`index.html\` in your browser to view the site.

## AI Suggestions

Check \`AI_SUGGESTIONS.md\` for AI-generated recommendations on how to further improve this project.
`;

    fs.writeFileSync(path.join(outputDir, 'README.md'), readme);
    console.log('  ✓ Created README.md');
  }
}

// Main execution
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log(`
Usage: npm run convert <input-html-file> [output-directory]

Example:
  npm run convert examples/sample.html
  npm run convert examples/sample.html ./my-project

Note: Set OPENAI_API_KEY environment variable or create a .env file for AI features.
    `);
    process.exit(1);
  }

  const inputFile = args[0];
  const outputDir = args[1] || './output';

  if (!fs.existsSync(inputFile)) {
    console.error(`Error: Input file '${inputFile}' not found.`);
    process.exit(1);
  }

  const converter = new AIWebRewriter();
  await converter.convertFile(inputFile, outputDir);
}

main();

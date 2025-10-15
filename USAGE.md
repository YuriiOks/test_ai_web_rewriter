# Usage Guide - AI Web Rewriter

This guide provides detailed instructions on how to use the AI Web Rewriter tool effectively.

## 📋 Table of Contents

- [Basic Usage](#basic-usage)
- [Advanced Options](#advanced-options)
- [Use Cases](#use-cases)
- [Understanding the Output](#understanding-the-output)
- [AI Features](#ai-features)
- [Troubleshooting](#troubleshooting)

## Basic Usage

### Quick Start

1. **Install dependencies** (first time only):
   ```bash
   npm install
   ```

2. **Convert an HTML file**:
   ```bash
   npm run convert <input-file.html>
   ```

3. **View the output**:
   The converted project will be in the `./output` directory by default.

### Example Commands

Convert the sample file:
```bash
npm run convert examples/sample.html
```

Specify a custom output directory:
```bash
npm run convert examples/sample.html ./my-project
```

Convert your own HTML file:
```bash
npm run convert /path/to/your/file.html
```

## Advanced Options

### Using AI Features

To enable AI-powered analysis and suggestions:

1. Get an OpenAI API key from https://platform.openai.com/api-keys

2. Create a `.env` file:
   ```bash
   cp .env.example .env
   ```

3. Edit `.env` and add your key:
   ```
   OPENAI_API_KEY=sk-your-actual-key-here
   ```

4. Run the converter - AI analysis will be automatic!

### Without AI Features

The tool works perfectly fine without an API key. It will:
- Still extract and organize all files
- Use a sensible default project structure
- Provide standard recommendations

## Use Cases

### 1. Quick Prototyping

Convert a rapid prototype into a maintainable structure:
```bash
npm run convert prototype.html ./project
cd project
# Open index.html in browser
```

### 2. Legacy Code Restructuring

Modernize old single-file websites:
```bash
npm run convert old-website.html ./modernized
```

### 3. Learning Tool

Study how proper project structure works:
```bash
npm run convert examples/sample.html
cd output
# Examine the organized structure
```

### 4. Starting Point

Use converted output as a foundation:
```bash
npm run convert template.html ./new-project
cd new-project
# Continue development with organized structure
```

## Understanding the Output

After conversion, you'll get:

```
output/
├── index.html          # Clean HTML with external links
├── css/
│   └── main.css       # All extracted styles
├── js/
│   └── main.js        # All extracted scripts
├── assets/            # Empty, ready for images/fonts
├── AI_SUGGESTIONS.md  # AI recommendations (if enabled)
└── README.md          # Project documentation
```

### What Gets Extracted

- **CSS**: All `<style>` tags are combined into `css/main.css`
- **JavaScript**: All inline `<script>` tags are combined into `js/main.js`
- **HTML**: Cleaned structure with external references
- **External scripts**: Preserved as-is (like CDN links)

### What Stays Inline

- Inline styles on elements (e.g., `style="color: red"`)
- External CSS/JS references (already separate)
- Data attributes and other HTML attributes

## AI Features

When AI is enabled, you get:

### 1. Structure Analysis
The AI examines your HTML and suggests optimal organization.

### 2. Improvement Recommendations
Specific suggestions for:
- Better semantic HTML
- Performance optimizations
- Accessibility improvements
- Modern best practices

### 3. Custom Suggestions
Based on your specific HTML content and structure.

### 4. Documentation
The `AI_SUGGESTIONS.md` file contains all AI-generated insights.

## Troubleshooting

### Issue: "File not found"

**Solution**: Ensure the path to your HTML file is correct:
```bash
# Use absolute path
npm run convert /full/path/to/file.html

# Or relative from project root
npm run convert ./examples/sample.html
```

### Issue: "OpenAI API Error"

**Solutions**:
- Check your API key in `.env`
- Verify your OpenAI account has credits
- The tool still works without AI (uses fallback)

### Issue: "Output already exists"

**Solution**: The tool overwrites existing output. To preserve:
```bash
# Use a different output directory
npm run convert input.html ./output-v2
```

### Issue: "Styles/Scripts not working"

**Solutions**:
- Check that you're opening the HTML file properly (use a local server)
- Verify relative paths in the output
- Check browser console for errors

### Using a Local Server

For best results, serve the output with a local server:

```bash
# Using Python
cd output
python3 -m http.server 8000

# Using Node.js
npx http-server output

# Using VS Code
# Install "Live Server" extension and right-click index.html
```

## Tips & Best Practices

### 1. Test First
Always test with the sample file first to understand the output.

### 2. Backup Originals
Keep your original HTML files safe before conversion.

### 3. Review Output
Check the generated files to ensure everything was extracted correctly.

### 4. Customize Structure
The output is a starting point - feel free to reorganize further.

### 5. Add Assets
Place images, fonts, and other assets in the `assets/` directory.

### 6. Version Control
Initialize git in the output directory to track changes:
```bash
cd output
git init
git add .
git commit -m "Initial converted structure"
```

## Next Steps

After conversion:

1. **Review** the output structure
2. **Test** that everything works
3. **Read** AI_SUGGESTIONS.md for improvements
4. **Enhance** the code based on suggestions
5. **Add** any missing assets
6. **Deploy** your organized project!

## Getting Help

- Check the main [README.md](README.md) for overview
- Review [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines
- Open an issue on GitHub for bugs or questions
- Share your success stories!

## Examples Repository

The `examples/` directory contains sample HTML files demonstrating various features. Use these to:
- Learn how the converter works
- Test different scenarios
- See expected outputs

---

Happy converting! 🚀

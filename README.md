# AI Web Rewriter

Convert a single HTML file with a complete website into a proper project structure using exclusively AI tools - no manual coding required!

## 🎯 Purpose

This tool demonstrates how AI can automate the process of restructuring a monolithic HTML file into a well-organized web project with:
- Separated CSS files
- Separated JavaScript files
- Clean HTML structure
- Proper directory organization
- AI-generated improvement suggestions

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- OpenAI API key (optional, but recommended for AI features)

### Installation

1. Clone this repository:
```bash
git clone https://github.com/YuriiOks/test_ai_web_rewriter.git
cd test_ai_web_rewriter
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Set up your OpenAI API key:
```bash
cp .env.example .env
# Edit .env and add your OpenAI API key
```

## 📖 Usage

### Convert an HTML file

```bash
npm run convert <input-html-file> [output-directory]
```

### Examples

Convert the sample HTML file:
```bash
npm run convert examples/sample.html
```

Convert to a specific output directory:
```bash
npm run convert examples/sample.html ./my-project
```

Convert your own HTML file:
```bash
npm run convert /path/to/your/website.html ./output
```

## 📁 What Gets Generated

After conversion, you'll get a structured project:

```
output/
├── index.html          # Clean HTML with external references
├── css/
│   └── main.css       # Extracted stylesheets
├── js/
│   └── main.js        # Extracted JavaScript
├── assets/            # Directory for images and other assets
├── AI_SUGGESTIONS.md  # AI-generated recommendations
└── README.md          # Project documentation
```

## 🤖 AI Features

When an OpenAI API key is configured, the tool will:
- Analyze your HTML structure
- Suggest optimal project organization
- Provide recommendations for improvements
- Identify potential issues or optimizations

Without an API key, the tool will still work using a fallback structure.

## 🎨 Example

See `examples/sample.html` for a demonstration HTML file that includes:
- Inline CSS styling
- Embedded JavaScript
- Interactive elements
- Modern web design patterns

Run the converter on this file to see the tool in action!

## 🛠️ How It Works

1. **Parse**: Reads and parses the input HTML file
2. **Analyze**: Extracts styles, scripts, and structure
3. **AI Processing**: Sends structure to AI for analysis (if API key provided)
4. **Generate**: Creates organized project structure
5. **Document**: Generates documentation and suggestions

## 🔧 Configuration

The tool can be configured through environment variables:

- `OPENAI_API_KEY`: Your OpenAI API key for AI-powered analysis

## 📝 License

MIT

## 🤝 Contributing

This project is designed to showcase AI-powered web development tools. Contributions are welcome!

## 💡 Use Cases

- Quickly restructure legacy HTML files
- Learn project organization best practices
- Bootstrap new projects from single-file prototypes
- Demonstrate AI-powered development workflows
- Educational tool for web development students
#!/usr/bin/env python3
"""
✨ Enhanced Project Documentation Generator ✨

This script creates comprehensive documentation with consistent content
between Markdown and HTML outputs.

Features:
- Directory tree with customizable exclusions
- File content with syntax highlighting for web-dev files
- Project statistics focused on web-dev files
- Consistent content between Markdown and HTML outputs
"""

import os
import re
import datetime
import argparse
import json
from pathlib import Path
from typing import List, Dict, Any, Optional, Set, Tuple
import markdown
from collections import Counter
import shutil

# ----- Constants and Configuration -----

# Common directories to exclude by default
DEFAULT_EXCLUDE_DIRS = [
    # Virtual environments
    '.venv', 'venv', 'env', 'virtualenv', '.virtualenv',
    # Build and distribution
    'build', 'dist', 'site-packages', 'node_modules',
    # Cache directories
    '__pycache__', '.pytest_cache', '.mypy_cache', '.coverage', 
    '.tox', '.nox', 'htmlcov', '__pypackages__', '.eggs', '.egg-info',
    # Version control
    '.git', '.hg', '.svn', 
    # IDE directories
    '.idea', '.vs', '.vscode',
    # Misc
    '.ipynb_checkpoints', 'wandb', '.wandb',
    # Web-related
    'static', 'public', 'build', 'dist', 

]

# File patterns to exclude by default
DEFAULT_EXCLUDE_PATTERNS = [
    # Compiled files
    r'.*\.pyc$', r'.*\.pyo$', r'.*\.pyd$', r'.*\.so$', 
    # Binary and data files
    r'.*\.bin$', r'.*\.dat$', r'.*\.pkl$', r'.*\.db$',
    # Temporary and system files
    r'.*\.DS_Store$', r'.*\.tmp$', r'.*\.bak$', r'.*\.swp$',
    # Log files
    r'.*\.log$', 
    # Large generated files
    r'.*\.egg-info$', r'.*\.coverage$', r'.*\.cache$'
]

# File extensions to programming language mapping
LANGUAGE_MAP = {
    # Python (kept for directory tree, but content won't be included)
    '.py': 'python',
    # Web
    '.html': 'html',
    '.htm': 'html',
    '.css': 'css',
    '.scss': 'scss',
    '.sass': 'sass',
    '.js': 'javascript',
    '.jsx': 'jsx',
    '.ts': 'typescript',
    '.tsx': 'tsx',
    # Data
    '.json': 'json',
    '.yaml': 'yaml',
    '.yml': 'yaml',
    '.toml': 'toml',
    '.xml': 'xml',
    '.csv': 'csv',
    # Shell
    '.sh': 'bash',
    '.bash': 'bash',
    '.zsh': 'bash',
    '.fish': 'fish',
    '.bat': 'batch',
    '.cmd': 'batch',
    '.ps1': 'powershell',
    # Config
    '.ini': 'ini',
    '.cfg': 'ini',
    '.conf': 'ini',
    '.env': 'ini',
    # Markdown and documentation
    '.md': 'markdown',
    '.markdown': 'markdown',
    '.rst': 'rst',
    '.txt': 'text',
    # Docker, etc.
    '.dockerfile': 'dockerfile',
    '.Dockerfile': 'dockerfile'
}

# Special filenames to language mapping
FILENAME_MAP = {
    'Dockerfile': 'dockerfile',
    'docker-compose.yml': 'yaml',
    'docker-compose.yaml': 'yaml',
    'Makefile': 'makefile',
    'CMakeLists.txt': 'cmake',
    'requirements.txt': 'text',
    'setup.py': 'python',
    'setup.cfg': 'ini',
    'pyproject.toml': 'toml',
    'package.json': 'json',
    'tsconfig.json': 'json',
    '.gitignore': 'text',
    '.gitattributes': 'text',
    '.gitconfig': 'text'
}

# ----- Helper Functions -----

def get_project_root() -> Path:
    return Path(__file__).resolve().parent

def is_project_root(path: Path) -> bool:
    """Check if the given path is likely to be a project root."""
    root_indicators = [
        '.git',
        'pyproject.toml',
        'setup.py',
        'package.json',
        'Cargo.toml',  # Rust
        'go.mod',      # Go
        'pom.xml',     # Maven/Java
        'build.gradle' # Gradle/Java
    ]
    return any((path / indicator).exists() for indicator in root_indicators)

def get_file_language(file_path: Path) -> str:
    """Determine the language of a file based on its extension or filename."""
    if file_path.name in FILENAME_MAP:
        return FILENAME_MAP[file_path.name]
    
    extension = file_path.suffix.lower()
    return LANGUAGE_MAP.get(extension, 'text')

def get_file_content(file_path: Path, max_size: int = 500000) -> str:
    """
    Extract the content of a file, with size limits for safety.
    """
    try:
        file_size = file_path.stat().st_size
        if file_size > max_size:
            return f"File too large to display: {file_size // 1024} KB (limit: {max_size // 1024} KB)"
        
        with open(file_path, 'r', encoding='utf-8', errors='replace') as f:
            content = f.read()
        return content
    except UnicodeDecodeError:
        return "File contains binary data or encoding issues"
    except Exception as e:
        return f"Error reading file: {str(e)}"

# ----- Core Functionality -----

def generate_directory_tree(
    root_dir: Path,
    exclude_dirs: List[str] = None,
    exclude_patterns: List[str] = None,
    max_depth: int = None
) -> str:
    """
    Generate a directory tree structure as a string.
    """
    if exclude_dirs is None:
        exclude_dirs = DEFAULT_EXCLUDE_DIRS
    
    if exclude_patterns is None:
        exclude_patterns = DEFAULT_EXCLUDE_PATTERNS
    
    exclude_patterns = [re.compile(pattern) for pattern in exclude_patterns]
    
    tree_str = []
    root_dir = Path(root_dir)
    
    def should_exclude(path: Path) -> bool:
        if path.name in exclude_dirs:
            return True
        
        for parent in path.parents:
            if parent.name in exclude_dirs:
                return True
        
        for pattern in exclude_patterns:
            if pattern.match(str(path)):
                return True
        
        return False
    
    def add_directory(directory: Path, prefix: str = '', depth: int = 0) -> None:
        if max_depth is not None and depth > max_depth:
            tree_str.append(f"{prefix}└── ... (max depth reached)")
            return
        
        tree_str.append(f"{prefix}📁 {directory.name}/")
        
        try:
            dirs = sorted([item for item in directory.iterdir() if item.is_dir() and not should_exclude(item)])
            files = sorted([item for item in directory.iterdir() if item.is_file() and not should_exclude(item)])
            
            items = dirs + files
            
            for i, item in enumerate(items):
                is_last = i == len(items) - 1
                
                if item.is_dir():
                    next_prefix = prefix + ('└── ' if is_last else '├── ')
                    continuation_prefix = prefix + ('    ' if is_last else '│   ')
                    add_directory(item, next_prefix, depth + 1)
                else:
                    tree_str.append(f"{prefix}{'└── ' if is_last else '├── '}📄 {item.name}")
        
        except PermissionError:
            tree_str.append(f"{prefix}  ⚠️ Permission denied")
            return
    
    add_directory(root_dir)
    return '\n'.join(tree_str)

def generate_file_content_documentation(
    root_dir: Path,
    include_patterns: List[str] = None,
    exclude_dirs: List[str] = None,
    max_file_count: int = 200
) -> str:
    """
    Generate documentation including full content of important files.
    """
    if exclude_dirs is None:
        exclude_dirs = DEFAULT_EXCLUDE_DIRS
    
    # --- MODIFICATION START ---
    # Changed include_patterns to focus on web-dev files and ignore Python files.
    if include_patterns is None:
        include_patterns = [
            r'README\.md$',
            r'.*\.html$',
            r'.*\.htm$',
            r'.*\.css$',
            r'.*\.scss$',
            r'.*\.sass$',
            r'.*\.js$',
            r'.*\.jsx$',
            r'.*\.ts$',
            r'.*\.tsx$',
            r'package\.json$',
            r'tsconfig\.json$',
        ]
    # --- MODIFICATION END ---
    
    include_patterns = [re.compile(pattern) for pattern in include_patterns]
    
    root_dir = Path(root_dir)
    content_docs = []
    file_count = 0
    
    # First, handle README.md specially
    readme_path = root_dir / "README.md"
    if readme_path.exists():
        content_docs.append("## README\n")
        content_docs.append("```markdown")
        content_docs.append(get_file_content(readme_path))
        content_docs.append("```\n")
        file_count += 1
    
    # Find all files matching the patterns
    target_files = []
    
    for file_path in root_dir.glob("**/*"):
        if file_count >= max_file_count:
            break
            
        if file_path.is_dir() or any(excluded in str(file_path) for excluded in exclude_dirs):
            continue
            
        if any(pattern.search(file_path.name) for pattern in include_patterns):
            if file_path not in target_files:
                target_files.append(file_path)
                file_count += 1
    
    target_files.sort()
    
    if target_files:
        content_docs.append("## Core Files\n")
        
        for file_path in target_files:
            if any(excluded in str(file_path) for excluded in exclude_dirs):
                continue
                
            relative_path = file_path.relative_to(root_dir)
            language = get_file_language(file_path)
            
            content_docs.append(f"### {relative_path}\n")
            content_docs.append(f"```{language}")
            content_docs.append(get_file_content(file_path))
            content_docs.append("```\n")
    
    if file_count >= max_file_count:
        content_docs.append(f"⚠️ Only showing {max_file_count} files to avoid excessive output size.\n")
    
    return "\n".join(content_docs)

def calculate_project_stats(root_dir: Path, exclude_dirs: List[str] = None) -> Dict[str, Any]:
    """
    Calculate statistics about the project, focusing on web-dev files.
    """
    # --- MODIFICATION START ---
    # Added a set of web extensions to filter the files included in statistics.
    WEB_EXTENSIONS = {
        '.html', '.htm', '.css', '.scss', '.sass', '.js', '.jsx', 
        '.ts', '.tsx', '.json', '.md', '.svg', '.vue', '.yaml', '.yml'
    }
    # --- MODIFICATION END ---

    if exclude_dirs is None:
        exclude_dirs = DEFAULT_EXCLUDE_DIRS
    
    stats = {
        "total_files": 0,
        "total_directories": 0,
        "languages": Counter(),
        "file_extensions": Counter(),
        "total_lines_of_code": 0,
        "largest_files": [],
        "newest_files": []
    }
    
    files_to_process = []
    
    for path in root_dir.glob("**/*"):
        if any(excluded in str(path) for excluded in exclude_dirs):
            continue
            
        if path.is_dir():
            stats["total_directories"] += 1
        # --- MODIFICATION START ---
        # Only process files that match our web extensions list.
        elif path.is_file() and path.suffix.lower() in WEB_EXTENSIONS:
            files_to_process.append(path)
            stats["total_files"] += 1
        # --- MODIFICATION END ---
    
    for file_path in files_to_process[:1000]:
        stats["file_extensions"][file_path.suffix] += 1
        language = get_file_language(file_path)
        stats["languages"][language] += 1
        file_size = file_path.stat().st_size
        
        stats["largest_files"].append((str(file_path.relative_to(root_dir)), file_size))
        stats["largest_files"] = sorted(stats["largest_files"], key=lambda x: x[1], reverse=True)[:5]
        
        modification_time = file_path.stat().st_mtime
        stats["newest_files"].append((str(file_path.relative_to(root_dir)), modification_time))
        stats["newest_files"] = sorted(stats["newest_files"], key=lambda x: x[1], reverse=True)[:5]
        
        if file_size < 1_000_000:
            try:
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                    line_count = sum(1 for _ in f)
                    stats["total_lines_of_code"] += line_count
            except:
                pass
    
    stats["newest_files"] = [
        (path, datetime.datetime.fromtimestamp(timestamp).strftime('%Y-%m-%d %H:%M:%S'))
        for path, timestamp in stats["newest_files"]
    ]
    
    stats["largest_files"] = [
        (path, f"{size / 1024:.1f} KB" if size < 1_000_000 else f"{size / 1024 / 1024:.1f} MB")
        for path, size in stats["largest_files"]
    ]
    
    stats["top_languages"] = stats["languages"].most_common(5)
    
    return stats

def generate_project_documentation(
    root_dir: Path = None,
    output_path: str = None,
    project_name: str = None,
    generate_html: bool = True,
    max_file_count: int = 20
) -> Tuple[Path, Optional[Path]]:
    """
    Generate comprehensive project documentation.
    """
    if root_dir is None:
        root_dir = get_project_root()
    
    root_dir = Path(root_dir)
    
    if project_name is None:
        # Try to get from package.json first for web projects
        if (root_dir / "package.json").exists():
            try:
                with open(root_dir / "package.json", "r") as f:
                    pkg = json.load(f)
                    project_name = pkg.get("name")
            except:
                pass
        
        if project_name is None:
            project_name = root_dir.name.replace("_", " ").replace("-", " ").title()
    
    if output_path is None:
        output_path = root_dir / "PROJECT_DOCUMENTATION.md"
    else:
        output_path = Path(output_path)
    
    doc = [
        f"# {project_name} - Project Documentation",
        f"\nGenerated on: {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n",
        "## Project Overview",
        f"{project_name} is organized as follows. This documentation provides a comprehensive overview of the project structure, key modules, and implementation details.",
        "\n## Project Structure\n"
    ]
    
    doc.append("```")
    doc.append(generate_directory_tree(root_dir))
    doc.append("```\n")
    
    try:
        stats = calculate_project_stats(root_dir)
        doc.append("## Project Statistics\n")
        doc.append(f"- **Total Scanned Files:** {stats['total_files']}")
        doc.append(f"- **Total Directories:** {stats['total_directories']}")
        doc.append(f"- **Total Lines of Code:** {stats['total_lines_of_code']:,}")
        
        doc.append("\n### Language Distribution\n")
        if stats['top_languages']:
            for language, count in stats['top_languages']:
                doc.append(f"- **{language.title()}:** {count} files")
        
        doc.append("\n### Largest Files\n")
        if stats['largest_files']:
            for path, size in stats['largest_files']:
                doc.append(f"- `{path}`: {size}")
        
        doc.append("\n### Recently Modified Files\n")
        if stats['newest_files']:
            for path, timestamp in stats['newest_files']:
                doc.append(f"- `{path}`: {timestamp}")
    except Exception as e:
        doc.append("Error calculating project statistics: " + str(e))
    
    # --- MODIFICATION START ---
    # The Python-specific "Module Documentation" section has been removed.
    # --- MODIFICATION END ---
    
    doc.append(generate_file_content_documentation(root_dir, max_file_count=max_file_count))
    
    # --- MODIFICATION START ---
    # Removed the Python-specific "Getting Started" section.
    # You can add a generic one or check for package.json here if needed.
    # --- MODIFICATION END ---
    
    documentation = "\n".join(doc)
    
    output_path.parent.mkdir(parents=True, exist_ok=True)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(documentation)
    
    print(f"Markdown documentation generated at: {output_path}")
    
    html_output_path = None
    if generate_html:
        html_output_path = output_path.with_suffix('.html')
        
        try:
            import pygments
            from pygments.formatters import HtmlFormatter
            has_pygments = True
        except ImportError:
            has_pygments = False
            print("pygments not installed. Code syntax highlighting in HTML will be basic.")
        
        html_content = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>{project_name} - Project Documentation</title>
            <style>
                body {{
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                }}
                h1, h2, h3, h4, h5, h6 {{
                    margin-top: 24px;
                    margin-bottom: 16px;
                    font-weight: 600;
                    color: #0366d6;
                }}
                h1 {{ font-size: 2em; padding-bottom: 10px; border-bottom: 1px solid #eaecef; }}
                h2 {{ font-size: 1.5em; padding-bottom: 8px; border-bottom: 1px solid #eaecef; }}
                h3 {{ font-size: 1.25em; }}
                pre {{
                    padding: 16px;
                    overflow: auto;
                    font-size: 85%;
                    line-height: 1.45;
                    background-color: #f6f8fa;
                    border-radius: 6px;
                }}
                code {{
                    padding: 0.2em 0.4em;
                    margin: 0;
                    font-size: 85%;
                    background-color: rgba(27, 31, 35, 0.05);
                    border-radius: 3px;
                }}
                pre code {{
                    padding: 0;
                    background-color: transparent;
                }}
                blockquote {{
                    padding: 0 1em;
                    color: #6a737d;
                    border-left: 0.25em solid #dfe2e5;
                }}
                table {{
                    border-collapse: collapse;
                    width: 100%;
                    margin-bottom: 16px;
                }}
                table th, table td {{
                    padding: 6px 13px;
                    border: 1px solid #dfe2e5;
                }}
                table tr {{
                    background-color: #fff;
                    border-top: 1px solid #c6cbd1;
                }}
                table tr:nth-child(2n) {{
                    background-color: #f6f8fa;
                }}
                a {{
                    color: #0366d6;
                    text-decoration: none;
                }}
                a:hover {{
                    text-decoration: underline;
                }}
                .timestamp {{
                    color: #6a737d;
                    font-style: italic;
                }}
            </style>
        </head>
        <body>
            <div id="content">
                {markdown.markdown(documentation, extensions=['fenced_code', 'tables', 'codehilite'] if has_pygments else ['fenced_code', 'tables'])}
            </div>
            <footer>
                <p class="timestamp">Generated on: {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}</p>
                <p>Created with Project Documentation Generator</p>
            </footer>
        </body>
        </html>
        """
        
        with open(html_output_path, 'w', encoding='utf-8') as f:
            f.write(html_content)
        
        print(f"HTML documentation generated at: {html_output_path}")
    
    return output_path, html_output_path

def parse_arguments():
    """Parse command line arguments."""
    parser = argparse.ArgumentParser(
        description="Generate comprehensive project documentation with consistent content between formats.",
        formatter_class=argparse.ArgumentDefaultsHelpFormatter
    )
    
    parser.add_argument(
        "--project-dir", "-p",
        type=str,
        default=None,
        help="Project name (auto-detected if not specified)"
    )
    
    parser.add_argument(
        "--no-html",
        action="store_true",
        help="Disable HTML documentation generation"
    )
    
    parser.add_argument(
        "--max-files", "-m",
        type=int,
        default=20,
        help="Maximum number of files to include in the content section"
    )
    
    parser.add_argument(
        "--exclude-dirs", "-e",
        type=str,
        nargs="+",
        default=None,
        help="Additional directories to exclude"
    )
    
    return parser.parse_args()

def main():
    """Main entry point for the script."""
    args = parse_arguments()
    
    if args.project_dir:
        project_root = Path(args.project_dir)
    else:
        project_root = get_project_root()
        print(f"Auto-detected project root: {project_root}")
    
    exclude_dirs = DEFAULT_EXCLUDE_DIRS
    if args.exclude_dirs:
        exclude_dirs.extend(args.exclude_dirs)
    
    print(f"Generating documentation for project...")
    md_path, html_path = generate_project_documentation(
        root_dir=project_root,
        generate_html=not args.no_html,
        max_file_count=args.max_files
    )
    
    print(f"Documentation generation complete!")
    print(f"Markdown: {md_path}")
    if html_path:
        print(f"HTML: {html_path}")
    
    try:
        if html_path and shutil.which('xdg-open'):  # Linux
            os.system(f'xdg-open "{html_path}"')
        elif html_path and shutil.which('open'):  # macOS
            os.system(f'open "{html_path}"')
        elif html_path and os.name == 'nt':  # Windows
            os.system(f'start "" "{html_path}"')
    except:
        pass

if __name__ == "__main__":
    main()
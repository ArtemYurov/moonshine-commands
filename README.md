# 🌙 MoonShine Skills

> AI-powered development toolkit for MoonShine - Inspired by GitHub Speckit

MoonShine Skills is a CLI tool that brings AI-powered development assistance to your MoonShine projects. Install guidelines and skills that help AI agents (like Claude) understand MoonShine components and generate production-ready code.

## ✨ Features

- 🤖 **AI Agent Integration** - Works with Claude Code (more agents coming soon)
- 📚 **Comprehensive Guidelines** - Complete MoonShine component documentation
- ⚡ **Skills** - Easy-to-use skills for common tasks
- 🎯 **Production Ready** - Generates code following best practices
- 🔄 **Auto-sync** - Keep guidelines and skills up-to-date

## 🚀 Quick Start

### Installation

You can install MoonShine Skills globally or run it on-demand via `npx`.

#### Option 1: Install Globally

```bash
npm install -g moonshine-software/moonshine-skills
cd your-moonshine-project
moonshine-skills init
```

#### Option 2: Run via `npx` (no install)

```bash
cd your-moonshine-project
npx moonshine-software/moonshine-skills init
```

Note: The folder must be owned by the current user.

Follow the prompts to:
1. Select your AI agent (Claude, Cursor, etc.)
2. Download skills and guidelines
3. Set up configuration

### Project Structure After Init

```
your-moonshine-project/
├── .claude/                    # Claude-specific files
│   └── skills/
│       ├── moonshine-custom-blade/SKILL.md
│       ├── moonshine-layout/SKILL.md
│       ├── moonshine-palette/SKILL.md
│       ├── moonshine-field/SKILL.md
│       └── moonshine-component/SKILL.md
└── .guidelines/                # Shared guidelines
    └── moonshine/
        ├── blade-components.md
        ├── palettes.md
        ├── fields-development.md
        └── components-development.md
```

## 📖 Usage

### Available Commands

After initialization, you can invoke these skills in Claude (also available as slash commands):

#### `/moonshine-custom-blade` - Build admin panel UI

Build MoonShine admin panel UI with Blade components — tables, forms, cards, modals, navigation, and page layouts:

```
/moonshine-custom-blade create a users page with table and edit modal
```

```
/moonshine-custom-blade create a dashboard with metrics, cards, and a recent activity table
```

#### `/moonshine-layout` - Create Layouts

Generate complete layouts with navigation:

```
/moonshine-layout create a sidebar layout with logo, menu, and theme switcher
```

```
/moonshine-layout create a top navigation bar with horizontal menu
```

#### `/moonshine-palette` - Create Color Palette

Create or modify a custom color palette using OKLCH color space (one palette with light + dark themes per invocation):

```
/moonshine-palette create a blue ocean theme with hue 240
```

```
/moonshine-palette create a purple palette for dark and light themes
```

#### `/moonshine-field` - Create Custom Fields

Create custom MoonShine fields with proper structure and methods:

```
/moonshine-field create a rating field with stars from 1 to 5
```

```
/moonshine-field create a color picker field with preview
```

#### `/moonshine-component` - Create Custom Components

Create custom MoonShine components for UI decoration:

```
/moonshine-component create an alert component with different types
```

```
/moonshine-component create a stats card with icon and value
```

## 🎯 What Gets Generated

MoonShine Skills ensures AI agents generate code that follows MoonShine best practices:

✅ **Correct HTML Structure** - No duplicate HTML tags, proper component nesting
✅ **Required Wrappers** - All CSS classes and wrappers in place
✅ **Assets Included** - Vite assets properly configured
✅ **Responsive Design** - Mobile-friendly with proper burger menus
✅ **Production Ready** - Following all MoonShine conventions

## 📚 Guidelines

The guidelines provide comprehensive documentation for:

### `blade-components.md`
- Complete component library
- Critical usage rules
- Required wrappers and attributes
- Slot-based vs array-based patterns
- Best practices and examples

### `palettes.md`
- OKLCH color space format
- Complete palette structure
- Light and dark theme implementation
- Contrast requirements and best practices

### `fields-development.md`
- Custom field creation guide
- Field class anatomy and methods
- View templates with Alpine.js
- Fluent methods and field modes
- Relationship fields handling
- Complete examples (Rating, JSON, File Upload)

### `components-development.md`
- Custom component creation guide
- Components vs Fields comparison
- Fluent methods and viewData()
- Slots and nested components
- Complete examples (Alert, StatsCard, Breadcrumbs)

## 🔧 CLI Commands

### `moonshine-skills init`

Initialize MoonShine Skills in your project.

**Options:**
- Interactive agent selection
- Automatic directory creation
- Downloads latest skills and guidelines

### `moonshine-skills update` (Coming Soon)

Update skills and guidelines to the latest version.

### `moonshine-skills status` (Coming Soon)

Check initialization status and versions.

## 🤝 Supported AI Agents

- ✅ **Claude Code** - Full support
- 🚧 **Cursor** - Coming soon
- 🚧 **GitHub Copilot** - Coming soon

## 📝 Examples

### Creating a User Management Interface

```
/moonshine-custom-blade create a users table with:
- Avatars and name columns
- Status badges (active/inactive)
- Role badges with different colors
- Action buttons (view, edit, delete)
```

The AI will generate a complete, working table with:
- Proper slot-based structure
- MoonShine badge components
- Icon buttons with proper wrappers
- All required CSS classes

### Building a Custom Color Palette

```
/moonshine-palette create a professional teal palette with:
- Hue angle 180 (teal/cyan)
- Both light and dark themes
- Proper contrast ratios
- All semantic colors (success, warning, error, info)
```

### Creating a Custom Field

```
/moonshine-field create a JSON editor field that:
- Displays formatted JSON in a textarea
- Has syntax highlighting
- Validates JSON on input
- Saves as JSON string to database
```

The AI will generate:
- PHP class in `app/MoonShine/Fields/JsonEditor.php`
- Blade view in `resources/views/admin/fields/json-editor.blade.php`
- Proper `viewData()` method
- Correct `resolveValue()` and `resolveOnApply()` methods
- Alpine.js integration for interactivity

### Creating a Custom Component

```
/moonshine-component create a stats card component that:
- Shows an icon, value, and label
- Supports different colors
- Value can be dynamic (closure)
- Used for dashboard widgets
```

The AI will generate:
- PHP class in `app/MoonShine/Components/StatsCard.php`
- Blade view in `resources/views/admin/components/stats-card.blade.php`
- Fluent methods for configuration
- Support for closures in values
- Proper attribute handling

## 🏗️ Architecture

```
┌─────────────────────────────────────────┐
│         User's MoonShine Project        │
├─────────────────────────────────────────┤
│  .claude/skills/                        │
│  ├── moonshine-custom-blade/SKILL.md      │
│  │   → Reads .guidelines/moonshine/     │
│  ├── moonshine-layout/SKILL.md          │
│  │   → Reads .guidelines/moonshine/     │
│  ├── moonshine-palette/SKILL.md        │
│  │   → Reads .guidelines/moonshine/     │
│  ├── moonshine-field/SKILL.md           │
│  │   → Reads .guidelines/moonshine/     │
│  └── moonshine-component/SKILL.md       │
│      → Reads .guidelines/moonshine/     │
│                                         │
│  .guidelines/moonshine/                 │
│  ├── blade-components.md               │
│  ├── palettes.md                       │
│  ├── fields-development.md             │
│  └── components-development.md         │
└─────────────────────────────────────────┘
```

## 🔄 Update Process

Guidelines and skills are downloaded from the official repository:
```
https://github.com/moonshine-software/moonshine-skills
```

When you run `moonshine-skills init`, it fetches:
- Latest skill files for your selected agent
- Latest guideline files
- Ensures you have the most up-to-date documentation

## 🐛 Troubleshooting

### "composer.json not found"
Make sure you're in your Laravel/MoonShine project root directory.

### Skills not appearing in Claude
1. Restart Claude Code
2. Check that files were created in `.claude/skills/`
3. Verify slash commands with `/` in Claude

### Guidelines not being followed
Make sure the AI agent can access `.guidelines/moonshine/` directory. Skills are configured to read from this location.

## 📦 Package Development

### Building from Source

```bash
# Clone repository
git clone https://github.com/moonshine-software/moonshine-skills.git
cd moonshine-skills

# Install dependencies
npm install

# Build
npm run build

# Test locally
npm link
cd /path/to/your-project
moonshine-skills init
```

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## 📄 License

MIT License - see LICENSE file for details.

## 🙏 Acknowledgments

- Inspired by GitHub Speckit
- Built for the MoonShine Laravel admin panel
- Powered by AI agents like Claude

## 🔗 Links

- [MoonShine Documentation](https://moonshine-laravel.com)
- [GitHub Repository](https://github.com/moonshine-software/moonshine-skills)
- [Report Issues](https://github.com/moonshine-software/moonshine-skills/issues)

---

Made with 🌙 by the MoonShine team

# Graph Report - Website  (2026-08-30)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 847 nodes · 1164 edges · 78 communities (47 shown, 31 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 18 edges (avg confidence: 0.87)
- Token cost: 3,390 input · 861 output

## Community Hubs (Navigation)
- Color Palette Shades
- Core Search Logic
- UI Theme Tokens
- Component Style Tokens
- Slide Search Context
- Spacing Tokens
- Tailwind Generator Tests
- HTML Token Validation
- Logo Search Core
- Tailwind Config Generator
- OpenCode Configuration
- Slide Generation Logic
- Design System Reasoning
- Background Image Fetcher
- Design System Markdown
- Icon Generation Utility
- Font Size Tokens
- Shadcn Installer Tests
- Color Extraction Script
- Asset Validation Script
- Token Validation Script
- Shadcn Component Installer
- Shadcn Management API
- Config File Writer
- Brand Context Injector
- Token Embedding Script
- Animation Duration Tokens
- Component Installation Tests
- Tailwind Syntax Tests
- Domain Search Scripts
- Generator Initialization
- Logo Generation Logic
- CSS Token Generator
- Token Validator Tests
- Brand Sync Script
- BM25 Search Algorithm
- Border Radius Tokens
- ANSI Terminal Formatting
- System Infrastructure
- AI Design Skills
- Small Shadow Tokens
- Large Size Tokens
- OpenCode Plugin Config
- Extra Large Tokens
- Medium Size Tokens
- Empty Value Tokens
- System Documentation
- Test Project Fixtures
- Graphify Plugin Logic
- Brand Sync Tests
- Core Design Skills
- Slide Token Validator
- Installer Initialization
- Missing Config Tests
- Empty Component Tests
- Installed Component Tests
- Dry Run Tests
- Config Existence Tests
- File Detection Tests
- Empty Input Tests
- Font Configuration Tests
- Plugin Recommendation Tests
- TypeScript Config Tests
- Color Config Tests
- Plugin Config Tests
- Content Validation Tests
- Theme Validation Tests
- File Writing Tests
- JavaScript Init Tests
- Config Content Tests
- Invalid Path Tests
- Full JS Config Tests
- Output Path Tests
- Base Structure Tests
- Vue Framework Tests
- Custom Color Tests
- Output Formatting
- System Architecture

## God Nodes (most connected - your core abstractions)
1. `TailwindConfigGenerator` - 58 edges
2. `TestTailwindConfigGenerator` - 35 edges
3. `ShadcnInstaller` - 34 edges
4. `TestShadcnInstaller` - 26 edges
5. `color` - 15 edges
6. `search_with_context()` - 12 edges
7. `gray` - 12 edges
8. `spacing` - 12 edges
9. `DesignSystemGenerator` - 11 edges
10. `ValidationResult` - 11 edges

## Surprising Connections (you probably didn't know these)
- `TestShadcnInstaller` --uses--> `ShadcnInstaller`  [INFERRED]
  .opencode/skills/ui-styling/scripts/tests/test_shadcn_add.py → .opencode/skills/ui-styling/scripts/shadcn_add.py
- `TestGeneratedConfigIsValidJs` --uses--> `TailwindConfigGenerator`  [INFERRED]
  .opencode/skills/ui-styling/scripts/tests/test_tailwind_config_gen.py → .opencode/skills/ui-styling/scripts/tailwind_config_gen.py
- `TestTailwindConfigGenerator` --uses--> `TailwindConfigGenerator`  [INFERRED]
  .opencode/skills/ui-styling/scripts/tests/test_tailwind_config_gen.py → .opencode/skills/ui-styling/scripts/tailwind_config_gen.py
- `_generate_intelligent_overrides()` --calls--> `search()`  [EXTRACTED]
  .opencode/skills/ui-ux-pro-max/scripts/design_system.py → .opencode/skills/ui-ux-pro-max/scripts/core.py
- `generate_cip_set()` --calls--> `get_cip_brief()`  [EXTRACTED]
  .opencode/skills/design/scripts/cip/generate.py → .opencode/skills/design/scripts/cip/core.py

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **B-ILMOE Technology Stack** — apps_web, apps_api, supabase, cloudinary [EXTRACTED 1.00]
- **Design Skill Ecosystem** — opencode_skills_brand_skill, opencode_skills_design_system_skill, opencode_skills_banner_design_skill, opencode_skills_design_skill [INFERRED 0.90]

## Communities (78 total, 31 thin omitted)

### Community 0 - "Color Palette Shades"
Cohesion: 0.05
Nodes (53): $type, $value, $type, $value, $type, $value, $type, $value (+45 more)

### Community 1 - "Core Search Logic"
Cohesion: 0.07
Nodes (42): BM25, detect_domain(), get_cip_brief(), _load_csv(), Load CSV and return list of dicts, Core search function using BM25, Auto-detect the most relevant domain from query, Main search function with auto-domain detection (+34 more)

### Community 2 - "UI Theme Tokens"
Cohesion: 0.04
Nodes (48): $type, $value, background, destructive, destructive-foreground, foreground, muted, muted-foreground (+40 more)

### Community 3 - "Component Style Tokens"
Cohesion: 0.06
Nodes (45): $type, $value, $type, $value, bg, fg, font-size, hover-bg (+37 more)

### Community 4 - "Slide Search Context"
Cohesion: 0.08
Nodes (36): format_context(), format_result(), main(), Format a single search result for display, Format contextual recommendations for display., BM25, calculate_pattern_break(), detect_domain() (+28 more)

### Community 5 - "Spacing Tokens"
Cohesion: 0.06
Nodes (34): $type, $value, $type, $value, $type, $value, $type, $value (+26 more)

### Community 6 - "Tailwind Generator Tests"
Cohesion: 0.06
Nodes (16): Test adding colors multiple times., Test adding full color palette., Test adding custom breakpoints., Test TailwindConfigGenerator class., Test that adding same plugin twice doesn't duplicate., Test plugin recommendations for Next.js., Test initialization with default settings., Test generating JavaScript configuration. (+8 more)

### Community 7 - "HTML Token Validation"
Cohesion: 0.13
Nodes (24): get_context(), is_allowed_exception(), is_allowed_rgba(), is_inside_block(), load_css_variables(), main(), print_result(), print_summary() (+16 more)

### Community 8 - "Logo Search Core"
Cohesion: 0.11
Nodes (19): BM25, detect_domain(), _load_csv(), Load CSV and return list of dicts, Core search function using BM25, Auto-detect the most relevant domain from query, Main search function with auto-domain detection, Search across all domains and combine results (+11 more)

### Community 9 - "Tailwind Config Generator"
Cohesion: 0.10
Nodes (12): main(), Add custom font families. Args: fonts: Dict of font_type: [font_names] e.g.,…, Add custom spacing values. Args: spacing: Dict of name: value e.g., {'18':…, Add custom breakpoints. Args: breakpoints: Dict of name: width e.g., {'3xl':…, Add plugin requirements. Args: plugins: List of plugin names e.g.,…, Get plugin recommendations based on configuration. Returns: List of recommended…, Generate Tailwind CSS configuration files., Validate configuration. Returns: Tuple of (valid, message) (+4 more)

### Community 10 - "OpenCode Configuration"
Cohesion: 0.10
Nodes (20): command, enabled, type, instructions, mcp, graphify, supabase, permission (+12 more)

### Community 11 - "Slide Generation Logic"
Cohesion: 0.15
Nodes (19): _e(), generate_chart_slide(), generate_cta_slide(), generate_deck(), generate_metrics_slide(), generate_problem_slide(), generate_solution_slide(), generate_testimonial_slide() (+11 more)

### Community 12 - "Design System Reasoning"
Cohesion: 0.14
Nodes (11): DesignSystemGenerator, Find matching reasoning rule for a category., Apply reasoning rules to search results., Select best matching result based on priority keywords., Extract results list from search result dict., Generate complete design system recommendation. variance/motion/density are…, Bucket a 1-10 dial value into its tier config. Returns None if value is None., Generates design system recommendations from aggregated searches. (+3 more)

### Community 13 - "Background Image Fetcher"
Cohesion: 0.17
Nodes (17): generate_css_for_background(), get_background_image(), get_curated_images(), get_overlay_css(), get_pexels_search_url(), load_backgrounds_config(), load_brand_colors(), main() (+9 more)

### Community 14 - "Design System Markdown"
Cohesion: 0.18
Nodes (16): _detect_page_type(), format_markdown(), format_master_md(), format_page_override_md(), generate_design_system(), _generate_intelligent_overrides(), persist_design_system(), Format a page-specific override file with intelligent AI-generated content. (+8 more)

### Community 15 - "Icon Generation Utility"
Cohesion: 0.20
Nodes (15): apply_color(), apply_viewbox_size(), extract_svgs(), generate_batch(), generate_icon(), generate_sizes(), load_env(), main() (+7 more)

### Community 16 - "Font Size Tokens"
Cohesion: 0.12
Nodes (16): $type, $value, $type, $value, $type, $value, $type, $value (+8 more)

### Community 17 - "Shadcn Installer Tests"
Cohesion: 0.14
Nodes (8): Test adding components that are already installed., Test adding components in dry run mode., Test ShadcnInstaller class., Test listing installed components without config., Test initialization with custom project root., Test checking for existing shadcn config., Test getting installed components when none exist., TestShadcnInstaller

### Community 18 - "Color Extraction Script"
Cohesion: 0.22
Nodes (11): calculateCompliance(), colorDistance(), displayPalette(), extractHexColors(), findNearestBrandColor(), fs, generateImageMagickCommand(), hexToRgb() (+3 more)

### Community 19 - "Asset Validation Script"
Cohesion: 0.25
Nodes (13): checkManifest(), formatBytes(), formatOutput(), fs, main(), parseFilename(), path, RULES (+5 more)

### Community 20 - "Token Validation Script"
Cohesion: 0.24
Nodes (11): extensions, formatReport(), fs, getFiles(), main(), parseArgs(), path, patterns (+3 more)

### Community 21 - "Shadcn Component Installer"
Cohesion: 0.20
Nodes (7): main(), Handle shadcn/ui component installation., ShadcnInstaller, Tests for shadcn_add.py, Test adding all components without config., Test initialization with default project root., Test getting installed components without config.

### Community 22 - "Shadcn Management API"
Cohesion: 0.21
Nodes (6): Add all available shadcn/ui components. Args: overwrite: If True, overwrite…, List installed components. Returns: Tuple of (success, message with component…, Check if shadcn is initialized in project. Returns: True if components.json…, Get list of already installed components. Returns: List of installed component…, Read shadcn version from project package.json; fall back to a pinned default., Add shadcn/ui components. Args: components: List of component names to add…

### Community 23 - "Config File Writer"
Cohesion: 0.20
Nodes (6): Generate configuration file content. Returns: Configuration file as string, Generate TypeScript configuration., Generate JavaScript configuration., Format plugins array for config. Validates each plugin name against a strict…, Add indentation to JSON string., Write configuration to file. Returns: Tuple of (success, message)

### Community 24 - "Brand Context Injector"
Cohesion: 0.31
Nodes (10): extractColorsFromTable(), extractCoreAttributes(), extractHexColors(), extractImageStyle(), extractTypography(), extractVoice(), fs, generatePromptAddition() (+2 more)

### Community 25 - "Token Embedding Script"
Cohesion: 0.18
Nodes (8): args, fs, minimal, MINIMAL_TOKENS, path, projectRoot, tokensPath, wrapStyle

### Community 26 - "Animation Duration Tokens"
Cohesion: 0.18
Nodes (11): fast, normal, slow, $type, $value, $type, $value, primitive (+3 more)

### Community 27 - "Component Installation Tests"
Cohesion: 0.18
Nodes (6): Test adding components with overwrite flag., Test successful component addition., Test component addition with subprocess error., Test component addition when npx is not found., Test successful addition of all components., patch

### Community 28 - "Tailwind Syntax Tests"
Cohesion: 0.22
Nodes (8): Tests for tailwind_config_gen.py, Reduce a generated TS/JS config to a bare assignable object so it can be handed…, Regression guard for the missing-comma bug between the ``theme`` block and…, The property preceding ``plugins`` must end with a comma (pure-Python check, so…, The emitted config parses as valid JS via ``node --check``., _strip_to_object(), TestGeneratedConfigIsValidJs, parametrize

### Community 29 - "Domain Search Scripts"
Cohesion: 0.25
Nodes (10): detect_domain(), _load_csv(), Load CSV and return list of dicts, Core search function using BM25, Auto-detect the most relevant domain from query, Main search function with auto-domain detection, Search stack-specific guidelines, search() (+2 more)

### Community 30 - "Generator Initialization"
Cohesion: 0.22
Nodes (6): Any, Path, Initialize generator. Args: typescript: If True, generate .ts config, else .js…, Determine default output path., Create base configuration structure., Get default content paths for framework.

### Community 31 - "Logo Generation Logic"
Cohesion: 0.29
Nodes (9): enhance_prompt(), generate_batch(), generate_logo(), load_env(), main(), Enhance the logo prompt with style and industry modifiers, Generate a logo using Gemini models with image generation Args: aspect_ratio:…, Generate multiple logo variants with different styles (+1 more)

### Community 32 - "CSS Token Generator"
Cohesion: 0.36
Nodes (9): flattenTokens(), fs, generateCSS(), generateTailwind(), main(), parseArgs(), path, resolveReference() (+1 more)

### Community 33 - "Token Validator Tests"
Cohesion: 0.28
Nodes (8): CompletedProcess, Path, Regression tests for validate-tokens.cjs. The validator used to skip any line…, A hardcoded hex on the same line as a var() token is still a violation., A line that references only tokens produces no false positives., _run(), test_flags_hardcoded_hex_sharing_line_with_token(), test_token_only_line_reports_no_violation()

### Community 34 - "Brand Sync Script"
Cohesion: 0.33
Nodes (8): adjustBrightness(), { execFileSync }, extractColorsFromMarkdown(), fs, generateColorScale(), main(), path, updateDesignTokens()

### Community 35 - "BM25 Search Algorithm"
Cohesion: 0.28
Nodes (5): BM25, BM25 ranking algorithm for text search, Lowercase, split, remove punctuation, filter short words, Build BM25 index from documents, Score all documents against query

### Community 36 - "Border Radius Tokens"
Cohesion: 0.29
Nodes (8): $type, $value, $type, $value, radius, default, full, default

### Community 37 - "ANSI Terminal Formatting"
Cohesion: 0.25
Nodes (8): ansi_ljust(), format_ascii_box(), hex_to_ansi(), Convert hex color to ANSI True Color swatch (██) with fallback., Like str.ljust but accounts for zero-width ANSI escape sequences., Create a Unicode section separator: ├─── NAME ───...┤, Format design system as Unicode box with ANSI color swatches., section_header()

### Community 38 - "System Infrastructure"
Cohesion: 0.43
Nodes (7): Go Backend API, Next.js Frontend, Cloudinary, Editorial Workflow State Machine, OpenAPI Specification, Supabase (Postgres + Auth), Supabase Migrations

### Community 39 - "AI Design Skills"
Cohesion: 0.33
Nodes (6): ai-artist, ai-multimodal, chrome-devtools, frontend-design, Banner Design Skill, ui-ux-pro-max

### Community 40 - "Small Shadow Tokens"
Cohesion: 0.47
Nodes (6): sm, shadow, sm, sm, $type, $value

### Community 41 - "Large Size Tokens"
Cohesion: 0.60
Nodes (5): lg, $type, $value, lg, lg

### Community 42 - "OpenCode Plugin Config"
Cohesion: 0.50
Nodes (3): plugin, $schema, .opencode/plugins/graphify.js

### Community 43 - "Extra Large Tokens"
Cohesion: 0.67
Nodes (4): xl, xl, $type, $value

### Community 44 - "Medium Size Tokens"
Cohesion: 0.67
Nodes (4): $type, $value, md, md

### Community 45 - "Empty Value Tokens"
Cohesion: 0.67
Nodes (4): $type, $value, none, none

### Community 50 - "Core Design Skills"
Cohesion: 0.67
Nodes (3): Brand Skill, Design Skill, Design System Skill

## Knowledge Gaps
- **146 isolated node(s):** `$type`, `$value`, `$type`, `$value`, `$type` (+141 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **31 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `primitive` connect `Animation Duration Tokens` to `Color Palette Shades`, `UI Theme Tokens`, `Border Radius Tokens`, `Spacing Tokens`, `Small Shadow Tokens`, `Font Size Tokens`?**
  _High betweenness centrality (0.059) - this node is a cross-community bridge._
- **Why does `color` connect `Color Palette Shades` to `Animation Duration Tokens`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `TailwindConfigGenerator` (e.g. with `TestGeneratedConfigIsValidJs` and `TestTailwindConfigGenerator`) actually correct?**
  _`TailwindConfigGenerator` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `$type`, `$value`, `$type` to the rest of the system?**
  _146 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Color Palette Shades` be split into smaller, more focused modules?**
  _Cohesion score 0.05370101596516691 - nodes in this community are weakly interconnected._
- **Should `Core Search Logic` be split into smaller, more focused modules?**
  _Cohesion score 0.0653061224489796 - nodes in this community are weakly interconnected._
- **Should `UI Theme Tokens` be split into smaller, more focused modules?**
  _Cohesion score 0.041666666666666664 - nodes in this community are weakly interconnected._
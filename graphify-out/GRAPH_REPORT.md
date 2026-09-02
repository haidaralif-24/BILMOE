# Graph Report - Website  (2026-09-01)

## Corpus Check
- 144 files · ~107,599 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2203 nodes · 2486 edges · 176 communities (124 shown, 52 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 27 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `53ff35f6`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Color Palette Shades
- Core Search Logic
- slide_search_core.py
- color
- spacing
- devDependencies
- Tailwind Generator Tests
- compilerOptions
- html-token-validator.py
- BM25
- TailwindConfigGenerator
- instructions
- generate-slide.py
- DesignSystemGenerator
- fetch-background.py
- design_system.py
- icon/generate.py
- fontSize
- TestShadcnInstaller
- design skill
- extract-colors.cjs
- validate-asset.cjs
- button
- validate-tokens.cjs
- ShadcnInstaller
- .check_shadcn_config
- .generate_config_string
- inject-brand-context.cjs
- embed-tokens.cjs
- primitive
- patch
- test_tailwind_config_gen.py
- search
- ._base_config
- logo/generate.py
- generate-tokens.cjs
- Hyperspeed.tsx
- _run
- sync-brand-to-tokens.cjs
- BM25
- Go Backend API
- Tailwind CSS Utility Reference
- Brand Guidelines v1.0
- radius
- format_ascii_box
- shadow
- layout.tsx
- Canvas Design System
- Prerequisites
- lg
- .opencode/opencode.json
- Form & Input Components
- Tailwind CSS Responsive Design
- Typography Specifications
- md
- none
- graphify skill
- .temp_project
- graphify.js
- test_sync_brand_to_tokens.py
- main
- .__init__
- apps/web/components/Hero.tsx
- eslint.config.mjs
- next.config.ts
- postcss.config.mjs
- .test_add_components_no_config
- Logo Usage Rules
- Component Specifications
- .test_init_dry_run
- shadcn/ui Accessibility Patterns
- Asset Approval Checklist
- .test_add_components_no_components
- .test_add_fonts
- .test_recommend_plugins
- .test_generate_typescript_config
- .test_generate_config_with_colors
- .test_generate_config_with_plugins
- .test_validate_config_no_content
- .test_validate_config_empty_theme
- .test_write_config
- .test_init_javascript
- .test_write_config_creates_content
- .test_write_config_invalid_path
- .test_full_configuration_javascript
- .test_default_output_path_typescript
- .test_base_config_structure
- .test_default_content_paths_vue
- .test_add_colors
- Logo AI Prompt Engineering
- System Architecture
- api
- Color Palette Management
- CIP Deliverable Guide
- States and Variants
- UI Styling Skill
- Workflow
- components.json
- Tailwind CSS Customization
- Routing by Task Type
- shadcn/ui Theming & Customization
- dependencies
- Asset Organization Guide
- Primary Color Meanings
- Core Logo Types
- Brand Consistency Checklist
- CIP Mockup Prompt Engineering
- Color Semantics
- Design Principles
- Design Principles
- CIP Design Reference
- Icon Design Reference
- Copywriting Formulas
- Copywriting Formulas
- BorderGlow.tsx
- Messaging Framework
- Brand Voice Framework
- Layout Patterns
- Tailwind Integration
- Layout Patterns
- brand/references/update.md
- Logo Design Reference
- Token Architecture
- Primitive Tokens
- Core Visual Elements
- CIP Design Style Guide
- Slide Strategies
- Component Tokens
- Slide Strategies
- package.json
- graphify reference: extra exports and benchmark
- MoltenMetal.tsx
- SoftAurora
- Backend guidelines (apps/api)
- B-ILMOE design system
- Frontend guidelines (apps/web)
- Slides Reference
- HTML Slide Template
- HTML Slide Template
- MaskedHeading.tsx
- graphify reference: query, path, explain
- Slides
- Orb.tsx
- ShapeGrid.tsx
- vercel.json
- Brand Guidelines Template
- default
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- GradientText.tsx
- ParticleField.tsx
- SplitText.tsx
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- web/AGENTS.md
- HyperSpeedPresets.ts
- clsx
- @gsap/react
- lucide-react
- motion
- next
- postprocessing
- react-dom
- shadcn
- slides-create.md
- extraction-spec.md
- create.md
- .test_add_components_dry_run
- .test_list_installed_no_config
- .test_get_installed_components_empty
- .test_get_installed_components_no_config

## God Nodes (most connected - your core abstractions)
1. `TailwindConfigGenerator` - 58 edges
2. `TestTailwindConfigGenerator` - 35 edges
3. `ShadcnInstaller` - 34 edges
4. `TestShadcnInstaller` - 26 edges
5. `App` - 17 edges
6. `UI Styling Skill` - 17 edges
7. `compilerOptions` - 16 edges
8. `color` - 15 edges
9. `Tailwind CSS Customization` - 14 edges
10. `Tailwind CSS Utility Reference` - 14 edges

## Surprising Connections (you probably didn't know these)
- `Next.js Frontend` --references--> `OpenAPI Specification`  [INFERRED]
  apps/web/README.md → docs/architecture.md
- `TestShadcnInstaller` --uses--> `ShadcnInstaller`  [INFERRED]
  .opencode/skills/ui-styling/scripts/tests/test_shadcn_add.py → .opencode/skills/ui-styling/scripts/shadcn_add.py
- `TestGeneratedConfigIsValidJs` --uses--> `TailwindConfigGenerator`  [INFERRED]
  .opencode/skills/ui-styling/scripts/tests/test_tailwind_config_gen.py → .opencode/skills/ui-styling/scripts/tailwind_config_gen.py
- `TestTailwindConfigGenerator` --uses--> `TailwindConfigGenerator`  [INFERRED]
  .opencode/skills/ui-styling/scripts/tests/test_tailwind_config_gen.py → .opencode/skills/ui-styling/scripts/tailwind_config_gen.py
- `graphify skill` --references--> `graphify tool`  [EXTRACTED]
  AGENTS.md → .opencode/skills/graphify/SKILL.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Design & Brand Ecosystem** — opencode_skills_brand_skill, opencode_skills_design_system_skill, opencode_skills_design_skill, opencode_skills_banner_design_skill [EXTRACTED 0.90]
- **B-ILMOE Core Stack** — apps_web, apps_api, supabase, cloudinary [EXTRACTED 1.00]
- **AI Visual Generation Flow** — ai_artist, ai_multimodal, logo_design, cip_design, icon_design [INFERRED 0.85]

## Communities (176 total, 52 thin omitted)

### Community 0 - "Color Palette Shades"
Cohesion: 0.05
Nodes (53): $type, $value, $type, $value, $type, $value, $type, $value (+45 more)

### Community 1 - "Core Search Logic"
Cohesion: 0.07
Nodes (42): BM25, detect_domain(), get_cip_brief(), _load_csv(), Load CSV and return list of dicts, Core search function using BM25, Auto-detect the most relevant domain from query, Main search function with auto-domain detection (+34 more)

### Community 2 - "slide_search_core.py"
Cohesion: 0.08
Nodes (36): format_context(), format_result(), main(), Format a single search result for display, Format contextual recommendations for display., BM25, calculate_pattern_break(), detect_domain() (+28 more)

### Community 3 - "color"
Cohesion: 0.04
Nodes (46): $type, $value, background, destructive, destructive-foreground, foreground, muted, muted-foreground (+38 more)

### Community 4 - "spacing"
Cohesion: 0.06
Nodes (34): $type, $value, $type, $value, $type, $value, $type, $value (+26 more)

### Community 5 - "devDependencies"
Cohesion: 0.10
Nodes (21): devDependencies, eslint, eslint-config-next, jsrepo, tailwindcss, @tailwindcss/postcss, @types/node, @types/react (+13 more)

### Community 6 - "Tailwind Generator Tests"
Cohesion: 0.06
Nodes (16): Test adding colors multiple times., Test adding full color palette., Test adding custom breakpoints., Test TailwindConfigGenerator class., Test that adding same plugin twice doesn't duplicate., Test plugin recommendations for Next.js., Test initialization with default settings., Test generating JavaScript configuration. (+8 more)

### Community 7 - "compilerOptions"
Cohesion: 0.07
Nodes (28): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+20 more)

### Community 8 - "html-token-validator.py"
Cohesion: 0.13
Nodes (24): get_context(), is_allowed_exception(), is_allowed_rgba(), is_inside_block(), load_css_variables(), main(), print_result(), print_summary() (+16 more)

### Community 9 - "BM25"
Cohesion: 0.11
Nodes (19): BM25, detect_domain(), _load_csv(), Load CSV and return list of dicts, Core search function using BM25, Auto-detect the most relevant domain from query, Main search function with auto-domain detection, Search across all domains and combine results (+11 more)

### Community 10 - "TailwindConfigGenerator"
Cohesion: 0.10
Nodes (12): main(), Add custom font families. Args: fonts: Dict of font_type: [font_names] e.g.,…, Add custom spacing values. Args: spacing: Dict of name: value e.g., {'18':…, Add custom breakpoints. Args: breakpoints: Dict of name: width e.g., {'3xl':…, Add plugin requirements. Args: plugins: List of plugin names e.g.,…, Get plugin recommendations based on configuration. Returns: List of recommended…, Generate Tailwind CSS configuration files., Validate configuration. Returns: Tuple of (valid, message) (+4 more)

### Community 11 - "instructions"
Cohesion: 0.08
Nodes (23): command, enabled, type, instructions, mcp, graphify, supabase, permission (+15 more)

### Community 12 - "generate-slide.py"
Cohesion: 0.15
Nodes (19): _e(), generate_chart_slide(), generate_cta_slide(), generate_deck(), generate_metrics_slide(), generate_problem_slide(), generate_solution_slide(), generate_testimonial_slide() (+11 more)

### Community 13 - "DesignSystemGenerator"
Cohesion: 0.14
Nodes (11): DesignSystemGenerator, Find matching reasoning rule for a category., Apply reasoning rules to search results., Select best matching result based on priority keywords., Extract results list from search result dict., Generate complete design system recommendation. variance/motion/density are…, Bucket a 1-10 dial value into its tier config. Returns None if value is None., Generates design system recommendations from aggregated searches. (+3 more)

### Community 14 - "fetch-background.py"
Cohesion: 0.17
Nodes (17): generate_css_for_background(), get_background_image(), get_curated_images(), get_overlay_css(), get_pexels_search_url(), load_backgrounds_config(), load_brand_colors(), main() (+9 more)

### Community 15 - "design_system.py"
Cohesion: 0.17
Nodes (16): _detect_page_type(), format_markdown(), format_master_md(), format_page_override_md(), generate_design_system(), _generate_intelligent_overrides(), persist_design_system(), Format a page-specific override file with intelligent AI-generated content. (+8 more)

### Community 16 - "icon/generate.py"
Cohesion: 0.20
Nodes (15): apply_color(), apply_viewbox_size(), extract_svgs(), generate_batch(), generate_icon(), generate_sizes(), load_env(), main() (+7 more)

### Community 17 - "fontSize"
Cohesion: 0.12
Nodes (16): $type, $value, $type, $value, $type, $value, $type, $value (+8 more)

### Community 18 - "TestShadcnInstaller"
Cohesion: 0.12
Nodes (9): Test adding components that are already installed., Test ShadcnInstaller class., Test adding all components in dry run mode., Test listing installed components when none exist., Test listing installed components when they exist., Test checking for existing shadcn config., Test checking for non-existent shadcn config., Test getting installed components when files exist. (+1 more)

### Community 19 - "design skill"
Cohesion: 0.15
Nodes (14): ai-artist, ai-multimodal, chrome-devtools, CIP Design, frontend-design, Icon Design, Logo Design, banner-design skill (+6 more)

### Community 20 - "extract-colors.cjs"
Cohesion: 0.22
Nodes (11): calculateCompliance(), colorDistance(), displayPalette(), extractHexColors(), findNearestBrandColor(), fs, generateImageMagickCommand(), hexToRgb() (+3 more)

### Community 21 - "validate-asset.cjs"
Cohesion: 0.25
Nodes (13): checkManifest(), formatBytes(), formatOutput(), fs, main(), parseFilename(), path, RULES (+5 more)

### Community 22 - "button"
Cohesion: 0.06
Nodes (45): $type, $value, $type, $value, bg, fg, font-size, hover-bg (+37 more)

### Community 23 - "validate-tokens.cjs"
Cohesion: 0.24
Nodes (11): extensions, formatReport(), fs, getFiles(), main(), parseArgs(), path, patterns (+3 more)

### Community 24 - "ShadcnInstaller"
Cohesion: 0.20
Nodes (7): main(), Handle shadcn/ui component installation., ShadcnInstaller, Tests for shadcn_add.py, Test adding all components without config., Test initialization with default project root., Test initialization with custom project root.

### Community 25 - ".check_shadcn_config"
Cohesion: 0.21
Nodes (6): Add all available shadcn/ui components. Args: overwrite: If True, overwrite…, List installed components. Returns: Tuple of (success, message with component…, Check if shadcn is initialized in project. Returns: True if components.json…, Get list of already installed components. Returns: List of installed component…, Read shadcn version from project package.json; fall back to a pinned default., Add shadcn/ui components. Args: components: List of component names to add…

### Community 26 - ".generate_config_string"
Cohesion: 0.20
Nodes (6): Generate configuration file content. Returns: Configuration file as string, Generate TypeScript configuration., Generate JavaScript configuration., Format plugins array for config. Validates each plugin name against a strict…, Add indentation to JSON string., Write configuration to file. Returns: Tuple of (success, message)

### Community 27 - "inject-brand-context.cjs"
Cohesion: 0.31
Nodes (10): extractColorsFromTable(), extractCoreAttributes(), extractHexColors(), extractImageStyle(), extractTypography(), extractVoice(), fs, generatePromptAddition() (+2 more)

### Community 28 - "embed-tokens.cjs"
Cohesion: 0.18
Nodes (8): args, fs, minimal, MINIMAL_TOKENS, path, projectRoot, tokensPath, wrapStyle

### Community 29 - "primitive"
Cohesion: 0.14
Nodes (13): dark, fast, normal, slow, $type, $value, $type, $value (+5 more)

### Community 30 - "patch"
Cohesion: 0.18
Nodes (6): Test adding components with overwrite flag., Test successful component addition., Test component addition with subprocess error., Test component addition when npx is not found., Test successful addition of all components., patch

### Community 31 - "test_tailwind_config_gen.py"
Cohesion: 0.22
Nodes (8): Tests for tailwind_config_gen.py, Reduce a generated TS/JS config to a bare assignable object so it can be handed…, Regression guard for the missing-comma bug between the ``theme`` block and…, The property preceding ``plugins`` must end with a comma (pure-Python check, so…, The emitted config parses as valid JS via ``node --check``., _strip_to_object(), TestGeneratedConfigIsValidJs, parametrize

### Community 32 - "search"
Cohesion: 0.20
Nodes (12): detect_domain(), _load_csv(), Load CSV and return list of dicts, Core search function using BM25, Auto-detect the most relevant domain from query, Main search function with auto-domain detection, Search stack-specific guidelines, search() (+4 more)

### Community 33 - "._base_config"
Cohesion: 0.22
Nodes (6): Any, Path, Initialize generator. Args: typescript: If True, generate .ts config, else .js…, Determine default output path., Create base configuration structure., Get default content paths for framework.

### Community 34 - "logo/generate.py"
Cohesion: 0.29
Nodes (9): enhance_prompt(), generate_batch(), generate_logo(), load_env(), main(), Enhance the logo prompt with style and industry modifiers, Generate a logo using Gemini models with image generation Args: aspect_ratio:…, Generate multiple logo variants with different styles (+1 more)

### Community 35 - "generate-tokens.cjs"
Cohesion: 0.36
Nodes (9): flattenTokens(), fs, generateCSS(), generateTailwind(), main(), parseArgs(), path, resolveReference() (+1 more)

### Community 36 - "Hyperspeed.tsx"
Cohesion: 0.05
Nodes (24): App, CarLights, Colors, deepUniforms, DEFAULT_EFFECT_OPTIONS, defaultOptions, Distortion, distortion_uniforms (+16 more)

### Community 37 - "_run"
Cohesion: 0.28
Nodes (8): CompletedProcess, Path, Regression tests for validate-tokens.cjs. The validator used to skip any line…, A hardcoded hex on the same line as a var() token is still a violation., A line that references only tokens produces no false positives., _run(), test_flags_hardcoded_hex_sharing_line_with_token(), test_token_only_line_reports_no_violation()

### Community 38 - "sync-brand-to-tokens.cjs"
Cohesion: 0.33
Nodes (8): adjustBrightness(), { execFileSync }, extractColorsFromMarkdown(), fs, generateColorScale(), main(), path, updateDesignTokens()

### Community 39 - "BM25"
Cohesion: 0.28
Nodes (5): BM25, BM25 ranking algorithm for text search, Lowercase, split, remove punctuation, filter short words, Build BM25 index from documents, Score all documents against query

### Community 40 - "Go Backend API"
Cohesion: 0.32
Nodes (8): Go Backend API, Next.js Frontend, Cloudinary, Editorial Workflow, OpenAPI Specification, Supabase, Supabase Migrations, Workflow Events Table

### Community 41 - "Tailwind CSS Utility Reference"
Cohesion: 0.05
Nodes (43): Arbitrary Values, Aspect Ratio, Background Colors, Border Color, Border Radius, Border Style, Border Width, Borders (+35 more)

### Community 42 - "Brand Guidelines v1.0"
Cohesion: 0.05
Nodes (37): 1. Color Palette, 2. Typography, 3. Logo Usage, 4. Voice & Tone, 5. Imagery Guidelines, 6. Design Components, Accessibility, AI Image Generation (+29 more)

### Community 43 - "radius"
Cohesion: 0.29
Nodes (8): xl, $type, $value, radius, full, xl, $type, $value

### Community 44 - "format_ascii_box"
Cohesion: 0.25
Nodes (8): ansi_ljust(), format_ascii_box(), hex_to_ansi(), Convert hex color to ANSI True Color swatch (██) with fallback., Like str.ljust but accounts for zero-width ANSI escape sequences., Create a Unicode section separator: ├─── NAME ───...┤, Format design system as Unicode box with ANSI color swatches., section_header()

### Community 45 - "shadow"
Cohesion: 0.47
Nodes (6): sm, shadow, sm, sm, $type, $value

### Community 46 - "layout.tsx"
Cohesion: 0.33
Nodes (4): geistMono, geistSans, luckiestGuy, metadata

### Community 47 - "Canvas Design System"
Cohesion: 0.06
Nodes (35): 1. Visual Communication First, 2. Minimal Text Integration, 3. Expert Craftsmanship, 4. Systematic Patterns, Analog Meditation, Approach, Canvas Boundaries, Canvas Design System (+27 more)

### Community 48 - "Prerequisites"
Cohesion: 0.06
Nodes (33): Accessibility, Available Domains, Available Stacks, Common Rules for Professional UI, Common Sticking Points, Example Workflow, How to Use This Skill, Icons & Visual Elements (+25 more)

### Community 49 - "lg"
Cohesion: 0.60
Nodes (5): lg, $type, $value, lg, lg

### Community 50 - ".opencode/opencode.json"
Cohesion: 0.50
Nodes (3): plugin, $schema, .opencode/plugins/graphify.js

### Community 51 - "Form & Input Components"
Cohesion: 0.06
Nodes (32): Accordion, Alert, Alert Dialog, Avatar, Badge, Button, Card, Checkbox (+24 more)

### Community 52 - "Tailwind CSS Responsive Design"
Cohesion: 0.06
Nodes (32): 1. Mobile-First Design, 2. Consistent Breakpoint Usage, 3. Test at Breakpoint Boundaries, 4. Use Container for Content Width, 5. Progressive Enhancement, 6. Avoid Too Many Breakpoints, Best Practices, Breakpoint System (+24 more)

### Community 53 - "Typography Specifications"
Cohesion: 0.06
Nodes (30): Accessibility, Base System, Best Practices, Clean & Modern, Common Font Pairings, Contrast Requirements, CSS Implementation, Editorial (+22 more)

### Community 54 - "md"
Cohesion: 0.67
Nodes (4): $type, $value, md, md

### Community 55 - "none"
Cohesion: 0.67
Nodes (4): $type, $value, none, none

### Community 63 - "apps/web/components/Hero.tsx"
Cohesion: 0.06
Nodes (36): BlurText(), BlurTextProps, buildKeyframes(), Card, CardProps, CardRef, CardSwap(), CardSwapProps (+28 more)

### Community 68 - "Logo Usage Rules"
Cohesion: 0.07
Nodes (28): Absolute Don'ts, Approved Backgrounds, Before Using Logo, Clear Space, Co-branding, Color Rules, Color Usage, Color Variants (+20 more)

### Community 69 - "Component Specifications"
Cohesion: 0.07
Nodes (28): Alert, Anatomy, Anatomy, Anatomy, Anatomy, Anatomy, Badge, Button (+20 more)

### Community 71 - "shadcn/ui Accessibility Patterns"
Cohesion: 0.07
Nodes (28): Accordion, Alert, ARIA Labels, Checkbox and Radio, Color Contrast, Command Palette Navigation, Component-Specific Patterns, Dialog/Modal Navigation (+20 more)

### Community 72 - "Asset Approval Checklist"
Cohesion: 0.08
Nodes (25): Accessibility, Archival, Asset Approval Checklist, Automation Support, Color Compliance, Common Issues & Fixes, Content Accessibility, Content Quality (+17 more)

### Community 90 - "Logo AI Prompt Engineering"
Cohesion: 0.08
Nodes (25): Common Pitfalls, Core Prompt Structure, Detailed Brief, Eco/Sustainable, Effective Keywords by Style, Fashion Brand, Healthcare, Industry-Specific Prompts (+17 more)

### Community 93 - "Color Palette Management"
Cohesion: 0.08
Nodes (24): Accessibility Requirements, Brand Compliance Validation, Checking Contrast, Color Documentation Format, Color Extraction, Color Palette Examples, Color Palette Management, Color System Structure (+16 more)

### Community 94 - "CIP Deliverable Guide"
Cohesion: 0.08
Nodes (24): Apparel, Business Card, Car/Sedan, CIP Deliverable Guide, Core Identity, Digital Assets, Email Signature, Envelope (+16 more)

### Community 95 - "States and Variants"
Cohesion: 0.08
Nodes (24): Accessibility, Accessibility Requirements, ARIA States, Color Contrast, Color Variants, Disabled States, Error Messages, Error States (+16 more)

### Community 96 - "UI Styling Skill"
Cohesion: 0.08
Nodes (24): Accessibility Patterns, Alternative: Tailwind-Only Setup, Best Practices, Common Patterns, Component Layer: shadcn/ui, Component Library Guide, Component + Styling Setup, Core Stack (+16 more)

### Community 97 - "Workflow"
Cohesion: 0.08
Nodes (23): Art Direction Styles (Reuse from Banner), Color & Contrast, Design Best Practices, HTML Design Rules, HTML Template Structure, Option A: Chrome Headless CLI (Recommended — zero dependencies), Option B: chrome-devtools skill, Option C: Playwright script (+15 more)

### Community 98 - "components.json"
Cohesion: 0.09
Nodes (22): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+14 more)

### Community 99 - "Tailwind CSS Customization"
Cohesion: 0.09
Nodes (22): @apply Directive, Best Practices, Color Customization, Complete Tailwind Config, Configuration Examples, Content Configuration, Custom Color Palette, Custom Font Sizes (+14 more)

### Community 100 - "Routing by Task Type"
Cohesion: 0.10
Nodes (19): Banner Design Tasks, Brand Identity Tasks, Component Creation, Corporate Identity Program Tasks, Design Routing Guide, Design System Migration, Icon Design Tasks, Implementation Tasks (+11 more)

### Community 101 - "shadcn/ui Theming & Customization"
Cohesion: 0.10
Nodes (19): Base Color Presets, Best Practices, Color Customization, Color Format, Component Customization, CSS Variable System, Customize Styles, Customize Variants (+11 more)

### Community 102 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, @base-ui/react, class-variance-authority, framer-motion, gsap, ogl, react, tailwind-merge (+11 more)

### Community 103 - "Asset Organization Guide"
Cohesion: 0.11
Nodes (18): Asset Entry (manifest.json), Asset Organization Guide, By Campaign, By Status, By Type, Cleanup Workflow, Components, Directory Structure (+10 more)

### Community 104 - "Primary Color Meanings"
Cohesion: 0.11
Nodes (18): Accessibility Considerations, Analogous, Black, Blue, Color Combinations by Industry, Color Harmony Types, Complementary, Green (+10 more)

### Community 105 - "Core Logo Types"
Cohesion: 0.11
Nodes (18): 1. Wordmark (Logotype), 2. Lettermark (Monogram), 3. Pictorial Mark (Brand Mark), 4. Abstract Mark, 5. Mascot, 6. Emblem, 7. Combination Mark, Aesthetic Styles (+10 more)

### Community 106 - "Brand Consistency Checklist"
Cohesion: 0.11
Nodes (17): Audit Frequency, Brand Consistency Checklist, Channel Audit, Collateral, Colors, Common Issues, Email, Imagery (+9 more)

### Community 107 - "CIP Mockup Prompt Engineering"
Cohesion: 0.11
Nodes (17): Apparel (Polo/T-Shirt), Base Prompt Structure, Business Card, CIP Mockup Prompt Engineering, Context Modifiers, Corporate Minimal, Deliverable-Specific Modifiers, Letterhead (+9 more)

### Community 108 - "Color Semantics"
Cohesion: 0.11
Nodes (17): Accent, Applying Semantic Tokens, Background & Foreground, Border & Ring, Color Semantics, Dark Mode Overrides, Destructive, Interactive States (+9 more)

### Community 109 - "Design Principles"
Cohesion: 0.12
Nodes (15): 22 Art Direction Styles, Banner Sizes & Art Direction Styles Reference, Complete Banner Sizes, CTA Rules, Design Principles, Pinterest Research Queries, Print, Print Specs (+7 more)

### Community 110 - "Design Principles"
Cohesion: 0.12
Nodes (15): 22 Art Direction Styles, Banner Sizes & Art Direction Styles Reference, Complete Banner Sizes, CTA Rules, Design Principles, Pinterest Research Queries, Print, Print Specs (+7 more)

### Community 111 - "CIP Design Reference"
Cohesion: 0.13
Nodes (14): CIP Brief (Start Here), CIP Design Reference, Commands, Deliverable Categories, Design Styles, Detailed References, Generate Mockups, HTML Presentation Features (+6 more)

### Community 112 - "Icon Design Reference"
Cohesion: 0.13
Nodes (14): Available Styles, CLI Options, Commands, Generate Batch Variations, Generate Multiple Sizes, Generate Single Icon, Icon Categories, Icon Design Reference (+6 more)

### Community 113 - "Copywriting Formulas"
Cohesion: 0.13
Nodes (14): AIDA (Attention-Interest-Desire-Action), Before-After-Bridge, Contrast Patterns, Copywriting Formulas, Core Formulas, Cost of Inaction, FAB (Features-Advantages-Benefits), Formula-to-Slide Mapping (+6 more)

### Community 114 - "Copywriting Formulas"
Cohesion: 0.13
Nodes (14): AIDA (Attention-Interest-Desire-Action), Before-After-Bridge, Contrast Patterns, Copywriting Formulas, Core Formulas, Cost of Inaction, FAB (Features-Advantages-Benefits), Formula-to-Slide Mapping (+6 more)

### Community 115 - "BorderGlow.tsx"
Cohesion: 0.22
Nodes (12): AnimateOpts, animateValue(), BorderGlow(), BorderGlowProps, buildBoxShadow(), buildMeshGradients(), COLOR_MAP, easeInCubic() (+4 more)

### Community 116 - "Messaging Framework"
Cohesion: 0.14
Nodes (13): Core Statements, Elevator Pitches, Framework Structure, Message Architecture, Message by Audience, Message Testing, Messaging Framework, Mission Statement (+5 more)

### Community 117 - "Brand Voice Framework"
Cohesion: 0.14
Nodes (13): Brand Voice Framework, Character Spectrum, Emotion Spectrum, Language Spectrum, Step 1: Define Personality Traits, Step 2: Create Voice Chart, Step 3: Context Adaptation, Tone Spectrum (+5 more)

### Community 118 - "Layout Patterns"
Cohesion: 0.14
Nodes (13): Card Styles, Component Variants, CSS Structures, Feature Grid (3 columns), Layout Decision Flow, Layout Patterns, Layout Selection by Use Case, Metric Styles (+5 more)

### Community 119 - "Tailwind Integration"
Cohesion: 0.14
Nodes (13): Animation Tokens, Base Layer, Button Example, Component Classes, CSS Variables Setup, Dark Mode Toggle, HSL Format Benefits, shadcn/ui Alignment (+5 more)

### Community 120 - "Layout Patterns"
Cohesion: 0.14
Nodes (13): Card Styles, Component Variants, CSS Structures, Feature Grid (3 columns), Layout Decision Flow, Layout Patterns, Layout Selection by Use Case, Metric Styles (+5 more)

### Community 121 - "brand/references/update.md"
Cohesion: 0.15
Nodes (12): Color Presets, Examples, Files Modified, Important, Overview, Skills Used, Step 1: Gather Brand Input, Step 2: Update Brand Guidelines (+4 more)

### Community 122 - "Logo Design Reference"
Cohesion: 0.15
Nodes (12): Available Styles, Color Psychology, Commands, Design Brief (Start Here), Detailed References, Generate Logo, Industry Defaults, Logo Design Reference (+4 more)

### Community 123 - "Token Architecture"
Cohesion: 0.15
Nodes (12): Categories, Dark Mode, File Organization, Layer 1: Primitive Tokens, Layer 2: Semantic Tokens, Layer 3: Component Tokens, Layer Overview, Migration from Flat Tokens (+4 more)

### Community 124 - "Primitive Tokens"
Cohesion: 0.17
Nodes (11): Border Radius, Color Scales, Gray Scale, Motion / Duration, Primary Colors (Blue), Primitive Tokens, Shadows, Spacing Scale (+3 more)

### Community 125 - "Core Visual Elements"
Cohesion: 0.18
Nodes (10): Color Palette, Colors, Core Visual Elements, Logo, Logo, Quick Checks, Typography, Typography (+2 more)

### Community 126 - "CIP Design Style Guide"
Cohesion: 0.18
Nodes (10): Bold Dynamic, CIP Design Style Guide, Classic Traditional, Color Psychology, Corporate Minimal, Fresh Modern, Luxury Premium, Modern Tech (+2 more)

### Community 127 - "Slide Strategies"
Cohesion: 0.20
Nodes (9): Common Structures, Duarte Sparkline Pattern, Matching Strategy to Context, Product Demo (6 slides), Sales Pitch (9 slides), Search Commands, Slide Strategies, Strategy Selection (+1 more)

### Community 128 - "Component Tokens"
Cohesion: 0.20
Nodes (9): Alert Tokens, Badge Tokens, Button Tokens, Card Tokens, Component Tokens, Dialog/Modal Tokens, Input Tokens, Table Tokens (+1 more)

### Community 129 - "Slide Strategies"
Cohesion: 0.20
Nodes (9): Common Structures, Duarte Sparkline Pattern, Matching Strategy to Context, Product Demo (6 slides), Sales Pitch (9 slides), Search Commands, Slide Strategies, Strategy Selection (+1 more)

### Community 130 - "package.json"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, lint, start, version

### Community 131 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 132 - "MoltenMetal.tsx"
Cohesion: 0.32
Nodes (7): colorModeToFloat(), ctxMap, hexToRgb(), MoltenMetal(), MoltenMetalColorMode, MoltenMetalCtx, MoltenMetalProps

### Community 133 - "SoftAurora"
Cohesion: 0.29
Nodes (3): hexToVec3(), SoftAurora(), SoftAuroraProps

### Community 134 - "Backend guidelines (apps/api)"
Cohesion: 0.25
Nodes (7): Auth middleware, Backend guidelines (apps/api), Contract-first, Database, Error responses, Suggested layout, Workflow transitions

### Community 135 - "B-ILMOE design system"
Cohesion: 0.29
Nodes (6): B-ILMOE design system, Color, Motion, Shape & spacing, Tone, Typography

### Community 136 - "Frontend guidelines (apps/web)"
Cohesion: 0.29
Nodes (6): Accessibility & responsiveness, Division color is data, not a per-component decision, Frontend guidelines (apps/web), Structure, Talking to the backend, Tokens, not hardcoded hex

### Community 137 - "Slides Reference"
Cohesion: 0.29
Nodes (6): Key Features, Knowledge Base, Slides Reference, Usage, When to Use, Workflow

### Community 138 - "HTML Slide Template"
Cohesion: 0.29
Nodes (6): Animation Classes, Background Images, Base Structure, Chart.js Integration, CSS Variables Reference, HTML Slide Template

### Community 139 - "HTML Slide Template"
Cohesion: 0.29
Nodes (6): Animation Classes, Background Images, Base Structure, Chart.js Integration, CSS Variables Reference, HTML Slide Template

### Community 140 - "MaskedHeading.tsx"
Cohesion: 0.40
Nodes (5): clamp(), MaskedHeading(), MaskedHeadingProps, Reveal, Trigger

### Community 141 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 142 - "Slides"
Cohesion: 0.33
Nodes (5): References (Knowledge Base), Routing, Slides, Subcommands, When to Use

### Community 143 - "Orb.tsx"
Cohesion: 0.60
Nodes (4): hexToVec3(), hslToRgb(), Orb(), OrbProps

### Community 144 - "ShapeGrid.tsx"
Cohesion: 0.40
Nodes (3): CanvasStrokeStyle, Cell, ShapeGridProps

### Community 145 - "vercel.json"
Cohesion: 0.40
Nodes (4): buildCommand, devCommand, framework, installCommand

### Community 146 - "Brand Guidelines Template"
Cohesion: 0.40
Nodes (4): Brand Guidelines Template, Document Structure, Extractable Fields, Usage

### Community 147 - "default"
Cohesion: 0.67
Nodes (4): $type, $value, default, default

### Community 148 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 149 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 150 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

## Knowledge Gaps
- **1059 isolated node(s):** `$schema`, `.opencode/plugins/graphify.js`, `fs`, `path`, `fs` (+1054 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **52 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `primitive` connect `primitive` to `Color Palette Shades`, `spacing`, `radius`, `shadow`, `fontSize`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **Why does `color` connect `color` to `button`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Why does `semantic` connect `color` to `primitive`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `TailwindConfigGenerator` (e.g. with `TestGeneratedConfigIsValidJs` and `TestTailwindConfigGenerator`) actually correct?**
  _`TailwindConfigGenerator` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `$schema`, `.opencode/plugins/graphify.js`, `fs` to the rest of the system?**
  _1059 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Color Palette Shades` be split into smaller, more focused modules?**
  _Cohesion score 0.05370101596516691 - nodes in this community are weakly interconnected._
- **Should `Core Search Logic` be split into smaller, more focused modules?**
  _Cohesion score 0.0653061224489796 - nodes in this community are weakly interconnected._
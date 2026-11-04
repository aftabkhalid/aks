---
title:  "From Vibe Design to Ready-to-Dev UI: My Figma, Claude Code, and React Workflow"
date:   "2026-11-03"
category: AI Workflows
author: Aftab Khalid
draft: false
description: "How I ship designs that are genuinely ready to dev — prototyping in Figma, building with Claude Code, and handing off React instead of redlines."
---

For twenty years, every design project ended the same way. I'd deliver a Figma file, walk engineering through it, and hold my breath. Somewhere between "handoff" and "launch," the design drifted: spacing got approximated, hover states were invented on the spot, and the prototype I'd stress-tested came back rebuilt by people who never talked to a user. Handoff was never really a step in the process.

Vibe design changed how that story ends. The AI stack now lets a designer deliver something engineering can run the same day. Mine is simple:

- Figma for the vibe: fast, exploratory prototypes built from real variables and tokens.
- Claude Code as the build engine. It reads the Figma structure and produces actual components, not screenshots.
- React as the deliverable, because it's what engineers code against anyway.

I call the result ready-to-dev UI: a working React interface with real components, real tokens, and real states. It goes out as a clickable prototype first, and as code second.

## What is ready-to-dev UI?

When I say a design is ready to dev, it passes four checks:

1. Real components. Every card, nav, and input exists as a component with variants and properties, in Figma first and then in React.
2. Tokens. Colors, spacing, radii, and type scale are variables in Figma that map 1:1 to CSS variables or Tailwind config in code.
3. States. Hover, focus, disabled, error, loading, empty: designed before the build, not improvised during it.
4. A clickable end-to-end prototype, so stakeholders react to the real experience instead of storyboard slides.

The old process could reach check four with enough manual wiring in Figma. Checks one through three were the parts that got lost in translation, because they lived in the designer's head and in annotation docs nobody read.

## What vibe design changes

If you've heard of "vibe coding," Andrej Karpathy's term for letting AI carry the code while you steer by feel, vibe design is the same posture applied upstream. You describe mood, structure, and constraints in plain language; the AI produces the first draft; you curate.

For me the bigger change is that one person can now steer both sides of the handoff: the prototype and the production code. Claude Code closes the loop between Figma and React. In practice:

1. Vibe the first draft in Figma instead of spending weeks on gray wireframing.
2. Harden the one direction that resonates: real tokens, real states, real component structure.
3. Hand that structure to Claude Code and get React components that inherit the design decisions instead of re-interpreting them.

There's no agency pitch in the middle, and no "engineer redraws the designer's picture" step. The whole thing shares one lineage, from vibe to code.

The stack won't replace design judgment. It compresses production. Someone still has to decide what the product should feel like, where the hierarchy sits, and what success looks like. That person is you, and when production is near-instant, judgment is the scarce skill.

## The workflow, step by step

### 1. Start with the job to be done

Before any prompt, write one sentence using the jobs-to-be-done frame: **When [situation], [user] wants to [motivation], so they can [outcome].**

Bad: "Design me a dashboard."

Better: "When a project manager starts their morning, they want to see what's blocked and who's waiting on them, so they can triage in under five minutes."

That sentence becomes the anchor you paste into every Figma prompt and every Claude Code instruction. It takes five minutes, and it saves you from generating gorgeous screens nobody needs, which is the most expensive failure mode in AI-assisted design.

### 2. Build a reference stack of real products

Don't start from a blank screen. Pick three to five products your users already respect, screenshot them, and write down one or two specific qualities to pull from each: "Linear's keyboard-first density," "Stripe's calm data tables," "Notion's forgiving empty states."

"Something clean" gives the tool total freedom to disappoint you. "Stripe-style table elevation with our brand's warm neutrals" gives it something to work with.

Translate references for your audience, and don't clone them. Dark mode with neon accents might suit a dev tool and sink a patient portal, and telling the difference is your call.

### 3. Prototype the vibe in Figma, then harden it

Two modes I use:

- Figma Make or the AI features for the first draft. Describe the section you need and lean on the stack from step two: "landing page hero for a meditation app, calm and minimal, inspired by Apple Health and Headspace." You get a usable direction in minutes.
- A hardening pass, by hand or with AI assist. Convert what's good into real structure: auto layout everywhere (position-drifted frames don't translate), component variants for every state, and Figma variables for color, spacing, radius, and type.

The hardening pass is what separates a vibe mockup from a machine-readable design. Auto layout and variables are how the next step "understands" your design; skip them and Claude Code reads a pile of pixels instead of a system.

My Figma discipline checklist is short: every element in auto layout, every color from a variable, every interactive element is a component with hover, focus, and pressed variants, and every flow wired end to end.

### 4. Let Claude Code read the design structure

Claude Code connects to Figma through an MCP (Model Context Protocol) server, so it can query the actual structure of a node: the component tree, auto-layout geometry, text styles, and variable values. There is no guessing from an exported JPEG.

My prompt pattern looks like this:

```text
Read Figma node "Checkout / Cart" (node 1234:567).

Build React components:
- Use the following Figma variables as CSS custom properties
  (--color-*, --space-*, --radius-*) — don't introduce new values.
- Functional components + Tailwind utilities, desktop-first matches
  the file's breakpoints.
- Include states: hover, focus, disabled, error, loading, empty.
- Prioritize accessibility: semantic HTML, correct aria usage,
  keyboard-navigable interactive elements.

Start with the token file, then atoms, then compose.
```

The output is a token file, then primitives, then composed components, in the layered order a senior engineer would use. And because the values come from Figma variables, the code inherits your design decisions instead of approximating them.

### 5. Own the QA pass

AI-generated code is a strong first draft, not a finished system. This is also where "designers should learn to code" stops being an abstract lecture: Claude Code works inside a real project with you, not in a separate AI sandbox. I do the same pass every time:

- Run it where it lives. The components render inside the actual app, with the project's real fonts, data shapes, and breakpoints. A screenshot you can't scroll isn't QA.
- Review with dev tools as well as a designer's eye. Toggle the state variants, throttle the network to see loading states, and check accessibility. AI drafts drift in ways a picture doesn't show.
- Treat Claude Code as a pair. Ask it to refactor itself: "extract this grid into a reusable component," "move these one-off colors into the token file," "add a story for the empty state." It'll take a rewrite without complaint.

The first loop took me longer than the old process. Every loop since has been faster, because two things accumulate: the reference stack, and the code conventions Claude learns from the project.

### 6. Ship the prototype before the code

The prototype doesn't have to wait for the build, and ordering it that way saves whole review cycles. Check four, the clickable end-to-end flow, is already true in Figma, so the prototype can go in front of three to five target users, or a small beta slice once the real build lands. Watch where people hesitate, what they miss, and where the flow makes them think.

If the prototype exposes a misfire, fix it in the structure (Figma) and have Claude Code sync the affected components. You edit the system rather than patching generated code, and re-running the pipeline takes hours instead of sprints.

### 7. Keep a team prompt library

The efficiency compounds only if the workflow is systemized. Alongside your component library, keep a small shared library with:

- The JTBD sentence template and the reference-stack checklist
- Winning Figma prompts, annotated with what worked
- The Claude Code instruction set for your codebase, in a `CLAUDE.md` file, which keeps your design system's constraints as rules the agent reads.
- A do-this-not-that record of AI mistakes your team caught

The prompts encode your team's taste. The `CLAUDE.md` encodes your design system as executable rules. Both mean new pages and new teammates start with your standards in hand.

## What this replaces

Ready-to-dev is the moment the prototype and the implementation stop being two separate lives of the same design: structure, tokens, and states flow from Figma through Claude Code into React, and you stand on both sides of the bridge.

AI won't replace designers. Designers who can drive this pipeline, though, replace the handoff meeting, the redline spreadsheet, and the six-week engineering queue.

If you design: harden one real screen in Figma, with auto layout, variables, and full states, then run it through this pipeline with Claude Code. If you engineer: hand your designer an MCP connection rather than a Figma inspection cheat sheet. Measure the time from "approved design" to "running code" against your last project. On the work I've run this way, that gap went from days to hours.

If you want to talk through this workflow on your own product, [reach out](https://cal.com/aftabkhalid/30min).

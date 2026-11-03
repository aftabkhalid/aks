---
title:  "From Vibe Design to Ready-to-Dev UI: My Figma → Claude Code → React Workflow"
date:   "2026-11-03"
category: AI Workflows
author: Aftab Khalid
draft: true
description: "How I ship designs that are genuinely ready to dev — prototyping in Figma, building with Claude Code, and handing off React instead of redlines."
---

For twenty years, the end of a design project always looked the same. I'd deliver a beautiful Figma file, walk engineering through it in a call, and then hold my breath. Somewhere between "handoff" and "launch," the design would drift. Spacing got approximated. Hover states were invented on the spot. The prototype I'd stress-tested was rebuilt from scratch by someone who never talked to a user.

Handoff was never really a step in the process. It was a wish.

Vibe design changed this for me — not because AI "generates UI," but because the AI stack finally lets a designer deliver something engineering can run the same day. My stack is simple and battle-tested:

- **Figma** for the vibe — fast, exploratory, high-fidelity prototypes with real variables and tokens.
- **Claude Code** as the build engine — it reads the Figma structure and produces actual components, not screenshots.
- **React** as the deliverable — the same components engineers code against anyway.

The result is what I call ready-to-dev UI: not "a mockup the devs will interpret," but a working React interface with real components, real tokens, and real states — shipped as a clickable prototype first, and as code second.

Here's how the workflow works, step by step, and why each piece earns its place.

## What is ready-to-dev UI?

"Ready to dev" gets thrown around a lot, so let me pin down the standard I hold my own work to. A design is ready to dev when it meets four conditions:

1. **Real components, not pictures.** Every card, nav, and input exists as a component with variants and properties — in Figma first, then in React.
2. **Design decisions live in tokens.** Colors, spacing, radii, and type scale are variables in Figma that map 1:1 to CSS variables or Tailwind config in code.
3. **All states are accounted for.** Hover, focus, disabled, error, loading, empty — designed, not improvised.
4. **Someone can click the whole flow.** A prototype going end to end, so stakeholders evaluate the real experience, not storyboard slides.

The old process could get you to condition four with a lot of manual wiring in Figma. Conditions one through three were exactly the parts that got lost in translation — because they lived in the designer's head and in annotation docs nobody read.

That's the gap this workflow closes.

## What vibe design actually changes

If you've heard of "vibe coding" — Andrej Karpathy's term for letting AI carry the code while you steer by feel — vibe design is the same posture applied upstream. You describe mood, structure, and constraints in natural language; AI produces the first draft; you curate.

But here's the part most hot takes miss: the leverage isn't in generating pretty screens. It's that for the first time, the *same person* can steer both sides of the handoff — the prototype and the production code — because Claude Code closes the loop between Figma and React.

The paradigm flips like this:

1. **Before:** prompt the AI for a full-color design instead of weeks of gray wireframing.
2. **Then:** harden the one direction that resonates — real tokens, real states, real component structure in Figma.
3. **Finally:** hand that structure to Claude Code and get React components that inherit the design decisions instead of re-interpreting them.

No agency pitch. No "engineer redraws the designer's picture." One lineage, from vibe to code.

A word of reassurance before the playbook: this doesn't replace design judgment. It compresses production. Someone still has to decide what the product should feel like, what the hierarchy is, and what success looks like. That someone is you — and in a world where production is near-instant, taste isn't worth less. It's worth more.

## The workflow, step by step

### 1. Start with the job to be done, not the layout

Before any prompt, write one sentence using the jobs-to-be-done frame: **When [situation], [user] wants to [motivation], so they can [outcome].**

Bad: "Design me a dashboard."

Better: "When a project manager starts their morning, they want to see what's blocked and who's waiting on them, so they can triage in under five minutes."

That sentence becomes the anchor you paste into every Figma prompt and every Claude Code instruction. It takes five minutes and it saves you from generating gorgeous screens nobody needs — the most expensive failure mode in AI-assisted design.

### 2. Build a reference stack, not a mood board

Don't start from a blank screen. Pick 3–5 products your users already respect, screenshot them, and write down one or two *specific* qualities to pull from each — "Linear's keyboard-first density," "Stripe's calm data tables," "Notion's forgiving empty states."

Specific beats poetic. "Something clean" gives the tool total freedom to disappoint you. "Stripe-style table elevation with our brand's warm neutrals" gives it a chord to play.

One caution: translate references for your audience, don't clone them. Dark mode with neon accents might be right for a dev tool and wrong for a patient portal. You know the difference — that knowledge is the job.

### 3. Prototype the vibe in Figma — with structure, not just looks

This is where Figma earns its spot as more than a drawing tool. Two modes I use:

- **Figma Make / AI features for the first draft.** Describe the section you need, referencing your stack: "landing page hero for a meditation app, calm and minimal, inspired by Apple Health and Headspace." You get a strong direction in minutes.
- **Then a hardening pass, by hand or with AI assist.** Convert what's good into real structure: auto layout everywhere (not position-drifted frames), component variants for every state, and — non-negotiable — **Figma variables for color, spacing, radius, and type.**

The hardening pass is what separates a vibe mockup from a machine-readable design. Auto layout and variables are how the next step "understands" your design. Skip them and you'll hand Claude Code a pile of pixels instead of a system.

A 4-person of generous Figma discipline checklist: every element in auto layout, every color from a variable, every interactive element a component with hover/focus/pressed variants, every flow wired end to end.

### 4. Let Claude Code read the design, not a screenshot

Here's the step that changed everything for me. Claude Code connects to Figma through an MCP (Model Context Protocol) server, which means it can query the *actual structure* of a node — the component tree, auto-layout geometry, text styles, and variable values — rather than guessing from an exported JPEG.

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

The result isn't a pile of `div`s with inline pixel values. It's a token file, then primitives, then composed components — in the layered order any senior engineer would structure them. And because the values came from Figma variables, the code inherits your design decisions instead of approximating them.

### 5. Own the QA pass — with dev eyes, in the dev environment

AI-generated code is a strong first draft, not a finished system. This is where the designers-should-learn-to-code advice becomes concrete, because Claude Code works *with* you inside a real project, not in a separate AI sandbox.

My QA pass, every time:

- **Run it where it lives.** components render in the actual app — with real fonts, real data shapes, real fonts loading correctly. A screenshot you can't scroll is not QA.
- **Test like a designer but with dev tools.** Toggle the state variants, throttle the network for loading states, and check accessibility. AI drafts can smell wrong — but can miss sub-optimal design or code blindness for 100%.
- **Treat Claude Code as a pair.** Ask it to refactor itself: "extract this grid into a reusable component," "move these one-off colors into the token file," "add a story for the empty state." It's a tireless teammate who never minds a rewrite.

The first loop (design → build → review → fix) took me longer than the old way. Every loop since has been faster than the old way. The efficiency compounds because both artifacts — your reference stack, and the code conventions Claude learns from the project — get better as they accumulate.

### 6. Ship the prototype BEFORE the code

Here's an ordering trick that saves entire review cycles: the prototype doesn't have to wait for the code.

Because condition four (clickable end-to-end) is met in Figma, you can put the prototype in front of 3–5 target users — or even a 1–5% beta slice once the real build lands — while the components are still hot. Watch for the classics: where do people hesitate, what do they miss, where does the flow ask them to think?

If the prototype exposes a misfire, you fix it in the *structure* (Figma) and tell Claude Code to sync the affected components — not because redlines change, but because re-running the pipeline is cheap. Hours, not sprints. This is the compounding payoff: your QA budget goes to judgment calls, not redraws.

### 7. Build the prompt-and-tokens library as a team asset

The workflow compounds only if it's systemized. Alongside your component library, keep a small, shared library containing:

- The JTBD sentence template and reference-stack checklist
- Winning Figma prompts, annotated with what worked
- The Claude Code instruction set for your codebase (in a `CLAUDE.md` file) — which matters, since it's your design system's constraints as code
- A "do this, not that" record of AI mistakes your team caught, so reviewers get faster

The templates and prompts encode your team's taste. The `CLAUDE.md` for the codebase encodes your design system as executable rules. Both mean new tasks, new pages, and even new teammates start from judgment, not from an explanation of why we don't use 47 shades of gray.

## Make the handoff a memory

Ready-to-dev isn't a documentation format. It's the moment the prototype and the implementation stop being two lives of the same design — because the design's structure, tokens, and states flow straight from Figma through Claude Code into React, and *you* are present on both sides of the bridge.

AI won't replace designers. But designers who can drive this pipeline replace the handoff meeting, the redline spreadsheet, and the six-week engineering-return queue.

If you're a designer: harden one real screen in Figma — auto layout, variables, full states — and run it through this pipeline with Claude Code. If you're an engineer: hand your designer an MCP connection instead of a Figma inspection cheat sheet. Measure the time from "approved design" to "running code" against your last project.

Most teams I've worked with can measure that gap in days before — and in hours after.

---

Want to talk through the workflow for your own product? [Reach out](mailto:hello@aftabkhalid.com).

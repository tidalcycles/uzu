---
layout: default-layout.njk
title: Uzu
---

# Welcome!

An *Uzulang* is a member of a family of languages in the style of [TidalCycles](https://tidalcycles.org). This website aims to signpost the different uzulangs, and the communities, resources and ideas around them.

## What is an Uzulang?

Uzulangs tend to be based on the same model of representing patterns of time,
and generally feature the same or similar 'mini-notation' for describing
sequences (inspired by the polymetric expressions in the venerable Bol
Processor). They have grown out of the [live coding
community](https://toplap.org/), and so are generally used for making music,
often in an improvised or semi-improvised way (e.g., by writing code to make
music while a live audience listens). Live coding is where people write code to
make live music (or other time-based art like visuals or choreography).

## All things uzu

Uzulangs based on TidalCycles or derivatives:

| Name | Links | Host language | License | Notes |
|------|-------|---------------|---------|-------|
| TidalCycles (aka Tidal) | [home](https://tidalcycles.org), [source](https://github.com/tidalcycles/tidal) | Haskell | GPLv3 |
| Strudel | [home](https://strudel.cc), [source](https://github.com/tidalcycles/strudel) | JavaScript | AGPLv3 | Can also parse Tidal-like syntax and mondonotation |
| idlecycles | chapters [1](https://garten.salat.dev/idlecycles/chapter1.html), [2](https://garten.salat.dev/idlecycles/chapter2.html), [3](https://garten.salat.dev/idlecycles/chapter3.html), [4](https://garten.salat.dev/idlecycles/chapter4.html), [5](https://garten.salat.dev/idlecycles/chapter5.html), [6](https://garten.salat.dev/idlecycles/chapter6.html) (and watch [froos's garden](https://garten.salat.dev/) for new chapters) | JavaScript | AGPLv3 | Minimal implementation mostly intended for learning and experimentation 
| Tranquility | [source](https://github.com/XiNNiW/tranquility) | Lua | GPLv3 |
| Votex | [source](https://github.com/tidalcycles/vortex) | Python | GPLv3 |
| Cycles | [docs]](https://docs.rs/cycles/latest/cycles/) | [source](https://github.com/mitchmindtree/cycles) | Rust | GPLv3 |
| Kidal | [source](https://gitlab.com/ndr_brt/kidal) | Kotlin EDSL | GPLv3 |

'New wave' uzulangs based maxi- or mondo-notation:

| Name | Links | Host language | License | Notes |
|------|-------|---------------|---------|-------|
| Zwirn | [source](https://github.com/polymorphicengine/zwirn) | Haskell | GPLv3 |
| Modal | [source](https://github.com/neo451/modal), [announcement](https://club.tidalcycles.org/t/introducing-modal-new-lua-port-of-tidal/5228) | Lua | GPLv3 |
| Godwit | [source](https://mathr.co.uk/web/godwit.html) | Haskell | ? | based on simply-typed lambda calculus |
| froos's uzunotation | chapters [1](https://garten.salat.dev/uzu/uzulang1.html), [2](https://garten.salat.dev/uzu/uzulang2.html), [3](https://garten.salat.dev/uzu/uzulang3.html) | Javascript | AGPLv3 |
| mondonotation | [source PR](https://github.com/tidalcycles/strudel/pull/1311) | Javascript | AGPv3 | part of Strudel (see above) |

## Add your uzu!

If you make an uzulang, please submit a pull request [to this file](https://github.com/tidalcycles/uzu/blob/main/src/index.md) to add it to the above list. Please note that if your language is based on an existing one (e.g. by reading its source code and translating its ideas), then you must abide by its software license.

# uzu notation

[![](https://doc.patternclub.org/uploads/18d2d283-3f66-49c9-a665-a581bc7ee7c7.jpg)](https://alaineymarybelle.pages.dev/csgmiph-uzumaki-anime-release-date-2024-season-photos-qccivln/)

.. or mondo notation, maxi notation ... 

we could use this document to collaborate on the fuzzy idea of a new/alternative/unifying notation for patterns.

please feel free to edit any part of this document!

## the scope of this document

what even are we trying to discuss?
i'm not sure yet, but let's work it out.
some ideas:

- how can a new tidal notation look like
- how should we call it?
- how can we unify the existing tidal dialects
- how much should we unify?
- what's the common ground of tidal dialects
- do we need a "specification"?

## names

there was some discussion about finding a new name for the family of tidal-like languages.
maybe this name would also be the name of the not-yet-existing, but potentially existing-sometime-in-the-future custom notation we're talking about here?

- uzu https://skdesu.com/en/meaning/%E6%B8%A6-uzu/
- I quite like 'uzulang', as a bit of a hat tip to esolang and ixilang
- ..?

## family tree of uzulangs

Languages that have most or all of:
- patterns of pure functions of time(spans)
- combinator library for transformating and combining patterns
- mini-notation styled after Bol Processor's polymetric expressions
- GPL compatibility?
- the author(s) call it an uzulang

Namely:

- [tidal](https://github.com/tidalcycles/Tidal)
- [vortex](https://github.com/tidalcycles/vortex)
- [strudel](https://github.com/tidalcycles/strudel)
- [web tidal](https://github.com/matthewkaney/web-tidal)
- [zwirn](https://github.com/polymorphicengine/zwirn)
- [modal](https://github.com/neo451/modal/wiki/Syntax)
- ...?

## links

- [inter-innards channel](https://discord.com/channels/779427371270275082/1339566754946482287)
- [mondo channel](https://discord.com/channels/779427371270275082/1309830817739968544)
- [mondo repo](https://github.com/tidalcycles/mondo)
- [idea: using ":" for function args](https://discord.com/channels/779427371270275082/1191011773311107153/1308376724840513566)
- [maxi notation discussion on strudel github](https://github.com/tidalcycles/strudel/discussions/96)
- [alex's uzumaki musings](https://doc.patternclub.org/87ZlbW8NSbWUrkzRRz0SjA?both#)
- alignment of elements
    - [algorithmic pattern forum post](https://forum.algorithmicpattern.org/t/aligning-elements/492)
    - [GSOC project by Aravind Mohondas - Formalizing Konnakol](https://dev.to/aravindmohandas/formalizing-konnakol-using-haskell-gsoc-22-ekm)
- [stepwise patterning in strudel](https://strudel.cc/learn/stepwise/)
- [Bol Processor polymetric expressions](https://bolprocessor.org/misc/docs/bp2-Polymet.html)
- [Laurie Spiegel - manipulations of musical patterns](https://www.researchgate.net/publication/266316606_Manipulations_of_Musical_Patterns)

## problem zoo

- Generally in programming languages you have an operator that stands for what something does. In Uzus we also want to notate how the arguments are aligned. This creates a bit of a explosion of possibilities. For example [the retired tidal 2.0 branch](https://github.com/tidalcycles/Tidal/blob/2.0-beatmode-retired/src/Sound/Tidal/Compose.hs) ended up with operators like `||.||.` and `||>=`. We need to find some nice way of notating both the 'how' and 'what'.. (In strudel those would be something like `bor.squeeze` and `gte.squeeze` respectively, which isn't that bad)
- In workshops, people often try and write somethind like the mondo/uzu notation while trying to learn tidal or strudel. It would be nice if it worked.
- patterning functions is possible in uzulangs like tidal and strudel, but underexplored. Patterns of functions should be first class citizens!
- functions like `ply` have nice definitions: `_ply n pat = squeezeJoin $ _fast n . pure <$> pat`. We could probably find useful functions just by exploring all the combinations of all the different joins and the elementary transformations. So making joins/binds more readily notable might make a lot of new functionality obvious that we can then give names.

## ideas

### mini notation features everywhere

the new notation could allow using mini notation syntax anywhere in the pattern, so there would be a single DSL that combines the terse mini notation with the expressiveness of a general purpose programming language like haskell / javascript / etc..

- does this mean we try to get rid of "classic" mini notation in the long run?

### a simple ast as the common ground

the common ground between different dialects could be a specification of functions that can be composed together. any dialect could then produce such an ast that can be evaluated / interpreted by this set of functions to create a pattern. 
the composable functions could have a set of tests that ensure they work the same across implementations
examples of such functions:

- fast :: Pattern Time -> Pattern a -> Pattern a
- ply :: Pattern Int -> Pattern a -> Pattern a
- s:: Pattern String -> Pattern ?

the ast itself could be stringified to something that looks similar to a lisp:

`(fast 2 (s "bd sd"))`

(the structure could of course be expressed in different formats, s-expressions are just one way)

Multiple input languages could produce this ast, for example:

`s("bd sd").fast(2)`

`fast 2 $ s "bd sd"`

`s "bd sd" > fast 2`


explorations: 

- [web tidal](https://github.com/matthewkaney/web-tidal) parses haskell style tidal
- [zwirn](https://github.com/polymorphicengine/zwirn) allows mini notation features everywhere
- [zilp](https://github.com/felixroos/zilp) allows composing functions with pipes (same order as strudel)

### running tests across implementations

It would be nice to do a kind of test-driven development of multiple implementations.

the specification tests could look like this:

```
(fast 2 (seq a b))

[ 0/1 → 1/4 | a ]
[ 1/4 → 2/4 | b ]
[ 2/4 → 3/4 | a ]
[ 3/4 → 4/4 | b ]
```

here, the first block would be the pattern, expressed as an s-expression, while the second block is the first cycle (or more) of the queried pattern. the syntax for the second block is used like this in the strudel snapshot tests, e.g. [examples.test.mjs.snap](https://raw.githubusercontent.com/tidalcycles/strudel/aabc82bedd0370fa5cf6b616b1340d32b153cea8/test/__snapshots__/examples.test.mjs.snap)

these tests could be parsed and evaluated by any implementation

a simpler and probably more robust approach would be to only declare equivalent patterns (skipping the literal event notation):

```
(fast 2 (seq a b))
(seq a b a b)
```

Note that the above test would fail in a stepcount-aware uzulang, but this would pass:

```
(extend 2 (seq a b))
(seq a b a b)
```

It could be nice to categorise or tag tests with features. In the above example, uzulangs that implement stepwise patterning should fail the first test, but pass the second one.

<details>
    <summary>dialogue about this</summary>

One problem with this is that tidal/strudel also has event fragments. Could add another timespan, but some implementations mind not deal with them. They could just ignore the original/whole timespan though.


yes.. i think there's also a notation for that iirc

An alternative or additional approach could just be having a way to supply two patterns that are equivalent. E.g. in the above it could be

(fast 2 (seq a b))
(seq a b a b)


yep thats an interesting idea. i wonder if some things might be hard to test this way, but maybe not

In some cases I think it would just make the tests more robust.. For some things we might fundamentally change something but the test would still work as it would represent a basic assumption rather than a particular input/output.


it would also be a lot easier to implement on the language side. parsing a lisp is very easy + no need to parse the custom event syntax

shall we keep this as a dialogue or digest it back into an idea

maybe we use summary tags for this, let me test
                    
I thought you were going to suggest chatgpt then
    
haha no just html
    
</details>

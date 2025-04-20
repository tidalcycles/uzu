# Uzumaki

Imaginary tidal derivative maxinotation

## Step count basics

A 'pure' value, twice per cycle, count of 1

```js
fast 2 [a]
```

The same, but with count of 2

```js
density 2 [a]
```

Count of 2

```js
[a a]
```

Count of 2

```js
[a!2]
```

Count of 1

```js
[a*2]
```

Count of 2

```javascript
[[a a] b]
```

Count of 4 (step marker)

```javascript
[[= a a] b]
```

## Patterned parameters

Notation for aligning patterns of patterns

### `fast` factors

Pure factor

```js
fast 2 [a]
// same as
[[a a]] // count unchanged at 1
```

Patterned factor - default alignment (cyclewise inner join)
```js
fast [2 4] [a]
// same as
[[a [a a]]] // count unchanged at 1
```

Patterned factor - stepJoin
```js
fast ^[2 4] [a]
// same as
[[a a] [a a a a]] // count becomes 2
```

### `density` factors

Pure factor

```js
density 2 [a]
// same as
[a a] // count 2
```

Patterned factor - default alignment (cyclewise inner join)
```js
density [2 4] [a]
// same as
[a [a a]] // patterned count [2 4]
```

Patterned factor - stepJoin
```js
density ^[2 4] [a]
// same as
[a a a a a a] // count 6
```

## `euclid`

A function with a parameter that sets the count

```js
euclid 3 8 "a"
// same as
[a - - a - - a -] // count 8
```

innerJoin

```js
euclid [3 5] 8 "a"
// same as
[a - - a - a a -] // count 8
```

```js
euclid 3 [8 16] "a" 
// can't be bothered to type it out, but patterned count [8 16] ..
```

stepJoin

```js
euclid ^[3 5] 8 "a"
// same as
[a - - a - - a - a - a - a -  a -] // count 16
```

```js
euclid 5 ^[8 16] "a"
// same as
[a-aa-aa-a--a--a--a--a---] // count 24
```
```js
euclid ^[3 5] ^[8 16] "a"
// same as
// count 48, not sure what order..
```

## Truer cyclic behaviour

For example in tidal, `iter 4 "a b c d"` creates a pattern over four cycles. The default behaviour should instead tend towards maintaining a cycle.

```js
iter 4 [a b c d]
// same as
[a b c d b c d a c d a b d a b c] // count of 16
```

If the live coder does want to maintain the pace of the source pattern then a function name modifier/suffix could do that, maybe `iterover`..

## Embedding patternings

```javascript=
[a b (fast 2 c)]
// same as
[ a b c*2]
```

```js
[a b c d (iter 4 [a b c d])]
// same as
stepcat [a b c d] (iter 4 [a b c d])
// same as
[a b c d a b c d b c d a c d a b d a b c] // count of 20
```

## Simplified syntax

Everything should be possible just with [] to enter mininotation land, and () to go into function land. i.e. all the behaviour can be described with functions.

From there, we can think about how to best use the remaining brackets {} <> and other non-alphabetic characters */^ etc.

opinion 1: <> should be another way to enter miniland, because it's very common
opinion 2: " could be synonymous for [] ... why? because it makes things more backward compatible to regular mini notation, also " is easier to type on most keyboards. not sure if we should only allow it on the top level or if it should work everywhere

```js
"a b (fast 2 c)"
// same as
[a b (fast 2 c)]
// same as
<a b (fast 2 c)>*3
```

```js
"a [b c]"
// same as
[a [b c]]
// same as ?
"a "b c""
```

the last example might be a bit confusing, because double quotes have no direction, so it's harder to read


## Patterns of functions

Patterning functions should also be possible:

```js
^[fast slow] 3 "a b c"
// same as
[a b c]*3 [a b c]/3 // count of 6
```

```js
^[expand contract] 2 "a b c"
// same as
[a@0.5 b@0.5 c@0.5 a@2 b@2 c@2] // count of 7.5
```

```js
^[(fast 2) (iter 4)] "a b c d"
[a@0.5 b@0.5 c@0.5 d@0.5 a@0.5 b@0.5 c@0.5 d@0.5 a b c d b c d a c d a b d a b c] // count of 20
```

## Other binds

Aside from `[]` for a cyclewise innerBind and `^[]` for a list-like stepwise bind, there are a lot of other possibilities. We need to find nice syntax for them..

Cyclewise:
* inner `|^`
* outer `^|`
* mix `|^|`
* trig/reset
* trigzero/restart

Eventwise (?):
* squeezein `||^`
* squeezeout `^||`

Stepwise:
* list-style `^`
* polymeter 
* Zip
* ...

## Applicative

Some functions don't deal with structure but only values, e.g. arithmetic, boolean and bitwise operators (multiply, subtract, not, bitwise and etc). There are unary (i.e. single argument) functions like boolean `inv` and numerical `negate`, which can be straightforwardly implemented with a functor map, as they do not deal with structure at all.

There are also a lot of binary (i.e. two arguments), including arithmetic, boolean, and bitwise functions, which in tidal are inline operators.

'Patternifying' such functions can be done in a nicely standardised way, as the composition of structure is completely separate from the composition of values. They can also be notated in terms of the operator, and not the constituent patterns, e.g. for `add` with a 'squeeze in' applicative lift:

```js
[1 2 3] ||+ [10 20]
// same as
[11 21 12 22 13 23] // count of 6
```

The count is a bit ambiguous in the above, it could be a count of three like 

```js
[[11 21] [12 22] [13 23]]
```

But that could be expressed like:

```js
[1 2 3] ||+ [[10 20]]
```



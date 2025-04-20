// const ohm = require('ohm-js');
import * as ohm from 'ohm-js';

const g = `Mondo {
  IdentPattern = Sequence<ident>

  Sequence<t> = StepOps<t>+

  StepOps<t> = Step<t> Op*
  
  StepFuncs<t> = Step<t> "." Func
  
  Func = "fast" "(" Sequence<number> ")"
    | "slow" "(" Sequence<number> ")"
    | "jux" "(" Func ")"

  Step<t> =
  | t -- unit
  | "[" Sequence<t> "]" -- subpattern

  Op = "*" Step<number> -- fast
   | "/" Step<number> -- slow
   | "." Step<Func> -- function
  
  ident  (an identifier)
    = letter alnum*

  number  (a number)
    = digit* "." digit+  -- fract
    | digit+             -- whole
}`;

const grammar = ohm.grammar(g);

export function parse(code) {
  const m = grammar.trace(code);
  return m.toString();
}

export function setupParser(button, textarea, output) {
  button.addEventListener('click', () => (output.innerHTML = '<pre>' + parse(textarea.value) + '</pre>'));
}

# Spectacle Boilerplate

## Reference

The Spectacle core API is available at [https://github.com/FormidableLabs/spectacle/blob/master/README.markdown](https://github.com/FormidableLabs/spectacle/blob/master/README.markdown).

## Development



To start up the local server, run `npm start`

Open a browser and hit [http://localhost:3000](http://localhost:3000), and we are ready to roll

## Build & Deployment

Building the dist version of the project is as easy as running `npm run build`

If you want to deploy the slideshow to surge, run `npm run deploy`

The current slide build can be found online at: http://uppity-territory.surge.sh/


## Rough Points

XKE

Index
1. What is ReasonML?
2. Issues faced in Javascript
3. Solution provided by ReasonML
4. Why OCaml?
5. What is Bucklescript?
6. Code


What is ReasonML?
1. A language that compiles to Javascript.
2. Leverages javascript syntax along with OCaml semantics.
	1. OCaml or Objective Caml was first introduced in 1996.
	2. It has the power of object oriented programming with along with ML type safety and type inference.
3. ReasonML compiles to javascript using the bs-platform/bucklescript compiler.  

What is BuckleScript?
1. It is compiler which was created to leverage OCaml as a language for FE and BE development by compiling it into javascript. 
2. Helps writing javascript in OCaml. 
3. Module by module compilation. (ES6, commonJs,  AMD)
4. Easy interops between OCaml and Js.
5. You can use the OCaml or ReasonML syntax.

Why target Javascript?
1. It is the only language which the browser understands.
2. JS is everywhere
3. WebAssembly or wasm will make it more capable : WebAssembly is a portable compilation target for the web. Allows running languages other than Js in the browser env.

Why Reason ?
Reason compiles to JavaScript thanks to our partner project, BuckleScript, which compiles OCaml/Reason into readable JavaScript with smooth interop. Reason also compiles to fast, barebone assembly, thanks to OCaml itself.

It can also compile to assembly code.

Why OCaml?
1. Reason for choosing OCaml is that 80% of the OCaml semantics map over to the modern JS. If one has the luxury of leaving out a few corners of JavaScript and add a few nice things, one can actually achieve something that compiles to pretty readable JS and directly use 80% of its ecosystem & tooling.
2. OCaml defaults to immutable and functional.
3. The language for writing React. Reason's creator also created ReactJS, whose first prototypes were written in SML, a distant cousin of OCaml. We've transcribed ReactML into ReactJS for wide adoption. A few years later, we're now iterating on the future of ReactJS through ReasonReact.
4. The ability to render to native code. OCaml's native (assembly) startup time is in single digit milliseconds. We have big plans to use Reason on native one day; meanwhile, we're focusing on adoption through great JavaScript compatibility.

Issues faced in a Javascript application
1. Type safe (Dynamic and Loosely Typed) : string, number, bool, undefined, null, symbol
2. Immutable
3. Data structures
4. Object oriented
5. Regression
6. Variable scoping
7. Context Issues
8. Maintainability

How Reason overcomes that
1. Static and Strongly typed
2. No null or undefined : Variants
3. Data structures : Link List, Map, Set etc
4. Supports Functional Programming 
5. Variable scoping - Only let —> let + const
6. Better performance both at completive and runtime.
7. Since it is functional so we don’t face the context issues.

Other Advantages of Reason
Why we use Reason In WOW air
1. To create quality maintainable app.
2. We wanted fewer runtime bugs.
3. Reason let you write simple, fast and quality type safe code leveraging the javascript and OCaml ecosystem
4. New syntax on top of OCaml.
5. Looks and feels like ES6.
6. If focusses on performance
7. Dead code elimination and compile time optimisation. 
    High Quality Dead Code Elimination
The JavaScript ecosystem is very reliant on dependencies, and quite often many of them. Shipping the final product inevitably drags in a huge amount of code, lots of which the project doesn't actually use. These regions of dead code impact loading, parsing and interpretation speed. BuckleScript provides powerful dead code elimination at all levels:
	•	Function and module level code elimination is facilitated by the well-engineered type system and purity analysis.
	•	At the global level, BuckleScript generates code that are naturally friendly to dead code elimination done by bundling tools such as Rollup and Closure Compiler, after its own sophisticated elimination pass.
	•	The same applies for BuckleScript's own tiny runtime (which is written in BuckleScript itself).

8. Pure, immutable and functional.

Code

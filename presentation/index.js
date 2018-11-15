// Import React
import React from "react";
import reasonSyntax from "prismjs/components/prism-reason";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Code,
  CodePane,
  Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  reasonLogoSmall: require("../assets/reason_icon_75.png"),
  wowLogo: require("../assets/sitelogo.svg"),
  solidRock: require("../assets/solid_as_a_rock.jpg"),
  harambe: require("../assets/harambe.jpg"),
  confused: require("../assets/confused.jpg"),
  messenger: require("../assets/messenger.png"),
  question: require("../assets/question.jpg"),
  reasonLogo: require("../assets/reasonLogo.png"),
  xebiaLogo: require("../assets/xebiaLogo.jpeg"),
  developerCoffee: require("../assets/developerCoffee.jpg")
};

preloader(images);

const theme = createTheme(
  {
    primary: "#99258D",
    secondary: "#EFC030",
    tertiary: "#03A9FC",
    quartenary: "#CECECE",
    textColor: "white",
    darkText: "#333333"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="textColor">
            Reason for reason
          </Heading>
        </Slide>
        
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="textColor">
            ReasonML
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1} fit bold>
            A new language for javascript development
          </Text>
          <Image src={images.reasonLogoSmall} margin="30px 10px 0px 0px" />
          <Image src={images.xebiaLogo} margin="35px 0px 100px -200px" border-radius="110px" width="80px"/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">
            What is ReasonML?
          </Heading>
          <BlockQuote>
            <Quote textSize="36px" textColor="textColor">
              Reason lets you write simple, fast and quality type safe code
              while leveraging both the JavaScript and OCaml ecosystems.
            </Quote>
          </BlockQuote>
          <List textColor="textColor">
            <Appear>
              <ListItem> A language which compiles to Javascript. </ListItem>
            </Appear>
            <Appear>
              <ListItem> Leverages javascript syntax along with OCaml semantics. </ListItem>
            </Appear>
            <List textColor="textColor" style={{ paddingLeft: "50px" }}>
              <Appear>
                <ListItem>
                  OCaml or Objective Caml was first introduced in 1996.
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  It provides the type safety and type inference of a ML language.
                </ListItem>
              </Appear>
            </List>
            <Appear>
              <ListItem> It is compiled to javascript using the bs-platform/bucklescript compiler.</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <List textColor="textColor">
            <Appear>
              <ListItem>Features : </ListItem>
            </Appear>
            <List textColor="textColor" style={{ paddingLeft: "50px" }}>
              <Appear>
                <ListItem> Statically and strongly typed </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Implicitly immutable
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Inclided towards or implicitly functional
                </ListItem>
              </Appear>
            </List>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">
            Issues faced in a Javascript application
          </Heading>
          <List textColor="textColor">
            <Appear>
              <ListItem>
                Difficult to infer type of a variable while development
              </ListItem>
            </Appear>
            <Appear>
              <ListItem> Type error's at runtime(Dynamic and Loosely Typed) </ListItem>
            </Appear>
            <Appear>
              <ListItem> Trying to access properties of an undefined/null variable(Since null and undefined are also primitive types in JS)</ListItem>
            </Appear>
            <Appear>
              <ListItem> Limited Data Structures</ListItem>
            </Appear>
            <Appear>
              <ListItem> Variable scoping issues</ListItem>
            </Appear>
            <Appear>
              <ListItem> Context issues inside a function</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">
            Solutions provided by ReasonML
          </Heading>
          <List textColor="textColor">
            <Appear>
              <ListItem>
                Statically and Strongly typed
              </ListItem>
            </Appear>
            <Appear>
              <ListItem> Doesn't support null or undefined but instead has variants to support that functinality </ListItem>
            </Appear>
            <Appear>
              <ListItem> Introduces new Data Structures like Linklist etc</ListItem>
            </Appear>
            <Appear>
              <ListItem> There is no var keyword but only let, so no issues with variable scoping</ListItem>
            </Appear>
            <Appear>
              <ListItem> Since it is inclided towards functional programing, so rarely any context issues.</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">
            Why OCaml?
          </Heading>
          <BlockQuote>
            <Quote textSize="36px" textColor="textColor">
              Why was OCaml choosen as the language to build ReasonML instead of any other language.
            </Quote>
          </BlockQuote>
          <List textColor="textColor">
            <Appear>
              <ListItem> Reason for choosing OCaml is that 80% of the OCaml semantics map over to the modern JS. If one has the luxury of leaving out a few corners of JavaScript and add a few nice things, one can actually achieve something that compiles to pretty readable JS and directly use 80% of its ecosystem & tooling. </ListItem>
            </Appear>
            <Appear>
              <ListItem> OCaml defaults to or is implicitly immutable and functional. </ListItem>
            </Appear>
          </List>
        </Slide>
        
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <List textColor="textColor">
            <Appear>
              <ListItem> The language for writing React. Reason's creator also created ReactJS, whose first prototypes were written in SML, a distant cousin of OCaml. They transcribed ReactML into ReactJS for wide adoption. A few years later, now they are iterating on the future of ReactJS through ReasonReact. </ListItem>
            </Appear>
            <Appear>
              <ListItem> The ability to render to native code. OCaml's native (assembly) startup time is in single digit milliseconds. There are plans to use Reason on native one day both at FE(WebAssembly) and BE. </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">
            What is BuckleScript?
          </Heading>
          <List textColor="textColor">
            <Appear>
              <ListItem>
                It is compiler which was created to leverage ReasonML/OCaml as a language for FE and BE development by compiling it into javascript
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Helps writing javascript in ReasonML/OCaml.</ListItem>
            </Appear>
            <Appear>
              <ListItem>Module by module compilation. (ES6, commonJs,  AMD)</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Easy interops between ReasonML/OCaml and Js
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Talk is cheap. Show me the code.</Quote>
            <Cite textColor="primary">Linus Torvalds</Cite>
          </BlockQuote>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="reason"
          code={require("raw-loader!../assets/code/letBindings.example")}
          ranges={[
            { loc: [0, 0], title: "Let bindings" },
            {
              loc: [0, 1],
              note: "We can declare a variable and specify the type..."
            },
            {
              loc: [1, 2],
              note: "...or let the type inferrer take care of that"
            },
            {
              loc: [3, 5],
              note: "Variables are immutable so it will throw us an error"
            }
            // ...
          ]}
        />

        <CodeSlide
          transition={[]}
          lang="reason"
          code={require("raw-loader!../assets/code/types.example")}
          ranges={[
            { loc: [0, 0], title: "Types" },
            { loc: [0, 5], note: "Declare a record type for passenger" },
            { loc: [6, 11], note: "Create a passenger" }
            // ...
          ]}
        />

        <CodeSlide
          transition={[]}
          lang="reason"
          code={require("raw-loader!../assets/code/js-types.example")}
          ranges={[
            { loc: [0, 0], title: "Record types with JS conversion" },
            { loc: [0, 5], note: "Define the record type with the converter" },
            { loc: [6, 10], note: "A person record with a JS converter" },
            { loc: [11, 13], note: "Logs out a linked list for the record" },
            {
              loc: [14, 16],
              note: "Logs out a familiar object for the record"
            },
            { loc: [17, 21], note: "Create person JS object" },
            { loc: [22, 24], note: "Logs out a linked list for the record" },
            { loc: [25, 27], note: "A person record with a JS converter" }
            // ...
          ]}
        />

        <CodeSlide
          transition={[]}
          lang="reason"
          code={require("raw-loader!../assets/code/functions.example")}
          ranges={[
            { loc: [0, 0], title: "Functions" },
            { loc: [0, 4], note: "A simple function declaration" },
            { loc: [5, 7], note: "Implicit function currying" },
            { loc: [8, 12], note: "The same function with labeled arguments" },
            {
              loc: [13, 16],
              note: "Function will work the same regardless of parameter order"
            }
            // ...
          ]}
        />

        <CodeSlide
          transition={[]}
          lang="reason"
          code={require("raw-loader!../assets/code/pipelines.example")}
          ranges={[
            { loc: [0, 0], title: "Pipe operators" },
            {
              loc: [0, 6],
              note:
                "Functional programming can be thought of as passing data through a data pipeline"
            },
            {
              loc: [2, 4],
              note:
                "The pipe operator or 🍕 operator forwards the data to function argument"
            },
            {
              loc: [6, 9],
              note:
                "We can also forward the argument when a function has more then one argument"
            },
            {
              loc: [9, 11],
              note: "...and control where we pipe it in"
            },
            {
              loc: [12, 12],
              note:
                "If we have unary functions or want to pipe into the first argument we can use the fast pipe"
            },
            {
              loc: [12, 13],
              note:
                "So instead of sending parameters in as nested functon calls"
            },
            {
              loc: [14, 18],
              note: "we can pass the date through a pipeline"
            },
            {
              loc: [19, 22],
              note: "Consider the following JS code with chaining"
            },
            {
              loc: [23, 26],
              note: "can be 'chained' or piped in Reason like this"
            }

            // ...
          ]}
        />

        <CodeSlide
          transition={[]}
          lang="reason"
          code={require("raw-loader!../assets/code/variants.example")}
          ranges={[
            { loc: [0, 0], title: "Variants" },
            { loc: [0, 4], note: "We have Variants" },
            { loc: [5, 6], note: "and a BS Polymorphic Variant " },
            {
              loc: [6, 6],
              note:
                "Main difference is that Variant compiles to number but poly. compiles to string"
            },
            {
              loc: [7, 11],
              note: "We can also add constructor arguments to our Variants"
            }
            // ...
          ]}
        />

        <CodeSlide
          transition={[]}
          lang="reason"
          code={require("raw-loader!../assets/code/options.example")}
          ranges={[
            { loc: [0, 0], title: "The option pattern" },
            {
              loc: [0, 4],
              note: "type declaration"
            },
            {
              loc: [5, 12],
              note: "When we want to use the data we need to be sure it's there"
            },
            {
              loc: [12, 15],
              note:
                "We can also extract a value and more from optionals through the Belt utility library"
            },
            {
              loc: [16, 16],
              note:
                "So the option type gives us the opportunity to handle null values properly"
            }
            // ...
          ]}
        />

        <CodeSlide
          transition={[]}
          lang="reason"
          code={require("raw-loader!../assets/code/pattern-matching.example")}
          ranges={[
            { loc: [0, 0], title: "Pattern matching" },

            {
              loc: [5, 20],
              note:
                "Use pattern matching on variants to get an appropriate string for the type"
            },
            {
              loc: [0, 4],
              note:
                "We are extracting through pattern matching the value stored by the Variant"
            },
            {
              loc: [8, 12],
              note:
                "Each case in the pattern matching will correspond to a desired Variant value"
            }
            // ...
          ]}
        />

        <CodeSlide
          transition={[]}
          lang="reason"
          code={require("raw-loader!../assets/code/interop.example")}
          ranges={[
            { loc: [0, 0], title: "JS interop" },

            {
              loc: [1, 1],
              note:
                "If we need something from an existing package we can bind to the package"
            },
            {
              loc: [1, 5],
              note: "Here we have bindings for the npm package query string"
            },
            {
              loc: [6, 8],
              note:
                "If you need the default export you can bind to it like this"
            },
            {
              loc: [9, 10],
              note:
                "We can also bind our JS components so we can use them in Reason"
            }
            // ...
          ]}
        />

        <CodeSlide
          transition={[]}
          lang="reason"
          code={require("raw-loader!../assets/code/belt.example")}
          ranges={[
            { loc: [0, 0], title: "Belt standard library" },
            {
              loc: [1, 3],
              note:
                "Has a module for dealing with options which we already saw before"
            },
            {
              loc: [4, 7],
              note:
                "The option module also has methods to manipulate options before extracting them"
            },
            {
              loc: [6, 7],
              note:
                "By taking the option and applying the anonymous squared function to it will give us an Some(9)"
            },
            {
              loc: [7, 7],
              note:
                "We can also conditionally apply a function to a Some value and ignore if it's none (good for skipping out early on a computation)"
            },
            {
              loc: [7, 14],
              note:
                "Here we have a function which returns the square root of an float"
            },
            {
              loc: [9, 14],
              note:
                "Because the domain of the sqrt function is only positive values we need to wrap the result into an option since we can't guarantee a result"
            },
            {
              loc: [15, 16],
              note: "Here all is well and we can find the square root"
            },
            {
              loc: [17, 18],
              note:
                "Here our function got an edge case and returned a None value"
            },
            {
              loc: [19, 20],
              note:
                "Here we skipped out early and didn't bother trying to find the square root. hooray for performance!"
            },
            {
              loc: [21, 28],
              note:
                "Here we make use of the Belt.List module to help us implement the removeAt function."
            },
            {
              loc: [28, 30],
              note:
                "A more functional approach would be to not raise an exception and return an optional instead"
            }
            // ...
          ]}
        />

        <CodeSlide
          transition={[]}
          lang="reason"
          code={require("raw-loader!../assets/code/functors.example")}
          ranges={[
            { loc: [0, 0], title: "Module functions (functors)" },
            {
              loc: [1, 1],
              note:
                "Functor (in ML languages) is a function whose parameters are modules and result is a module or a module which generates another module (mapping between categories)"
            },
            {
              loc: [1, 6],
              note:
                "Here we see a built in functor being used to generate a module that is a set of strings"
            },
            {
              loc: [6, 7],
              note:
                "The type signature is a function which accepts an ordered type and returns a set of those ordered types"
            },
            {
              loc: [8, 10],
              note: "We can initialize this type of set in the following way"
            },
            {
              loc: [11, 12],
              note:
                "Since the String module has a built in compare method we can make a string in an easier way"
            },
            {
              loc: [13, 26],
              note:
                "Here way make a more complicated set where the ordered type is a Seat"
            }

            // ...
          ]}
        />

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary">
            CODE = DEVELOPER + COFFEE
          </Heading>
          <Image src={images.developerCoffee} />
        </Slide>
      </Deck>
    );
  }
}

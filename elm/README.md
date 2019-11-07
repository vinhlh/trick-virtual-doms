# Elm

## Getting started

Run

```bash
elm make src/Main.elm --output=main.js
```

to build and

```bash
elm reactor
```

to run a local web server to serve the code generated.

## Reproduce

- Click on `Trick Elm's virtual DOM by injecting additional DOM element`.

- Then click on `+` or `-` button.

## Found

Infinite JS errors raised

```
main.js:3616 Uncaught TypeError: Cannot read property 'childNodes' of undefined
    at _VirtualDom_addDomNodesHelp (main.js:3616)
    at _VirtualDom_addDomNodesHelp (main.js:3624)
    at _VirtualDom_addDomNodesHelp (main.js:3624)
    at _VirtualDom_addDomNodes (main.js:3540)
    at _VirtualDom_applyPatches (main.js:3647)
    at main.js:3903
    at updateIfNeeded (main.js:3972)
```

## Why

To understand why, the only way is knowing how things work, try reading [the library](https://github.com/elm/virtual-dom/blob/master/src/Elm/Kernel/VirtualDom.js#L1314-L1315).

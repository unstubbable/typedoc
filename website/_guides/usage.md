---
layout: 'guide'
title: 'Usage'
menuOrder: 2
---

# Usage

## Arguments

TypeDoc accepts most of the command line arguments that the TypeScript compiler accepts. All
arguments that are passed in without a flag will be parsed as input files. TypeDoc accepts
directories as input files.

To create documentation for an entire project via the CLI you can type:

```bash
$ typedoc --out path/to/documentation/ path/to/typescript/project/
```


### out

```bash
$ typedoc --out <path/to/documentation/>
```

Specifies the location the documentation should be written to.


### name

```bash
$ typedoc --name <Documentation title>
```

Set the name of the project that will be used in the header of the template.


### readme

```bash
$ typedoc --readme <path/to/readme|none>
```

Path to the readme file that should be displayed on the index page. Pass none to disable the index page and start the documentation on the globals page.


### module

```bash
$ typedoc --module <commonjs or amd>
```

Specify module code generation: "commonjs" or "amd"


### target

```bash
$ typedoc --target <ES3 or ES5>
```

Specify ECMAScript target version: "ES3" (default), or "ES5"


### exclude

```bash
$ typedoc --exclude <pattern>
```

Exclude files by the given pattern when a path is provided as source


### theme

```bash
$ typedoc --theme <path/to/theme>
```

Specify the path to the theme that should be used


### includeDeclarations

```bash
$ typedoc --includeDeclarations
```

Turn on parsing of .d.ts declaration files.


### externalPattern

```bash
$ typedoc --externalPattern <pattern>
```

Define a pattern for files that should be considered being external.


### excludeExternals
```bash
$ typedoc --excludeExternals
```

Prevent externally resolved TypeScript files from being documented.


### gaID

```bash
$ typedoc --gaID
```

Set the Google Analytics tracking ID and activate tracking code.


### gaSite

```bash
$ typedoc --gaSite <site>
```

Set the site name for Google Analytics. Defaults to `auto`.


### hideGenerator
```bash
$ typedoc --hideGenerator
```

Do not print the TypeDoc link at the end of the page.


### verbose

```bash
$ typedoc --verbose
```

Print more information while TypeDoc is running.

### Help
```bash
$ typedoc --help
```
The help command will print all available options.

## Configuration Files

### typedoc.json
When running typedoc from the CLI, you can define any option except the entry files in a json file named `typedoc.json`.

```json
{
    "mode": "file",
    "out": "docs"
}
```

### tsconfig.json
TypeDoc options can be defined withing an existing `tsconfig.json` file. Use a `typedocOptions` section to define
options as a json model.
```json
{
    "compilerOptions": {
      "normalTypeScriptOptions": "here"
    },
    "typedocOptions": {
        "mode": "modules",
        "out": "docs"
    }
}
```

### Node module
If you would like dynamic configuration or would like to run typedoc without using the CLI, import the node module.
```javascript
const TypeDoc = require('typedoc');

const app = new TypeDoc.Application({
    mode:   'Modules',
    logger: 'none',
    target: 'ES5',
    module: 'CommonJS',
    experimentalDecorators: true
});

const project = app.convert(app.expandInputFiles(['src']));

if (project) { // Project may not have converted correctly
    const outputDir = 'docs';

    // Rendered docs
    app.generateDocs(project, outputDir);
    // Alternatively generate JSON output
    app.generateJson(project, outputDir + '/documentation.json');
}
```
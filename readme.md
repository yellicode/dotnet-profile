# .NET profile for Yellicode

Yellicode lets you build your own code generation templates with TypeScript. It consists of a Node.js CLI and extensible APIs, making it easy for developers to create, share and re-use code generators for their favorite programming languages and frameworks.

Check out [our website](https://www.yellicode.com) for more.

This package extends Yellicode with .NET types. You can import this package:
1. In Yellicode Modeler so that you can use .NET types in your code model.
2. In any code generation template that depends on the .NET types from this profile.

The current version of the .NET profile only contains the most common types from the System namespace. If a type that you need is not available and you think it might be a useful addition, feel free to report an issue at the GitHub repository. 

License: MIT

## Using the .NET profile in Yellicode Modeler
1. Open a project (or create a new one and make sure that is is saved).
2. In the REFERENCES tab in the project explorer, click the '+' icon and choose *NPM Package*.
3. Enter *@yellicode/dotnet-profile* and wait for the package to install.

After installing the package, you can apply the profile to your model or individual packages:
1. Right-click the model or package and Choose 'Apply Profile(s)'.
2. Select '.NET System'.
3. Now you can use the .NET types for your model model elements.

## Using the .NET profile in a code generation template
This profile provides an API that lets you check if a given element is a .NET type. For example, you can use the following code in your code generation template to map .NET types to SQL server types:
```ts
import * as DotNet from '@yellicode/dotnet-profile';
```
```ts
public getSqlServerTypeName(type: model.DataType): string {        
    if (DotNet.isGuid(type)){
        return "uniqueidentifier";
    }
    else if (DotNet.isDateTime(type)) {
        return "datetime";
    }
    // else if (....)        
}
```
### Prerequisites
In order to run a code generation template, you must have the CLI installed (@yellicode/cli) globally and have a valid *codegenconfig.json* file in your working directory. Please refer to the [installation instructions](https://www.yellicode.com/docs/installation) and the [quick start](https://www.yellicode.com/docs/quickstart) for more.

You should also have the *@yellicode/model* package installed in your working directory:
```
npm install @yellicode/model --save-dev
```

### Installation
Open a terminal/command prompt in your working directory and install this package as a dev dependency:

```
npm install @yellicode/dotnet-profile --save-dev
```
import * as elements from '@yellicode/elements';
import { Generator, TextWriter } from '@yellicode/templating';
import { TypeScriptWriter } from '@yellicode/typescript';

const className = 'DotNetTypeProvider';
const outputFile = 'dotnet-type-provider.ts';
const publishedDocumentPath = Generator.templateArgs.publishedDocumentPath;

// Get the model using noParse: this returns unparsed ymn document. We parse it here so that we have access to the profiles.
Generator.getModel<any>({ noParse: true }).then(documentData => {
    Generator.generate({ outputFile: outputFile }, (textWriter: TextWriter) => {
        const parsedDocument = elements.ModelReader.readDocument(documentData);
        const typeScript = new TypeScriptWriter(textWriter);

        // Write imports
        typeScript.writeLine(`import * as elements from '@yellicode/elements';`);
        typeScript.writeLine(`import { TypeResolver } from './type-resolver';`);
        typeScript.writeLine();
        typeScript.writeLine(`export class ${className}`);
        typeScript.writeCodeBlock(() => {
            typeScript.writeLine(`private static _instance: ${className};`);
            typeScript.writeLine(`private typeResolver: TypeResolver;`);
            typeScript.writeLine();
            // Write singleton/constructor
            typeScript.writeLine('private constructor()');
            typeScript.writeCodeBlock(() => {
                typeScript.writeLine(`this.typeResolver = new TypeResolver('${publishedDocumentPath}');`);

            });            
            typeScript.writeLine();
            typeScript.writeLine(`public static get Instance(): DotNetTypeProvider`);
            typeScript.writeCodeBlock(() => {
                typeScript.writeLine(`return this._instance || (this._instance = new this());`);
            })            
            if (parsedDocument && parsedDocument.profiles) {
                // parsedDocument.profiles is a Model, containing all profiles as packages
                parsedDocument.profiles.getAllTypes().forEach(type => {
                    typeScript.writeLine();
                    typeScript.writeJsDocDescription(`Returns a Type object that represents the ${type.getQualifiedName()} type.`)
                    typeScript.writeLine(`public get${type.name}(): elements.Type`);
                    typeScript.writeCodeBlock(() => {
                        typeScript.writeLine(`return this.typeResolver.getTypeById('${type.id}');`);
                    });                    
                });
            }
        })

    }
    );
})
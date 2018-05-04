"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model = require("@yellicode/model");
const templating_1 = require("@yellicode/templating");
const typescript_1 = require("@yellicode/typescript");
const className = 'DotNetTypeProvider';
const outputFile = 'dotnet-type-provider.ts';
const publishedDocumentPath = templating_1.Generator.templateArgs.publishedDocumentPath;
// Get the model using noParse: this returns unparsed ymn document. We parse it here so that we have access to the profiles.
templating_1.Generator.getModel({ noParse: true }).then(documentData => {
    templating_1.Generator.generate({ outputFile: outputFile }, (textWriter) => {
        const parsedDocument = model.ModelReader.readDocument(documentData);
        const typeScript = new typescript_1.TypeScriptWriter(textWriter);
        // Write imports
        typeScript.writeLine(`import * as model from '@yellicode/model';`);
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
            });
            if (parsedDocument && parsedDocument.profiles) {
                // parsedDocument.profiles is a Model, containing all profiles as packages
                parsedDocument.profiles.getAllTypes().forEach(type => {
                    typeScript.writeLine();
                    typeScript.writeJsDocDescription(`Returns a Type object that represents the ${type.getQualifiedName()} type.`);
                    typeScript.writeLine(`public get${type.name}(): model.Type`);
                    typeScript.writeCodeBlock(() => {
                        typeScript.writeLine(`return this.typeResolver.getTypeById('${type.id}');`);
                    });
                });
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG90bmV0LXR5cGUtcHJvdmlkZXIudGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkb3RuZXQtdHlwZS1wcm92aWRlci50ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBDQUEwQztBQUMxQyxzREFBOEQ7QUFDOUQsc0RBQXlEO0FBRXpELE1BQU0sU0FBUyxHQUFHLG9CQUFvQixDQUFDO0FBQ3ZDLE1BQU0sVUFBVSxHQUFHLHlCQUF5QixDQUFDO0FBQzdDLE1BQU0scUJBQXFCLEdBQUcsc0JBQVMsQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUM7QUFFM0UsNEhBQTRIO0FBQzVILHNCQUFTLENBQUMsUUFBUSxDQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFO0lBQzNELHNCQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxFQUFFLENBQUMsVUFBc0IsRUFBRSxFQUFFO1FBQ3RFLE1BQU0sY0FBYyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sVUFBVSxHQUFHLElBQUksNkJBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFcEQsZ0JBQWdCO1FBQ2hCLFVBQVUsQ0FBQyxTQUFTLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUNuRSxVQUFVLENBQUMsU0FBUyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7UUFDeEUsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3ZCLFVBQVUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDbEQsVUFBVSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUU7WUFDM0IsVUFBVSxDQUFDLFNBQVMsQ0FBQyw2QkFBNkIsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUNoRSxVQUFVLENBQUMsU0FBUyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7WUFDNUQsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3ZCLDhCQUE4QjtZQUM5QixVQUFVLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDOUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUU7Z0JBQzNCLFVBQVUsQ0FBQyxTQUFTLENBQUMseUNBQXlDLHFCQUFxQixLQUFLLENBQUMsQ0FBQztZQUU5RixDQUFDLENBQUMsQ0FBQztZQUNILFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN2QixVQUFVLENBQUMsU0FBUyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7WUFDekUsVUFBVSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUU7Z0JBQzNCLFVBQVUsQ0FBQyxTQUFTLENBQUMseURBQXlELENBQUMsQ0FBQztZQUNwRixDQUFDLENBQUMsQ0FBQTtZQUNGLEVBQUUsQ0FBQyxDQUFDLGNBQWMsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDNUMsMEVBQTBFO2dCQUMxRSxjQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDakQsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUN2QixVQUFVLENBQUMscUJBQXFCLENBQUMsNkNBQTZDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQTtvQkFDOUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxhQUFhLElBQUksQ0FBQyxJQUFJLGdCQUFnQixDQUFDLENBQUM7b0JBQzdELFVBQVUsQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFO3dCQUMzQixVQUFVLENBQUMsU0FBUyxDQUFDLHlDQUF5QyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDaEYsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDLENBQ0EsQ0FBQztBQUNOLENBQUMsQ0FBQyxDQUFBIn0=
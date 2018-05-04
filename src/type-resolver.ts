import * as model from '@yellicode/model';

// Map our extension so that node.js treats it as JSON when we use require(documentPath).
require.extensions['.ymn'] = require.extensions['.json'];

export class TypeResolver {
    private document: model.Document | null;

    constructor(documentPath: string) {
        const documentData = require(documentPath);
        // Alternative: const documentData = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../model/dotnet-profile.ymn'), 'utf8'));        
        this.document = documentData ? model.ModelReader.readDocument(documentData) : null;
    }

    public getTypeById(id: string): model.Type {
        if (!this.document)
            throw `Unable to get type with id '${id}'. The model document failed to load.`

        const element = this.document.findElementById(id);
        if (!element) {
            throw `Unable to get type with id '${id}'. The element could not be found.`
        }
        if (!model.isType(element)) {
            throw `Unable to get type with id '${id}'. The element is not a type.`
        }
        return element;
    }
}
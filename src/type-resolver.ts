import * as elements from '@yellicode/elements';

// Map our extension so that node.js treats it as JSON when we use require(documentPath).
require.extensions['.ymn'] = require.extensions['.json'];

export class TypeResolver {
    private document: elements.Document | null;

    constructor(documentPath: string) {
        const documentData = require(documentPath);
        // Alternative: const documentData = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../model/dotnet-profile.ymn'), 'utf8'));        
        this.document = documentData ? elements.ModelReader.readDocument(documentData) : null;
    }

    public getTypeById(id: string): elements.Type {
        if (!this.document)
            throw `Unable to get type with id '${id}'. The model document failed to load.`

        const element = this.document.findElementById(id);
        if (!element) {
            throw `Unable to get type with id '${id}'. The element could not be found.`
        }
        if (!elements.isType(element)) {
            throw `Unable to get type with id '${id}'. The element is not a type.`
        }
        return element;
    }
}
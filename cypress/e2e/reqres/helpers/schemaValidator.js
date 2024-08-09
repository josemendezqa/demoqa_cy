import Ajv from "ajv";
import addFormats from "ajv-formats";

const ajv = new Ajv();
addFormats(ajv);

export function validateSchema(schema, data) {
    const validate = ajv.compile(schema);
    const valid = validate(data);
    if (!valid) {
        console.error("Schema validation errors:", validate.errors);
    }
    return valid;
}

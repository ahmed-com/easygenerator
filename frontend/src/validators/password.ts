import { helpers } from "@vuelidate/validators";

const vPassword = helpers.regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/)

export const password = helpers.withMessage("Password must contain at least one letter, one number, and one special character", vPassword);
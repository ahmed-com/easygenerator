import {
  required as vRequired,
  email as vEmail,
  minLength as vMinLength,
  createI18nMessage,
} from "@vuelidate/validators";
import { i18n } from "@/plugins/i18n";

const withI18nMessage = createI18nMessage({ t: i18n.global.t.bind(i18n) });

export const required = withI18nMessage(vRequired);
export const email = withI18nMessage(vEmail);
export const minLength = withI18nMessage(vMinLength, { withArguments: true });
export { password } from "./password";

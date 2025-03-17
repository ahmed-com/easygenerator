import { helpers, createI18nMessage } from "@vuelidate/validators";
import { i18n } from "@/plugins/i18n";
import type { ValidationRuleWithoutParams } from "@vuelidate/core";

const withI18nMessage = createI18nMessage({ t: i18n.global.t.bind(i18n) });
const vPassword = helpers.regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/);

export const password: ValidationRuleWithoutParams<any> = withI18nMessage(
  vPassword,
  {
    messagePath: () => "validations.password",
  }
);

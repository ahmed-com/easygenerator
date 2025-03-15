import { createI18n } from "vue-i18n";
import { en as $en, ar as $ar, nl as $nl, de as $de } from "vuetify/locale";
import en from "@/locales/en.json";
import ar from "@/locales/ar.json";
import nl from "@/locales/nl.json";
import de from "@/locales/de.json";

export type Locale = "en" | "ar" | "nl" | "de";

type EnSchema = typeof en & { $vuetify: typeof $en };
type ArSchema = typeof ar & { $vuetify: typeof $ar };
type NlSchema = typeof nl & { $vuetify: typeof $nl };
type DeSchema = typeof de & { $vuetify: typeof $de };

export type MessageSchema = EnSchema; // the master schems, interchangeable with any other schema

export const i18n = createI18n<[MessageSchema], Locale, false, {}>({
  legacy: false,
  locale: (import.meta.env.VUE_APP_I18N_LOCALE as Locale) || "en",
  fallbackLocale:
    (import.meta.env.VUE_APP_I18N_FALLBACK_LOCALE as Locale) || "en",
  messages: {
    en: { ...en, $vuetify: $en },
    ar: { ...ar, $vuetify: $ar },
    nl: { ...nl, $vuetify: $nl },
    de: { ...de, $vuetify: $de },
  },
});

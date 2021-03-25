import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

export const sentry = () => {
    Sentry.init({
        dsn:
          "https://1ca76d280dac4fb4a03f003ae5cacae3@o368587.ingest.sentry.io/5666370",
        integrations: [new Integrations.BrowserTracing()],
        // We recommend adjusting this value in production, or using tracesSampler
        // for finer control
        tracesSampleRate: 1.0,
      });
}

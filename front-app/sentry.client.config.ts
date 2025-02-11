// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://86fa073084b4bb4215219df5c413c58e@o4508800634060800.ingest.us.sentry.io/4508800644153344",

  // Add optional integrations for additional features
  integrations: [Sentry.replayIntegration()],

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Define how likely Replay events are sampled.
  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // Define how likely Replay events are sampled when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
//에러예제
// try {
//   throw "에러  test";
// } catch (e) {
//   captureException(e);
// }
// captureMessage("captureMessage test");
// captureEvent({
//   message: "captureEvent test",
//   level: "error",
//   extra: { key: "value" }, // 추가 정보
// });
// 사용자 정보 추가
// Sentry.setUser({
//   id: "123456",
//   username,
//   email,
// });

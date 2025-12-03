export function parseIntent(json) {
  try {
    return JSON.parse(json);
  } catch (e) {
    console.error("Invalid Intent JSON", e);
    return { component: "ai-error", error: e.message };
  }
}

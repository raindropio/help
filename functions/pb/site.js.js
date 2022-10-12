export async function onRequest({ request }) {
  return fetch('https://plausible.io/js/plausible.js', request);
}

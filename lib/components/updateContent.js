// urlHelpers.js
export function updateContentParam(type) {
    const url = new URL(window.location);
    const params = new URLSearchParams(url.search);
    params.set('content', type);
    window.history.pushState({ content: type }, '', `${url.pathname}?${params.toString()}`);

    renderContentOnUrlChange();
}

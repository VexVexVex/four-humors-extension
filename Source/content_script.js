import popup from "./popup.js"

function walk(rootNode)
{
    //Find all text
    let walker = document.createTreeWalker(
            rootNode,
            NodeFilter.SHOW_TEXT,
            null,
        ),
        node;

    // Mod text node's values
    while (node = walker.nextNode()) {
        handleText(node);
    }
}

function handleText(textNode) {
    textNode.nodeValue = replaceText(textNode.nodeValue);
}

function replaceText(v)
{
    v = v.replace(/\b[hH]ufflepuff(s)?\b/g, popup.yellowBile);
    v = v.replace(/\b[gG]riffyndor(s)?\b/g, popup.blackBile);
    v = v.replace(/\b[rR]avenclaw(s)?\b/g, popup.phlegm);
    v = v.replace(/\b[sS]lytherin(s)?\b/g, popup.blood);
    return v;
}

// Returns true if deffo shouldn't alter a node
function isNoNoNode(node) {
    return node.isContentEditable ||
        (node.parentNode && node.parentNode.isContentEditable) ||
        (node.tagName && (node.tagName.toLowerCase() === "textarea" ||
                         node.tagName.toLowerCase() === "input"));
}

function observerCallback(mutations) {
    let i, node;

    mutations.forEach(function (mutation) {
        for (i = 0; i < mutation.addedNodes.length; i++) {
            node = mutation.addedNodes[i];
            if (isNoNoNode(node)) {

            } else if (node.nodeType === 3) {
                handleText(node);
            } else {
                walk(node);
            }
        }
    });
}

function walkAndObserve(doc) {
    let docTitle = doc.getElementsByTagName('title')[0],
    observerConfig = {
        characterData: true,
        childList: true,
        subtree: true
    },
    bodyObserver, titleObserver;

    walk(doc.body);
    doc.title = replaceText(doc.title);

    bodyObserver = new MutationObserver(observerCallback);
    bodyObserver.observe(doc.body, observerConfig);

    if (docTitle) {
        titleObserver = new MutationObserver(observerCallback);
        titleObserver.observe(docTitle, observerConfig);
    }
}
walkAndObserve(document);
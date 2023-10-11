import {data, schema} from '@params';

console.log(schema)

document.addEventListener('DOMContentLoaded', function() {
    function wrapEmails(textNode) {
        let content = textNode.nodeValue;
        if(content) {
            for(let employee of data.employees) {
                content = content?.replace(employee.official_email, `<span class="popup" data-ref="${employee.official_email}" style="color: red">${employee.official_email}</span>`);
            }
            const span = document.createElement('span');
            span.innerHTML = content;
            while (span.firstChild) {
                textNode.parentNode.insertBefore(span.firstChild, textNode);
            }
            textNode.parentNode.removeChild(textNode);
        }
    }

    function addClickListenerToSpans(element) {
        const popupSpans = element.querySelectorAll('span.popup');
        popupSpans.forEach(popupSpan => {
            popupSpan.onclick = function(event) {
                event.preventDefault();
            };
        });
    }
    
    function removeClickListenerFromSpans(element) {
        const popupSpans = element.querySelectorAll('span.popup');
        popupSpans.forEach(popupSpan => {
            popupSpan.onclick = null;
        });
    }

    function traverseAndReplace(node) {
        if (node.nodeType === 3) { // Check if it's a text node
            wrapEmails(node);
        } else {
            for (let child of node.childNodes) {
                traverseAndReplace(child);
            }
        }
    }

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                traverseAndReplace(entry.target);
                addClickListenerToSpans(entry.target);
            } else {
                removeClickListenerFromSpans(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    });

    const articles = document.querySelectorAll('article');
    articles.forEach(article => {
        observer.observe(article);
    });
});

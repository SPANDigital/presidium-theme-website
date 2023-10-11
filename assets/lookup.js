import {data, schema} from '@params';

document.addEventListener('DOMContentLoaded', function() {
    function wrapEmails(textNode) {
        let content = textNode.nodeValue;
        if(content) {
            for(let employee of data.employees) {
                content = content?.replace(employee.official_email, `<span class="popup" id="${employee.employee_id}" style="color: red">${employee.official_email}</span>`);
                tippy(`#${employee.employee_id}`, {
                    content: `${ employee.first_name } ${ employee.middle_name } ${ employee.last_name }, a member of the SPAN team with the employee ID ${ employee.employee_id }. Currently, ${ employee.first_name } holds the position of ${ employee.designation } and is employed with us on a ${ employee.employee_type } basis. If you wish to reach out, you can contact ${ employee.first_name } at their official Span email: ${ employee.official_email } or their personal email: ${ employee.personal_email }. ${ employee.first_name } began their journey with Span on ${ employee.joining_date } and has been contributing to the ${ employee.territory } territory. All of ${ employee.first_name }'s efforts are overseen by ${ employee.reporting_to }.`,
                  });
            }
            const span = document.createElement('span');
            span.innerHTML = content;
            while (span.firstChild) {
                textNode.parentNode.insertBefore(span.firstChild, textNode);
            }
            textNode.parentNode.removeChild(textNode);
        }
    }

    function onHover(event) {
        const email = event.target.getAttribute('data-ref');
        console.log(email);
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

    function containsRef(target) {
        const content = target.textContent;
        const options = data.employees.map(x => x.official_email).join('|');
        const regex = new RegExp(options, 'i');
        return regex.test(content);
    }

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if(containsRef(entry.target)) {
                    traverseAndReplace(entry.target);
                }
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

document.addEventListener('DOMContentLoaded', function () {
    const lista = document.getElementById('lista');
    let draggingElement;

    lista.addEventListener('dragstart', function (event) {
        draggingElement = event.target;
        event.dataTransfer.setData('text/plain', null);
        draggingElement.classList.add('dragging');
    });

    lista.addEventListener('dragover', function (event) {
        event.preventDefault();
        const targetElement = event.target;
        if (targetElement !== draggingElement && targetElement.tagName === 'LI') {
            const rect = targetElement.getBoundingClientRect();
            const nextSibling = (event.clientY < rect.top + rect.height / 2) ? targetElement : targetElement.nextSibling;
            lista.insertBefore(draggingElement, nextSibling);
        }
    });

    lista.addEventListener('dragend', function () {
        draggingElement.classList.remove('dragging');
    });
});

function toggleFaq(el) {
    const answer = el.querySelector('.faq-a');
    const icon = el.querySelector('.faq-q span');
    const isOpen = answer.style.display === 'block';
    document.querySelectorAll('.faq-a').forEach(a => a.style.display = 'none');
    document.querySelectorAll('.faq-q span').forEach(s => s.textContent = '+');
    if (!isOpen) {
        answer.style.display = 'block';
        icon.textContent = '−';
    }
}

function switchFaqTab(tab) {
    const isCliente = tab === 'cliente';
    document.getElementById('faqs-cliente').style.display = isCliente ? 'block' : 'none';
    document.getElementById('faqs-negocio').style.display = isCliente ? 'none' : 'block';
    document.getElementById('tab-cliente').style.background = isCliente ? '#D86018' : 'transparent';
    document.getElementById('tab-cliente').style.color = isCliente ? 'white' : '#666';
    document.getElementById('tab-negocio').style.background = isCliente ? 'transparent' : '#D86018';
    document.getElementById('tab-negocio').style.color = isCliente ? '#666' : 'white';
    document.querySelectorAll('.faq-a').forEach(a => a.style.display = 'none');
    document.querySelectorAll('.faq-q span').forEach(s => s.textContent = '+');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

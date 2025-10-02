// Aguarda o carregamento completo do HTML antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA PARA O FORMULÁRIO ---
    const contactForm = document.querySelector('#contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            // Previne o comportamento padrão do formulário (que é recarregar a página)
            event.preventDefault();

            const submitButton = contactForm.querySelector('button');
            const formContainer = document.querySelector('#contato');

            // Simula o estado de "carregando"
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';

            // Simula um tempo de espera (2 segundos) antes de mostrar o sucesso
            setTimeout(() => {
                // Substitui o formulário por uma mensagem de sucesso
                formContainer.innerHTML = `
                    <div class="success-message">
                        <h2>Obrigado! ✨</h2>
                        <p>Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.</p>
                    </div>
                `;
            }, 2000);
        });
    }


    // --- LÓGICA PARA AS ANIMAÇÕES AO ROLAR A PÁGINA ---
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

});

// Adiciona um pequeno estilo para a mensagem de sucesso
const style = document.createElement('style');
style.innerHTML = `
.success-message {
    text-align: center;
    padding: 40px 20px;
    animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;
document.head.appendChild(style);
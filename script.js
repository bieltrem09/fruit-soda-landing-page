const slider = document.querySelector('.slider');
const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const flavorTitle = document.getElementById('flavor-title');

// NOVO: Pega todos os itens da roda
const items = document.querySelectorAll('.item'); 

let rotation = 0; 
let activeIndex = 0; 

// A ORDEM AQUI (0, 1, 2, 3) DEVE SER A MESMA DAS LATAS NO HTML (--i: 0, 1, 2, 3)
const slideData = [
    { color: '#5a81cc', title: 'Blueberry' },   // Lata 0 (Azul)
    { color: '#ebb39d', title: 'Orange' },  // Lata 1 (Rosa - Mudei para cá)
    { color: '#93d25b', title: 'Green Apple' },      // Lata 2 (Laranja/Pêssego)
    { color: '#ea8ba7', title: 'Strawberry' }  // Lata 3 (Verde)
];

function updateUI() {
    flavorTitle.style.opacity = 0;

    // NOVO: Adiciona a classe "active" apenas no item do centro
    items.forEach((item, index) => {
        if (index === activeIndex) {
            item.classList.add('active'); // Deixa grande e visível
        } else {
            item.classList.remove('active'); // Esconde e diminui
        }
    });

    setTimeout(() => {
        carousel.style.background = slideData[activeIndex].color;
        flavorTitle.innerText = slideData[activeIndex].title;
        flavorTitle.style.opacity = 1;
    }, 400); 
}

nextBtn.addEventListener('click', () => {
    rotation -= 90; 
    slider.style.transform = `rotate(${rotation}deg)`;
    
    activeIndex++;
    if (activeIndex > 3) activeIndex = 0;
    
    updateUI();
});

prevBtn.addEventListener('click', () => {
    rotation += 90; 
    slider.style.transform = `rotate(${rotation}deg)`;
    
    activeIndex--;
    if (activeIndex < 0) activeIndex = 3;
    
    updateUI();
});

// AQUI ESTÁ A CORREÇÃO: Adicione esta linha no final do arquivo!
updateUI();
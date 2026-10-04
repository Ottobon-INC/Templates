document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const gridContainer = document.getElementById('gridContainer');
    const templateCountEl = document.querySelector('.count-number');
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    const sortSelect = document.getElementById('sortSelect');
    const refreshBtn = document.getElementById('refreshBtn');
    
    const loadingState = document.getElementById('loadingState');
    const emptyState = document.getElementById('emptyState');
    const noResultsState = document.getElementById('noResultsState');
    const clearSearchActionBtn = document.getElementById('clearSearchActionBtn');
    
    const previewModal = document.getElementById('previewModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalPreviewArea = document.getElementById('modalPreviewArea');
    const modalTitle = document.getElementById('modalTitle');
    const modalPath = document.getElementById('modalPath');
    const modalOpenBtn = document.getElementById('modalOpenBtn');

    // State
    let templates = [];
    let currentSearch = '';
    let currentSort = 'name-asc';

    // Initialization
    fetchTemplates();

    // Event Listeners
    refreshBtn.addEventListener('click', () => {
        const icon = refreshBtn.querySelector('svg');
        icon.style.transform = 'rotate(180deg)';
        icon.style.transition = 'transform 0.3s ease';
        setTimeout(() => { icon.style.transform = ''; }, 300);
        
        fetchTemplates();
    });

    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        clearSearchBtn.style.display = currentSearch ? 'flex' : 'none';
        renderCards();
    });

    clearSearchBtn.addEventListener('click', clearSearch);
    clearSearchActionBtn.addEventListener('click', clearSearch);

    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderCards();
    });
    
    modalCloseBtn.addEventListener('click', closeModal);
    previewModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-backdrop')) {
            closeModal();
        }
    });
    
    // Functions
    function clearSearch() {
        searchInput.value = '';
        currentSearch = '';
        clearSearchBtn.style.display = 'none';
        renderCards();
    }

    async function fetchTemplates() {
        showState('loading');
        try {
            const response = await fetch('/api/templates');
            if (response.ok) {
                templates = await response.json();
                renderCards();
            } else {
                console.error('Failed to fetch templates');
                showState('empty');
            }
        } catch (error) {
            console.error('Error fetching templates:', error);
            showState('empty');
        }
    }

    function renderCards() {
        gridContainer.innerHTML = '';
        
        if (templates.length === 0) {
            showState('empty');
            updateCount(0);
            return;
        }

        let filtered = templates.filter(t => t.name.toLowerCase().includes(currentSearch));
        
        if (filtered.length === 0) {
            showState('noResults');
            updateCount(0);
            return;
        }

        // Sorting
        filtered.sort((a, b) => {
            if (currentSort === 'name-asc') return a.name.localeCompare(b.name);
            if (currentSort === 'name-desc') return b.name.localeCompare(a.name);
            return 0;
        });

        showState('grid');
        updateCount(templates.length);

        filtered.forEach((template, index) => {
            const card = document.createElement('div');
            card.className = 'template-card';
            // Stagger animation
            card.style.animationDelay = `${index * 0.05}s`;
            
            const hasEntry = !!template.entry;
            const fullLink = hasEntry ? template.path + template.entry : '#';
            
            const match = template.name.match(/^HT-\d+/i);
            const displayName = match ? match[0].toUpperCase() : template.name;
            
            let btnContent = hasEntry
                ? `<a href="${fullLink}" class="minimal-card-link" target="_blank">
                    <div class="card-content minimal-content">
                        <span class="card-category">TEMPLATE</span>
                        <h3 class="card-title">${displayName}</h3>
                        <div class="minimal-hover-arrow">→</div>
                    </div>
                   </a>`
                : `<div class="minimal-card-link disabled">
                    <div class="card-content minimal-content">
                        <span class="card-category" style="color: #999;">UNAVAILABLE</span>
                        <h3 class="card-title" style="color: #999;">${displayName}</h3>
                    </div>
                   </div>`;

            card.innerHTML = btnContent;
            
            gridContainer.appendChild(card);
        });
    }

    function openModal(template) {
        modalTitle.textContent = template.name;
        
        const hasEntry = !!template.entry;
        const fullLink = hasEntry ? template.path + template.entry : '#';
        
        modalPath.textContent = `Local Path: MAIN-WEBSITES/${template.name}/${template.entry || 'No entry point'}`;
        
        if (template.preview) {
            modalPreviewArea.innerHTML = `<img src="${template.preview}" alt="${template.name} preview">`;
        } else {
            modalPreviewArea.innerHTML = `
                <div class="placeholder">
                    <h2 style="color: var(--color-plum); font-size: 2rem;">${template.name}</h2>
                    <p style="margin-top: 1rem;">No preview image available</p>
                </div>
            `;
        }
        
        if (hasEntry) {
            modalOpenBtn.href = fullLink;
            modalOpenBtn.style.display = 'inline-flex';
            modalOpenBtn.textContent = 'Open Website';
            modalOpenBtn.innerHTML = 'Open Website <span class="arrow">→</span>';
            modalOpenBtn.className = 'btn-primary';
        } else {
            modalOpenBtn.href = '#';
            modalOpenBtn.style.display = 'inline-block';
            modalOpenBtn.textContent = 'Unavailable';
            modalOpenBtn.className = 'btn-secondary btn-disabled';
        }
        
        previewModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    
    function closeModal() {
        previewModal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    function showState(state) {
        loadingState.classList.add('hidden');
        emptyState.classList.add('hidden');
        noResultsState.classList.add('hidden');
        gridContainer.style.display = 'none';
        
        if (state === 'loading') {
            loadingState.classList.remove('hidden');
        } else if (state === 'empty') {
            emptyState.classList.remove('hidden');
        } else if (state === 'noResults') {
            noResultsState.classList.remove('hidden');
        } else if (state === 'grid') {
            gridContainer.style.display = 'grid';
        }
    }

    function updateCount(count) {
        const formattedCount = count < 10 && count > 0 ? `0${count}` : count;
        templateCountEl.textContent = formattedCount;
    }
});

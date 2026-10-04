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

    // Auto-refresh status periodically
    setInterval(() => {
        refreshStatusQuietly();
    }, 4000);

    // Event Listeners
    refreshBtn.addEventListener('click', () => {
        const icon = refreshBtn.querySelector('svg');
        if (icon) {
            icon.style.transform = 'rotate(180deg)';
            icon.style.transition = 'transform 0.3s ease';
            setTimeout(() => { icon.style.transform = ''; }, 300);
        }
        
        fetchTemplates();
    });

    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase().trim();
        clearSearchBtn.style.display = currentSearch ? 'flex' : 'none';
        renderCards();
    });

    clearSearchBtn.addEventListener('click', clearSearch);
    clearSearchActionBtn.addEventListener('click', clearSearch);

    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderCards();
    });
    
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (previewModal) {
        previewModal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-backdrop')) {
                closeModal();
            }
        });
    }
    
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

    async function refreshStatusQuietly() {
        try {
            const response = await fetch('/api/templates');
            if (response.ok) {
                const updated = await response.json();
                // Check if any status changed
                let changed = false;
                if (updated.length !== templates.length) {
                    changed = true;
                } else {
                    for (let i = 0; i < updated.length; i++) {
                        if (updated[i].isRunning !== templates[i]?.isRunning || updated[i].port !== templates[i]?.port) {
                            changed = true;
                            break;
                        }
                    }
                }
                if (changed) {
                    templates = updated;
                    renderCards();
                }
            }
        } catch (e) {}
    }

    function renderCards() {
        gridContainer.innerHTML = '';
        
        if (templates.length === 0) {
            showState('empty');
            updateCount(0);
            return;
        }

        const searchLower = currentSearch.toLowerCase();
        let filtered = templates.filter(t => {
            return t.name.toLowerCase().includes(searchLower) || 
                   (t.title && t.title.toLowerCase().includes(searchLower)) ||
                   (t.category && t.category.toLowerCase().includes(searchLower));
        });
        
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
            card.style.animationDelay = `${index * 0.05}s`;
            
            const displayName = template.displayName || template.name;
            const fullLink = template.launchUrl || (template.entry ? template.path + template.entry : '#');
            const hasEntry = template.entry !== null;
            
            const isRunning = template.isRunning;
            const statusBadge = isRunning 
                ? `<span class="status-indicator running"><span class="pulse-dot"></span> Running on :${template.port}</span>`
                : `<span class="status-indicator ready">Ready to launch</span>`;
            
            const typeTag = template.type ? `<span class="card-type-tag">${template.type.toUpperCase()}</span>` : '';
            const category = template.category || 'Template';

            let btnContent = hasEntry
                ? `<a href="${fullLink}" class="minimal-card-link" target="_blank" title="Launch ${displayName}">
                    <div class="card-content minimal-content">
                        <div class="card-badges">
                            <span class="card-category">${category}</span>
                            ${typeTag}
                        </div>
                        <h3 class="card-title">${displayName}</h3>
                        ${template.title && template.title !== displayName ? `<p class="card-subtitle">${template.title}</p>` : ''}
                        <div class="card-status-bar">
                            ${statusBadge}
                        </div>
                        <div class="minimal-hover-arrow">
                            <span>Open</span> →
                        </div>
                    </div>
                   </a>`
                : `<div class="minimal-card-link disabled">
                    <div class="card-content minimal-content">
                        <div class="card-badges">
                            <span class="card-category" style="color: #999;">UNAVAILABLE</span>
                        </div>
                        <h3 class="card-title" style="color: #999;">${displayName}</h3>
                    </div>
                   </div>`;

            card.innerHTML = btnContent;
            gridContainer.appendChild(card);
        });
    }

    function openModal(template) {
        if (!previewModal) return;
        modalTitle.textContent = template.title || template.name;
        
        const hasEntry = template.entry !== null;
        const fullLink = template.launchUrl || (hasEntry ? template.path + template.entry : '#');
        
        modalPath.textContent = `Local Path: Hospital-Templates/${template.name}`;
        
        if (template.preview) {
            modalPreviewArea.innerHTML = `<img src="${template.preview}" alt="${template.name} preview">`;
        } else {
            modalPreviewArea.innerHTML = `
                <div class="placeholder">
                    <h2 style="color: var(--color-plum); font-size: 2rem;">${template.name}</h2>
                    <p style="margin-top: 1rem;">${template.title || 'Healthcare Website Template'}</p>
                </div>
            `;
        }
        
        if (hasEntry) {
            modalOpenBtn.href = fullLink;
            modalOpenBtn.style.display = 'inline-flex';
            modalOpenBtn.innerHTML = 'Open Website <span class="arrow">→</span>';
            modalOpenBtn.className = 'btn-primary';
        } else {
            modalOpenBtn.href = '#';
            modalOpenBtn.style.display = 'inline-block';
            modalOpenBtn.textContent = 'Unavailable';
            modalOpenBtn.className = 'btn-secondary btn-disabled';
        }
        
        previewModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        if (!previewModal) return;
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

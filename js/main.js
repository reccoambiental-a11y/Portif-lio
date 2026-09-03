/**
 * Portfólio Bruno P. Recco - Gestor Ambiental & Especialista GIS
 * Lógica de Interatividade, Filtros, Modal Lightbox com Zoom/Pan e Efeitos
 */

document.addEventListener('DOMContentLoaded', () => {
  initTypingEffect();
  initHeaderAndNav();
  initGalleryAndFilters();
  initModalLightbox();
  initCopyActions();
});

/* --------------------------------------------------------------------------
   1. Efeito de Digitação (Typing & Erasing Effect)
   -------------------------------------------------------------------------- */
function initTypingEffect() {
  const typingElement = document.getElementById('typingText');
  if (!typingElement) return;

  const words = [
    'Gestão Ambiental',
    'Geoprocessamento',
    'Análise Espacial'
  ];

  const TYPE_SPEED   = 90;   // ms por caractere digitando
  const DELETE_SPEED = 40;   // ms por caractere apagando
  const PAUSE_AFTER  = 2400; // ms pausa após palavra completa
  const PAUSE_BEFORE = 500;  // ms pausa antes de digitar próxima palavra

  let wordIndex  = 0;
  let charIndex  = 0;
  let isDeleting = false;
  let isPaused   = false;

  function tick() {
    if (isPaused) return; // segurança extra — nunca deve ocorrer

    const currentWord = words[wordIndex];

    if (isDeleting) {
      // Apaga um caractere
      charIndex--;
      typingElement.textContent = currentWord.substring(0, charIndex);

      if (charIndex === 0) {
        // Palavra totalmente apagada → avança para a próxima e pausa antes de digitar
        isDeleting = false;
        wordIndex  = (wordIndex + 1) % words.length;
        isPaused   = true;
        setTimeout(() => {
          isPaused = false;
          tick();
        }, PAUSE_BEFORE);
        return;
      }

      setTimeout(tick, DELETE_SPEED);

    } else {
      // Digita um caractere
      charIndex++;
      typingElement.textContent = currentWord.substring(0, charIndex);

      if (charIndex === currentWord.length) {
        // Palavra completa → pausa antes de apagar
        isPaused = true;
        setTimeout(() => {
          isPaused   = false;
          isDeleting = true;
          tick();
        }, PAUSE_AFTER);
        return;
      }

      setTimeout(tick, TYPE_SPEED);
    }
  }

  // Inicia com um pequeno delay para a página carregar visualmente
  setTimeout(tick, 600);
}

/* --------------------------------------------------------------------------
   2. Cabeçalho, Scroll e Navegação Mobile
   -------------------------------------------------------------------------- */
function initHeaderAndNav() {
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Efeito sticky header ao rolar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
    highlightCurrentSection();
  }, { passive: true });

  // Toggle mobile menu
  navToggle?.addEventListener('click', () => {
    navLinks?.classList.toggle('open');
    const isExpanded = navLinks?.classList.contains('open');
    navToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
  });

  // Scroll suave avançado para todos os links internos (âncoras)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const headerHeight = header ? header.offsetHeight : 76;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight + 5;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Atualiza URL sem pulo
          if (history.pushState) {
            history.pushState(null, null, targetId);
          }

          // Fecha menu mobile se estiver aberto
          navLinks?.classList.remove('open');
          navToggle?.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // Highlight da seção ativa
  function highlightCurrentSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const currentLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        currentLink?.classList.add('active');
      }
    });
  }
}

/* --------------------------------------------------------------------------
   3. Renderização da Galeria de Mapas & Filtros
   -------------------------------------------------------------------------- */
let currentFilteredMaps = [...MAPS_DATA];
let currentModalIndex = 0;

function initGalleryAndFilters() {
  const galleryGrid = document.getElementById('mapsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!galleryGrid) return;

  // Atualizar contadores nos botões
  updateFilterCounts();

  // Renderizar grid inicial
  renderGalleryCards(MAPS_DATA);

  // Manipular cliques de filtro
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      if (filter === 'all') {
        currentFilteredMaps = [...MAPS_DATA];
      } else {
        currentFilteredMaps = MAPS_DATA.filter(item => item.category === filter);
      }

      renderGalleryCards(currentFilteredMaps);
    });
  });
}

function updateFilterCounts() {
  const countAll = MAPS_DATA.length;
  const countLoc = MAPS_DATA.filter(m => m.category === 'localizacao').length;
  const countTem = MAPS_DATA.filter(m => m.category === 'tematico').length;
  const countAna = MAPS_DATA.filter(m => m.category === 'analitico').length;

  document.getElementById('countAll') && (document.getElementById('countAll').textContent = countAll);
  document.getElementById('countLoc') && (document.getElementById('countLoc').textContent = countLoc);
  document.getElementById('countTem') && (document.getElementById('countTem').textContent = countTem);
  document.getElementById('countAna') && (document.getElementById('countAna').textContent = countAna);
}

function renderGalleryCards(maps) {
  const galleryGrid = document.getElementById('mapsGrid');
  if (!galleryGrid) return;

  galleryGrid.innerHTML = '';

  maps.forEach((map, index) => {
    const card = document.createElement('article');
    card.className = 'map-card';
    card.setAttribute('data-id', map.id);
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Ver detalhes do mapa: ${map.title}`);

    // Badge styling
    let badgeClass = 'badge-emerald';
    if (map.category === 'localizacao') badgeClass = 'badge-cyan';
    if (map.category === 'analitico') badgeClass = 'badge-indigo';

    card.innerHTML = `
      <div class="map-card-thumb-wrap">
        <span class="map-badge-tag ${badgeClass}">${map.badge}</span>
        <img 
          class="map-card-img" 
          src="${encodeURI(map.thumbnail)}" 
          alt="${map.title}" 
          loading="lazy" 
          decoding="async" 
          width="800" 
          height="500"
        />
        <div class="map-thumb-overlay">
          <span class="zoom-indicator">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
            Ver em Alta Resolução
          </span>
        </div>
      </div>
      <div class="map-card-body">
        <div class="map-card-header">
          <span class="map-code-label">PRODUTO CARTOGRÁFICO #${map.code}</span>
          <h3 class="map-card-title">${map.title}</h3>
        </div>
        <p class="map-card-desc">${map.shortDesc}</p>
        <div class="map-card-footer">
          <span class="map-card-btn">
            Explorar Mapa & Metadados
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </div>
      </div>
    `;

    // Abrir modal ao clicar ou pressionar Enter
    card.addEventListener('click', () => openModalByMapId(map.id));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModalByMapId(map.id);
      }
    });

    galleryGrid.appendChild(card);
  });
}

/* --------------------------------------------------------------------------
   4. Modal Lightbox (Alta Resolução + Zoom + Pan + Metadados)
   -------------------------------------------------------------------------- */
let zoomScale = 1;
let translateX = 0;
let translateY = 0;
let isPanning = false;
let startX = 0;
let startY = 0;

function initModalLightbox() {
  const modalBackdrop = document.getElementById('mapModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const prevBtn = document.getElementById('modalPrevBtn');
  const nextBtn = document.getElementById('modalNextBtn');

  // Zoom buttons
  const zoomInBtn = document.getElementById('zoomInBtn');
  const zoomOutBtn = document.getElementById('zoomOutBtn');
  const zoomResetBtn = document.getElementById('zoomResetBtn');

  // Fechar modal
  closeBtn?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  // Navegação
  prevBtn?.addEventListener('click', showPreviousMap);
  nextBtn?.addEventListener('click', showNextMap);

  // Zoom controls
  zoomInBtn?.addEventListener('click', () => applyZoom(0.3));
  zoomOutBtn?.addEventListener('click', () => applyZoom(-0.3));
  zoomResetBtn?.addEventListener('click', resetZoom);

  // Pan / Drag na imagem
  const imgContainer = document.getElementById('modalImgContainer');
  const hiresImg = document.getElementById('modalHiresImg');

  if (imgContainer && hiresImg) {
    imgContainer.addEventListener('mousedown', (e) => {
      if (zoomScale > 1) {
        isPanning = true;
        startX = e.clientX - translateX;
        startY = e.clientY - translateY;
        imgContainer.classList.add('dragging');
      }
    });

    window.addEventListener('mousemove', (e) => {
      if (!isPanning) return;
      translateX = e.clientX - startX;
      translateY = e.clientY - startY;
      updateTransform();
    });

    window.addEventListener('mouseup', () => {
      isPanning = false;
      imgContainer.classList.remove('dragging');
    });

    // Zoom via roda do mouse
    imgContainer.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 0.2 : -0.2;
      applyZoom(delta);
    }, { passive: false });

    // Touch support para mobile (arraste com toque)
    let touchStartX = 0;
    let touchStartY = 0;

    imgContainer.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1 && zoomScale > 1) {
        isPanning = true;
        touchStartX = e.touches[0].clientX - translateX;
        touchStartY = e.touches[0].clientY - translateY;
      }
    }, { passive: true });

    imgContainer.addEventListener('touchmove', (e) => {
      if (!isPanning || e.touches.length !== 1) return;
      translateX = e.touches[0].clientX - touchStartX;
      translateY = e.touches[0].clientY - touchStartY;
      updateTransform();
    }, { passive: true });

    imgContainer.addEventListener('touchend', () => {
      isPanning = false;
    });
  }

  // Atalhos de Teclado (Acessibilidade)
  window.addEventListener('keydown', (e) => {
    if (!modalBackdrop?.classList.contains('active')) return;

    switch (e.key) {
      case 'Escape':
        closeModal();
        break;
      case 'ArrowLeft':
        showPreviousMap();
        break;
      case 'ArrowRight':
        showNextMap();
        break;
      case '+':
      case '=':
        applyZoom(0.25);
        break;
      case '-':
      case '_':
        applyZoom(-0.25);
        break;
      case '0':
        resetZoom();
        break;
    }
  });
}

function applyZoom(delta) {
  const newScale = Math.min(Math.max(1, zoomScale + delta), 4.5);
  zoomScale = Math.round(newScale * 100) / 100;
  if (zoomScale === 1) {
    translateX = 0;
    translateY = 0;
  }
  updateTransform();
  updateZoomLabel();
}

function resetZoom() {
  zoomScale = 1;
  translateX = 0;
  translateY = 0;
  updateTransform();
  updateZoomLabel();
}

function updateTransform() {
  const hiresImg = document.getElementById('modalHiresImg');
  if (hiresImg) {
    hiresImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${zoomScale})`;
  }
}

function updateZoomLabel() {
  const zoomLabel = document.getElementById('zoomLevelLabel');
  if (zoomLabel) {
    zoomLabel.textContent = `${Math.round(zoomScale * 100)}%`;
  }
}

function openModalByMapId(id) {
  const index = currentFilteredMaps.findIndex(m => m.id === id);
  if (index !== -1) {
    currentModalIndex = index;
    renderModalContent(currentFilteredMaps[currentModalIndex]);
  }
}

function showPreviousMap() {
  if (currentFilteredMaps.length === 0) return;
  currentModalIndex = (currentModalIndex - 1 + currentFilteredMaps.length) % currentFilteredMaps.length;
  renderModalContent(currentFilteredMaps[currentModalIndex]);
}

function showNextMap() {
  if (currentFilteredMaps.length === 0) return;
  currentModalIndex = (currentModalIndex + 1) % currentFilteredMaps.length;
  renderModalContent(currentFilteredMaps[currentModalIndex]);
}

function renderModalContent(map) {
  const modalBackdrop = document.getElementById('mapModal');
  const modalTitle = document.getElementById('modalHeaderTitle');
  const modalBadge = document.getElementById('modalCategoryBadge');
  const modalHiresImg = document.getElementById('modalHiresImg');
  const modalSpinner = document.getElementById('modalSpinner');
  const modalInfoTitle = document.getElementById('modalInfoTitle');
  const modalInfoSubtitle = document.getElementById('modalInfoSubtitle');
  const modalDescContainer = document.getElementById('modalDescContainer');
  const modalMetadataTable = document.getElementById('modalMetadataTable');
  const modalTagsContainer = document.getElementById('modalTagsContainer');
  const modalDownloadBtn = document.getElementById('modalDownloadBtn');
  const modalOpenTabBtn = document.getElementById('modalOpenTabBtn');

  if (!modalBackdrop) return;

  // Resetar zoom
  resetZoom();

  // Preencher textos
  modalTitle && (modalTitle.textContent = map.title);
  modalInfoTitle && (modalInfoTitle.textContent = map.title);
  modalInfoSubtitle && (modalInfoSubtitle.textContent = map.subtitle || map.categoryLabel);

  // Badge da categoria
  if (modalBadge) {
    modalBadge.textContent = map.badge;
    modalBadge.className = 'modal-category-badge';
    if (map.category === 'localizacao') modalBadge.classList.add('badge-cyan');
    else if (map.category === 'analitico') modalBadge.classList.add('badge-indigo');
    else modalBadge.classList.add('badge-emerald');
  }

  // Imagem de alta resolução com carregamento suave
  if (modalHiresImg && modalSpinner) {
    modalSpinner.style.display = 'flex';
    modalHiresImg.style.opacity = '0';

    const tempImg = new Image();
    tempImg.src = encodeURI(map.fullImage);
    tempImg.onload = () => {
      modalHiresImg.src = encodeURI(map.fullImage);
      modalHiresImg.alt = map.title;
      modalSpinner.style.display = 'none';
      modalHiresImg.style.opacity = '1';
    };
    tempImg.onerror = () => {
      // Fallback para thumbnail se o original falhar
      modalHiresImg.src = encodeURI(map.thumbnail);
      modalSpinner.style.display = 'none';
      modalHiresImg.style.opacity = '1';
    };
  }

  // Descrição completa estruturada
  if (modalDescContainer) {
    let paragraphsHtml = map.fullDesc.map(p => `<p>${p}</p>`).join('');
    if (map.technicalNote) {
      paragraphsHtml += `<div class="modal-note-box"><p>${map.technicalNote}</p></div>`;
    }
    modalDescContainer.innerHTML = paragraphsHtml;
  }

  // Tabela de metadados técnicos
  if (modalMetadataTable) {
    modalMetadataTable.innerHTML = map.metadata.map(item => `
      <tr>
        <td class="metadata-label">${item.label}</td>
        <td class="metadata-value">${item.value}</td>
      </tr>
    `).join('');
  }

  // Tags
  if (modalTagsContainer) {
    modalTagsContainer.innerHTML = map.tags.map(tag => `
      <span class="modal-tag-pill">#${tag}</span>
    `).join('');
  }

  // Botões de download e nova aba
  if (modalDownloadBtn) {
    modalDownloadBtn.href = encodeURI(map.fullImage);
    modalDownloadBtn.setAttribute('download', `${map.code}-${map.title}.png`);
  }
  if (modalOpenTabBtn) {
    modalOpenTabBtn.href = encodeURI(map.fullImage);
  }

  // Abrir modal e bloquear scroll da página
  modalBackdrop.classList.add('active');
  modalBackdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modalBackdrop = document.getElementById('mapModal');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('active');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    resetZoom();
  }
}

/* --------------------------------------------------------------------------
   5. Ações de Contato & Copiar Telefone
   -------------------------------------------------------------------------- */
function initCopyActions() {
  const copyPhoneBtn = document.getElementById('copyPhoneBtn');
  const copyEmailBtn = document.getElementById('copyEmailBtn');

  function copyToClipboard(text, successMessage, btnEl) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage);
      if (btnEl) {
        btnEl.classList.add('copied');
        setTimeout(() => btnEl.classList.remove('copied'), 2000);
      }
    }).catch(() => {
      const tempInput = document.createElement('input');
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      showToast(successMessage);
    });
  }

  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', () => {
      copyToClipboard('(11) 99827-4422', 'Telefone copiado para a área de transferência!', copyPhoneBtn);
    });
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      copyToClipboard('recco.ambiental@gmail.com', 'E-mail copiado para a área de transferência!', copyEmailBtn);
    });
  }
}

function showToast(message) {
  let toast = document.getElementById('toastMsg');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastMsg';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

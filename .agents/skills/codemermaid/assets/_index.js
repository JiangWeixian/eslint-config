/* _index.js — index page runtime.
   renderIndex(INDEX) builds the perspective + module card grids. */

function renderIndex(index) {
  const pGrid = document.getElementById('perspectives-grid');
  const mGrid = document.getElementById('modules-grid');
  if (!index) return;

  if (pGrid && Array.isArray(index.perspectives)) {
    pGrid.innerHTML = index.perspectives.map((p) => `
      <a class="card" href="${escapeHtml(p.page)}">
        <span class="card-type">${escapeHtml(p.diagramType || 'perspective')}</span>
        <h3 class="card-title">${escapeHtml(p.title)}</h3>
        <p class="card-description">${escapeHtml(p.description || '')}</p>
        ${typeof p.unitCount === 'number' ? `<div class="card-meta">${p.unitCount} unit${p.unitCount !== 1 ? 's' : ''}</div>` : ''}
      </a>
    `).join('');
  }

  if (mGrid && Array.isArray(index.modules)) {
    mGrid.innerHTML = index.modules.map((m) => `
      <a class="card" href="${escapeHtml(m.page)}">
        <span class="card-type">module</span>
        <h3 class="card-title">${escapeHtml(m.title)}</h3>
        <p class="card-description">${escapeHtml(m.description || '')}</p>
        ${typeof m.unitCount === 'number' ? `<div class="card-meta">${m.unitCount} unit${m.unitCount !== 1 ? 's' : ''}</div>` : ''}
      </a>
    `).join('');
  }
}

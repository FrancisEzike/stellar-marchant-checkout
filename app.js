const assetButtons = [...document.querySelectorAll('.asset')];
const payLabel = document.getElementById('payLabel');
const toast = document.getElementById('toast');
const modal = document.getElementById('modal');
let selectedAsset = 'XLM';
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

assetButtons.forEach((button) => {
  button.addEventListener('click', () => {
    selectedAsset = button.dataset.asset;
    assetButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.querySelector('.check').textContent = active ? '✓' : '';
      item.setAttribute('aria-pressed', String(active));
    });
    payLabel.textContent = 'Continue with ' + selectedAsset;
    showToast(selectedAsset + ' selected for checkout');
  });
});

document.getElementById('payBtn').addEventListener('click', () => {
  document.getElementById('modalTitle').textContent = 'Your checkout is ready';
  document.getElementById('modalText').textContent =
    'You selected ' + selectedAsset + ' for a $24.00 USD order. This is a frontend demo only. Connect a Stellar wallet and implement server-side payment verification before accepting real payments.';
  modal.classList.add('show');
  document.getElementById('modalDone').focus();
});

function closeModal() {
  modal.classList.remove('show');
  document.getElementById('payBtn').focus();
}
document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('modalDone').addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('show')) closeModal();
});

document.querySelectorAll('.faq-question').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const isOpen = item.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
  });
});

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

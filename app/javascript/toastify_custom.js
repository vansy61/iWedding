import Toastify from 'toastify-js';

const createToast = (type, text) => {
  if (text === undefined) {
    throw new Error("Text cannot be null or undefined!");
  }

  let icon, bgColor, borderColor, textColor;
  switch (type) {
    case 'warning':
      icon = `
        <svg class="shrink-0 size-4 text-yellow-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
        </svg>`;
      bgColor = 'bg-white dark:bg-neutral-800';
      borderColor = 'border-gray-200 dark:border-neutral-700';
      textColor = 'text-gray-700 dark:text-neutral-400';
      break;
    case 'alert':
      icon = `
        <svg class="shrink-0 size-4 text-red-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm2.93 5.39a1 1 0 0 1 0 1.41L9.41 8l1.52 1.52a1 1 0 0 1-1.41 1.41L8 9.41 6.48 10.93a1 1 0 0 1-1.41-1.41L6.59 8 5.07 6.48a1 1 0 0 1 1.41-1.41L8 6.59l1.52-1.52a1 1 0 0 1 1.41 0z"></path>
        </svg>`;
      bgColor = 'bg-white dark:bg-neutral-800';
      borderColor = 'border-red-500 dark:border-red-400';
      textColor = 'text-red-500 dark:text-red-400';
      break;
    case 'notice':
      icon = `
        <svg class="shrink-0 size-4 text-green-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.293 10.293a1 1 0 0 1 1.414 0l5-5a1 1 0 0 1 1.414 1.414l-5.707 5.707a1 1 0 0 1-1.414 0L4.707 9.707a1 1 0 1 1 1.414-1.414z"></path>
        </svg>`;
      bgColor = 'bg-white dark:bg-neutral-800';
      borderColor = 'border-green-500 dark:border-green-400';
      textColor = 'text-green-500 dark:text-green-400';
      break;
    default:
      icon = `
        <svg class="shrink-0 size-4 text-blue-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm1 13H7v-2h2v2zm0-4H7V3h2v6z"></path>
        </svg>`;
      bgColor = 'bg-white dark:bg-neutral-800';
      borderColor = 'border-blue-500 dark:border-blue-400';
      textColor = 'text-blue-500 dark:text-blue-400';
  }

  const markup = `
    <div class="max-w-xs ${bgColor} ${borderColor} rounded-xl shadow-lg" role="alert" tabindex="-1">
      <div class="flex p-4">
        <div class="shrink-0">${icon}</div>
        <div class="ms-3">
          <p class="text-sm ${textColor}">${text}</p>
        </div>
      </div>
    </div>`;

  return Toastify({
    text: markup,
    className: `fixed -top-[150px] right-[20px] z-[90] transition-all duration-300 w-[320px] [&>.toast-close]:hidden`,
    duration: 3000,
    escapeMarkup: false
  }).showToast();
};


// Expose functions globally
window.showToast = createToast;





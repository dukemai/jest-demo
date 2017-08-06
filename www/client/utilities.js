import scrollTo from 'scroll-to';

const pace = 100;
export function scrollUp() {
    const currentScroll = window.scrollY;
    const newScroll = currentScroll - pace < 0 ? 0 : currentScroll - pace;
    scrollTo(0, newScroll);
}

export function scrollDown() {
    const currentScroll = window.scrollY;
    const boundary = document.offsetHeight;
    const newScroll = currentScroll + pace > boundary ? boundary : currentScroll + pace;
    scrollTo(0, newScroll);
}


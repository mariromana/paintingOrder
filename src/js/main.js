import slider from "./modules/slider";
import modals from "./modules/modals";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';  
    slider('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', '', 'vertical');
    modals();
});
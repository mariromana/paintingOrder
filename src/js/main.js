import slider from "./modules/slider";
import modals from "./modules/modals";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from './modules/checkTextInputs';


window.addEventListener('DOMContentLoaded', () => {
    'use strict';  
    slider('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', '', 'vertical');
    modals();
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    
});
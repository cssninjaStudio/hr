"use strict";

import './store/store';
import 'alpinejs';
import { initPageLoader } from './libs/components/pageloader';
import { initNavbar } from './libs/components/navbar';
import { initPosts } from './libs/components/posts';
import { initEmployees } from './libs/components/employees';
import { initEmployee } from './libs/components/employee';
const feather = require('feather-icons');

window.initNavbar = initNavbar;
window.initPosts = initPosts;
window.initEmployees = initEmployees;
window.initEmployee = initEmployee;

const showPageloader = initPageLoader();

document.onreadystatechange = function () {
    if (document.readyState == 'complete') {

        //Feather Icons
        const featherIcons = feather.replace();
        
    }
}


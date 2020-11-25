import Vue from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faBars, faPlaneDeparture, faPlaneArrival, faCalendarAlt, faTimes, faRedoAlt, faPlane, faUser, faPhoneAlt, faHome, faTty, faInfo, faSearch} from '@fortawesome/free-solid-svg-icons'
import {faClock, faEnvelope} from '@fortawesome/free-regular-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(faBars, faPlaneDeparture, faPlaneArrival, faCalendarAlt, faTimes, faRedoAlt, faPlane, faClock, faUser, faPhoneAlt, faEnvelope, faHome, faTty, faInfo, faSearch)

Vue.component('fa-icon', FontAwesomeIcon)

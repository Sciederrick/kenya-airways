import Vue from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faBars, faPlaneDeparture, faPlaneArrival, faCalendarAlt, faTimes, faRedoAlt, faPlane} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-regular-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(faBars, faPlaneDeparture, faPlaneArrival, faCalendarAlt, faTimes, faRedoAlt, faPlane, faClock)

Vue.component('fa-icon', FontAwesomeIcon)

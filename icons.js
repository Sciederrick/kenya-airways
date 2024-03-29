import Vue from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faBars, faPlaneDeparture, faPlaneArrival, faCalendarAlt, faTimes, faRedoAlt, faPlane, faUser, faPhoneAlt, faHome, faTty, faInfo, faSearch, faCheck, faAngleDoubleRight, faAngleDoubleLeft, faExclamationTriangle, faCheckCircle, faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import {faClock, faEnvelope, faTimesCircle} from '@fortawesome/free-regular-svg-icons'
import { faFontAwesome, faTwitter, faFacebookF, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'

library.add(faBars, faPlaneDeparture, faPlaneArrival, faCalendarAlt, faTimes, faRedoAlt, faPlane, faClock, faUser, faPhoneAlt, faEnvelope, faHome, faTty, faInfo, faSearch, faCheck, faAngleDoubleRight, faAngleDoubleLeft, faExclamationTriangle, faTimesCircle, faCheckCircle, faTwitter, faFacebookF, faInstagram, faLinkedin, faGraduationCap)

Vue.component('fa-icon', FontAwesomeIcon)

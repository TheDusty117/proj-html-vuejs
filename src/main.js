import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faTruckRampBox, faTemperatureLow, faBoxesStacked, faArrowRight, faClock, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faUser, faGem } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'



/* add icons to the library */
library.add(faFacebookF, faUser, faGem, faTruckRampBox, faTemperatureLow, faBoxesStacked, faArrowRight, faClock, faPhone, faEnvelope,
  faTwitter, faLinkedinIn)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

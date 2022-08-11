import Vue from 'vue'
import Button from '@/components/UI/Button'
import Popup from '@/components/Popup'
import CatalogCartSmall from '@/components/UI/CatalogCartSmall'
import Modal from '@/components/Modal'

const components = { Button, Popup, CatalogCartSmall, Modal }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})

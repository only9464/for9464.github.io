import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

const zhAndroidNote = defineNoteConfig({
  dir: 'Android',
  link: '/Android',
  sidebar: 'auto',
})
const zhLinuxNote = defineNoteConfig({
  dir: 'Linux',
  link: '/Linux',
  sidebar: 'auto',
})
const zhGolangNote = defineNoteConfig({
  dir: 'Golang',
  link: '/Golang',
  sidebar: 'auto',
})
const zhKotlinNote = defineNoteConfig({
  dir: 'Kotlin',
  link: '/Kotlin',
  sidebar: 'auto',
})
const zhCryptoNote = defineNoteConfig({
  dir: 'Crypto',
  link: '/Crypto',
  sidebar: 'auto',
})
export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [zhAndroidNote, zhLinuxNote, zhGolangNote, zhKotlinNote, zhCryptoNote],
})

/* =================== locale: en-US ======================= */

const enDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

export const enNotes = defineNotesConfig({
  dir: 'en/notes',
  link: '/en/',
  notes: [enDemoNote],
})


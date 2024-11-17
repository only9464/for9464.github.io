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
export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [zhAndroidNote, zhLinuxNote],
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


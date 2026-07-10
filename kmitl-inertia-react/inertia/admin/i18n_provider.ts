import polyglotI18nProvider from 'ra-i18n-polyglot'
import englishMessages from 'ra-language-english'
import { mergeTranslations } from 'react-admin'
import type { TranslationMessages } from 'react-admin'

/**
 * Thai messages, layered over the full English catalog so any key we have not
 * translated yet gracefully falls back to English instead of showing a raw key.
 */
const thaiMessages = mergeTranslations(englishMessages, {
  ra: {
    action: {
      add: 'เพิ่ม',
      add_filter: 'เพิ่มตัวกรอง',
      back: 'ย้อนกลับ',
      cancel: 'ยกเลิก',
      clear_input_value: 'ล้างค่า',
      confirm: 'ยืนยัน',
      create: 'สร้าง',
      create_item: 'สร้าง %{item}',
      delete: 'ลบ',
      edit: 'แก้ไข',
      export: 'ส่งออก',
      list: 'รายการ',
      refresh: 'รีเฟรช',
      remove: 'ลบ',
      remove_filter: 'นำตัวกรองออก',
      save: 'บันทึก',
      search: 'ค้นหา',
      show: 'ดู',
      sort: 'เรียงลำดับ',
      undo: 'เลิกทำ',
    },
    page: {
      create: 'สร้าง %{name}',
      dashboard: 'แดชบอร์ด',
      edit: '%{name} #%{id}',
      empty: 'ยังไม่มี %{name}',
      invite: 'ต้องการเพิ่มข้อมูลหรือไม่?',
      list: '%{name}',
      show: '%{name} #%{id}',
    },
    message: {
      are_you_sure: 'คุณแน่ใจหรือไม่?',
      delete_content: 'คุณต้องการลบรายการนี้ใช่หรือไม่?',
      delete_title: 'ลบ %{name} #%{id}',
      yes: 'ใช่',
      no: 'ไม่',
    },
    navigation: {
      next: 'ถัดไป',
      no_results: 'ไม่พบข้อมูล',
      page_rows_per_page: 'จำนวนต่อหน้า:',
      prev: 'ก่อนหน้า',
    },
    auth: {
      logout: 'ออกจากระบบ',
    },
  },
  resources: {
    users: {
      name: 'ผู้ใช้ |||| ผู้ใช้',
      fields: {
        id: 'รหัส',
        fullName: 'ชื่อ-นามสกุล',
        email: 'อีเมล',
        password: 'รหัสผ่าน',
        role: 'สิทธิ์',
        createdAt: 'สร้างเมื่อ',
        updatedAt: 'อัปเดตเมื่อ',
      },
    },
  },
}) as TranslationMessages

/**
 * Defaults to Thai; English remains selectable via the locale switcher.
 */
export const i18nProvider = polyglotI18nProvider(
  (locale) => (locale === 'en' ? englishMessages : thaiMessages),
  'th',
  [
    { locale: 'th', name: 'ไทย' },
    { locale: 'en', name: 'English' },
  ]
)

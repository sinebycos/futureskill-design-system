# NotiItem

One row of the notification list: a 66px thumbnail, a bold title, a short message, the relative time, and optionally a red dot, a quoted excerpt, a due-date line or a small button. Use it for every entry in the notification panel; stack items directly under each other.

Figma models this as one component with 40 "Event" variants. They are the same layout with different pictures and copy, so here it is one component with props for the parts. The table at the end lists all 40 events and what to pass for each.

## Usage

```tsx
import { NotiItem } from '@futureskill/design-system';

<NotiItem image="/covers/chatgpt.jpg" unread title="คุณได้ลงทะเบียนสำเร็จแล้ว!"
  message="คุณได้ลงทะเบียน Chat GPT For Everyone เริ่มอัพสกิลกันเลย!" time="27 วันที่ผ่านมา" />
```

`NotiItem` renders an `<a>` when `href` is set and a `<div>` otherwise; a `ref` goes to that root element. `NotiItemHighlight` renders a `<span>` and forwards its ref to it. The action Button is the package's `Button` (size `small`).

## Parts

| Prop | What it draws | Tokens and type |
| --- | --- | --- |
| `image` + `media` | 66 x 66 thumbnail, `radius-8`. | see below |
| `title` | First line. Cut after 2 lines (`titleLines`, Figma also uses 1). | Noto Sans Thai SemiBold 14/19, `primary-neutral-800` |
| `message` | Body text. Not cut unless you set `messageLines` (Figma uses 2 or 3 on some events). | Regular 12/18, `primary-neutral-700` |
| `quote` | Excerpt of a Q&A post or reply under the message. Always cut at 2 lines. | Regular 12/18, `primary-neutral-600` |
| `meta` | A fact line set 12px below the message: "วันครบกำหนด : 12/09/2025". | Regular 12/18, `primary-neutral-900-legacy` |
| `action` | Small primary Button above the time: "ดูใบรับรอง", "ดูรายละเอียดคลาส". | `Button` size `small`, variant `primary`, tone `brand` |
| `time` | Relative time, last line: "27 วันที่ผ่านมา". | Regular 14/22, `primary-purple-500` |
| `unread` | 12px dot at the top right of the text column. | `red-500` fill, 2px `red-100` ring |

| `media` | Use for |
| --- | --- |
| `cover` (default) | A picture that fills the square: a course cover, a person's photo, an organisation logo. |
| `mark` | The FutureSkill mark for notifications that come from the platform or an admin (assignments, groups, Q&A replies, external classes). The image is 32px wide, centred on a `primary-neutral-100` tile with 10px padding. |

| `tone` | Root fill | In Figma |
| --- | --- | --- |
| `default` | `primary-neutral-50` (white) | 31 of the 40 events |
| `green` | `green-50` | training deadline reminders, 3 months left |
| `yellow` | `yellow-50` | training deadline reminders, 2 months left |
| `red` | `red-50` | training deadline reminders, 1 month left |

`NotiItemHighlight` colours a status phrase inside the message: `tone="yellow"` (`yellow-700`, "รอผู้ดูแลตรวจสอบ"), `"red"` (`red-700`, "ถูกปฏิเสธ"), `"green"` (`green-700`, "ผ่านเรียบร้อยแล้ว"). Only the three external-class events use it.

## Sizes

One size. Width 315px (fixed in Figma; `max-width: 100%`), height follows the content: 101px with a two-line message, up to 156px. Padding 8 on all sides, 16 between thumbnail and text, 4 between the text lines, 12 above `meta`. With the dot, the text column is 205px wide; without it, 217px. No border, no radius and no shadow on the item itself.

## States

Figma has none: no hover, pressed, selected or read state, and no divider between items. `unread` is the only switch. The `state` prop is copied to `data-state` and changes nothing.

## You provide

- `image`: a URL, or your own node that fills the square. `imageAlt` when the picture carries meaning.
- `title`, `message` (or children), `time` as text. The message may contain `NotiItemHighlight` spans.
- Optional `quote`, `meta`, `unread`, `tone`, `titleLines`, `messageLines`.
- `action` as a label (renders the Button; handle it with `onAction`) or as your own node, e.g. `<Button size="small" iconLeft={<AcademicCapIcon />}>ดูใบรับรอง</Button>` with the icon from `@heroicons/react/24/outline`.
- `href` to make the whole item a link, or `onClick`; other attributes pass through to the root.
- To fill a panel wider or narrower than 315px, set `style={{ width: '100%' }}`.

```tsx
<NotiItem image={course.cover} unread title="คุณได้ลงทะเบียนสำเร็จแล้ว!"
  message="คุณได้ลงทะเบียน Chat GPT For Everyone เริ่มอัพสกิลกันเลย!" time="27 วันที่ผ่านมา" />
<NotiItem image={futureSkillMark} media="mark" unread title="การอบรมของคุณถูกปฏิเสธ" time="27 วันที่ผ่านมา">
  การอบรม Creative Drawing เวลา 12/09/2025 08:00 - 12/09/2025 16:00 ของคุณ <NotiItemHighlight tone="red">ถูกปฏิเสธ</NotiItemHighlight> กรุณาตรวจสอบเพิ่มเติมที่หมายเหตุ
</NotiItem>
```

## Do / don't

- Do keep the title to one short sentence and put names, dates and course titles in the message.
- Do use `media="mark"` only with the FutureSkill mark; photos and covers use `cover`.
- Do keep the tones for the deadline reminders they stand for in Figma. They are not success / warning / error.
- Don't combine `href` with `action`: a button inside a link is invalid.
- Don't expect the item to follow the dark theme. It is drawn with the legacy palette and stays white (or tinted) in dark, as in the Figma file. Only the action Button uses semantic tokens.

## The 40 Figma events

Thumbnail: **course** = course cover (`media="cover"`), **person** = a person's photo (`cover`), **org** = organisation logo (`cover`), **mark** = FutureSkill mark (`media="mark"`). "Lines" is `titleLines` / `messageLines` as set on the Figma text layers ("–" = not cut). `time` is "27 วันที่ผ่านมา" in every variant. Event names are the Figma variant names, typos included. Copy is the sample copy in the layers.

| # | Event | Thumbnail | `tone` | `unread` | Lines | `title` | `message` | Extra |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Reminder after enrollment | course | default | yes | 2 / 2 | คุณได้ลงทะเบียนสำเร็จแล้ว! | คุณได้ลงทะเบียน Chat GPT For Everyone เริ่มอัพสกิลกันเลย! | |
| 2 | Assigned | mark | default | yes | 2 / 2 | คุณได้รับมอบหมายตอนนี้! | คุณได้รับมอบหมาย Road to Chat GPT For Everyone จาก Admin | |
| 3 | completed with Certificate not project | course | default | no | 2 / 2 | ยินดีด้วย การเรียนของคุณสำเร็จแล้ว | การเรียน Chat GPT For Everyone ของคุณสำเร็จแล้ว | `action` "ดูใบรับรอง" |
| 4 | Class project approve | course | default | no | 2 / 2 | Class Project ได้รับการอนุมัติแล้ว | Class Project คอร์ส Chat GPT For Everyone ของคุณผ่านการตรวจสอบแล้ว | `action` "ดูใบรับรอง" |
| 5 | Class project reject | course | default | no | 2 / – | Class Project ของคุณถูกปฏิเสธ! | Class Project คอร์ส Chat GPT For Everyone ของคุณไม่ผ่านการตรวจสอบ กรุณาแก้ไขผลงานและส่งตรวจสอบอีกครั้ง | |
| 6 | Event20 | course | default | no | 2 / – | อีกนิดเดียว! เพื่อการเรียนที่สมบูรณ์ | การเรียน Chat GPT For Everyone ของคุณสำเร็จแล้ว กรุณาส่งผลงาน(Class project) เพื่อรับใบรับรอง | |
| 7 | before assigned expire | mark | default | no | 2 / – | การมอบหมายของคุณใกล้หมดอายุ | การมอบหมาย Road to Chat GPT For Everyone จะหมดเวลาเรียนในวันที่ 30 เมษายน 2567 | |
| 8 | When Assigned expired | mark | default | no | 2 / – | การมอบหมายของคุณหมดอายุแล้ว | หมดเวลา คุณไม่สามารถเรียนหลักสูตร จากการมอบหมาย Road to Chat GPT For Everyone จบภายในเวลาที่กำหนด! | |
| 9 | content is updated | course | default | no | 2 / – | อัพเดตเนื้อหาบทเรียนใหม่ | Chat GPT For Everyone อัพเดตเนื้อหาบทเรียนใหม่ เริ่มอัพสกิลกันเลย! | |
| 10 | When Q&A created | person | default | no | 2 / – | มีการเพิ่มข้อความสนทนาใหม่ | Teerapat มีการเพิ่มข้อความสนทนาใน Chat GPT For Everyone | `quote` "ขอสอบถามเกี่ยวกับบทเรียนที่ 2 ของคอร์สนี้หน่อยครับ ถ้าเราให้วิธีสร้างแบบกำหนดเองในตอนที่วางโครงสร้าง" |
| 11 | When Q&A Reply | mark | default | no | 2 / – | มีการตอบกลับข้อความของคุณ | Admin ได้ตอบกลับข้อความของคุณใน Chat GPT For Everyone | `quote` "จากคำถามที่ทางคุณ Teerapat ทางเราได้สอบถามกับทางผู้สอนได้ความว่า ทางคุณสามารถ" |
| 12 | After enroll not complete | course | default | no | 2 / 2 | คุณมีคอร์สที่ลงทะเบียนไว้ | อย่าลืมค้นหาประสบการณ์ใหม่ใน Chat GPT For Everyone | |
| 13 | completed without Cert | course | default | no | 2 / 2 | ยินดีด้วย การเรียนของคุณสำเร็จแล้ว | การเรียน Chat GPT For Everyone ของคุณสำเร็จแล้ว | |
| 14 | ORG_Expire | org | default | no | 1 / – | องค์กรของคุณใกล้จะหมดอายุการใช้งาน | MindDojo จะสามารถใช้ระบบการเรียน FutureSkill ได้ถึงวันที่ 30 มกราคม 2567 คุณสามารถติดต่อฝ่ายสนับสนุนเพื่อต่ออายุการใช้บริการของเรา | |
| 15 | Add User | person | default | no | 1 / 2 | มีสมาชิกใหม่ เข้าร่วมองค์กรของคุณ | Teerapat ได้เป็นสมาชิกของ MindDojo เมื่อวันที่ 1 ธันวาคม 2566 | |
| 16 | Reminder user inactive | person | default | no | 1 / 2 | มีผู้ใช้งานที่ไม่ได้เข้าใช้งาน ต่อเนื่องเกิน 14 วัน | ผู้ใช้งาน Teerapat Ritidech ขาดการใช้งานเป็นเวลา 14 วันแล้ว | |
| 17 | Create Group | mark | default | no | 1 / – | มีสมาชิกใหม่ เข้าร่วมองค์กรของคุณ | Admin ได้สร้างกลุ่ม กลุ่มคนรักงานออกแบบ เมื่อวันที่ 1 ธันวาคม 2566 | |
| 18 | Add to group | mark | default | no | 1 / – | มีสมาชิกใหม่ เข้าร่วมองค์กรของคุณ | Admin ได้เพิ่มคุณในกลุ่ม กลุ่มคนรักงานออกแบบ เมื่อวันที่ 1 ธันวาคม 2566 | |
| 19 | Create_ORG_course | course | default | no | 1 / 2 | มีคอร์สใหม่จากองค์กร เริ่มเรียนกันเลย! | Admin ได้เพิ่มคอร์ส Chat GPT For Everyone เมื่อวันที่ 1 ธันวาคม 2566 | |
| 20 | New course FufureSkill | course | default | no | 1 / – | มีคอร์สใหม่จาก FutureSkill เริ่มเรียนกันเลย! | คอร์สใหม่จาก FutureSkill Chat GPT For Everyone ได้เปิดตัวบนแพลตฟอร์มแล้วเมื่อวันที่ 1 ธันวาคม 2566 เริ่มอัพสกิลกันเลย! | |
| 21 | approve enroll | course | default | no (dot layer hidden) | 2 / 3 | ยินดีด้วย! 🎉 | คุณได้ลงทะเบียนคลาส “การสื่อสารอย่างมืออาชีพ” รอบ 20 กรกฎาคม 2568 สำเร็จเรียบร้อยแล้ว | `action` "ดูรายละเอียดคลาส" |
| 22 | reject event | course | default | no (dot layer hidden) | 2 / 3 | ขออภัย การลงทะเบียนไม่ได้รับอนุมัติ | คลาส “การบริหารทีมอย่างมีประสิทธิภาพ” รอบ 20 กรกฎาคม 2568 ของคุณ ถูกปฏิเสธการลงทะเบียน | |
| 23 | Expire in 3 Month | course | green | yes | 1 / 3 | 🔔 เหลืออีก 3 เดือน! ครบกำหนดการฝึกอบรม | การฝึกอบรม “Creative Drawing วาดรูปสร้างรายได้จากการเขียน Webcomics จากตัวละครของคุณ” ใกล้จะครบกำหนดเวลาสำหรับการอมรม | `meta` "วันครบกำหนด : 12/09/2025" |
| 24 | Recurring 3 Month | course | green | yes | 1 / 3 | เหลืออีก 3 เดือน! ครบกำหนดการอบรมซ้ำ | คุณจะต้องเข้ารับการอบรม “Creative Drawing วาดรูปสร้างรายได้จากการเขียน Webcomics จากตัวละครของคุณ” นี้ซ้ำในอีก 3 เดือน | `meta` "วันครบกำหนด : 12/09/2025" |
| 25 | Head 3 Month | course | green | yes | 1 / 3 | 🔔 เหลืออีก 3 เดือน! ครบกำหนดการฝึกอบรม | พนักงานในทีมของท่านถูกมอบหมายให้เข้าฝึกอบรม “Creative Drawing วาดรูปสร้างรายได้จากการเขียน Webcomics จากตัวละครของคุณ” | `meta` "วันครบกำหนด : 12/09/2025" |
| 26 | Expire in 2 Month | course | yellow | yes | 1 / 3 | 🔔 เหลืออีก 2 เดือน! ครบกำหนดการฝึกอบรม | การฝึกอบรม “Creative Drawing วาดรูปสร้างรายได้จากการเขียน Webcomics จากตัวละครของคุณ” ใกล้จะครบกำหนดเวลาสำหรับการอมรม | `meta` "วันครบกำหนด : 12/09/2025" |
| 27 | Recurring 2 Month | course | yellow | yes | 1 / 3 | เหลืออีก 2 เดือน! ครบกำหนดการอบรมซ้ำ | คุณจะต้องเข้ารับการอบรม “Creative Drawing วาดรูปสร้างรายได้จากการเขียน Webcomics จากตัวละครของคุณ” นี้ซ้ำในอีก 2 เดือน | `meta` "วันครบกำหนด : 12/09/2025" |
| 28 | Head 2 Month | course | yellow | yes | 1 / 3 | 🔔 เหลืออีก 2 เดือน! ครบกำหนดการฝึกอบรม | พนักงานในทีมของท่านถูกมอบหมายให้เข้าฝึกอบรม “Creative Drawing วาดรูปสร้างรายได้จากการเขียน Webcomics จากตัวละครของคุณ” | `meta` "วันครบกำหนด : 12/09/2025" |
| 29 | Expire in 1 Month | course | red | yes | 1 / 3 | 🔔 เหลืออีก 1 เดือน! ครบกำหนดการฝึกอบรม | การฝึกอบรม “Creative Drawing วาดรูปสร้างรายได้จากการเขียน Webcomics จากตัวละครของคุณ” ใกล้จะครบกำหนดเวลาสำหรับการอมรม | `meta` "วันครบกำหนด : 12/09/2025" |
| 30 | Recurring 1 Month | course | red | yes | 1 / 3 | เหลืออีก 1 เดือน! ครบกำหนดการอบรมซ้ำ | คุณจะต้องเข้ารับการอบรม “Creative Drawing วาดรูปสร้างรายได้จากการเขียน Webcomics จากตัวละครของคุณ” นี้ซ้ำในอีก 1 เดือน | `meta` "วันครบกำหนด : 12/09/2025" |
| 31 | Head 1 Month | course | red | yes | 1 / 3 | 🔔 เหลืออีก 1 เดือน! ครบกำหนดการฝึกอบรม | พนักงานในทีมของท่านถูกมอบหมายให้เข้าฝึกอบรม “Creative Drawing วาดรูปสร้างรายได้จากการเขียน Webcomics จากตัวละครของคุณ” | `meta` "วันครบกำหนด : 12/09/2025" |
| 32 | Cancel Enroll | course | default | yes | 2 / – | ดำเนินการยกเลิกลงทะเบียนสำเร็จ! | คุณได้ยกเลิกคลาสเรียน Creative Drawing วาดรูปสร้างรายได้จากการเขียน Webcomics จากตัวละครของคุณ แล้ว | |
| 33 | Before learn 1 day | course | default | yes | 2 / – | คลาสเรียนของคุณจะเริ่มเรียนในอีก 1 วัน! | คลาสเรียน Creative Drawing วาดรูปสร้างรายได้จากการเขียน Webcomics จะเริ่มเรียนในวันพรุ่งนี้ เวลา 08:00 | |
| 34 | Srart Learning | course | default | yes | 2 / – | คลาสเรียนของคุณได้เริ่มแล้วนะ! | คลาสเรียน Creative Drawing วาดรูปสร้างรายได้จากการเขียน Webcomics ได้เริ่มคลาสแล้ว | |
| 35 | Checked-in class | course | default | yes | 2 / – | คุณได้ดำเนินการเช็คอินสำเร็จ! | คุณได้ check-in คลาสเรียน Creative Drawing วาดรูปสร้างรายได้จากการเขียน Webcomics แล้ว | |
| 36 | Checked-out class | course | default | yes | 2 / – | คุณได้ดำเนินการเช็คเอาท์สำเร็จ! | คุณได้ check-out คลาสเรียน Creative Drawing วาดรูปสร้างรายได้จากการเขียน Webcomics แล้ว | |
| 37 | Admin Cancel Class | course | default | yes | 2 / – | คลาสเรียนถูกยกเลิก! | คลาสเรียน Creative Drawing วาดรูปสร้างรายได้จากการเขียน Webcomics ได้ถูกยกเลิก | |
| 38 | Submit External Class | mark | default | yes | 2 / – | การอบรมของคุณได้ถูกส่ง เรียบร้อยแล้ว | การอบรม Creative Drawing เวลา 12/09/2025 08:00 - 12/09/2025 16:00 ได้ถูกส่งเรียบร้อยแล้ว **รอผู้ดูแลตรวจสอบ** | highlight `yellow` on the bold phrase |
| 39 | External class be rejected | mark | default | yes | 2 / – | การอบรมของคุณถูกปฏิเสธ | การอบรม Creative Drawing เวลา 12/09/2025 08:00 - 12/09/2025 16:00 ของคุณ **ถูกปฏิเสธ** กรุณาตรวจสอบเพิ่มเติมที่หมายเหตุ | highlight `red` on the bold phrase |
| 40 | External class be approved | mark | default | yes | 2 / – | ยินดีด้วย! การอบรมของคุณ ผ่านการตรวจสอบแล้ว | ของคุณ ได้รับการตรวจสอบ **ผ่านเรียบร้อยแล้ว** สามารถตรวจสอบได้ที่ เมนูการเรียนภายนอก | highlight `green` on the bold phrase |

The bold in rows 38 to 40 only marks which words take the highlight; the text itself stays Regular.

## Differences from Figma

- **No icons.** The variants do not use icons or icon colours. What changes per event is the thumbnail picture (raster images), the root fill and the copy. Nothing was substituted from Heroicons.
- **Pictures.** The course cover, the person's photo and the organisation logo are sample images in Figma and are not shipped; the preview shows a placeholder tile with a Heroicons `photo` or `user` glyph in their place. The mark in the preview is the PNG exported from the Figma layer "image 3" (32 x 28.69px). Pass your own images.
- **Unbound colour.** The person photo layer has `#c4c4c4` under its image fill (3 variants). The component draws no fallback fill, so the hex is not used.
- **Legacy palette.** Everything is bound to "Color Styles" tokens: `primary-neutral-50`, `-100`, `-600`, `-700`, `-800`, `primary-neutral-900-legacy`, `primary-purple-500`, `red-500`, `red-100`, `green-50`, `yellow-50`, `red-50`, `yellow-700`, `red-700`, `green-700`. They do not change in dark. The action Button is the one semantic part (`fill-brand-strong`, `text-inverse-strong`) and does follow the theme.
- **Line gap.** 36 variants space the text lines 4px apart. Four ("completed with Certificate not project", "Class project approve", "Class project reject", "Event20") use 8px. The component always uses 4px, so those four come out 12px (with button) or 8px shorter than their Figma frames.
- **Time font.** Six variants ("Add User", "Reminder user inactive", "Create Group", "Add to group", "Create_ORG_course", "New course FufureSkill") set the time in Sarabun Regular 14/22 with no text style. The other 34 use Noto Sans Thai (Body Thai/P5). The component uses Noto Sans Thai for all.
- **Message colour.** "Add to group" colours the message `primary-neutral-800`; the other 39 use `primary-neutral-700`. The component uses 700.
- **The dot.** The layer is an unnamed ellipse ("Ellipse 1282"). It is read here as the unread marker; Figma does not say when it shows. It is visible in 20 variants, hidden in 2 and absent from 18.
- **Truncation.** Figma cuts text at the character. The browser does the same for a one-line title, but cuts multi-line text at a word break, so clamped Thai text can end a little earlier than in Figma.
- **Month reminders title.** The layer text has a line break after "ครบกำหนดการฝึก" and is cut to one line. The table gives the full sentence.
- **Sample copy.** Typos in the layers are kept as they are ("การอมรม", variant names "Srart Learning", "New course FufureSkill"). The "External class be approved" message starts at "ของคุณ" in the layer. The 🎉 and 🔔 are emoji characters in the text and render with the device's emoji font.
- **Added, not in Figma:** a 2px `stroke-focus` focus ring for the link form, `cursor: pointer` when `href` or `onClick` is set, and `max-width: 100%`.

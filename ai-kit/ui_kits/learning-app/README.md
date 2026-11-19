# Learning app UI kit

Click-through composition of the FutureSkill learner and class-builder surfaces, built only from the components in `src/components`.

**Disclaimer:** the source repo (sinebycos/futureskill-design-system) ships tokens and components but no product screens. Page layouts here (header, card grid, two-column skills page) are a neutral arrangement of real components — not a recreation of a production screen. Replace with real screen references when available.

Screens (sidebar switches between them; last screen persists):
- **การเรียนของฉัน** — Alert, SegmentedControl, course cards (`shadow-card-course`, `radius-16`), ProgressBar, Button, Badge
- **การแจ้งเตือน** — Tabs, NotiItem (cover/mark/action/tone/highlight); clicking a row marks it read
- **ทักษะของฉัน** — SkillGraph (mobile + compare), SkillProgress, SkillLevel bands
- **สร้างคลาส** — Stepper, TextInput, SectionTypeItem, SearchBox, TestSelectionCard / SurveySelectionCard, OutsideLearningCard

Files: `index.html` (app + Toast), `Shell.jsx` (NavigationSide shell, PageHeader, cover placeholder), `MyLearning.jsx`, `Notifications.jsx`, `SkillProfile.jsx`, `ClassBuilder.jsx`.

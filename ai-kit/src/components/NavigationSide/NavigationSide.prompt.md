The app's side navigation — a vertical list of destinations with optional caption, top area and pinned bottom.
```jsx
<NavigationSide title="การเรียนของฉัน" footer={<NavigationSideItem variant="expand" aria-label="ย่อ" />}>
  <NavigationSideItem icon={<Icon name="home" />} selected>หน้าหลัก</NavigationSideItem>
  <NavigationSideItem icon={<Icon name="book-open" />}>คอร์สของฉัน</NavigationSideItem>
</NavigationSide>
```
Variants: desktop | learner | mobile-closed | mobile-open. Item variants: default, header, divider, divider-full, slot, avatar, expand.

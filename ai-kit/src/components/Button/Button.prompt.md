Triggers an action — use primary (brand) for the one main action per view, secondary/text for the rest.
```jsx
<Button iconLeft={<Icon name="academic-cap" />}>ดูใบรับรอง</Button>
<Button variant="secondary" tone="neutral" size="small">ยกเลิก</Button>
<Button iconOnly aria-label="แชร์" iconLeft={<Icon name="share" />} />
```
Variants: primary | secondary | text. Tones: brand | neutral | destructive | inverse. Sizes: large 54 | medium 40 | small 32 | tiny 35 (legacy pill).

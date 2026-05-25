# Output Format — preciousegwuenu.com
**Skill:** PreshDev Frontend Implementation Skill v2.0.0

---

## ANALYSIS RESPONSE FORMAT

```
## SECTION: [Exact Section Name] — [Page Name]

### 18-POINT ANALYSIS
[Complete all 18 points from section-analysis-template.md]

### IMPLEMENTATION CHECKLIST
[ ] Point 01 complete
[ ] Point 02 complete
... (all 18)

### NEXT: IMPLEMENTATION READY?
State: "Analysis complete. Ready to generate [ComponentName] implementation."
```

---

## IMPLEMENTATION RESPONSE FORMAT

```
## COMPONENT: [ComponentName]
**File:** src/components/[path]/[ComponentName].tsx
**Depends on:** [list shared components used]
**Tokens used:** [list key tokens]

### TypeScript Interface
[Props interface]

### Component Code
[Full component implementation]

### CSS / Token Requirements
[Any globals.css additions needed]

### Usage Example
[How to use this component in the parent]
```

---

## QA RESPONSE FORMAT

```
## QA AUDIT: [ComponentName or Section]

### PASS ✓
[List passing checks]

### FAIL ✗
[List failing checks with specific fixes required]

### VERDICT
PASS / FAIL — [summary]
```

---

## PROHIBITED OUTPUT FORMATS

```
✗ Global page analysis ("Here's an overview of the entire site...")
✗ Vague descriptions ("The typography looks clean and modern")
✗ Partial implementations ("Here's a rough version you can build on")
✗ Suggestion language ("You might want to consider...")
✗ Multiple components in one response (unless they're tiny sub-components)
✗ Unsolicited redesign commentary ("I noticed the layout could be improved by...")
```

/* @ds-bundle: {"format":4,"namespace":"FutureSkillDesignSystem_f8a410","components":[{"name":"Alert","sourcePath":"src/components/Alert/Alert.jsx"},{"name":"Badge","sourcePath":"src/components/Badge/Badge.jsx"},{"name":"Button","sourcePath":"src/components/Button/Button.jsx"},{"name":"Checkbox","sourcePath":"src/components/Checkbox/Checkbox.jsx"},{"name":"CheckboxGroup","sourcePath":"src/components/Checkbox/Checkbox.jsx"},{"name":"Input","sourcePath":"src/components/Input/Input.jsx"},{"name":"NavigationSideItem","sourcePath":"src/components/NavigationSide/NavigationSide.jsx"},{"name":"NavigationSide","sourcePath":"src/components/NavigationSide/NavigationSide.jsx"},{"name":"NotiItemHighlight","sourcePath":"src/components/NotiItem/NotiItem.jsx"},{"name":"NotiItem","sourcePath":"src/components/NotiItem/NotiItem.jsx"},{"name":"OjtMethodBadge","sourcePath":"src/components/OjtMethodBadge/OjtMethodBadge.jsx"},{"name":"OutsideLearningCard","sourcePath":"src/components/OutsideLearningCard/OutsideLearningCard.jsx"},{"name":"PasswordInput","sourcePath":"src/components/PasswordInput/PasswordInput.jsx"},{"name":"ProgressBar","sourcePath":"src/components/ProgressBar/ProgressBar.jsx"},{"name":"SearchBox","sourcePath":"src/components/SearchBox/SearchBox.jsx"},{"name":"SectionTypeDescription","sourcePath":"src/components/SectionTypeDescription/SectionTypeDescription.jsx"},{"name":"SectionTypeItem","sourcePath":"src/components/SectionTypeItem/SectionTypeItem.jsx"},{"name":"SegmentedControl","sourcePath":"src/components/SegmentedControl/SegmentedControl.jsx"},{"name":"SkillGraph","sourcePath":"src/components/SkillGraph/SkillGraph.jsx"},{"name":"SkillLevel","sourcePath":"src/components/SkillLevel/SkillLevel.jsx"},{"name":"SkillProgress","sourcePath":"src/components/SkillProgress/SkillProgress.jsx"},{"name":"Slider","sourcePath":"src/components/Slider/Slider.jsx"},{"name":"StepperStep","sourcePath":"src/components/Stepper/Stepper.jsx"},{"name":"Stepper","sourcePath":"src/components/Stepper/Stepper.jsx"},{"name":"SurveySelectionCard","sourcePath":"src/components/SurveySelectionCard/SurveySelectionCard.jsx"},{"name":"TabsItem","sourcePath":"src/components/Tabs/Tabs.jsx"},{"name":"Tabs","sourcePath":"src/components/Tabs/Tabs.jsx"},{"name":"TestSelectionCard","sourcePath":"src/components/TestSelectionCard/TestSelectionCard.jsx"},{"name":"TextInput","sourcePath":"src/components/TextInput/TextInput.jsx"},{"name":"TextLink","sourcePath":"src/components/TextLink/TextLink.jsx"},{"name":"Textarea","sourcePath":"src/components/Textarea/Textarea.jsx"},{"name":"Toast","sourcePath":"src/components/Toast/Toast.jsx"},{"name":"Toggle","sourcePath":"src/components/Toggle/Toggle.jsx"},{"name":"Icon","sourcePath":"src/icon/Icon.jsx"}],"sourceHashes":{"src/components/Alert/Alert.jsx":"864682b83261","src/components/Badge/Badge.jsx":"eb41f28b1536","src/components/Button/Button.jsx":"2d801cd44a0d","src/components/Checkbox/Checkbox.jsx":"7c86ab4e7ee2","src/components/Input/Input.jsx":"fafa71c70138","src/components/NavigationSide/NavigationSide.jsx":"3f58f25c8944","src/components/NotiItem/NotiItem.jsx":"953ddc87f476","src/components/OjtMethodBadge/OjtMethodBadge.jsx":"b131b46dc7ae","src/components/OutsideLearningCard/OutsideLearningCard.jsx":"5e4ac1c94642","src/components/PasswordInput/PasswordInput.jsx":"edbc0b23c8fd","src/components/ProgressBar/ProgressBar.jsx":"b19db52610d3","src/components/SearchBox/SearchBox.jsx":"300867397900","src/components/SectionTypeDescription/SectionTypeDescription.jsx":"fce81f667a95","src/components/SectionTypeItem/SectionTypeItem.jsx":"c05216901d0f","src/components/SegmentedControl/SegmentedControl.jsx":"f05a841908b5","src/components/SkillGraph/SkillGraph.jsx":"23a98270ad72","src/components/SkillLevel/SkillLevel.jsx":"87c3f4021f21","src/components/SkillProgress/SkillProgress.jsx":"4c78b7af95e7","src/components/Slider/Slider.jsx":"90f03406835a","src/components/Stepper/Stepper.jsx":"363d701bacf2","src/components/SurveySelectionCard/SurveySelectionCard.jsx":"f1b483e98114","src/components/Tabs/Tabs.jsx":"d0ee514070e8","src/components/TestSelectionCard/TestSelectionCard.jsx":"f86d14d2cc3f","src/components/TextInput/TextInput.jsx":"a3f692398bd4","src/components/TextLink/TextLink.jsx":"88145da75dc9","src/components/Textarea/Textarea.jsx":"30c77bcabaee","src/components/Toast/Toast.jsx":"113b436ec148","src/components/Toggle/Toggle.jsx":"f2c24debab79","src/icon/Icon.jsx":"1102f3fd1f8a","src/utils/cx.js":"5f47c00bd4de","ui_kits/learning-app/ClassBuilder.jsx":"68980ba1931a","ui_kits/learning-app/MyLearning.jsx":"5c5af3e9832d","ui_kits/learning-app/Notifications.jsx":"2dc1800c02da","ui_kits/learning-app/Shell.jsx":"dc4972c3e353","ui_kits/learning-app/SkillProfile.jsx":"59ea027fae6d"},"inlinedExternals":[],"unexposedExports":[{"name":"cx","sourcePath":"src/utils/cx.js"}]} */

(() => {

const __ds_ns = (window.FutureSkillDesignSystem_f8a410 = window.FutureSkillDesignSystem_f8a410 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// src/icon/Icon.jsx
try { (() => {
// Heroicons 2.2.0, fetched by name from the jsDelivr CDN and inlined as <svg>. Same API as the repo's name-based Icon.
const HEROICONS_CDN = 'https://cdn.jsdelivr.net/npm/heroicons@2.2.0/';
const ICON_DIRS = {
  outline: '24/outline',
  solid: '24/solid',
  mini: '20/solid',
  micro: '16/solid'
};
const ICON_BOX = {
  outline: 24,
  solid: 24,
  mini: 20,
  micro: 16
};
const iconCache = new Map();
const iconWaiters = new Map();
function loadIcon(key) {
  if (iconCache.has(key) || iconWaiters.has(key)) return;
  iconWaiters.set(key, new Set());
  fetch(HEROICONS_CDN + key + '.svg').then(r => r.ok ? r.text() : Promise.reject(r.status)).then(txt => {
    const m = txt.match(/<svg([^>]*)>([\s\S]*)<\/svg>/);
    const attrs = m ? m[1] : '';
    const vb = (attrs.match(/viewBox="([^"]+)"/) || [])[1] || '0 0 24 24';
    const filled = /fill="currentColor"/.test(attrs);
    iconCache.set(key, {
      vb,
      filled,
      inner: m ? m[2] : ''
    });
  }).catch(() => {
    iconCache.set(key, null);
    console.warn('Icon: unknown icon "' + key + '"');
  }).finally(() => {
    const w = iconWaiters.get(key);
    iconWaiters.delete(key);
    if (w) w.forEach(fn => fn());
  });
}

/** Draws one Heroicons 2.2 glyph by name ("academic-cap", "check-circle"). Inherits currentColor. */
function Icon({
  name,
  variant = 'outline',
  size,
  color,
  title,
  className,
  style,
  strokeWidth,
  ...rest
}) {
  const v = ICON_DIRS[variant] ? variant : 'outline';
  const key = ICON_DIRS[v] + '/' + name;
  const [, tick] = React.useState(0);
  React.useEffect(() => {
    if (iconCache.has(key)) return;
    loadIcon(key);
    const w = iconWaiters.get(key);
    const fn = () => tick(n => n + 1);
    if (w) w.add(fn);
    return () => {
      if (w) w.delete(fn);
    };
  }, [key]);
  const data = iconCache.get(key);
  const px = size ?? ICON_BOX[v];
  const outline = v === 'outline';
  return React.createElement('svg', {
    ...rest,
    xmlns: 'http://www.w3.org/2000/svg',
    width: px,
    height: px,
    viewBox: data ? data.vb : '0 0 ' + ICON_BOX[v] + ' ' + ICON_BOX[v],
    fill: outline ? 'none' : 'currentColor',
    stroke: outline ? 'currentColor' : undefined,
    strokeWidth: outline ? strokeWidth ?? 1.5 : undefined,
    className: ['fs-icon', className].filter(Boolean).join(' '),
    style: color ? {
      color,
      ...style
    } : style,
    role: title ? 'img' : undefined,
    'aria-label': title || undefined,
    'aria-hidden': title ? undefined : true,
    dangerouslySetInnerHTML: {
      __html: data ? data.inner : ''
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/icon/Icon.jsx", error: String((e && e.message) || e) }); }

// src/utils/cx.js
try { (() => {
/** Joins truthy class names. */
function cx(...parts) {
  return parts.filter(Boolean).join(' ');
}
Object.assign(__ds_scope, { cx });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/utils/cx.js", error: String((e && e.message) || e) }); }

// src/components/Badge/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BADGE_ICONS = {
  error: 'x-circle',
  warning: 'exclamation-triangle',
  success: 'check-circle',
  information: 'information-circle',
  neutral: 'arrows-right-left',
  brand: 'arrows-right-left'
};

/** A small pill labelling status: error, warning, success, information, neutral or brand. */
function Badge({
  tone = 'neutral',
  size = 'medium',
  icon,
  dot: dotProp,
  state,
  className,
  children,
  ...rest
}) {
  let iconNode;
  if (icon === undefined || icon === true) iconNode = BADGE_ICONS[tone] ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: BADGE_ICONS[tone],
    size: size === 'small' ? 16 : 20
  }) : null;else iconNode = icon || null;
  const dot = dotProp === true ? 'online' : dotProp;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    className: __ds_scope.cx('fs-badge', `fs-badge--${tone}`, `fs-badge--${size}`, className),
    "data-state": state || undefined
  }), iconNode, dot ? /*#__PURE__*/React.createElement("span", {
    className: "fs-badge__dot-box"
  }, /*#__PURE__*/React.createElement("span", {
    className: __ds_scope.cx('fs-badge__dot', `fs-badge__dot--${dot}`)
  })) : null, /*#__PURE__*/React.createElement("span", {
    className: "fs-badge__label"
  }, children));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/Badge/Badge.jsx", error: String((e && e.message) || e) }); }

// src/components/Button/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BUTTON_ICON_SIZE = {
  large: 24,
  medium: 20,
  small: 16,
  tiny: 16
};

/** Triggers an action. Primary = filled, secondary = outlined, text = no container. */
function Button({
  variant = 'primary',
  tone = 'brand',
  size = 'medium',
  iconOnly = false,
  iconLeft,
  iconRight,
  state,
  htmlType = 'button',
  className,
  disabled,
  children,
  ...rest
}) {
  const iconPx = iconOnly ? size === 'small' ? 16 : 24 : BUTTON_ICON_SIZE[size];
  const slot = node => node ? /*#__PURE__*/React.createElement("span", {
    className: "fs-btn__icon",
    style: {
      width: iconPx,
      height: iconPx
    }
  }, node) : null;
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    type: htmlType,
    className: __ds_scope.cx('fs-btn', `fs-btn--${variant}`, `fs-btn--${tone}`, `fs-btn--${size}`, iconOnly && 'fs-btn--icon-only', className),
    "data-state": state,
    disabled: disabled || state === 'disabled' || undefined
  }), iconOnly ? slot(iconLeft ?? iconRight ?? children) : slot(iconLeft), iconOnly ? null : /*#__PURE__*/React.createElement("span", {
    className: "fs-btn__label"
  }, children), iconOnly ? null : slot(iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/Button/Button.jsx", error: String((e && e.message) || e) }); }

// src/components/Alert/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ALERT_ICONS = {
  error: 'x-circle',
  warning: 'exclamation-triangle',
  success: 'check-circle',
  information: 'information-circle',
  neutral: 'cube',
  brand: 'cube',
  'inverse-neutral': 'cube',
  'inverse-brand': 'cube'
};

/** A full-width banner carrying one short message, with icon, optional action and close. */
function Alert({
  tone = 'neutral',
  device = 'desktop',
  icon: iconProp,
  action: actionProp,
  onAction,
  closable,
  onClose,
  closeLabel,
  open: openProp,
  state,
  className,
  children,
  ...rest
}) {
  const inverse = tone.indexOf('inverse') === 0;
  const [shown, setShown] = React.useState(true);
  const open = openProp === undefined ? shown : openProp;
  if (!open) return null;
  let icon = iconProp;
  if (icon === undefined) icon = /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ALERT_ICONS[tone] || 'cube',
    size: 24,
    strokeWidth: 2
  });
  let action = actionProp;
  if (typeof action === 'string') action = /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    tone: inverse ? 'inverse' : 'neutral',
    size: "small",
    className: "fs-alert__button",
    onClick: onAction
  }, action);
  const close = e => {
    if (openProp === undefined) setShown(false);
    if (onClose) onClose(e);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: tone === 'error' || tone === 'warning' ? 'alert' : 'status'
  }, rest, {
    className: __ds_scope.cx('fs-alert', `fs-alert--${tone}`, `fs-alert--${device}`, className),
    "data-state": state || undefined
  }), icon ? /*#__PURE__*/React.createElement("span", {
    className: "fs-alert__icon"
  }, icon) : null, /*#__PURE__*/React.createElement("div", {
    className: "fs-alert__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-alert__text"
  }, children), action ? /*#__PURE__*/React.createElement("span", {
    className: "fs-alert__action"
  }, action) : null), closable === false ? null : /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fs-alert__close",
    "aria-label": closeLabel || 'ปิด',
    onClick: close
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x-mark",
    size: 28
  })));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/Alert/Alert.jsx", error: String((e && e.message) || e) }); }

// src/components/Checkbox/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CHECKBOX_MARK = 'M4.42 7.6L4.4 7.62L0 3.22L1.43 1.79L4.42 4.77L9.19 0L10.62 1.43L4.44 7.62Z';

/** A 16px box, with or without a label, for turning one option on or off. */
function Checkbox({
  indeterminate: indeterminateProp,
  state,
  className,
  style,
  children,
  disabled: disabledProp,
  ...rest
}) {
  const inner = React.useRef(null);
  const indeterminate = !!indeterminateProp;
  const disabled = !!disabledProp || state === 'disabled';
  const labelled = children != null && children !== false;
  React.useEffect(() => {
    if (inner.current) inner.current.indeterminate = indeterminate;
  });
  return /*#__PURE__*/React.createElement("label", {
    className: __ds_scope.cx('fs-checkbox', labelled && 'fs-checkbox--labelled', disabled && 'fs-checkbox--disabled', className),
    style: style,
    "data-state": state
  }, /*#__PURE__*/React.createElement("span", {
    className: "fs-checkbox__box"
  }, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    ref: inner,
    type: "checkbox",
    className: "fs-checkbox__input",
    disabled: disabled || undefined
  })), /*#__PURE__*/React.createElement("svg", {
    className: "fs-checkbox__mark",
    viewBox: "0 0 16 16",
    width: 16,
    height: 16,
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("path", {
    d: CHECKBOX_MARK,
    transform: "translate(2.69 5)",
    fill: "currentColor"
  }))), labelled ? /*#__PURE__*/React.createElement("span", {
    className: "fs-checkbox__label"
  }, children) : null);
}

/** A role="group" list of Checkboxes for picking any number of values. */
function CheckboxGroup({
  layout = 'vertical',
  options,
  value: valueProp,
  defaultValue,
  onChange,
  name,
  disabled,
  className,
  children: _c,
  ...rest
}) {
  const controlled = valueProp !== undefined;
  const [own, setOwn] = React.useState(defaultValue || []);
  const value = controlled ? valueProp : own;
  const toggle = (v, e) => {
    const next = value.indexOf(v) < 0 ? value.concat([v]) : value.filter(x => x !== v);
    if (!controlled) setOwn(next);
    if (onChange) onChange(next, e);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "group"
  }, rest, {
    className: __ds_scope.cx('fs-checkbox-group', `fs-checkbox-group--${layout}`, className)
  }), (options || []).map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement(Checkbox, {
      key: opt.value,
      name: name,
      value: opt.value,
      checked: value.indexOf(opt.value) >= 0,
      disabled: disabled || opt.disabled,
      onChange: e => toggle(opt.value, e)
    }, opt.label);
  }));
}
Object.assign(__ds_scope, { Checkbox, CheckboxGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/Checkbox/Checkbox.jsx", error: String((e && e.message) || e) }); }

// src/components/Input/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function focusField(e) {
  if (e.target.closest('input, button, a')) return;
  const el = e.currentTarget.querySelector('input');
  if (el && !el.disabled) el.focus();
}

/** Draws an icon element at the affix size: 14px, stroke 2. */
function inputIcon(icon) {
  if (!React.isValidElement(icon)) return icon || null;
  const p = icon.props;
  return React.cloneElement(icon, {
    size: p.size ?? 14,
    width: p.width ?? 14,
    height: p.height ?? 14,
    strokeWidth: p.strokeWidth ?? 2
  });
}
function inputSlot(kind, content, icon) {
  if (content == null && !icon) return null;
  return /*#__PURE__*/React.createElement("span", {
    className: kind
  }, icon ? inputIcon(icon) : content);
}

/** Single-line text field of the legacy input family, with prefix, suffix and addon cells. */
function Input({
  size = 'medium',
  htmlSize,
  prefix,
  prefixIcon,
  suffix,
  suffixIcon,
  addonBefore,
  addonBeforeIcon,
  addonAfter,
  addonAfterIcon,
  fullWidth,
  state,
  className,
  style,
  inputRef,
  children: _c,
  ...rest
}) {
  const disabled = !!rest.disabled || state === 'disabled';
  const before = inputSlot('fs-input__addon fs-input__addon--before', addonBefore, addonBeforeIcon);
  const after = inputSlot('fs-input__addon fs-input__addon--after', addonAfter, addonAfterIcon);
  return /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx('fs-input', `fs-input--${size}`, disabled && 'fs-input--disabled', before && 'fs-input--addon-before', after && 'fs-input--addon-after', fullWidth && 'fs-input--full-width', className),
    style: style,
    "data-state": state
  }, before, /*#__PURE__*/React.createElement("div", {
    className: "fs-input__field",
    onClick: focusField
  }, inputSlot('fs-input__affix', prefix, prefixIcon), /*#__PURE__*/React.createElement("input", _extends({
    type: "text"
  }, rest, {
    ref: inputRef,
    className: "fs-input__control",
    size: htmlSize,
    disabled: disabled || undefined
  })), inputSlot('fs-input__affix', suffix, suffixIcon)), after);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/Input/Input.jsx", error: String((e && e.message) || e) }); }

// src/components/NavigationSide/NavigationSide.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const NAV_SLOTS = ['slot', 'alert', 'button', 'search'];
const NAV_ITEM = 'fs-navigation-side-item';
const navShown = node => node != null && node !== false;

/** One row of the side navigation: a destination, caption, divider, slot, avatar row or expand button. */
function NavigationSideItem({
  variant = 'default',
  selected,
  learner,
  icon,
  submenu,
  badge,
  badgeCount,
  align,
  state,
  className,
  children,
  ...rest
}) {
  const rootClass = mods => __ds_scope.cx(NAV_ITEM, mods, className);
  const ds = state || undefined;
  if (variant === 'header') return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: rootClass(`${NAV_ITEM}--header`),
    "data-state": ds
  }), children);
  if (variant === 'divider' || variant === 'divider-full') return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator"
  }, rest, {
    className: rootClass(`${NAV_ITEM}--${variant}`),
    "data-state": ds
  }), /*#__PURE__*/React.createElement("span", {
    className: `${NAV_ITEM}__rule`
  }));
  if (variant === 'avatar') return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: rootClass(`${NAV_ITEM}--avatar`),
    "data-state": ds
  }), children);
  if (NAV_SLOTS.indexOf(variant) >= 0) {
    return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
      className: rootClass(`${NAV_ITEM}--slot`),
      "data-state": ds
    }), navShown(children) ? children : /*#__PURE__*/React.createElement("div", {
      className: `${NAV_ITEM}__placeholder`
    }, "Swap with another component"));
  }
  if (variant === 'expand') {
    const {
      onClick,
      disabled,
      title,
      'aria-label': ariaLabel,
      'aria-expanded': ariaExpanded,
      'aria-controls': ariaControls,
      ...row
    } = rest;
    return /*#__PURE__*/React.createElement("div", _extends({}, row, {
      className: rootClass(__ds_scope.cx(`${NAV_ITEM}--expand`, align === 'end' && `${NAV_ITEM}--end`)),
      "data-state": ds
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `${NAV_ITEM}__expand`,
      onClick: onClick,
      disabled: disabled,
      title: title,
      "aria-label": ariaLabel,
      "aria-expanded": ariaExpanded,
      "aria-controls": ariaControls
    }, icon || /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "arrow-left-start-on-rectangle",
      variant: "micro",
      size: 16
    })));
  }
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon ? /*#__PURE__*/React.createElement("span", {
    className: `${NAV_ITEM}__icon`
  }, icon) : null, navShown(children) ? /*#__PURE__*/React.createElement("span", {
    className: `${NAV_ITEM}__label`
  }, children) : null, submenu ? /*#__PURE__*/React.createElement("span", {
    className: `${NAV_ITEM}__chevron`
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 24
  })) : null, navShown(badge) ? /*#__PURE__*/React.createElement("span", {
    className: `${NAV_ITEM}__badge`
  }, badge) : null, navShown(badgeCount) ? /*#__PURE__*/React.createElement("span", {
    className: `${NAV_ITEM}__badge`
  }, badgeCount) : null);
  const rowClass = rootClass(__ds_scope.cx(`${NAV_ITEM}--default`, selected && `${NAV_ITEM}--selected`, learner && `${NAV_ITEM}--learner`));
  const current = selected ? 'page' : undefined;
  if (rest.href != null) return /*#__PURE__*/React.createElement("a", _extends({}, rest, {
    className: rowClass,
    "data-state": ds,
    "aria-current": current
  }), content);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button"
  }, rest, {
    className: rowClass,
    "data-state": ds,
    "aria-current": current
  }), content);
}

/** The app's side navigation: desktop sidebar, learner card, mobile top bar or mobile drawer. */
function NavigationSide({
  variant = 'desktop',
  title,
  header,
  footer,
  logo,
  avatar,
  hamburger,
  menuLabel,
  closeLabel,
  onMenuClick,
  onClose,
  state,
  className,
  children,
  ...rest
}) {
  const base = 'fs-navigation-side';
  const rootProps = {
    ...rest,
    className: __ds_scope.cx(base, `${base}--${variant}`, className),
    'data-state': state || undefined
  };
  if (variant === 'mobile-closed') {
    return /*#__PURE__*/React.createElement("div", rootProps, hamburger === false ? null : /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: `${base}__menu`,
      "aria-label": menuLabel || 'Menu',
      onClick: onMenuClick
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "bars-3",
      size: 24
    })), logo ? /*#__PURE__*/React.createElement("div", {
      className: `${base}__logo`
    }, logo) : null, avatar ? /*#__PURE__*/React.createElement("div", {
      className: `${base}__avatar`
    }, avatar) : null, children);
  }
  const open = variant === 'mobile-open';
  const titleRow = navShown(title) ? /*#__PURE__*/React.createElement("div", {
    className: `${base}__title`
  }, title) : null;
  const top = open || header ? /*#__PURE__*/React.createElement("div", {
    className: `${base}__top`
  }, open ? /*#__PURE__*/React.createElement("div", {
    className: `${base}__close-row`
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: `${base}__close`,
    "aria-label": closeLabel || 'Close',
    onClick: onClose
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x-mark",
    size: 24
  }))) : null, header) : null;
  return /*#__PURE__*/React.createElement("div", rootProps, open ? /*#__PURE__*/React.createElement("div", {
    className: `${base}__overlay`,
    onClick: onClose,
    "aria-hidden": true
  }) : null, /*#__PURE__*/React.createElement("nav", {
    className: `${base}__panel`
  }, variant === 'desktop' ? /*#__PURE__*/React.createElement(React.Fragment, null, titleRow, top) : /*#__PURE__*/React.createElement(React.Fragment, null, top, titleRow), /*#__PURE__*/React.createElement("div", {
    className: `${base}__middle`
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    className: `${base}__bottom`
  }, footer) : null));
}
Object.assign(__ds_scope, { NavigationSideItem, NavigationSide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/NavigationSide/NavigationSide.jsx", error: String((e && e.message) || e) }); }

// src/components/NotiItem/NotiItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A coloured status phrase inside a NotiItem message. */
function NotiItemHighlight({
  tone = 'yellow',
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    className: __ds_scope.cx('fs-noti-item__highlight', `fs-noti-item__highlight--${tone}`, className)
  }), children);
}

/** One row of the notification list: thumbnail, bold title, message, time, optional dot/quote/meta/button (legacy palette). */
function NotiItem({
  image: imageProp,
  imageAlt,
  media = 'cover',
  tone = 'default',
  title,
  message: messageProp,
  quote,
  meta,
  time,
  unread,
  unreadLabel,
  action: actionProp,
  onAction,
  titleLines,
  messageLines,
  href,
  state,
  className,
  children,
  ...rest
}) {
  const image = typeof imageProp === 'string' ? /*#__PURE__*/React.createElement("img", {
    className: "fs-noti-item__img",
    src: imageProp,
    alt: imageAlt || ''
  }) : imageProp;
  const action = typeof actionProp === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "small",
    onClick: onAction
  }, actionProp) : actionProp;
  const message = messageProp === undefined ? children : messageProp;
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, image ? /*#__PURE__*/React.createElement("span", {
    className: __ds_scope.cx('fs-noti-item__thumb', `fs-noti-item__thumb--${media}`)
  }, image) : null, /*#__PURE__*/React.createElement("span", {
    className: "fs-noti-item__main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fs-noti-item__body"
  }, title ? /*#__PURE__*/React.createElement("span", {
    className: __ds_scope.cx('fs-noti-item__title', titleLines === 1 && 'fs-noti-item__title--single'),
    style: titleLines !== undefined && titleLines > 1 ? {
      WebkitLineClamp: titleLines
    } : undefined
  }, title) : null, message ? /*#__PURE__*/React.createElement("span", {
    className: __ds_scope.cx('fs-noti-item__message', messageLines ? 'fs-noti-item__message--clamp' : false),
    style: messageLines ? {
      WebkitLineClamp: messageLines
    } : undefined
  }, message) : null, quote ? /*#__PURE__*/React.createElement("span", {
    className: "fs-noti-item__quote"
  }, quote) : null, meta ? /*#__PURE__*/React.createElement("span", {
    className: "fs-noti-item__meta"
  }, meta) : null, action ? /*#__PURE__*/React.createElement("span", {
    className: "fs-noti-item__action"
  }, action) : null, time ? /*#__PURE__*/React.createElement("span", {
    className: "fs-noti-item__time"
  }, time) : null), unread ? unreadLabel ? /*#__PURE__*/React.createElement("span", {
    className: "fs-noti-item__dot",
    role: "img",
    "aria-label": unreadLabel
  }) : /*#__PURE__*/React.createElement("span", {
    className: "fs-noti-item__dot",
    "aria-hidden": "true"
  }) : null));
  const rootClass = __ds_scope.cx('fs-noti-item', `fs-noti-item--${tone}`, (href || rest.onClick) && 'fs-noti-item--interactive', className);
  return href ? /*#__PURE__*/React.createElement("a", _extends({}, rest, {
    href: href,
    className: rootClass,
    "data-state": state || undefined
  }), content) : /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: rootClass,
    "data-state": state || undefined
  }), content);
}
Object.assign(__ds_scope, { NotiItemHighlight, NotiItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/NotiItem/NotiItem.jsx", error: String((e && e.message) || e) }); }

// src/components/OjtMethodBadge/OjtMethodBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const OJT_METHODS = {
  'apprenticeship': ['Apprenticeship', 'trophy'],
  'orientation': ['Orientation', 'presentation-chart-line'],
  'shadowing': ['Shadowing', 'eye'],
  'mentoring': ['Mentoring', 'academic-cap'],
  'coaching': ['Coaching', 'book-open'],
  'job-rotation': ['Job Rotation', 'arrows-right-left'],
  'cross-training': ['Cross-Training', 'users'],
  'simulated-training': ['Simulated Training', 'forward']
};

/** A coloured pill naming one of the eight on-the-job training methods (legacy palette). */
function OjtMethodBadge({
  method: methodProp,
  state,
  className,
  children,
  ...rest
}) {
  const method = methodProp && OJT_METHODS[methodProp] ? methodProp : 'apprenticeship';
  const [label, icon] = OJT_METHODS[method];
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    className: __ds_scope.cx('fs-ojt-method-badge', `fs-ojt-method-badge--${method}`, className),
    "data-state": state || undefined
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    className: "fs-ojt-method-badge__label"
  }, children == null ? label : children));
}
Object.assign(__ds_scope, { OjtMethodBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/OjtMethodBadge/OjtMethodBadge.jsx", error: String((e && e.message) || e) }); }

// src/components/OutsideLearningCard/OutsideLearningCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A selectable row with a title and helper line ("Outside learning"). */
function OutsideLearningCard({
  title,
  description,
  value,
  selected: selectedProp,
  defaultSelected,
  onSelect,
  state,
  className,
  children,
  onClick,
  ...rest
}) {
  const [own, setOwn] = React.useState(!!defaultSelected);
  const controlled = selectedProp !== undefined;
  const selected = (controlled ? !!selectedProp : own) || state === 'selected';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button"
  }, rest, {
    value: value,
    className: __ds_scope.cx('fs-outside-learning-card', selected && 'fs-outside-learning-card--selected', className),
    "data-state": state,
    "aria-pressed": selected,
    onClick: e => {
      if (onClick) onClick(e);
      if (!controlled) setOwn(true);
      if (onSelect) onSelect(value, e);
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "fs-outside-learning-card__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fs-outside-learning-card__title"
  }, title === undefined ? children : title), description ? /*#__PURE__*/React.createElement("span", {
    className: "fs-outside-learning-card__description"
  }, description) : null), selected ? /*#__PURE__*/React.createElement("span", {
    className: "fs-outside-learning-card__check"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check-circle",
    size: 16
  })) : null);
}
Object.assign(__ds_scope, { OutsideLearningCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/OutsideLearningCard/OutsideLearningCard.jsx", error: String((e && e.message) || e) }); }

// src/components/PasswordInput/PasswordInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function focusField(e) {
  if (e.target.closest('input, button, a')) return;
  const el = e.currentTarget.querySelector('input');
  if (el && !el.disabled) el.focus();
}

/** Password field of the legacy input family, with an eye button that shows or hides the value. */
function PasswordInput({
  size = 'medium',
  visible: visibleProp,
  defaultVisible,
  onVisibleChange,
  showLabel,
  hideLabel,
  fullWidth,
  state,
  htmlSize,
  inputRef,
  className,
  style,
  children: _c,
  ...rest
}) {
  const disabled = !!rest.disabled || state === 'disabled';
  const controlled = visibleProp !== undefined;
  const [own, setOwn] = React.useState(!!defaultVisible);
  const visible = controlled ? !!visibleProp : own;
  const toggle = () => {
    if (!controlled) setOwn(!visible);
    if (onVisibleChange) onVisibleChange(!visible);
  };
  const eyePx = size === 'large' ? 16 : 14;
  return /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx('fs-password-input', `fs-password-input--${size}`, visible && 'fs-password-input--visible', disabled && 'fs-password-input--disabled', fullWidth && 'fs-password-input--full-width', className),
    style: style,
    "data-state": state || undefined,
    onClick: focusField
  }, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    type: visible ? 'text' : 'password',
    ref: inputRef,
    className: "fs-password-input__control",
    size: htmlSize,
    disabled: disabled || undefined
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fs-password-input__toggle",
    "aria-pressed": visible,
    disabled: disabled || undefined,
    onClick: toggle,
    "aria-label": visible ? hideLabel || 'Hide password' : showLabel || 'Show password'
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: visible ? 'eye' : 'eye-slash',
    size: eyePx,
    strokeWidth: 2
  })));
}
Object.assign(__ds_scope, { PasswordInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/PasswordInput/PasswordInput.jsx", error: String((e && e.message) || e) }); }

// src/components/ProgressBar/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A read-only bar with a thumb at the current point and a bubble stating the value ("50/100"). */
function ProgressBar({
  value: valueProp,
  max: maxProp,
  label: labelProp,
  state,
  className,
  style,
  children: _c,
  ...rest
}) {
  const max = Number(maxProp) > 0 ? Number(maxProp) : 100;
  const value = Math.min(max, Math.max(0, Number(valueProp) || 0));
  const pct = value / max * 100;
  const label = labelProp === undefined || labelProp === null || labelProp === false ? `${value}/${max}` : labelProp;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": max,
    "aria-valuenow": value,
    "aria-valuetext": typeof label === 'string' ? label : undefined
  }, rest, {
    className: __ds_scope.cx('fs-progress-bar', pct <= 0 && 'fs-progress-bar--start', pct >= 100 && 'fs-progress-bar--finish', className),
    "data-state": state || undefined,
    style: {
      '--fs-progress-bar-value': pct,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "fs-progress-bar__track"
  }), /*#__PURE__*/React.createElement("span", {
    className: "fs-progress-bar__fill"
  }), /*#__PURE__*/React.createElement("span", {
    className: "fs-progress-bar__thumb"
  }), /*#__PURE__*/React.createElement("span", {
    className: "fs-progress-bar__label"
  }, label, /*#__PURE__*/React.createElement("span", {
    className: "fs-progress-bar__arrow"
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/ProgressBar/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// src/components/SearchBox/SearchBox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function focusField(e) {
  if (e.target.closest('input, button, a')) return;
  const el = e.currentTarget.querySelector('input');
  if (el && !el.disabled) el.focus();
}
const SEARCH_BOX_GLYPH = {
  large: 16,
  medium: 14,
  small: 12
};

/** Search field of the legacy input family, with an enter control, optional clear button and suffix. */
function SearchBox({
  size = 'medium',
  enter = 'default',
  enterText,
  enterIcon,
  enterLabel,
  suffix: suffixProp,
  suffixIcon,
  allowClear,
  clearLabel,
  onSearch,
  onClear,
  fullWidth,
  state,
  htmlSize,
  inputRef,
  className,
  style,
  children: _c,
  value: valueProp,
  defaultValue,
  onChange,
  onKeyDown,
  ...rest
}) {
  const disabled = !!rest.disabled || state === 'disabled';
  const controlled = valueProp !== undefined;
  const [own, setOwn] = React.useState(defaultValue == null ? '' : String(defaultValue));
  const value = controlled ? valueProp : own;
  const node = React.useRef(null);
  const setRef = el => {
    node.current = el;
    if (typeof inputRef === 'function') inputRef(el);else if (inputRef) inputRef.current = el;
  };
  const change = e => {
    if (!controlled) setOwn(e.target.value);
    if (onChange) onChange(e);
  };
  const search = e => {
    if (onSearch && node.current) onSearch(node.current.value, e);
  };
  const keyDown = e => {
    if (onKeyDown) onKeyDown(e);
    if (e.key === 'Enter' && !e.defaultPrevented) search(e);
  };
  const clear = e => {
    const input = node.current;
    if (!input) return;
    const d = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
    if (d && d.set) d.set.call(input, '');
    input.dispatchEvent(new Event('input', {
      bubbles: true
    }));
    input.focus();
    if (onClear) onClear(e);
  };
  const clearable = !!allowClear && !disabled && String(value).length > 0;
  const suffix = suffixIcon ? suffixIcon : suffixProp;
  const glyph = enter === 'icon' ? 14 : SEARCH_BOX_GLYPH[size] || 14;
  return /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx('fs-search-box', `fs-search-box--${size}`, `fs-search-box--enter-${enter}`, disabled && 'fs-search-box--disabled', fullWidth && 'fs-search-box--full-width', className),
    style: style,
    "data-state": state || undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "fs-search-box__field",
    onClick: focusField
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "search"
  }, rest, {
    ref: setRef,
    className: "fs-search-box__control",
    size: htmlSize,
    value: value,
    onChange: change,
    onKeyDown: keyDown,
    disabled: disabled || undefined
  })), clearable || suffix != null ? /*#__PURE__*/React.createElement("span", {
    className: "fs-search-box__suffix"
  }, clearable ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fs-search-box__clear",
    "aria-label": clearLabel || 'Clear',
    onClick: clear
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x-circle",
    variant: "micro",
    size: 12
  })) : null, suffix) : null), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fs-search-box__enter",
    "aria-label": enter === 'text' ? undefined : enterLabel || 'Search',
    disabled: disabled || undefined,
    onClick: search
  }, enter === 'text' ? enterIcon || null : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "magnifying-glass",
    size: glyph,
    strokeWidth: 2
  }), enter === 'text' ? /*#__PURE__*/React.createElement("span", {
    className: "fs-search-box__enter-text"
  }, enterText || 'Search') : null));
}
Object.assign(__ds_scope, { SearchBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/SearchBox/SearchBox.jsx", error: String((e && e.message) || e) }); }

// src/components/SectionTypeDescription/SectionTypeDescription.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SECTION_TYPE_DESCRIPTION_PRESETS = {
  general: {
    icon: 'book-open',
    title: 'General Section',
    description: 'ประกอบด้วยวิดีโอ, PDF, SCORM, แบบทดสอบ และ Live'
  },
  survey: {
    icon: 'clipboard-document-list',
    title: 'Survey Section',
    description: 'ใช้สำหรับทำแบบสอบถามหรือแบบสำรวจ'
  }
};

/** A static outlined box that names a class section type and explains it in one line. */
function SectionTypeDescription({
  variant = 'general',
  icon,
  title,
  description: descriptionProp,
  className,
  children,
  ...rest
}) {
  const preset = SECTION_TYPE_DESCRIPTION_PRESETS[variant] || SECTION_TYPE_DESCRIPTION_PRESETS.general;
  const description = descriptionProp === undefined ? children === undefined ? preset.description : children : descriptionProp;
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: __ds_scope.cx('fs-section-type-description', `fs-section-type-description--${variant}`, className)
  }), /*#__PURE__*/React.createElement("div", {
    className: "fs-section-type-description__head"
  }, icon === undefined ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: preset.icon,
    size: 24
  }) : icon || null, /*#__PURE__*/React.createElement("span", {
    className: "fs-section-type-description__title"
  }, title === undefined ? preset.title : title)), description ? /*#__PURE__*/React.createElement("div", {
    className: "fs-section-type-description__text"
  }, description) : null);
}
Object.assign(__ds_scope, { SectionTypeDescription });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/SectionTypeDescription/SectionTypeDescription.jsx", error: String((e && e.message) || e) }); }

// src/components/SectionTypeItem/SectionTypeItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SECTION_TYPE_ITEM_PRESETS = {
  general: {
    icon: 'book-open',
    title: 'General Section',
    description: 'ประกอบด้วยวิดีโอ, PDF, SCORM, แบบทดสอบ และ Live'
  },
  survey: {
    icon: 'clipboard-document-list',
    title: 'Survey Section',
    description: 'ใช้สำหรับทำแบบสอบถามหรือแบบสำรวจ'
  }
};

/** A clickable option for choosing the type of a section in a class. */
function SectionTypeItem({
  variant = 'general',
  icon,
  title,
  description: descriptionProp,
  active: activeProp,
  state,
  className,
  children,
  ...rest
}) {
  const preset = SECTION_TYPE_ITEM_PRESETS[variant] || SECTION_TYPE_ITEM_PRESETS.general;
  const description = descriptionProp === undefined ? children === undefined ? preset.description : children : descriptionProp;
  const active = !!activeProp || state === 'active';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button"
  }, rest, {
    className: __ds_scope.cx('fs-section-type-item', `fs-section-type-item--${variant}`, active && 'fs-section-type-item--active', className),
    "data-state": state || undefined,
    "aria-pressed": active
  }), /*#__PURE__*/React.createElement("span", {
    className: "fs-section-type-item__head"
  }, icon === undefined ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: preset.icon,
    size: 24
  }) : icon || null, /*#__PURE__*/React.createElement("span", {
    className: "fs-section-type-item__title"
  }, title === undefined ? preset.title : title)), description ? /*#__PURE__*/React.createElement("span", {
    className: "fs-section-type-item__text"
  }, description) : null);
}
Object.assign(__ds_scope, { SectionTypeItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/SectionTypeItem/SectionTypeItem.jsx", error: String((e && e.message) || e) }); }

// src/components/SegmentedControl/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const toSegOption = o => o !== null && typeof o === 'object' ? o : {
  value: o,
  label: String(o)
};

/** A single track holding 2 to 7 tabs, of which exactly one is active. */
function SegmentedControl({
  options: optionsProp,
  value: valueProp,
  defaultValue,
  onChange,
  size,
  iconOnly: iconOnlyProp,
  state,
  className,
  children: _c,
  ...rest
}) {
  const options = (optionsProp || []).map(toSegOption);
  const controlled = valueProp !== undefined;
  const [own, setOwn] = React.useState(defaultValue !== undefined ? defaultValue : options[0] ? options[0].value : undefined);
  const value = controlled ? valueProp : own;
  const iconOnly = !!iconOnlyProp;
  const stop = options.some(o => o.value === value) ? value : options[0] ? options[0].value : undefined;
  const select = o => {
    if (o.value === value) return;
    if (!controlled) setOwn(o.value);
    if (onChange) onChange(o.value, o);
  };
  const onKeyDown = (e, i) => {
    const n = options.length,
      k = e.key;
    const j = k === 'ArrowRight' || k === 'ArrowDown' ? (i + 1) % n : k === 'ArrowLeft' || k === 'ArrowUp' ? (i + n - 1) % n : k === 'Home' ? 0 : k === 'End' ? n - 1 : -1;
    if (j < 0) return;
    e.preventDefault();
    select(options[j]);
    const el = e.currentTarget.parentNode && e.currentTarget.parentNode.children[j];
    if (el) el.focus();
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "radiogroup"
  }, rest, {
    className: __ds_scope.cx('fs-segmented-control', `fs-segmented-control--${size || 'default'}`, iconOnly && 'fs-segmented-control--icon-only', className),
    "data-state": state || undefined
  }), options.map((o, i) => {
    const active = o.value === value;
    const counter = !iconOnly && o.counter !== undefined && o.counter !== null && o.counter !== false;
    return /*#__PURE__*/React.createElement("button", {
      key: String(o.value),
      type: "button",
      role: "radio",
      "aria-checked": active,
      tabIndex: o.value === stop ? 0 : -1,
      "aria-label": iconOnly && typeof o.label === 'string' ? o.label : undefined,
      className: __ds_scope.cx('fs-segmented-control__tab', active && 'fs-segmented-control__tab--active', counter && 'fs-segmented-control__tab--counter'),
      onClick: () => select(o),
      onKeyDown: e => onKeyDown(e, i)
    }, iconOnly ? o.icon || null : /*#__PURE__*/React.createElement("span", {
      className: "fs-segmented-control__label"
    }, o.label), counter ? /*#__PURE__*/React.createElement("span", {
      className: "fs-segmented-control__counter"
    }, o.counter) : null);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/SegmentedControl/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// src/components/SkillGraph/SkillGraph.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SKILL_GRAPH_SIZES = {
  default: {
    w: 533,
    h: 480,
    cy: 240,
    r: 200,
    gap: 31,
    tick: 16.5,
    dot: [6.875, 6.6]
  },
  mobile: {
    w: 360,
    h: 311.56,
    cy: 152.5,
    r: 127.08,
    gap: 16.42,
    tick: 13.77,
    dot: [4.37, 4.195]
  },
  mini: {
    w: 166,
    h: 166,
    cy: 83,
    r: 83,
    gap: 0,
    tick: 0,
    dot: [2.085, 2.085]
  }
};
function sgXY(ox, oy, r, i, n) {
  const a = Math.PI * 2 * i / n - Math.PI / 2;
  return [Math.round((ox + r * Math.cos(a)) * 100) / 100, Math.round((oy + r * Math.sin(a)) * 100) / 100];
}
function sgPoints(ox, oy, n, radius) {
  const out = [];
  for (let i = 0; i < n; i++) out.push(sgXY(ox, oy, typeof radius === 'function' ? radius(i) : radius, i, n).join(','));
  return out.join(' ');
}
function sgSeries(key, ox, oy, S, n, values, max, weak) {
  const rad = i => S.r * Math.max(0, Math.min(1, (Number(values[i]) || 0) / max));
  const pts = sgPoints(ox, oy, n, rad);
  const dots = [];
  for (let i = 0; i < n; i++) {
    const p = sgXY(ox, oy, rad(i), i, n);
    dots.push(/*#__PURE__*/React.createElement("ellipse", {
      key: i,
      className: "fs-skill-graph__dot",
      cx: p[0],
      cy: p[1],
      rx: S.dot[0],
      ry: S.dot[1]
    }));
  }
  return /*#__PURE__*/React.createElement("g", {
    key: key,
    className: "fs-skill-graph__series"
  }, /*#__PURE__*/React.createElement("polygon", {
    className: __ds_scope.cx('fs-skill-graph__area', weak && 'fs-skill-graph__area--weak'),
    points: pts
  }), /*#__PURE__*/React.createElement("polygon", {
    className: "fs-skill-graph__line",
    points: pts
  }), dots);
}

/** A radar chart plotting one score per skill on 3 to 8 axes (legacy palette). */
function SkillGraph({
  axes: axesProp,
  max: maxProp,
  rings: ringsProp,
  size: sizeProp,
  tone,
  grid: gridProp,
  spokes: spokesProp,
  fill: fillProp,
  compare,
  state,
  className,
  style,
  ...rest
}) {
  const axes = (axesProp || []).slice(0, 8);
  const n = axes.length;
  const size = sizeProp && SKILL_GRAPH_SIZES[sizeProp] ? sizeProp : 'default';
  const S = SKILL_GRAPH_SIZES[size];
  const mini = size === 'mini';
  const max = maxProp !== undefined && maxProp > 0 ? Number(maxProp) : 100;
  const rings = ringsProp !== undefined && ringsProp > 0 ? Math.round(ringsProp) : 5;
  const grid = gridProp === 'circle' ? 'circle' : 'polygon';
  const spokes = spokesProp === undefined ? mini || grid === 'circle' : !!spokesProp;
  const fill = fillProp !== false;
  const ox = S.w / 2,
    oy = S.cy;
  const measureRef = React.useRef(null);
  const [span, setSpan] = React.useState(null);
  const sig = size + '/' + axes.map(a => a.label).join('/');
  React.useLayoutEffect(() => {
    let live = true;
    function measure() {
      const el = measureRef.current;
      if (!live || !el || !el.getBBox) return;
      let b;
      try {
        b = el.getBBox();
      } catch (e) {
        return;
      }
      if (!b || !b.width) return;
      const next = Math.min(0, Math.floor(b.x)) + ' ' + Math.max(S.w, Math.ceil(b.x + b.width));
      setSpan(prev => prev === next ? prev : next);
    }
    measure();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    return () => {
      live = false;
    };
  }, [sig]);
  const xs = span ? span.split(' ').map(Number) : [0, S.w];
  const width = xs[1] - xs[0];
  const gridEls = [],
    text = [];
  for (let i = 1; i <= rings; i++) {
    const rr = Math.round(S.r * i / rings * 100) / 100;
    gridEls.push(grid === 'circle' ? /*#__PURE__*/React.createElement("circle", {
      key: 'r' + i,
      className: "fs-skill-graph__ring",
      cx: ox,
      cy: oy,
      r: rr
    }) : /*#__PURE__*/React.createElement("polygon", {
      key: 'r' + i,
      className: "fs-skill-graph__ring",
      points: sgPoints(ox, oy, n, rr)
    }));
    if (!mini) text.push(/*#__PURE__*/React.createElement("text", {
      key: 't' + i,
      className: "fs-skill-graph__tick",
      x: ox,
      y: Math.round((oy - rr + S.tick) * 100) / 100
    }, String(Math.round(max * i / rings * 10) / 10)));
  }
  for (let i = 0; i < n; i++) {
    if (spokes) {
      const p = sgXY(ox, oy, S.r, i, n);
      gridEls.push(/*#__PURE__*/React.createElement("line", {
        key: 's' + i,
        className: "fs-skill-graph__spoke",
        x1: ox,
        y1: oy,
        x2: p[0],
        y2: p[1]
      }));
    }
    if (!mini) {
      const p = sgXY(ox, oy, S.r + S.gap, i, n);
      text.push(/*#__PURE__*/React.createElement("text", {
        key: 'l' + i,
        className: "fs-skill-graph__label",
        x: p[0],
        y: p[1],
        textAnchor: Math.abs(p[0] - ox) < 1 ? 'middle' : p[0] > ox ? 'start' : 'end'
      }, axes[i].label));
    }
  }
  return /*#__PURE__*/React.createElement("svg", _extends({
    role: "img",
    "aria-label": axes.map(a => a.label + ' ' + a.value).join(', ')
  }, rest, {
    className: __ds_scope.cx('fs-skill-graph', `fs-skill-graph--${size}`, `fs-skill-graph--${grid}`, tone === 'dark' && 'fs-skill-graph--dark', className),
    "data-state": state || undefined,
    viewBox: xs[0] + ' 0 ' + width + ' ' + S.h,
    style: {
      width: width + 'px',
      ...style
    }
  }), /*#__PURE__*/React.createElement("g", {
    ref: measureRef
  }, /*#__PURE__*/React.createElement("g", {
    className: "fs-skill-graph__grid"
  }, gridEls), text, compare ? sgSeries('compare', ox, oy, S, n, compare, max, fill) : null, sgSeries('main', ox, oy, S, n, axes.map(a => a.value), max, !fill)));
}
Object.assign(__ds_scope, { SkillGraph });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/SkillGraph/SkillGraph.jsx", error: String((e && e.message) || e) }); }

// src/components/SkillLevel/SkillLevel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SKILL_LEVEL_INFO = {
  'not-start': {
    label: 'Not start',
    bars: 3
  },
  novice: {
    label: 'Novice',
    bars: 1
  },
  emerging: {
    label: 'Emerging',
    bars: 1
  },
  intermediate: {
    label: 'Intermediate',
    bars: 2
  },
  'above-avg': {
    label: 'Above Avg',
    bars: 2
  },
  excellent: {
    label: 'Excellent',
    bars: 3
  }
};

/** Shows which of six skill levels a learner is at, as 3 bars or a chart band (legacy palette). */
function SkillLevel({
  level: levelProp,
  variant,
  label: labelProp,
  range,
  active,
  state,
  className,
  ...rest
}) {
  const level = levelProp && SKILL_LEVEL_INFO[levelProp] ? levelProp : 'not-start';
  const info = SKILL_LEVEL_INFO[level];
  const band = variant === 'band';
  const label = labelProp !== undefined ? labelProp : info.label;
  const inactive = band && (active === false || level === 'not-start');
  const rootClass = __ds_scope.cx('fs-skill-level', `fs-skill-level--${band ? 'band' : 'bars'}`, `fs-skill-level--${level}`, inactive && 'fs-skill-level--inactive', className);
  if (band) {
    return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
      className: rootClass,
      "data-state": state || undefined
    }), /*#__PURE__*/React.createElement("div", {
      className: "fs-skill-level__head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "fs-skill-level__cap"
    }), /*#__PURE__*/React.createElement("span", {
      className: "fs-skill-level__label"
    }, label)), /*#__PURE__*/React.createElement("span", {
      className: "fs-skill-level__range"
    }, range));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": typeof label === 'string' ? label : info.label
  }, rest, {
    className: rootClass,
    "data-state": state || undefined
  }), [1, 2, 3].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: __ds_scope.cx('fs-skill-level__bar', `fs-skill-level__bar--${i}`, i <= info.bars && 'fs-skill-level__bar--on')
  })));
}
Object.assign(__ds_scope, { SkillLevel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/SkillLevel/SkillLevel.jsx", error: String((e && e.message) || e) }); }

// src/components/SkillProgress/SkillProgress.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A plain 10px bar showing a percentage as a purple fill on a pale track (legacy palette). */
function SkillProgress({
  value: valueProp,
  state,
  className,
  style,
  children: _c,
  ...rest
}) {
  const value = Math.min(100, Math.max(0, Number(valueProp) || 0));
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": value
  }, rest, {
    className: __ds_scope.cx('fs-skill-progress', className),
    "data-state": state || undefined,
    style: {
      '--fs-skill-progress-value': value,
      ...style
    }
  }), value > 0 ? /*#__PURE__*/React.createElement("span", {
    className: "fs-skill-progress__fill"
  }) : null);
}
Object.assign(__ds_scope, { SkillProgress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/SkillProgress/SkillProgress.jsx", error: String((e && e.message) || e) }); }

// src/components/Slider/Slider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sliderNum = (v, fb) => {
  const n = Number(v);
  return v == null || v === '' || isNaN(n) ? fb : n;
};

/** Picks a number, or a low–high pair, by dragging a thumb along a track (legacy palette). */
function Slider({
  variant,
  value: valueProp,
  defaultValue,
  onChange,
  min: minProp,
  max: maxProp,
  step,
  name,
  disabled: disabledProp,
  thumbLabels,
  fullWidth,
  state,
  className,
  style,
  children: _c,
  ...rest
}) {
  const range = variant === 'range';
  const min = sliderNum(minProp, 0);
  const max = sliderNum(maxProp, 100);
  const controlled = valueProp !== undefined;
  const [own, setOwn] = React.useState(defaultValue !== undefined ? defaultValue : range ? [min, max] : min);
  const [swapped, setSwapped] = React.useState(false);
  const value = controlled ? valueProp : own;
  const pair = range ? [sliderNum(Array.isArray(value) ? value[0] : undefined, min), sliderNum(Array.isArray(value) ? value[1] : undefined, max)] : [min, sliderNum(value, min)];
  const held = range && swapped ? [pair[1], pair[0]] : pair;
  const frac = v => max > min ? Math.min(1, Math.max(0, (v - min) / (max - min))) : 0;
  const disabled = !!disabledProp || state === 'disabled';
  const change = i => e => {
    const v = Number(e.target.value);
    let next = v;
    if (range) {
      const now = [held[0], held[1]];
      now[i] = v;
      if (now[0] !== now[1]) setSwapped(now[0] > now[1]);
      next = [Math.min(now[0], now[1]), Math.max(now[0], now[1])];
    }
    if (!controlled) setOwn(next);
    if (onChange) onChange(next, e);
  };
  const input = (i, extra) => /*#__PURE__*/React.createElement("input", _extends({
    key: i
  }, extra, {
    type: "range",
    className: "fs-slider__input",
    min: min,
    max: max,
    step: step,
    name: name,
    value: held[i],
    onChange: change(i),
    disabled: disabled || undefined
  }));
  const labels = thumbLabels ?? [];
  const rootStyle = {
    '--fs-slider-lo': frac(pair[0]),
    '--fs-slider-hi': frac(pair[1]),
    ...style
  };
  const groupProps = range ? {
    ...rest,
    role: rest.role || 'group'
  } : null;
  return /*#__PURE__*/React.createElement("div", _extends({}, groupProps, {
    className: __ds_scope.cx('fs-slider', range && 'fs-slider--range', fullWidth && 'fs-slider--full-width', className),
    style: rootStyle,
    "data-state": state || undefined
  }), /*#__PURE__*/React.createElement("span", {
    className: "fs-slider__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fs-slider__fill"
  })), range ? [0, 1].map(i => input(i, {
    'aria-label': labels[swapped ? 1 - i : i]
  })) : input(1, rest));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/Slider/Slider.jsx", error: String((e && e.message) || e) }); }

// src/components/Stepper/Stepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** One step of a Stepper: indicator, joining lines and label. */
function StepperStep({
  state = 'default',
  position = 'middle',
  label: labelProp,
  className,
  children,
  ...rest
}) {
  const label = labelProp != null ? labelProp : children;
  return /*#__PURE__*/React.createElement("li", _extends({
    "aria-current": state === 'active' ? 'step' : undefined
  }, rest, {
    className: __ds_scope.cx('fs-stepper__step', `fs-stepper__step--${state}`, `fs-stepper__step--${position}`, className),
    "data-state": state
  }), /*#__PURE__*/React.createElement("span", {
    className: "fs-stepper__row",
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("span", {
    className: "fs-stepper__line fs-stepper__line--before"
  }), /*#__PURE__*/React.createElement("span", {
    className: "fs-stepper__indicator"
  }, state === 'done' ? /*#__PURE__*/React.createElement("svg", {
    className: "fs-stepper__check",
    viewBox: "0 0 16 16",
    width: 16,
    height: 16
  }, /*#__PURE__*/React.createElement("rect", {
    x: -3,
    y: -1,
    width: 6,
    height: 2,
    rx: 1,
    fill: "currentColor",
    transform: "translate(5.17 9.83) rotate(45)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: -5,
    y: -1,
    width: 10,
    height: 2,
    rx: 1,
    fill: "currentColor",
    transform: "translate(9.41 8.41) rotate(-45)"
  })) : /*#__PURE__*/React.createElement("span", {
    className: "fs-stepper__dot"
  })), /*#__PURE__*/React.createElement("span", {
    className: "fs-stepper__line fs-stepper__line--after"
  })), label != null && label !== false ? /*#__PURE__*/React.createElement("span", {
    className: "fs-stepper__label"
  }, label) : null);
}

/** Shows where the user is in a short, linear sequence (legacy palette). */
function Stepper({
  steps,
  current = 0,
  className,
  children,
  ...rest
}) {
  const labels = typeof steps === 'number' ? null : steps || [];
  const count = labels ? labels.length : Math.max(0, Math.floor(steps));
  let items = children;
  if (items == null) {
    items = [];
    for (let i = 0; i < count; i++) {
      items.push(/*#__PURE__*/React.createElement(StepperStep, {
        key: i,
        state: i < current ? 'done' : i === current ? 'active' : 'default',
        position: i === 0 ? 'start' : i === count - 1 ? 'end' : 'middle',
        className: count === 1 ? 'fs-stepper__step--end' : undefined,
        label: labels ? labels[i] : null
      }));
    }
  }
  return /*#__PURE__*/React.createElement("ol", _extends({}, rest, {
    className: __ds_scope.cx('fs-stepper', className)
  }), items);
}
Object.assign(__ds_scope, { StepperStep, Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/Stepper/Stepper.jsx", error: String((e && e.message) || e) }); }

// src/components/SurveySelectionCard/SurveySelectionCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A radio card for picking a survey: radio, file-search tile, survey name and a line of facts. */
function SurveySelectionCard({
  title,
  meta,
  icon,
  isNew,
  newLabel,
  value,
  selected: selectedProp,
  defaultSelected,
  onSelect,
  state,
  className,
  children,
  onClick,
  disabled: disabledProp,
  ...rest
}) {
  const [own, setOwn] = React.useState(!!defaultSelected);
  const controlled = selectedProp !== undefined;
  const selected = (controlled ? !!selectedProp : own) || state === 'selected';
  const disabled = !!disabledProp || state === 'disabled';
  const iconNode = icon === undefined ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "document-magnifying-glass",
    size: 20
  }) : icon;
  const facts = [].concat(meta ?? []);
  const sep = key => /*#__PURE__*/React.createElement("span", {
    key: key,
    "aria-hidden": true
  }, "\u2022");
  const bits = [];
  facts.forEach((fact, i) => {
    if (i) bits.push(sep('s' + i));
    bits.push(/*#__PURE__*/React.createElement("span", {
      key: 'm' + i
    }, fact));
  });
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "radio"
  }, rest, {
    value: value,
    className: __ds_scope.cx('fs-survey-selection-card', selected && 'fs-survey-selection-card--selected', className),
    "data-state": state,
    "aria-checked": selected,
    disabled: disabled || undefined,
    onClick: e => {
      if (onClick) onClick(e);
      if (!controlled) setOwn(true);
      if (onSelect) onSelect(value, e);
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "fs-survey-selection-card__radio"
  }, selected ? /*#__PURE__*/React.createElement("span", {
    className: "fs-survey-selection-card__dot"
  }) : null), /*#__PURE__*/React.createElement("span", {
    className: "fs-survey-selection-card__icon"
  }, iconNode), /*#__PURE__*/React.createElement("span", {
    className: "fs-survey-selection-card__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fs-survey-selection-card__title"
  }, title === undefined ? children : title), bits.length ? /*#__PURE__*/React.createElement("span", {
    className: "fs-survey-selection-card__meta"
  }, bits) : null), isNew ? /*#__PURE__*/React.createElement("span", {
    className: "fs-survey-selection-card__badge"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "star",
    size: 14
  }), newLabel || 'ใหม่') : null);
}
Object.assign(__ds_scope, { SurveySelectionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/SurveySelectionCard/SurveySelectionCard.jsx", error: String((e && e.message) || e) }); }

// src/components/Tabs/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A single tab. Tabs renders these for you. */
function TabsItem({
  label,
  icon,
  badge,
  selected,
  state,
  className,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "tab"
  }, rest, {
    className: __ds_scope.cx('fs-tabs__item', selected && 'fs-tabs__item--selected', className),
    "aria-selected": !!selected,
    "data-state": state || undefined,
    disabled: rest.disabled || state === 'disabled' || undefined
  }), icon || null, /*#__PURE__*/React.createElement("span", {
    className: "fs-tabs__label"
  }, label != null ? label : children), badge != null && badge !== false ? /*#__PURE__*/React.createElement("span", {
    className: "fs-tabs__badge"
  }, badge) : null);
}
const tabEnabled = item => !item.disabled && item.state !== 'disabled';

/** A horizontal row of tabs that switches between views of the same page. Draws the row only. */
function Tabs({
  items: itemsProp,
  value: valueProp,
  defaultValue,
  onChange,
  variant: variantProp,
  className,
  children: _c,
  onKeyDown: onKeyDownProp,
  ...rest
}) {
  const items = itemsProp || [];
  const first = items.filter(tabEnabled)[0];
  const [own, setOwn] = React.useState(defaultValue !== undefined ? defaultValue : first ? first.id : undefined);
  const value = valueProp !== undefined ? valueProp : own;
  const variant = variantProp || (items.some(i => i.icon) ? 'icons' : 'text');
  const stop = items.some(i => i.id === value && tabEnabled(i)) ? value : first ? first.id : undefined;
  const select = id => {
    if (valueProp === undefined) setOwn(id);
    if (onChange && id !== value) onChange(id);
  };
  const onKeyDown = e => {
    if (onKeyDownProp) onKeyDownProp(e);
    const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!step && e.key !== 'Home' && e.key !== 'End') return;
    const tabs = Array.from(e.currentTarget.querySelectorAll('[role="tab"]:not(:disabled)'));
    if (!tabs.length) return;
    const next = e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : (tabs.indexOf(e.target) + step + tabs.length) % tabs.length;
    e.preventDefault();
    tabs[next].focus();
    tabs[next].click();
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist"
  }, rest, {
    className: __ds_scope.cx('fs-tabs', `fs-tabs--${variant}`, className),
    onKeyDown: onKeyDown
  }), items.map(item => /*#__PURE__*/React.createElement(TabsItem, {
    key: item.id,
    "aria-controls": item.controls,
    label: item.label,
    icon: variant === 'icons' ? item.icon : null,
    badge: item.badge,
    selected: item.id === value,
    disabled: item.disabled,
    state: item.state,
    tabIndex: item.id === stop ? 0 : -1,
    onClick: () => select(item.id)
  })));
}
Object.assign(__ds_scope, { TabsItem, Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/Tabs/Tabs.jsx", error: String((e && e.message) || e) }); }

// src/components/TestSelectionCard/TestSelectionCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A radio card for picking a test: radio, document tile, test name and a line of facts. */
function TestSelectionCard({
  title,
  meta,
  icon,
  isNew,
  newLabel,
  openEnd,
  openEndLabel,
  value,
  selected: selectedProp,
  defaultSelected,
  onSelect,
  state,
  className,
  children,
  onClick,
  disabled: disabledProp,
  ...rest
}) {
  const [own, setOwn] = React.useState(!!defaultSelected);
  const controlled = selectedProp !== undefined;
  const selected = (controlled ? !!selectedProp : own) || state === 'selected';
  const disabled = !!disabledProp || state === 'disabled';
  const iconNode = icon === undefined ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "document-text",
    size: 20
  }) : icon;
  const facts = [].concat(meta ?? []);
  const sep = key => /*#__PURE__*/React.createElement("span", {
    key: key,
    "aria-hidden": true
  }, "\u2022");
  const bits = [];
  facts.forEach((fact, i) => {
    if (i) bits.push(sep('s' + i));
    bits.push(/*#__PURE__*/React.createElement("span", {
      key: 'm' + i
    }, fact));
  });
  if (openEnd) {
    if (bits.length) bits.push(sep('so'));
    bits.push(/*#__PURE__*/React.createElement("span", {
      key: "o",
      className: "fs-test-selection-card__open-end"
    }, openEndLabel || 'มีข้อสอบข้อเขียน'));
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "radio"
  }, rest, {
    value: value,
    className: __ds_scope.cx('fs-test-selection-card', selected && 'fs-test-selection-card--selected', className),
    "data-state": state,
    "aria-checked": selected,
    disabled: disabled || undefined,
    onClick: e => {
      if (onClick) onClick(e);
      if (!controlled) setOwn(true);
      if (onSelect) onSelect(value, e);
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "fs-test-selection-card__radio"
  }, selected ? /*#__PURE__*/React.createElement("span", {
    className: "fs-test-selection-card__dot"
  }) : null), /*#__PURE__*/React.createElement("span", {
    className: "fs-test-selection-card__icon"
  }, iconNode), /*#__PURE__*/React.createElement("span", {
    className: "fs-test-selection-card__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fs-test-selection-card__title"
  }, title === undefined ? children : title), bits.length ? /*#__PURE__*/React.createElement("span", {
    className: "fs-test-selection-card__meta"
  }, bits) : null), isNew ? /*#__PURE__*/React.createElement("span", {
    className: "fs-test-selection-card__badge"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "star",
    size: 14
  }), newLabel || 'ใหม่') : null);
}
Object.assign(__ds_scope, { TestSelectionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/TestSelectionCard/TestSelectionCard.jsx", error: String((e && e.message) || e) }); }

// src/components/TextInput/TextInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function focusInput(e) {
  if (e.target.closest('input, button, a')) return;
  const input = e.currentTarget.querySelector('input');
  if (input && !input.disabled) input.focus();
}

/** A single-line text field with its label, hint and error message built in. */
function TextInput({
  label,
  hint,
  required,
  optional,
  invalid: invalidProp,
  error,
  icon,
  fullWidth,
  state,
  className,
  style,
  inputRef,
  children: _c,
  ...rest
}) {
  const auto = React.useId();
  const id = rest.id || 'fs-text-input-' + auto;
  const disabled = !!rest.disabled || state === 'disabled';
  const invalid = !disabled && (!!invalidProp || !!error);
  const hintId = hint ? id + '-hint' : null;
  const errorId = invalid && error ? id + '-error' : null;
  return /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx('fs-text-input', invalid && 'fs-text-input--invalid', disabled && 'fs-text-input--disabled', icon && 'fs-text-input--has-icon', fullWidth && 'fs-text-input--full-width', className),
    style: style,
    "data-state": state
  }, label || hint ? /*#__PURE__*/React.createElement("div", {
    className: "fs-text-input__text"
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "fs-text-input__label",
    htmlFor: id
  }, /*#__PURE__*/React.createElement("span", {
    className: "fs-text-input__label-text"
  }, label), required ? /*#__PURE__*/React.createElement("span", {
    className: "fs-text-input__required",
    "aria-hidden": true
  }, "*") : null, optional ? /*#__PURE__*/React.createElement("span", {
    className: "fs-text-input__optional"
  }, optional === true ? '(optional)' : optional) : null) : null, hint ? /*#__PURE__*/React.createElement("span", {
    className: "fs-text-input__hint",
    id: hintId
  }, hint) : null) : null, errorId ? /*#__PURE__*/React.createElement("div", {
    className: "fs-text-input__error",
    id: errorId
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x-circle",
    size: 24,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", {
    className: "fs-text-input__error-text"
  }, error)) : null, /*#__PURE__*/React.createElement("div", {
    className: "fs-text-input__field",
    onClick: focusInput
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "text"
  }, rest, {
    id: id,
    ref: inputRef,
    className: "fs-text-input__input",
    disabled: disabled || undefined,
    required: required || undefined,
    "aria-invalid": invalid || undefined,
    "aria-describedby": __ds_scope.cx(rest['aria-describedby'], hintId, errorId) || undefined
  })), icon ? /*#__PURE__*/React.createElement("span", {
    className: "fs-text-input__icon"
  }, icon) : null));
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/TextInput/TextInput.jsx", error: String((e && e.message) || e) }); }

// src/components/TextLink/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** An inline text action with no container. Renders <a> with href, otherwise <button>. */
function TextLink({
  tone = 'default',
  size = 'small',
  weight = 'bold',
  underline,
  iconLeft,
  iconRight,
  state,
  className,
  children,
  href,
  disabled: disabledProp,
  htmlType,
  ...rest
}) {
  const disabled = !!disabledProp || state === 'disabled';
  const classes = __ds_scope.cx('fs-text-link', `fs-text-link--${tone}`, `fs-text-link--${size}`, `fs-text-link--${weight}`, underline === false && 'fs-text-link--no-underline', className);
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft || null, /*#__PURE__*/React.createElement("span", {
    className: "fs-text-link__label"
  }, children), iconRight || null);
  if (href != null) {
    const own = disabled ? {
      'aria-disabled': 'true',
      tabIndex: -1,
      onClick: undefined
    } : {
      href
    };
    return /*#__PURE__*/React.createElement("a", _extends({}, rest, own, {
      className: classes,
      "data-state": state
    }), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    type: htmlType ?? 'button',
    disabled: disabled || undefined,
    className: classes,
    "data-state": state
  }), content);
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/TextLink/TextLink.jsx", error: String((e && e.message) || e) }); }

// src/components/Textarea/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const textLen = v => v == null ? 0 : String(v).length;

/** Multi-line text field of the legacy input family, with an optional character count. */
function Textarea({
  size = 'medium',
  showCount,
  fullWidth,
  state,
  inputRef,
  className,
  style,
  children: _c,
  onChange,
  ...rest
}) {
  const disabled = !!rest.disabled || state === 'disabled';
  const [own, setOwn] = React.useState(() => textLen(rest.defaultValue));
  const count = rest.value !== undefined ? textLen(rest.value) : own;
  const change = e => {
    setOwn(e.target.value.length);
    if (onChange) onChange(e);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx('fs-textarea', `fs-textarea--${size}`, disabled && 'fs-textarea--disabled', fullWidth && 'fs-textarea--full-width', className),
    style: style,
    "data-state": state || undefined
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    rows: 2
  }, rest, {
    ref: inputRef,
    className: "fs-textarea__control",
    disabled: disabled || undefined,
    onChange: change
  })), showCount ? /*#__PURE__*/React.createElement("span", {
    className: "fs-textarea__count"
  }, rest.maxLength != null ? `${count} / ${rest.maxLength}` : count) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/Textarea/Textarea.jsx", error: String((e && e.message) || e) }); }

// src/components/Toast/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TOAST_ICONS = {
  success: 'check-circle',
  error: 'exclamation-circle',
  warning: 'exclamation-triangle',
  info: 'information-circle'
};
const TOAST_THEMES = ['light', 'dark', 'colored'];

/** A small 313px message reporting the result of an action (legacy palette). */
function Toast({
  variant: variantProp,
  theme: themeProp,
  message,
  icon: iconProp,
  progress,
  closable,
  onClose,
  closeLabel,
  open: openProp,
  state,
  className,
  children,
  ...rest
}) {
  const variant = variantProp && TOAST_ICONS[variantProp] ? variantProp : 'success';
  const theme = themeProp && TOAST_THEMES.indexOf(themeProp) >= 0 ? themeProp : 'light';
  const [shown, setShown] = React.useState(true);
  const open = openProp === undefined ? shown : openProp;
  if (!open) return null;
  let icon = iconProp;
  if (icon === undefined) icon = /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: TOAST_ICONS[variant],
    variant: "solid",
    size: 24
  });
  let bar = null;
  if (typeof progress === 'number' && !isNaN(progress)) bar = /*#__PURE__*/React.createElement("span", {
    className: "fs-toast__progress",
    "aria-hidden": true,
    style: {
      width: Math.max(0, Math.min(100, progress)) + '%'
    }
  });else if (progress) bar = /*#__PURE__*/React.createElement("span", {
    className: "fs-toast__progress",
    "aria-hidden": true
  });
  const close = e => {
    if (openProp === undefined) setShown(false);
    if (onClose) onClose(e);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: variant === 'error' || variant === 'warning' ? 'alert' : 'status'
  }, rest, {
    className: __ds_scope.cx('fs-toast', `fs-toast--${variant}`, `fs-toast--${theme}`, className),
    "data-state": state || undefined
  }), icon ? /*#__PURE__*/React.createElement("span", {
    className: "fs-toast__icon"
  }, icon) : null, /*#__PURE__*/React.createElement("div", {
    className: "fs-toast__message"
  }, message === undefined ? children : message), closable === false ? null : /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "fs-toast__close",
    "aria-label": closeLabel || 'ปิด',
    onClick: close
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x-mark",
    size: 20,
    strokeWidth: 2.4
  })), bar);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/Toast/Toast.jsx", error: String((e && e.message) || e) }); }

// src/components/Toggle/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TOGGLE_SPINNER = 'M17.999 19.265C17.3 19.265 16.734 18.699 16.734 18C16.734 15.911 16.326 13.886 15.517 11.977C14.74 10.139 13.614 8.469 12.202 7.059C10.793 5.645 9.123 4.519 7.284 3.744C5.378 2.939 3.353 2.531 1.265 2.531C0.566 2.531 0 1.965 0 1.265C0 0.566 0.566 0 1.265 0C3.694 0 6.053 0.474 8.272 1.416C10.416 2.32 12.339 3.621 13.992 5.273C15.644 6.925 16.941 8.852 17.848 10.993C18.787 13.211 19.262 15.57 19.262 18C19.265 18.699 18.699 19.265 17.999 19.265Z';
const toggleHas = v => v != null && v !== false && v !== '';
function ToggleInner({
  side,
  text,
  icon
}) {
  const isIcon = toggleHas(icon);
  const content = isIcon ? icon : toggleHas(text) ? text : null;
  return /*#__PURE__*/React.createElement("span", {
    className: __ds_scope.cx('fs-toggle__inner', `fs-toggle__inner--${side}`, content == null ? 'fs-toggle__inner--empty' : isIcon ? 'fs-toggle__inner--icon' : 'fs-toggle__inner--text')
  }, content);
}

/** A switch between on and off that takes effect immediately (legacy palette). */
function Toggle({
  size: sizeProp,
  loading: loadingProp,
  disabled: disabledProp,
  checkedText,
  uncheckedText,
  checkedIcon,
  uncheckedIcon,
  state,
  className,
  style,
  children: _c,
  ...rest
}) {
  const size = sizeProp === 'small' ? 'small' : 'medium';
  const loading = !!loadingProp;
  const disabled = !!disabledProp || loading || state === 'disabled';
  const hasOn = toggleHas(checkedText) || toggleHas(checkedIcon);
  const hasOff = toggleHas(uncheckedText) || toggleHas(uncheckedIcon);
  return /*#__PURE__*/React.createElement("span", {
    className: __ds_scope.cx('fs-toggle', `fs-toggle--${size}`, hasOn && 'fs-toggle--has-on', hasOff && 'fs-toggle--has-off', loading && 'fs-toggle--loading', disabled && 'fs-toggle--disabled', className),
    style: style,
    "data-state": state
  }, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    type: "checkbox",
    role: "switch",
    className: "fs-toggle__input",
    disabled: disabled || undefined,
    "aria-busy": loading || undefined
  })), /*#__PURE__*/React.createElement("span", {
    className: "fs-toggle__track",
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement(ToggleInner, {
    side: "on",
    text: checkedText,
    icon: checkedIcon
  }), /*#__PURE__*/React.createElement(ToggleInner, {
    side: "off",
    text: uncheckedText,
    icon: uncheckedIcon
  }), /*#__PURE__*/React.createElement("span", {
    className: "fs-toggle__nob"
  }, loading ? /*#__PURE__*/React.createElement("svg", {
    className: "fs-toggle__spinner",
    viewBox: "0 0 36 36"
  }, /*#__PURE__*/React.createElement("path", {
    d: TOGGLE_SPINNER,
    transform: "translate(16.73 0)",
    fill: "currentColor"
  })) : null)));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "src/components/Toggle/Toggle.jsx", error: String((e && e.message) || e) }); }

// ui_kits/learning-app/ClassBuilder.jsx
try { (() => {
function ClassBuilder({
  onToast
}) {
  const {
    Stepper,
    SectionTypeItem,
    TestSelectionCard,
    SurveySelectionCard,
    OutsideLearningCard,
    TextInput,
    Button,
    SearchBox,
    Icon
  } = window.FutureSkillDesignSystem_f8a410;
  const [step, setStep] = React.useState(0);
  const [type, setType] = React.useState('general');
  const [test, setTest] = React.useState('t1');
  const card = {
    background: 'var(--background-raised)',
    border: '1px solid var(--stroke-weak)',
    borderRadius: 'var(--radius-16)',
    padding: 'var(--space-24)',
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E04\u0E25\u0E32\u0E2A",
    sub: "\u0E40\u0E1E\u0E34\u0E48\u0E21 Section \u0E43\u0E2B\u0E49\u0E01\u0E31\u0E1A\u0E04\u0E25\u0E32\u0E2A\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 40px 40px',
      maxWidth: 820,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    steps: ['ข้อมูลทั่วไป', 'เลือกประเภท Section', 'เนื้อหา', 'ตรวจสอบ'],
    current: step + 1
  }), step === 0 ? /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement(TextInput, {
    label: "\u0E0A\u0E37\u0E48\u0E2D Section",
    required: true,
    placeholder: "\u0E40\u0E0A\u0E48\u0E19 \u0E1A\u0E17\u0E19\u0E33",
    fullWidth: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "th-subtitle-5"
  }, "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17 Section"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(SectionTypeItem, {
    variant: "general",
    active: type === 'general',
    onClick: () => setType('general')
  }), /*#__PURE__*/React.createElement(SectionTypeItem, {
    variant: "survey",
    active: type === 'survey',
    onClick: () => setType('survey')
  }))) : /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "th-subtitle-5"
  }, type === 'general' ? 'เลือกแบบทดสอบ' : 'เลือกแบบสอบถาม'), /*#__PURE__*/React.createElement(SearchBox, {
    placeholder: "\u0E04\u0E49\u0E19\u0E2B\u0E32",
    size: "medium"
  })), /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, type === 'general' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TestSelectionCard, {
    value: "t1",
    selected: test === 't1',
    onSelect: setTest,
    title: "React Advanced Patterns",
    meta: ['20 คำถาม', 'คะแนนผ่าน 80%', 'ทำแล้ว 81 ครั้ง']
  }), /*#__PURE__*/React.createElement(TestSelectionCard, {
    value: "t2",
    selected: test === 't2',
    onSelect: setTest,
    title: "Chat GPT For Everyone \u2014 \u0E41\u0E1A\u0E1A\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E17\u0E49\u0E32\u0E22\u0E1A\u0E17",
    meta: ['15 คำถาม', 'คะแนนผ่าน 70%', 'ทำแล้ว 240 ครั้ง'],
    isNew: true,
    openEnd: true
  }), /*#__PURE__*/React.createElement(TestSelectionCard, {
    value: "t3",
    title: "\u0E41\u0E1A\u0E1A\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E01\u0E48\u0E2D\u0E19\u0E40\u0E23\u0E35\u0E22\u0E19 (\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19)",
    meta: ['10 คำถาม'],
    disabled: true
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SurveySelectionCard, {
    value: "t1",
    selected: test === 't1',
    onSelect: setTest,
    title: "\u0E41\u0E1A\u0E1A\u0E2A\u0E2D\u0E1A\u0E16\u0E32\u0E21\u0E04\u0E27\u0E32\u0E21\u0E1E\u0E36\u0E07\u0E1E\u0E2D\u0E43\u0E08\u0E2B\u0E25\u0E31\u0E07\u0E40\u0E23\u0E35\u0E22\u0E19",
    meta: ['12 คำถาม', 'ทำแล้ว 81 ครั้ง']
  }), /*#__PURE__*/React.createElement(SurveySelectionCard, {
    value: "t2",
    selected: test === 't2',
    onSelect: setTest,
    title: "\u0E41\u0E1A\u0E1A\u0E2A\u0E33\u0E23\u0E27\u0E08\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49",
    meta: ['8 คำถาม', 'ทำแล้ว 12 ครั้ง'],
    isNew: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "th-subtitle-5"
  }, "\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E08\u0E32\u0E01\u0E20\u0E32\u0E22\u0E19\u0E2D\u0E01"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(OutsideLearningCard, {
    title: "\u0E2D\u0E1A\u0E23\u0E21\u0E20\u0E32\u0E22\u0E19\u0E2D\u0E01",
    description: "\u0E01\u0E32\u0E23\u0E2D\u0E1A\u0E23\u0E21\u0E2B\u0E23\u0E37\u0E2D\u0E2A\u0E31\u0E21\u0E21\u0E19\u0E32\u0E17\u0E35\u0E48\u0E08\u0E31\u0E14\u0E42\u0E14\u0E22\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23\u0E20\u0E32\u0E22\u0E19\u0E2D\u0E01"
  }), /*#__PURE__*/React.createElement(OutsideLearningCard, {
    title: "\u0E2B\u0E19\u0E31\u0E07\u0E2A\u0E37\u0E2D / \u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21",
    description: "\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E14\u0E49\u0E27\u0E22\u0E15\u0E19\u0E40\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E2B\u0E19\u0E31\u0E07\u0E2A\u0E37\u0E2D\u0E2B\u0E23\u0E37\u0E2D\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 12
    }
  }, step > 0 ? /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    tone: "neutral",
    onClick: () => setStep(0)
  }, "\u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A") : null, /*#__PURE__*/React.createElement(Button, {
    iconRight: step === 0 ? /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    }) : null,
    onClick: () => step === 0 ? setStep(1) : onToast('บันทึก Section เรียบร้อยแล้ว')
  }, step === 0 ? 'ถัดไป' : 'บันทึก'))));
}
window.ClassBuilder = ClassBuilder;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/learning-app/ClassBuilder.jsx", error: String((e && e.message) || e) }); }

// ui_kits/learning-app/MyLearning.jsx
try { (() => {
function MyLearning({
  onToast
}) {
  const {
    SegmentedControl,
    ProgressBar,
    Button,
    Badge,
    Alert,
    Icon,
    TextLink
  } = window.FutureSkillDesignSystem_f8a410;
  const [filter, setFilter] = React.useState('progress');
  const courses = [{
    t: 'Chat GPT For Everyone',
    v: 12,
    m: 20,
    s: 'progress'
  }, {
    t: 'Creative Drawing วาดรูปสร้างรายได้จากการเขียน Webcomics',
    v: 3,
    m: 18,
    s: 'progress'
  }, {
    t: 'การสื่อสารอย่างมืออาชีพ',
    v: 10,
    m: 10,
    s: 'done'
  }, {
    t: 'React Advanced Patterns',
    v: 0,
    m: 24,
    s: 'progress'
  }].filter(c => filter === 'all' || c.s === filter);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
    sub: "\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E04\u0E27\u0E32\u0E21\u0E04\u0E37\u0E1A\u0E2B\u0E19\u0E49\u0E32\u0E02\u0E2D\u0E07\u0E04\u0E2D\u0E23\u0E4C\u0E2A\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E44\u0E27\u0E49"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "brand",
    action: "\u0E14\u0E39\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14",
    onAction: () => onToast('เปิดรายละเอียดคอร์สแล้ว')
  }, "\u0E04\u0E38\u0E13\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E21\u0E2D\u0E1A\u0E2B\u0E21\u0E32\u0E22 Road to Chat GPT For Everyone \u0E08\u0E32\u0E01 Admin"), /*#__PURE__*/React.createElement(SegmentedControl, {
    size: "small",
    value: filter,
    onChange: setFilter,
    options: [{
      value: 'all',
      label: 'ทั้งหมด'
    }, {
      value: 'progress',
      label: 'กำลังเรียน'
    }, {
      value: 'done',
      label: 'เรียนจบแล้ว'
    }],
    style: {
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gap: 24,
      paddingBottom: 40
    }
  }, courses.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.t,
    style: {
      background: 'var(--background-raised)',
      borderRadius: 'var(--radius-16)',
      boxShadow: 'var(--shadow-card-course)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(CoverPh, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-16)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      flex: 1
    }
  }, c.s === 'done' ? /*#__PURE__*/React.createElement(Badge, {
    size: "small",
    tone: "success",
    style: {
      alignSelf: 'flex-start'
    }
  }, "\u0E40\u0E23\u0E35\u0E22\u0E19\u0E08\u0E1A\u0E41\u0E25\u0E49\u0E27") : null, /*#__PURE__*/React.createElement("div", {
    className: "th-subtitle-5",
    style: {
      minHeight: 44
    }
  }, c.t), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 28
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: c.v,
    max: c.m
  })), /*#__PURE__*/React.createElement(Button, {
    size: "small",
    variant: c.s === 'done' ? 'secondary' : 'primary',
    style: {
      alignSelf: 'flex-start'
    },
    onClick: () => onToast(c.s === 'done' ? 'ดาวน์โหลดใบรับรองแล้ว' : 'เรียนต่อจากบทที่ ' + (c.v + 1))
  }, c.s === 'done' ? 'ดูใบรับรอง' : c.v ? 'เรียนต่อ' : 'เริ่มเรียน')))))));
}
window.MyLearning = MyLearning;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/learning-app/MyLearning.jsx", error: String((e && e.message) || e) }); }

// ui_kits/learning-app/Notifications.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Notifications({
  onToast
}) {
  const {
    NotiItem,
    NotiItemHighlight,
    Tabs,
    Button,
    Icon
  } = window.FutureSkillDesignSystem_f8a410;
  const [tab, setTab] = React.useState('all');
  const [read, setRead] = React.useState({});
  const t = '27 วันที่ผ่านมา';
  const ph = /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      background: 'var(--primary-neutral-100)',
      color: 'var(--primary-neutral-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "photo"
  }));
  const items = [{
    id: 1,
    image: ph,
    title: 'คุณได้ลงทะเบียนสำเร็จแล้ว!',
    message: 'คุณได้ลงทะเบียน Chat GPT For Everyone เริ่มอัพสกิลกันเลย!',
    unread: true
  }, {
    id: 2,
    image: '../../assets/logos/favicon.png',
    media: 'mark',
    title: 'คุณได้รับมอบหมายตอนนี้!',
    message: 'คุณได้รับมอบหมาย Road to Chat GPT For Everyone จาก Admin',
    unread: true
  }, {
    id: 3,
    image: ph,
    title: 'ยินดีด้วย การเรียนของคุณสำเร็จแล้ว',
    message: 'การเรียน Chat GPT For Everyone ของคุณสำเร็จแล้ว',
    action: 'ดูใบรับรอง'
  }, {
    id: 4,
    tone: 'green',
    image: ph,
    titleLines: 1,
    title: '🔔 เหลืออีก 3 เดือน! ครบกำหนดการฝึกอบรม',
    message: 'การฝึกอบรม “Creative Drawing วาดรูปสร้างรายได้จากการเขียน Webcomics จากตัวละครของคุณ” ใกล้จะครบกำหนดเวลาสำหรับการอบรม',
    messageLines: 3,
    meta: 'วันครบกำหนด : 12/09/2025',
    unread: true,
    reminder: true
  }, {
    id: 5,
    image: '../../assets/logos/favicon.png',
    media: 'mark',
    title: 'การอบรมของคุณถูกปฏิเสธ',
    message: /*#__PURE__*/React.createElement(React.Fragment, null, 'การอบรม Creative Drawing เวลา 12/09/2025 08:00 - 12/09/2025 16:00 ของคุณ ', /*#__PURE__*/React.createElement(NotiItemHighlight, {
      tone: "red"
    }, "\u0E16\u0E39\u0E01\u0E1B\u0E0F\u0E34\u0E40\u0E2A\u0E18"), ' กรุณาตรวจสอบเพิ่มเติมที่หมายเหตุ')
  }].filter(i => tab === 'all' || (tab === 'unread' ? i.unread && !read[i.id] : i.reminder));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "\u0E01\u0E32\u0E23\u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "text",
      size: "small",
      onClick: () => {
        setRead({
          1: 1,
          2: 1,
          4: 1
        });
        onToast('อ่านทั้งหมดแล้ว');
      }
    }, "\u0E2D\u0E48\u0E32\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 40px 40px',
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      id: 'all',
      label: 'ทั้งหมด'
    }, {
      id: 'unread',
      label: 'ยังไม่อ่าน',
      badge: 3
    }, {
      id: 'reminder',
      label: 'การแจ้งเตือนครบกำหนด'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 16,
      border: '1px solid var(--stroke-weak)',
      borderRadius: 'var(--radius-8)',
      overflow: 'hidden'
    }
  }, items.map(({
    id,
    reminder,
    ...i
  }) => /*#__PURE__*/React.createElement(NotiItem, _extends({
    key: id
  }, i, {
    time: t,
    unread: i.unread && !read[id],
    onClick: () => setRead(r => ({
      ...r,
      [id]: 1
    })),
    onAction: () => onToast('เปิดใบรับรองแล้ว')
  }))))));
}
window.Notifications = Notifications;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/learning-app/Notifications.jsx", error: String((e && e.message) || e) }); }

// ui_kits/learning-app/Shell.jsx
try { (() => {
const {
  NavigationSide,
  NavigationSideItem,
  Icon,
  Badge,
  Button
} = window.FutureSkillDesignSystem_f8a410;
const NAV = [{
  id: 'learning',
  label: 'การเรียนของฉัน',
  icon: 'play-circle'
}, {
  id: 'notifications',
  label: 'การแจ้งเตือน',
  icon: 'bell',
  badge: 3
}, {
  id: 'skills',
  label: 'ทักษะของฉัน',
  icon: 'chart-bar'
}, {
  id: 'builder',
  label: 'สร้างคลาส',
  icon: 'squares-plus'
}];
function AppShell({
  screen,
  onNavigate,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100vh',
      background: 'var(--background-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 256,
      flex: 'none',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(NavigationSide, {
    header: /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '20px 24px 8px'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logos/fs-logo-light.png",
      alt: "FutureSkill",
      style: {
        height: 32
      }
    })),
    title: "\u0E40\u0E21\u0E19\u0E39",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavigationSideItem, {
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "cog-6-tooth"
      })
    }, "\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32"), /*#__PURE__*/React.createElement(NavigationSideItem, {
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-left-start-on-rectangle"
      })
    }, "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A"))
  }, NAV.map(n => /*#__PURE__*/React.createElement(NavigationSideItem, {
    key: n.id,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: n.icon
    }),
    selected: screen === n.id,
    onClick: () => onNavigate(n.id),
    badge: n.badge ? /*#__PURE__*/React.createElement(Badge, {
      size: "small",
      tone: "error",
      icon: false
    }, n.badge) : null
  }, n.label)))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      overflow: 'auto',
      background: 'var(--background-base)'
    }
  }, children));
}
function PageHeader({
  title,
  sub,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 16,
      padding: '32px 40px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "th-subtitle-1",
    style: {
      margin: 0
    }
  }, title), sub ? /*#__PURE__*/React.createElement("p", {
    className: "th-p5",
    style: {
      margin: '4px 0 0',
      color: 'var(--text-weak)'
    }
  }, sub) : null), actions);
}
function CoverPh({
  h = 140
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      background: 'var(--fill-weak)',
      color: 'var(--icon-neutral)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "photo",
    size: 32
  }));
}
Object.assign(window, {
  AppShell,
  PageHeader,
  CoverPh
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/learning-app/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/learning-app/SkillProfile.jsx
try { (() => {
function SkillProfile() {
  const {
    SkillGraph,
    SkillLevel,
    SkillProgress,
    Tabs
  } = window.FutureSkillDesignSystem_f8a410;
  const axes = [{
    label: 'HTML &CSS',
    value: 37
  }, {
    label: 'Javascript',
    value: 73
  }, {
    label: 'GIT',
    value: 100
  }, {
    label: 'API',
    value: 100
  }, {
    label: 'React',
    value: 95
  }, {
    label: 'Vue',
    value: 90
  }];
  const levels = [['novice', '0-24th'], ['emerging', '25-49th'], ['intermediate', '50-74th'], ['above-avg', '75-89th'], ['excellent', '90-100th']];
  const card = {
    background: 'var(--background-raised)',
    border: '1px solid var(--stroke-weak)',
    borderRadius: 'var(--radius-16)',
    padding: 'var(--space-24)'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "\u0E17\u0E31\u0E01\u0E29\u0E30\u0E02\u0E2D\u0E07\u0E09\u0E31\u0E19",
    sub: "\u0E1C\u0E25\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E40\u0E21\u0E34\u0E19\u0E17\u0E31\u0E01\u0E29\u0E30\u0E25\u0E48\u0E32\u0E2A\u0E38\u0E14 12/09/2025"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 40px 40px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.3fr) minmax(0,1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: card
  }, /*#__PURE__*/React.createElement("div", {
    className: "th-subtitle-4",
    style: {
      marginBottom: 8
    }
  }, "Front-end Developer"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(SkillGraph, {
    size: "mobile",
    axes: axes,
    compare: [60, 72, 80, 70, 60, 50]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...card,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "th-subtitle-4"
  }, "\u0E04\u0E30\u0E41\u0E19\u0E19\u0E23\u0E32\u0E22\u0E17\u0E31\u0E01\u0E29\u0E30"), axes.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.label,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    className: "th-p5"
  }, /*#__PURE__*/React.createElement("span", null, a.label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-weak)'
    }
  }, a.value, "%")), /*#__PURE__*/React.createElement(SkillProgress, {
    value: a.value
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...card,
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "th-subtitle-4",
    style: {
      marginBottom: 16
    }
  }, "\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E17\u0E31\u0E01\u0E29\u0E30\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, levels.map(([l, r]) => /*#__PURE__*/React.createElement(SkillLevel, {
    key: l,
    variant: "band",
    level: l,
    active: l === 'intermediate',
    range: r
  }))))));
}
window.SkillProfile = SkillProfile;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/learning-app/SkillProfile.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.CheckboxGroup = __ds_scope.CheckboxGroup;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.NavigationSideItem = __ds_scope.NavigationSideItem;

__ds_ns.NavigationSide = __ds_scope.NavigationSide;

__ds_ns.NotiItemHighlight = __ds_scope.NotiItemHighlight;

__ds_ns.NotiItem = __ds_scope.NotiItem;

__ds_ns.OjtMethodBadge = __ds_scope.OjtMethodBadge;

__ds_ns.OutsideLearningCard = __ds_scope.OutsideLearningCard;

__ds_ns.PasswordInput = __ds_scope.PasswordInput;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.SearchBox = __ds_scope.SearchBox;

__ds_ns.SectionTypeDescription = __ds_scope.SectionTypeDescription;

__ds_ns.SectionTypeItem = __ds_scope.SectionTypeItem;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.SkillGraph = __ds_scope.SkillGraph;

__ds_ns.SkillLevel = __ds_scope.SkillLevel;

__ds_ns.SkillProgress = __ds_scope.SkillProgress;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.StepperStep = __ds_scope.StepperStep;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.SurveySelectionCard = __ds_scope.SurveySelectionCard;

__ds_ns.TabsItem = __ds_scope.TabsItem;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TestSelectionCard = __ds_scope.TestSelectionCard;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.Icon = __ds_scope.Icon;

})();

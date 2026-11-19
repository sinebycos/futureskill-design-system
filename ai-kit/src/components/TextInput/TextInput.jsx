import React from 'react';
import { cx } from '../../utils/cx.js';
import { Icon } from '../../icon/Icon.jsx';

function focusInput(e) {
  if (e.target.closest('input, button, a')) return;
  const input = e.currentTarget.querySelector('input');
  if (input && !input.disabled) input.focus();
}

/** A single-line text field with its label, hint and error message built in. */
export function TextInput({ label, hint, required, optional, invalid: invalidProp, error, icon, fullWidth, state, className, style, inputRef, children: _c, ...rest }) {
  const auto = React.useId();
  const id = rest.id || 'fs-text-input-' + auto;
  const disabled = !!rest.disabled || state === 'disabled';
  const invalid = !disabled && (!!invalidProp || !!error);
  const hintId = hint ? id + '-hint' : null;
  const errorId = invalid && error ? id + '-error' : null;
  return (
    <div className={cx('fs-text-input', invalid && 'fs-text-input--invalid', disabled && 'fs-text-input--disabled', icon && 'fs-text-input--has-icon', fullWidth && 'fs-text-input--full-width', className)} style={style} data-state={state}>
      {label || hint ? (
        <div className="fs-text-input__text">
          {label ? (
            <label className="fs-text-input__label" htmlFor={id}>
              <span className="fs-text-input__label-text">{label}</span>
              {required ? <span className="fs-text-input__required" aria-hidden>*</span> : null}
              {optional ? <span className="fs-text-input__optional">{optional === true ? '(optional)' : optional}</span> : null}
            </label>
          ) : null}
          {hint ? <span className="fs-text-input__hint" id={hintId}>{hint}</span> : null}
        </div>
      ) : null}
      {errorId ? (
        <div className="fs-text-input__error" id={errorId}>
          <Icon name="x-circle" size={24} strokeWidth={2} />
          <span className="fs-text-input__error-text">{error}</span>
        </div>
      ) : null}
      <div className="fs-text-input__field" onClick={focusInput}>
        <input type="text" {...rest} id={id} ref={inputRef} className="fs-text-input__input" disabled={disabled || undefined} required={required || undefined} aria-invalid={invalid || undefined} aria-describedby={cx(rest['aria-describedby'], hintId, errorId) || undefined} />
        {icon ? <span className="fs-text-input__icon">{icon}</span> : null}
      </div>
    </div>
  );
}

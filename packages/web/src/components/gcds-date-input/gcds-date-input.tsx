import {
  Component,
  Host,
  Element,
  AttachInternals,
  Prop,
  State,
  Event,
  EventEmitter,
  Watch,
  Method,
  Listen,
  h,
} from '@stencil/core';
import { assignLanguage, observerConfig, isValidDate } from '../../utils/utils';
import {
  Validator,
  defaultValidator,
  ValidatorEntry,
  getValidator,
  requiredValidator,
} from '../../validators';
import i18n from './i18n/i18n';

@Component({
  tag: 'gcds-date-input',
  styleUrl: 'gcds-date-input.css',
  shadow: { delegatesFocus: true },
  formAssociated: true,
})
export class GcdsDateInput {
  @Element() el: HTMLElement;

  @AttachInternals()
  internals: ElementInternals;

  private initialValue?: string;

  // private fieldsetElement?: HTMLGcdsFieldsetElement;

  _validator: Validator<string> = defaultValidator;

  /**
   * Name attribute for the date input.
   */
  @Prop() name!: string;
  @Watch('name')
  validateName() {
    if (!this.name) {
      this.errors.push('name');
    } else if (this.errors.includes('name')) {
      this.errors.splice(this.errors.indexOf('name'), 1);
    }
  }

  /**
   * Form field label
   */
  @Prop() label!: string;
  @Watch('label')
  validateLabel() {
    if (!this.label) {
      this.errors.push('label');
    } else if (this.errors.includes('label')) {
      this.errors.splice(this.errors.indexOf('label'), 1);
    }
  }

  /**
   * Set this property to full to show month, day, and year form elements. Set it to compact to show only the month and year form elements.
   */
  @Prop() format!: 'full' | 'compact';
  @Watch('format')
  validateFormat() {
    if (!this.format || (this.format != 'full' && this.format != 'compact')) {
      this.errors.push('format');
    } else if (this.errors.includes('format')) {
      this.errors.splice(this.errors.indexOf('format'), 1);
    }
  }

  /**
   * Default value for the date input element. Format: YYYY-MM-DD
   */
  @Prop({ mutable: true }) value?: string;
  @Watch('value')
  validateValue() {
    if (this.value && !isValidDate(this.value, this.format)) {
      this.errors.push('value');
      this.value = '';
      console.error(
        `${i18n['en'].valueError}${i18n['en'][`valueFormat${this.format}`]} | ${i18n['fr'].valueError}${i18n['fr'][`valueFormat${this.format}`]}`,
      );
    } else if (this.errors.includes('value')) {
      this.errors.splice(this.errors.indexOf('value'), 1);
    }
  }

  /**
   * Specifies if a form field is required or not.
   */
  @Prop() required?: boolean = false;

  /**
   * Hint displayed below the legend and above form fields.
   */
  @Prop() hint?: string;

  /**
   * Error message displayed below the legend and above form fields.
   */
  @Prop({ mutable: true }) errorMessage?: string;

  /**
   * Specifies if the date input is disabled or not.
   */
  @Prop({ mutable: true }) disabled?: boolean = false;

  /**
   * Array of validators
   */
  @Prop({ mutable: true }) validator: Array<
    string | ValidatorEntry | Validator<string>
  >;
  @Watch('validator')
  validateValidator() {
    if (this.validator && !this.validateOn) {
      this.validateOn = 'blur';
    }
  }

  /**
   * Set event to call validator
   */
  @Prop({ mutable: true }) validateOn: 'blur' | 'submit' | 'other';

  /**
   * States
   */

  /**
   * State to track individual month value
   */
  @State() monthValue: string;

  /**
   * State to track individual month value
   */
  @State() dayValue: string;

  /**
   * State to track individual month value
   */
  @State() yearValue: string;

  /**
   * Specifies if the date input is invalid.
   */
  @State() hasError: object = {
    day: false,
    month: false,
    year: false,
  };

  /**
   * State to track validation on properties
   * Contains a list of properties that have an error associated with them
   */
  @State() errors: Array<string> = [];

  /**
   * Language of rendered date input
   */
  @State() lang: string;

  /**
   * Events
   */

  /**
   * Emitted when an element has focus.
   */
  @Event() gcdsFocus!: EventEmitter<void>;

  /**
   * Emitted when an element loses focus.
   */
  @Event() gcdsBlur!: EventEmitter<void>;

  private onBlur = () => {
    if (this.validateOn == 'blur') {
      this.validate();
    }
  };

  /**
   * Emitted when the element has received input.
   */
  @Event() gcdsInput: EventEmitter;

  /**
   * Emitted when an element has changed.
   */
  @Event() gcdsChange: EventEmitter;

  /**
   * Emitted when an element has a validation error.
   */
  @Event() gcdsError!: EventEmitter<object>;

  /**
   * Emitted when an element has validated.
   */
  @Event() gcdsValid!: EventEmitter<object>;

  /**
   * Call any active validators
   */
  @Method()
  async validate() {
    const validationResult = this._validator.validate(this.name);
    if (!validationResult.valid) {
      this.errorMessage = validationResult.reason[this.lang];
      this.hasError = { ...validationResult.errors };
      this.gcdsError.emit({
        message: `${this.label} - ${this.errorMessage}`,
        errors: validationResult.errors,
      });
    } else {
      this.errorMessage = '';
      this.gcdsValid.emit();
      this.hasError = {
        day: false,
        month: false,
        year: false,
      };
    }
  }

  /*
   * Event listeners
   */

  @Listen('submit', { target: 'document' })
  async submitListener(e) {
    if (e.target == this.el.closest('form')) {
      if (this.validateOn && this.validateOn != 'other') {
        this.validate();
      }

      for (const key in this.hasError) {
        if (this.hasError[key]) {
          e.preventDefault();
        }
      }
    }
  }

  /*
   * Form internal functions
   */

  formResetCallback() {
    if (this.value != this.initialValue) {
      this.internals.setFormValue(this.initialValue);
      this.value = this.initialValue;
    }
  }

  formStateRestoreCallback(state) {
    this.internals.setFormValue(state);
    this.value = state;
  }

  /*
   * Observe lang attribute change
   */
  updateLang() {
    const observer = new MutationObserver(mutations => {
      if (mutations[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    observer.observe(this.el, observerConfig);
  }

  /*
   * Handle input event to update state
   */
  private handleInput = (e, type) => {
    const val = e.target && e.target.value;

    if (type === 'year') {
      this.yearValue = val;
    } else if (type === 'month') {
      this.monthValue = val;
    } else if (type === 'day') {
      this.dayValue = val;
    }

    this.setValue();

    if (e.type === 'change') {
      const changeEvt = new e.constructor(e.type, e);
      this.el.dispatchEvent(changeEvt);
    }
  };

  /**
   * Logic to combine all input values together based on format
   */
  private setValue() {
    const { yearValue, dayValue, monthValue, format } = this;

    // All form elements have something entered
    if (yearValue && monthValue && dayValue && format == 'full') {
      // Is the combined value a valid date
      if (isValidDate(`${yearValue}-${monthValue}-${dayValue}`, this.format)) {
        this.value = `${yearValue}-${monthValue}-${dayValue}`;
        this.internals.setFormValue(this.value);
      } else {
        this.value = null;
        this.internals.setFormValue(null);

        return false;
      }
    } else if (yearValue && monthValue && format == 'compact') {
      // Is the combined value a valid date
      if (isValidDate(`${yearValue}-${monthValue}`, this.format)) {
        this.value = `${yearValue}-${monthValue}`;
        this.internals.setFormValue(this.value);
      } else {
        this.value = null;
        this.internals.setFormValue(null);

        return false;
      }
    } else {
      this.value = null;
      this.internals.setFormValue(null);

      return false;
    }

    return true;
  }

  /**
   * Split value into parts depending on format
   */
  private splitFormValue() {
    if (this.value && isValidDate(this.value, this.format)) {
      if (this.format == 'compact') {
        let splitValue = this.value.split('-');
        this.yearValue = splitValue[0];
        this.monthValue = splitValue[1];
      } else {
        let splitValue = this.value.split('-');
        this.yearValue = splitValue[0];
        this.monthValue = splitValue[1];
        this.dayValue = splitValue[2];
      }
    }
  }

  /**
   * Format day input value to add 0 to single digit values
   */
  private formatDay(e) {
    if (!isNaN(e.target.value) && e.target.value.length === 1) {
      this.dayValue = '0' + e.target.value;
    }
  }

  private validateRequiredProps() {
    this.validateName();
    this.validateLabel();
    this.validateFormat();

    if (
      this.errors.includes('name') ||
      this.errors.includes('label') ||
      this.errors.includes('format')
    ) {
      return false;
    }
    return true;
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.validateValidator();

    // Assign required validator if needed
    requiredValidator(this.el, 'date-input');

    if (this.validator) {
      this._validator = getValidator(this.validator);
    }

    let valid = this.validateRequiredProps();

    if (!valid) {
      // logError('gcds-date-input', this.errors);
    }

    this.validateValue();
    if (this.value && isValidDate(this.value, this.format)) {
      this.splitFormValue();
      this.setValue();

      this.initialValue = this.value;
    }
  }

  componentWillUpdate() {
    if (this.validator) {
      this._validator = getValidator(this.validator);
    }
  }

  render() {
    const {
      label,
      name,
      format,
      required,
      hint,
      errorMessage,
      disabled,
      lang,
      hasError,
    } = this;

    let requiredAttr = {};

    if (required) {
      requiredAttr['aria-required'] = 'true';
    }

    const month = (
      <gcds-select
        label={i18n[lang].month}
        selectId="month"
        name="month"
        defaultValue={i18n[lang].selectmonth}
        disabled={disabled}
        onInput={e => this.handleInput(e, 'month')}
        onChange={e => this.handleInput(e, 'month')}
        value={this.monthValue}
        class={`gcds-date-input__month ${hasError['month'] ? 'gcds-date-input--error' : ''}`}
        {...requiredAttr}
        aria-invalid={hasError['month'].toString()}
      >
        <option value="01">{i18n[lang].january}</option>
        <option value="02">{i18n[lang].february}</option>
        <option value="03">{i18n[lang].march}</option>
        <option value="04">{i18n[lang].april}</option>
        <option value="05">{i18n[lang].may}</option>
        <option value="06">{i18n[lang].june}</option>
        <option value="07">{i18n[lang].july}</option>
        <option value="08">{i18n[lang].august}</option>
        <option value="09">{i18n[lang].september}</option>
        <option value="10">{i18n[lang].october}</option>
        <option value="11">{i18n[lang].november}</option>
        <option value="12">{i18n[lang].december}</option>
      </gcds-select>
    );

    const year = (
      <gcds-input
        name="year"
        label={i18n[lang].year}
        inputId="year"
        type="number"
        size={4}
        disabled={disabled}
        value={this.yearValue}
        onInput={e => this.handleInput(e, 'year')}
        onChange={e => this.handleInput(e, 'year')}
        class={`gcds-date-input__year ${hasError['year'] ? 'gcds-date-input--error' : ''}`}
        {...requiredAttr}
        aria-invalid={hasError['year'].toString()}
      ></gcds-input>
    );

    const day = (
      <gcds-input
        name="day"
        label={i18n[lang].day}
        inputId="day"
        type="number"
        size={2}
        disabled={disabled}
        value={this.dayValue}
        onInput={e => this.handleInput(e, 'day')}
        onChange={e => {
          this.handleInput(e, 'day');
          this.formatDay(e);
        }}
        class={`gcds-date-input__day ${hasError['day'] ? 'gcds-date-input--error' : ''}`}
        {...requiredAttr}
        aria-invalid={hasError['day'].toString()}
      ></gcds-input>
    );

    return (
      <Host name={name} onBlur={() => this.onBlur()}>
        {this.validateRequiredProps() && (
          <gcds-fieldset
            legend={label}
            fieldsetId="date-input"
            hint={hint}
            errorMessage={errorMessage}
            required={required}
            class={`gcds-date-input__fieldset${hint ? ' gcds-date-input--hint' : ''}${errorMessage ? ' gcds-date-input--error' : ''}`}
            lang={lang}
            data-date-input={format}
          >
            {format == 'compact'
              ? [month, year]
              : lang == 'en'
                ? [month, day, year]
                : [day, month, year]}
          </gcds-fieldset>
        )}
      </Host>
    );
  }
}

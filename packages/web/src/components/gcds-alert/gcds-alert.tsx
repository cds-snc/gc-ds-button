import { Component, Element, Event, EventEmitter, Host, Prop, State, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';

@Component({
  tag: 'gcds-alert',
  styleUrl: 'gcds-alert.css',
  shadow: true,
})

export class GcdsAlert {
  @Element() el: HTMLElement;

  /**
   * Props
   */

  /**
   * Defines alert role.
   */
  @Prop() alertRole?: 'danger' | 'info' | 'success' | 'warning' = 'info';

  /**
   * Defines the max width of the alert content.
   */
  @Prop() container?: 'full' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' = 'full';

  /**
   * Callback when the close button is clicked.
   */
  @Prop() dismissHandler: Function;

  /**
   * Defines the alert heading.
   */
  @Prop() heading!: string;

  /**
   * Defines if the alert's close button is displayed or not.
   */
  @Prop() hideCloseBtn?: boolean = false;

  /**
   * Defines if the alert's role icon is displayed or not.
   */
  @Prop() hideRoleIcon?: boolean = false;

  /**
   * Defines if the alert's position is fixed.
   */
  @Prop({ mutable: true }) isFixed?: boolean = false;


  /**
   * States
   */

  /**
   * Specifies if the alert is open or not.
   */
  @State() isOpen: boolean = true;

  /**
  * Language of rendered component
  */
  @State() lang: string;

  /**
   * Events
   */

  @Event() gcdsDismiss!: EventEmitter<void>;

  private onDismiss = (e) => {
    this.gcdsDismiss.emit();

    if ( this.dismissHandler ) {
      this.dismissHandler(e);
    } else {
      this.isOpen = false;
    }
  }

  /*
  * Observe lang attribute change
  */
  updateLang() {
    const observer = new MutationObserver((mutations) => {
      if (mutations[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    observer.observe(this.el, observerConfig);
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.updateLang();
  }

  render() {
    const { alertRole, container, heading, hideCloseBtn, hideRoleIcon, isFixed, isOpen, lang } = this;

    return (
      <Host>
        { isOpen ?
          <div
            class={`gcds-alert alert--role-${alertRole} ${isFixed ? 'alert--is-fixed' : ''}`}
            role="alert"
            aria-label={
              lang == 'en' ?
                `This is ${
                  alertRole === 'danger' ? 'a critical'
                  : alertRole === 'info' ? 'an info'
                  : alertRole === 'success' ? 'a success'
                  : alertRole === 'warning' ? 'a warning'
                  : null } alert.`
              : `Ceci est une alerte ${
                  alertRole === 'danger' ? 'd\'effacement'
                  : alertRole === 'info' ? 'd\'information'
                  : alertRole === 'success' ? 'de succès'
                  : alertRole === 'warning' ? 'd\'avertissement'
                  : null }.`
            }
          >
            <gcds-container container={isFixed ? container : 'full'} centered>
              <div class="alert__container">
                {( !hideRoleIcon &&
                  <gcds-icon aria-hidden="true" class="alert__icon" size="h5" name={
                    alertRole === 'danger' ? 'exclamation-circle'
                    : alertRole === 'info' ? 'info-circle'
                    : alertRole === 'success' ? 'check-circle'
                    : alertRole === 'warning' ? 'exclamation-triangle'
                    : null }
                    />
                )}

                <div class="alert__content">
                  <h5 class="alert__heading">{heading}</h5>
                  <slot></slot>
                </div>

                {( !hideCloseBtn &&
                  <button
                    class="alert__close-btn"
                    onClick={(e) => this.onDismiss(e)}
                    aria-label={ lang == 'en' ? 'Close alert.' : 'Fermer l\'alerte.'}
                  >
                    <gcds-icon aria-hidden="true" name="times" size="text" />
                  </button>
                )}
              </div>
            </gcds-container>
          </div>
        : null }
      </Host>
    );
  }
}

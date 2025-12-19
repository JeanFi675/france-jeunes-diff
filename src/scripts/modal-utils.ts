/**
 * Gestionnaire générique pour les modales "Brutal"
 * Gère l'ouverture, la fermeture, le lock du scroll et les événements (Escape, Click Outside)
 */

export interface ModalOptions {
  onOpen?: () => void;
  onClose?: () => void;
}

export class BrutalModal {
  private modal: HTMLElement;
  private closeBtn: HTMLElement | null;
  private _isOpen: boolean = false;
  private options: ModalOptions;

  constructor(modalId: string, options: ModalOptions = {}) {
    const element = document.getElementById(modalId);
    if (!element) {
      throw new Error(`Modal with ID "${modalId}" not found`);
    }
    this.modal = element;
    this.options = options;
    
    // Récupérer le bouton de fermeture (classe standard .brutal-modal-close)
    this.closeBtn = this.modal.querySelector('.brutal-modal-close');

    this.initEvents();
  }

  public get isOpen(): boolean {
    return this._isOpen;
  }


  private initEvents() {
    // Fermeture au clic sur le bouton
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    // Fermeture au clic sur le fond (overlay)
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.close();
      }
    });

    // Fermeture avec Escape (abonnement global, traité uniquement si ce modal est ouvert)
    document.addEventListener('keydown', (e) => {
      if (this._isOpen && e.key === 'Escape') {
        this.close();
      }
    });
  }

  public open() {
    this.modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Lock scroll
    this._isOpen = true;
    
    if (this.options.onOpen) {
      this.options.onOpen();
    }
  }

  public close() {
    this.modal.style.display = 'none';
    document.body.style.overflow = ''; // Unlock scroll
    this._isOpen = false;

    if (this.options.onClose) {
      this.options.onClose();
    }
  }

  // Méthode statique pour lier un trigger (bouton) à l'ouverture d'un modal
  public static bindTrigger(triggerSelector: string, modalInstance: BrutalModal) {
    const triggers = document.querySelectorAll(triggerSelector);
    triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        modalInstance.open();
      });
    });
  }
}

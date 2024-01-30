// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();

!(function (e) {
  'function' != typeof e.matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.webkitMatchesSelector ||
      function (e) {
        for (
          var t = this,
            o = (t.document || t.ownerDocument).querySelectorAll(e),
            n = 0;
          o[n] && o[n] !== t;

        )
          ++n;
        return Boolean(o[n]);
      }),
    'function' != typeof e.closest &&
      (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      });
})(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function () {
  var modalButtons = document.querySelectorAll('.js-open-modal'),
    overlay = document.querySelectorAll('.js-overlay-modal'),
    closeButtons = document.querySelectorAll('.js-modal-close');

  modalButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      var modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        );

      var overlayID = this.getAttribute('data-modal'),
        overlayElem = document.querySelector(
          '.overlay[data-modal="' + overlayID + '"]'
        );

      modalElem.classList.add('active');
      overlayElem.classList.add('active');
    });
  });

  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var parentModal = this.closest('.modal');
      var parentOverlay = this.closest('.overlay');

      parentModal.classList.remove('active');
      parentOverlay.classList.remove('active');
    });
  });

  document.body.addEventListener(
    'keyup',
    function (e) {
      var key = e.code;

      if (key == 27) {
        document.querySelector('.modal.active').classList.remove('active');
        document.querySelector('.overlay.active').classList.remove('active');
      }
    },
    false
  );

  overlay.addEventListener('click', function () {
    document.querySelector('.modal.active').classList.remove('active');
    this.classList.remove('active');
  });
});

// const refs = {
//   openModalBtn: document.querySelectorAll('.js-open-modal'),
//   closeModalBtn: document.querySelectorAll('.js-modal-close'),
//   overlay: document.querySelectorAll('.js-overlay-modal'),
// };

// refs.openModalBtn.addEventListener('click', onOpenModal);
// refs.closeModalBtn.addEventListener('click', onCloseModal);
// refs.overlay.addEventListener('click', onOverlayClick);

// function onOpenModal() {
//   window.addEventListener('keydown', onEscKeyPress);
//   document.body.classList.add('active');
// }

// function onCloseModal() {
//   window.removeEventListener('keydown', onEscKeyPress);
//   document.body.classList.remove('active');
// }

// function onOverlayClick(event) {
//   if (event.currentTarget === event.target) {
//     onCloseModal()
//   }
// }

// function onEscKeyPress(event) {
//   if (event.code === 'Escape') {
//     onCloseModal();
//   }
// }
$(document).ready(function () {
  $(".copyboard").click(function () {
    var clipboard = new ClipboardJS(".copyboard");
    $("#modal").iziModal({
      title: "Website copied to the clipboard",
      subtitle: "https://nebulacorp.cf",
      headerColor: "#7800af",
      icon: "fab fa-angellist",
      iconColor: "",
      appendTo: ".to-show",
      appendToOverlay: ".to-show",
      width: 600,
      borderBottom: false,
      padding: 0,
      radius: 3,
      zindex: 999,
      iframe: false,
      focusInput: true,
      arrowKeys: false,
      navigateCaption: false,
      history: false,
      restoreDefaultContent: false,
      closeOnEscape: true,
      closeButton: false,
      overlay: true,
      overlayClose: true,
      overlayColor: "rgba(0, 0, 0, 0.4)",
      timeout: 2500,
      timeoutProgressbar: true,
      pauseOnHover: false,
      timeoutProgressbarColor: "rgb(255, 255, 255)",
      transitionIn: "comingIn",
      transitionOut: "comingOut",
      transitionInOverlay: "fadeIn",
      transitionOutOverlay: "fadeOut",
      onFullscreen: function () {},
      onResize: function () {},
      onOpening: function () {},
      onOpened: function () {},
      onClosing: function () {},
      onClosed: function () {},
      afterRender: function () {},
    });
    clipboard.on("success", function () {});
  });
});
$(document).on("click", ".copyboard", function (event) {
  event.preventDefault();
  $("#modal").iziModal("open");
});
$(document).on("opening", "#modal", function (e) {});

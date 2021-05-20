$("#app-footer").html(`
  <div
    class="
      footer-bottom
      pt-3
      d-flex
      flex-column flex-sm-row
      align-items-center
    "
  >
    <span class="flex-grow-1"></span>
    <div class="d-flex align-items-center">
      <div class="text-right">
        <p class="m-0">© SIMRS v1.0.0</p>
        <p class="m-0">
          Made With <b style="color: brown">&#10084;</b> by X-Solusi
        </p>
      </div>
      <img
        class="logo"
        src="${newPath}assets/templates/images/logo.png"
        alt="footer-logo"
      />
    </div>
  </div>`);

$(() => {
  renderSidebarItem();
});

const globalMenu = [
  { name: "Home", icon: "nav-icon i-File-Chart" },
  { name: "Pendaftaran", icon: "nav-icon i-File-Chart" },
  {
    name: "Poli Klinik",
    child: [
      { name: "Entry poli klinik", icon: "nav-icon i-File-Chart" },
      { name: "Jadwal dokter", icon: "nav-icon i-File-Chart" },
      { name: "Rekam medik", icon: "nav-icon i-File-Chart" },
    ],
    icon: "nav-icon i-File-Chart",
  },
  {
    name: "Rawat Inap",
    child: [
      { name: "Data kamar inap", icon: "nav-icon i-File-Chart" },
      { name: "Keteresdian kamar inap", icon: "nav-icon i-File-Chart" },
    ],
    icon: "nav-icon i-File-Chart",
  },
  {
    name: "Farmasi",
    child: [
      { name: "Daftar Obat", icon: "nav-icon i-File-Chart" },
      { name: "Pembelian Obat", icon: "nav-icon i-File-Chart" },
      { name: "Pemakaian Obat", icon: "nav-icon i-File-Chart" },
      { name: "Kartu Stock Obat", icon: "nav-icon i-File-Chart" },
    ],
    icon: "nav-icon i-File-Chart",
  },
  { name: "Laboratorium", icon: "nav-icon i-File-Chart" },
  { name: "Kasir", icon: "nav-icon i-File-Chart" },
];

const renderSidebarItem = () => {
  let parentItems = [];
  let childItems = [];

  globalMenu.forEach(({ icon, name, child }) => {
    const active = false;
    const childTarget = child && name.toLowerCase().replace(/ /g, "-");
    const urlTarget = null;

    parentItems.push(
      sidebarParentItem({ active, child, childTarget, urlTarget, name, icon })
    );

    if (child) {
      const childs = child
        .map(({ icon, name }) =>
          sidebarSubItem({ icon, name, urlTarget: urlTarget || null })
        )
        .join("");

      childItems.push(`
      <ul 
        class="childNav" 
        data-parent="${childTarget}" 
        style="display: none"
      >
        ${childs}
      </ul>`);
    }
  });

  return rednerInitSidebar({ parentItems, childItems });
};

const rednerInitSidebar = ({ parentItems, childItems }) => {
  $("#app-sidebar").html(`
    <div
      class="sidebar-left rtl-ps-none ps ps--active-y open"
      data-perfect-scrollbar=""
      data-suppress-scroll-x="true"
    >
      <ul class="navigation-left">${parentItems.join("")}</ul>
      <div class="ps__rail-x" style="left: 0px; bottom: 0px">
        <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px"></div>
      </div>
      <div class="ps__rail-y" style="top: 0px; height: 588px; right: 0px">
        <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px"></div>
      </div>
    </div>

    <div
      class="sidebar-left-secondary rtl-ps-none ps"
      data-perfect-scrollbar=""
      data-suppress-scroll-x="true"
    >
      ${childItems.join("")}
      <div class="ps__rail-x" style="left: 0px; bottom: 0px">
        <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px"></div>
      </div>
      <div class="ps__rail-y" style="top: 0px; right: 0px">
        <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px"></div>
      </div>
    </div>
    <div class="sidebar-overlay"></div>`);
};

const sidebarParentItem = (props) => `
  <li 
    class="nav-item${props.active ? " active" : ""}" 
    ${props.child ? `data-item="${props.childTarget}"` : ""}
  >
    <a class="nav-item-hold" href="${props.urlTarget || "#"}">
      <i class="${props.icon}"></i>
      <span class="nav-text">${props.name}</span>
    </a>
    <div class="triangle"></div>
  </li>`;

const sidebarSubItem = ({ icon, name, urlTarget }) => `
  <li class="nav-item">
    <a href="${urlTarget || "#"}">
      <i class="${icon}"></i>
      <span class="item-name">${name}</span>
    </a>
  </li>`;

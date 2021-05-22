$(() => renderSidebarItem());

const globalMenu = [
  { name: "Home", icon: "i-Bar-Chart" },
  { name: "Pendaftaran", icon: "i-File-Chart" },
  {
    name: "Poli Klinik",
    child: [
      {
        name: "Entry poli klinik",
        icon: "i-Split-Horizontal-2-Window",
      },
      { name: "Jadwal dokter", icon: "i-Split-Horizontal-2-Window" },
      { name: "Rekam medik", icon: "i-Split-Horizontal-2-Window" },
    ],
    icon: "i-File-Chart",
  },
  {
    name: "Rawat Inap",
    child: [
      { name: "Data kamar inap", icon: "i-Split-Horizontal-2-Window" },
      {
        name: "Keteresdian kamar inap",
        icon: "i-Split-Horizontal-2-Window",
      },
    ],
    icon: "i-File-Chart",
  },
  {
    name: "Farmasi",
    child: [
      { name: "Daftar Obat", icon: "i-Split-Horizontal-2-Window" },
      { name: "Pembelian Obat", icon: "i-Split-Horizontal-2-Window" },
      { name: "Pemakaian Obat", icon: "i-Split-Horizontal-2-Window" },
      {
        name: "Kartu Stock Obat",
        icon: "i-Split-Horizontal-2-Window",
      },
    ],
    icon: "i-File-Chart",
  },
  {
    name: "Static Data",
    child: [{ name: "Daftar Harga", icon: "i-Split-Horizontal-2-Window" }],
    icon: "i-File-Chart",
  },
  { name: "Laboratorium", icon: "i-File-Chart" },
  { name: "Kasir", icon: "i-File-Chart" },
];

const renderSidebarItem = () => {
  let parentItems = [];
  let childItems = [];

  globalMenu.forEach(({ icon, name, child }, index) => {
    const active = false;
    const childTarget = child && combineString(name);
    const urlTarget =
      index > 0 ? `${newPath}pages/${combineString(name)}` : `../${newPath}`;

    parentItems.push(
      sidebarParentItem({ active, child, childTarget, urlTarget, name, icon })
    );

    if (child) {
      const childs = child
        .map(({ icon, name }) =>
          sidebarSubItem({
            icon,
            name,
            urlTarget: `${newPath}pages/${childTarget}/${combineString(name)}`,
          })
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
    <a 
      class="nav-item-hold" 
      href="${!props.child ? props.urlTarget || "#" : "#"}"
    >
      <i class="nav-icon ${props.icon}"></i>
      <span class="nav-text">${props.name}</span>
    </a>
    <div class="triangle"></div>
  </li>`;

const sidebarSubItem = ({ icon, name, urlTarget }) => `
  <li class="nav-item">
    <a href="${urlTarget || "#"}">
      <i class="nav-icon ${icon}"></i>
      <span class="item-name">${name}</span>
    </a>
  </li>`;

const combineString = (string) => string.toLowerCase().replace(/ /g, "-");

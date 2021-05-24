"use strict";

const port = location.port !== "";
const endpoint = port
  ? "live server"
  : location.origin === "https://santosaputro.github.io"
  ? "github"
  : location.origin === "file://"
  ? "directory"
  : null;

const pathArr = location.pathname.split("/");

const newPath =
  originPathX > 0
    ? Array(originPathX)
        .fill("")
        .map(() => "../")
        .join("")
    : "./src/";

$(() => {
  setBreadcrumb();

  $("#search-table-content-button").on("click", () =>
    $("#table-content").show()
  );
});

const setBreadcrumb = () => {
  let items = [{ url: `../${newPath}`, title: "Home" }];
  pathArr.map((e, i) => {
    if (i > 3 && i < pathArr.length - 2 && e !== "")
      items.push({ url: `../../${e}`, title: capitalizeTitle(e) });
  });

  return breadcrumb(
    originPathX < 1
      ? { active: "Home" }
      : {
          active: capitalizeTitle(pathArr[pathArr.length - 2]),
          pages:
            pathArr.length > 6
              ? items
              : [{ url: `../${newPath}`, title: "Home" }],
        }
  );
};

var check = (arr) =>
  arr
    .map(
      (e) => `<div class="form-check">
<input
  class="form-check-input"
  id="${e.replace(/ /g, "-").toLowerCase()}"
  type="checkbox"
/>
<label class="form-check-label" for="${e.replace(/ /g, "-").toLowerCase()}">
  ${e}
</label>
</div>`
    )
    .join("");

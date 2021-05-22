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
const pathLength =
  endpoint === "github" ? pathArr.length - 4 : pathArr.length - 3;
const newPath =
  pathLength > 0
    ? Array(pathLength)
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

const setBreadcrumb = () =>
  breadcrumb(
    pathLength < 0
      ? { active: "Home" }
      : {
          active: capitalizeTitle(pathArr[pathArr.length - 2]),
          pages: "home",
          url: `../${newPath}`,
          title: "Home",
        }
  );

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

"use strict";

const capitalizeTitle = (string) =>
  string
    .split("")
    .map((e, i) => (i < 1 ? e.toUpperCase() : e))
    .join("")
    .replace(/-/g, " ");

const pathSeparation = (length, endpoint) => {
  const pathArrs = location.pathname.split("/");

  if (endpoint && endpoint === "directory") {
    console.log(1, "xxx");
    return pathArrs[pathArrs.length - 2];
  } else {
    console.log(2, "xxx");
    return Array(length)
      .fill("")
      .map(() => "../")
      .join("");
  }
};

const breadcrumb = ({ pages, active }) => {
  const items =
    pages !== "" && pages.length > 0
      ? pages
          .map(({ url, title }) => `<li><a href="${url}">${title}</a></li>`)
          .join("")
      : "";

  return $("#breadcrumb").html(`
    <div class="breadcrumb">
      <ul>
        ${items}
        <li>${active}</li>
      </ul>
    </div>
    <div class="separator-breadcrumb border-top"></div>`);
};

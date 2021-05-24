"use strict";

const capitalizeTitle = (string) =>
  string
    .split("")
    .map((e, i) => (i < 1 ? e.toUpperCase() : e))
    .join("")
    .replace(/-/g, " ");

const breadcrumb = ({ active, pages }) => {
  const items =
    pages && pages !== "" && pages.length > 0
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

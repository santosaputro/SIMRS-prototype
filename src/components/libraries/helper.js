const capitalizeTitle = (string) =>
  string
    .split("")
    .map((e, i) => (i < 1 ? e.toUpperCase() : e))
    .join("")
    .replace(/-/g, " ");

const pathSeparation = (length, endpoint) => {
  const pathArrs = location.pathname.split("/");
  console.log(length);

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

const breadcrumb = ({ pages, url, title, active }) =>
  $("#breadcrumb").html(`
    <div class="breadcrumb">
      <ul>
        ${
          pages && pages !== ""
            ? `<li><a id="${pages}" href="${url}">${title}</a></li>`
            : ""
        }
        <li>${active}</li>
      </ul>
    </div>
    <div class="separator-breadcrumb border-top"></div>`);

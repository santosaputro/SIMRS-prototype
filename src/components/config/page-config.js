const port = location.port !== "";
const endpoint = port
  ? "live server"
  : location.origin === "https://santosaputro.github.io"
  ? "github"
  : location.origin === "file://"
  ? "directory"
  : null;

console.log(port);

const pathArr = location.pathname.split("/");
const pathLength =
  endpoint === "github" ? pathArr.length - 4 : pathArr.length - 3;
// const pathLength = port ? pathArr.length - 3 :;
const newPath =
  pathLength > 0
    ? Array(pathLength)
        .fill("")
        .map(() => "../")
        .join("")
    : "./src/";

$(() => {
  setBreadcrumb();
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

const capitalizeTitle = (string) =>
  string
    .split("")
    .map((e, i) => (i < 1 ? e.toUpperCase() : e))
    .join("")
    .replace(/-/g, " ");

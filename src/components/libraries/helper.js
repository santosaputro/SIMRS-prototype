const breadcrumb = ({ pages, url, title, active }) =>
  $("#breadcrumb").html(`
    <div class="breadcrumb">
      <ul>
        ${
          pages !== ""
            ? `<li><a id="pages" href="${url}">${title}</a></li>`
            : ""
        }
        <li>${active}</li>
      </ul>
    </div>
    <div class="separator-breadcrumb border-top"></div>`);

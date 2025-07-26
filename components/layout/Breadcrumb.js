import Link from "next/link";

export default function Breadcrumb({ breadcrumbTitle, caption }) {
  return (
    <>
      {/*Page Header Start*/}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dkc5klynm/image/upload/v1752755180/3_r2d3ks.png)",
          }}
        ></div>
        <div className="container">
          <div className="page-header__inner">
            <h2>{breadcrumbTitle}</h2>
            {caption && <p>{caption}</p>}
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <a href="/">الرئيسية</a>
              </li>
              <li>
                <span> / </span>
              </li>
              <li>{breadcrumbTitle}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";

type Props = {
  title: string;
  image: string;
  crumb?: string;
};

/** Compact hero for sub pages: image, title and breadcrumb (mirrors the live site). */
export function PageHeader({ title, image, crumb }: Props) {
  return (
    <section className="page-header">
      <img className="page-header-image" src={image} alt="" aria-hidden="true" />
      <div className="page-header-scrim" aria-hidden="true" />
      <div className="container page-header-inner">
        <nav className="crumbs" aria-label="Brotkrumen">
          <Link to="/">Home</Link>
          <span aria-hidden="true">//</span>
          <span>{crumb ?? title}</span>
        </nav>
        <h1>{title}</h1>
      </div>
    </section>
  );
}

import { PageHeader } from "../components/PageHeader";
import type { LegalPageData } from "../data/pages";
import { usePageMeta } from "../hooks/usePageMeta";

/** Plain text page for AGB / Datenschutz / Impressum. */
export function Legal({ data }: { data: LegalPageData }) {
  usePageMeta(data.metaTitle);

  return (
    <>
      <PageHeader title={data.title} image="/images/hero-drone/164101_0176.webp" />
      <section className="section">
        <div className="container narrow legal reveal">
          {data.blocks.map((block, i) => (
            <div key={i}>
              {block.heading && <h2>{block.heading}</h2>}
              {block.paragraphs.map((p, j) => (
                <div key={p}>
                  <p>{p}</p>
                  {j === 0 && block.list && (
                    <ul>
                      {block.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

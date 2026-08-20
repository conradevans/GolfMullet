import { AiOutlineCompass } from "react-icons/ai";

const Missing = () => {
  return (
    <main className="page-shell">
      <section className="empty-state" aria-labelledby="missing-title">
        <div className="empty-state__icon" aria-hidden="true">
          <AiOutlineCompass />
        </div>
        <p className="eyebrow">404 error</p>
        <h1 id="missing-title">Page not found</h1>
        <p>
          This page may have moved or no longer exists. Use the navigation
          above to keep browsing Golf Mullet.
        </p>
      </section>
    </main>
  );
};

export default Missing;

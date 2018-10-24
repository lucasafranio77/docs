import React from 'react';
import Link from 'gatsby-link';
import './FooterCallout.scss';

function FooterCallout() {
  return (
    <div className="footer-callout">
      <div className="footer-callout-pattern" />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="is-size-h1 color-white">Para Desenvolvedores</h2>
            <p className="color-slate-10">Ferramentas para desenvolvedores da Infocorp</p>
            <Link className="btn btn-white" to="/for-developers/">Ver Developer Docs</Link>
          </div>
          <div className="col-md-6">
            <div className="card card--glossary">
              <h3 className="card__title">Links Rápidos</h3>
              <p className="glossary-link"><Link to="/for-developers/sending-email/api-getting-started/">Começar aqui</Link></p>
              <p className="glossary-link"><Link to="/api-reference/">Documentação API</Link></p>
              <p className="glossary-link"><Link to="/for-developers/sending-email/libraries/">Biblioteca de códigos</Link></p>
              <p className="glossary-link"><Link to="/ui/account-and-settings/api-keys/">Chaves API</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterCallout;

import React from 'react';
import RehypeReact from 'rehype-react';
import _ from 'lodash';
import config from '../../data/SiteConfig';
import SEO from '../components/SEO';
import AsideMenu from '../components/AsideMenu';
import Callout from '../componentsMarkdown/Callout';
import Gist from '../componentsMarkdown/Gist';
import CodeGroup from '../componentsMarkdown/CodeGroup';
import withSubNav from '../components/NavSub';
import './syntax-highlighting.scss';
import './doc.scss';

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    gist: Gist,
    'call-out': Callout,
    'code-group': CodeGroup,
  },
}).Compiler;

class DocTemplate extends React.Component {
  getLinks() {
    const headers = this.props.data.doc.htmlAst.children.filter(el => el.type === 'element' && _.includes(['h2', 'h3'], el.tagName));
    return headers.map((header) => {
      const link = {};
      link.tagName = header.tagName;
      link.textNode = header.children[1] ? header.children[1].value : '';
      link.id = header.properties.id;
      return link;
    });
  }

  getRepoLink() {
    const {
      permalink,
      slug,
    } = this.props.data.doc.fields;
    const path = permalink.replace(`${slug}/`, '');
    const absPath = this.props.data.doc.fileAbsolutePath;
    const filename = absPath.substring(absPath.lastIndexOf('/') + 1);
    const gitHubURL = config.gitHubMarkdownPath + path + filename;
    return gitHubURL;
  }

  render() {
    const postNode = this.props.data.doc;
    const asideLinks = this.getLinks();

    return (
      <div className="container-lg doc-wrap">
        <SEO postNode={postNode} postType="doc" />
        {postNode.fields.docType !== 'glossary' && asideLinks.length ?
         (<AsideMenu asideLinks={this.getLinks()} />)
         : null
        }
        <div className="doc-main">
          <h1 dangerouslySetInnerHTML={{ __html: postNode.fields.title }} />
          {renderAst(postNode.htmlAst)}
          <div className="card card__feedback">
            <div className="card__inner">
              <h3 className="card__title" >Feedback</h3>
              <p>
                Se você tiver uma dica ou melhoria para a nossa wiki, é só <a href="https://gitlab.com/infocorp/wiki/issues/new" title="abrir uma issue no Gitlab" target="_blank" rel="noopener noreferrer">abrir uma issue no Gitlab</a> ou pode editar direto no <a href="https://gitlab.com/infocorp/wiki" title="projeto da wiki!" target="_blank" rel="noopener noreferrer">projeto da wiki !</a>  Obrigado por nos ajudar a melhorar nossos documentos!
              </p>
            </div>
          </div>
          <div className="edit-this-page m-top-4 ta-center"><strong>Viu um erro?</strong> <a href={this.getRepoLink()}>Edite está página</a></div>
        </div>
      </div>
    );
  }
}

export default withSubNav()(DocTemplate);

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    doc: markdownRemark(id: { eq: $id } ) {
      htmlAst
      html
      fileAbsolutePath
      frontmatter {
        seo {
          title
          description
          keywords
        }
      }
      fields {
        slug
        title
        category
        docType
        permalink
      }
    }
  }
`;

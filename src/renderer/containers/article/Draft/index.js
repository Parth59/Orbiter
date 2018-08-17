import React from 'react';
import { connect } from 'react-redux';
import injectStyles from 'react-jss';
import { injectIntl } from 'react-intl';
import { editorStateFromRaw } from 'megadraft';
import {
  setDraftEditorState,
  setDraftTitle,
} from '../../../../shared/redux/modules/article/draft/actions';
import { Editor, ErrorBoundary, Hero, TitleEditor } from '../../../components';
import styles from './styles';

const AddtionalContent = () => <div>Additional Content</div>;

const References = () => <div>References</div>;

class Draft extends React.Component {
  handleAfterUpload = (upload) => {
    console.log('upload hash', upload);
  };

  handleDraftChange = (e) => {
    this.props.setDraftTitle(e.target.value);
  };

  handleEditorChange = (editorState) => {
    this.props.setDraftEditorState(editorState);
  };

  render() {
    const { classes, draft, intl } = this.props;
    const { editorState, title, imageHash } = draft;
    console.log(editorState);
    return (
      <ErrorBoundary
        errorMsg={intl.formatMessage({
          id: 'editor_error',
          defaultMessage:
            "Oh no, something went wrong! It's okay though, please refresh and your content should return.",
        })}>
        <div className={classes.container}>
          <header className={classes.header}>
            <Hero imageHash={imageHash} />
          </header>
          <section className={classes.draft}>
            <div className={classes.main}>
              <div className={classes.title}>
                <TitleEditor
                  onChange={this.handleDraftChange}
                  placeholder={intl.formatMessage({
                    id: 'editor_titlePlaceholder',
                    defaultMessage: 'Title here...',
                  })}
                  value={title}
                />
              </div>
              <div className={classes.editor}>
                <Editor
                  afterUpload={this.handleAfterUpload}
                  editorState={editorState}
                  onChange={this.handleEditorChange}
                />
              </div>
            </div>
            <aside className={classes.aside}>
              <AddtionalContent />
            </aside>
          </section>
          <footer className={classes.footer}>
            <References />
          </footer>
        </div>
      </ErrorBoundary>
    );
  }
}

const mapStateToProps = ({ article: { draft } }) => ({
  draft,
});

const mapDispatchToProps = {
  setDraftEditorState,
  setDraftTitle,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(injectStyles(styles)(Draft)));

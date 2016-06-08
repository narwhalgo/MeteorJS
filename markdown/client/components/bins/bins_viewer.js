import React, { Component } from 'react';
import { markdown } from 'markdown';

class BinsViewer extends Component {
  render() {
    const rawHTML = markdown.toHTML(this.props.bin.contnet);

    return (
      <div className="col-xs-4">
        <h5>Your Output</h5>
        {rawHTML}
        <div dangerouslySetInnerHTML={{ __html: rawHTML }}
        </div>
      </div>
    );
  }
}

export default BinsViewer;

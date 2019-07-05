import React from 'react';
import ToolBar from '../toolbar';
import './index.scss';
//import '../../common.scss';

class MdPreviewer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const classes = `previewer ${
            this.props.isPreviewerMaximized
                ? 'maximized'
                : this.props.isEditorMaximized
                ? 'hide'
                : ''
        }`;

        return (
            <div className={classes}>
                <ToolBar
                    text="Preview"
                    handleMaxisize={this.props.handleMaxisize}
                    isMaximize={this.props.isPreviewerMaximized}
                />
                <div id="preview" dangerouslySetInnerHTML={{ __html: this.props.preview }} />
            </div>
        );
    }
}

export default MdPreviewer;

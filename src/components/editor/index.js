import React from 'react';
import ToolBar from '../toolbar';
import './index.scss';
//import '../../common.scss';

class MdEditor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const classes = `editor ${
            this.props.isEditorMaximized
                ? 'maximized'
                : this.props.isPreviewerMaximized
                ? 'hide'
                : ''
        }`;

        return (
            <div className={classes}>
                <ToolBar
                    text="Editor"
                    handleMaxisize={this.props.handleMaxisize}
                    isMaximize={this.props.isEditorMaximized}
                />
                <textarea
                    id="editor"
                    onChange={this.props.onChange}
                    defaultValue={this.props.markdown}
                />
            </div>
        );
    }
}

export default MdEditor;

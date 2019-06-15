import React from 'react';
import './toolbar.scss';

export default function ToolBar(props) {
    const fullScreen = '&#xe7ec;';
    const fullScreenExit = '&#xe7ed;';
    const editorIcon = '&#xe791; ';
    const previewerIcon = '&#xe7d8; ';

    let fullScreenCtrl = props.isMaximize ? fullScreenExit : fullScreen;
    let iconType = props.text === 'Editor' ? editorIcon : previewerIcon;
    return (
        <div className="toolbar">
            <span>
                <i dangerouslySetInnerHTML={{ __html: iconType }} />
                {props.text}
            </span>
            <i
                className="full-screen-ctrl"
                onClick={props.handleMaxisize}
                dangerouslySetInnerHTML={{ __html: fullScreenCtrl }}
            />
        </div>
    );
}

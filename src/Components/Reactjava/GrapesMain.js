import React, { useEffect } from "react";
import 'grapesjs/dist/css/grapes.min.css';
import Grapesjs from 'grapesjs';
import dynamicConfig from './grapesjsConfig';
import '../css/grapes.css';
import grapesjsPluginExport from "grapesjs-plugin-export";

<><script src="dist/jquery-3.2.1.min.js"></script>
        <script src="demo/assets/js/bootstrap.min.js"></script></>
const GrapesjsMain = (props) => {
    useEffect(() => {
        loadGrapesJs()
    }, [])
    const loadComponents = (editor) => {

        editor.BlockManager.add('my-block-id', {
            // ...
            content: {
                tagName: 'div',
                draggable: false,
                attributes: { 'some-attribute': 'some-value' },
                components: [
                    
                    // {
                    //     tagName: 'span',
                    //     content: '<b>Some static content</b>',
                    // }, 
                    // {
                    //     tagName: 'div',
                    //     // use `content` for static strings, `components` string will be parsed
                    //     // and transformed in Components
                    //     components: '<span>HTML at some point</span>',
                    // },
                ],
            },
        });
        editor.Panels.addPanel({
            id: 'panel-top',
            el: '.panel__top',
        });
        editor.Panels.addPanel({
            id: 'basic-actions',
            el: '.panel__basic-actions',
            buttons: [
                {
                    id: 'visibility',
                    active: true, // active by default
                    className: 'btn-toggle-borders',
                    label: '<u>B</u>',
                    command: 'sw-visibility', // Built-in command
                }, {
                    id: 'export',
                    className: 'btn-open-export',
                    className: "fa-code",
                    command: 'export-template',
                    context: 'export-template', // For grouping context of buttons from the same panel
                }, 
                // {
                //     id: 'show-json',
                //     className: 'btn-show-json',
                //     label: 'JSON',
                //     context: 'show-json',
                //     command(editor) {
                //         editor.Modal.setTitle('Components JSON')
                //             .setContent(`<textarea style="width:100%; height: 250px;">
                //       ${JSON.stringify(editor.getComponents())}
                //     </textarea>`)
                //             .open();
                //     },
                // },



            ],
        });
        editor.Commands.add('show-layers', {
            getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
            getLayersEl(row) { return row.querySelector('.layers-container') },

            run(editor, sender) {
                const lmEl = this.getLayersEl(this.getRowEl(editor));
                lmEl.style.display = '';
            },
            stop(editor, sender) {
                const lmEl = this.getLayersEl(this.getRowEl(editor));
                lmEl.style.display = 'none';
            },
        });
        editor.Commands.add('show-styles', {
            getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
            getStyleEl(row) { return row.querySelector('.styles-container') },

            run(editor, sender) {
                const smEl = this.getStyleEl(this.getRowEl(editor));
                smEl.style.display = '';
            },
            stop(editor, sender) {
                const smEl = this.getStyleEl(this.getRowEl(editor));
                smEl.style.display = 'none';
            },
        });


        editor.Commands.add('set-device-desktop', {
            run: editor => editor.setDevice('Desktop')
        });
        editor.Commands.add('set-device-mobile', {
            run: editor => editor.setDevice('Mobile')
        });
        editor.Commands.add('set-device-tablet', {
            run: editor => editor.setDevice('Tablet')

        });
        
        editor.Commands.add('clean-all', () => editor.DomComponents.clear());
        // editor.Commands.add('clear-css', () => editor.DomComponents.clear());
        editor.Commands.add("export", { run: (editor) => editor.runCommand('gjs-export-zip') });
        editor.Commands.add({ run: (editor) => editor.runCommand('fullscreen', { target: '.panel__top' }) });
            
            };

    const loadGrapesJs = async () => {
        const editor = await Grapesjs.init(dynamicConfig());
        loadComponents(editor)
    }

    // const comps = editor.DomComponents.clear();
    // const handlesave =()=>{
    //     console.log(editor.getHtml())
    // }

    return (
        <>
            <div class="panel__top">
                <div class="panel__basic-actions"></div>
                <div class="panel__devices">
                    {/* <button onClick={comps} > clear</button> */}
                </div>

                <div class="panel__switcher">
                </div>

            </div>

            <div class="editor-row">
                <div class="editor-canvas">
                    <div id="gjs">
                        <>
                        <script src="dist/jquery-3.2.1.min.js"></script>
                        <script src="demo/assets/js/bootstrap.min.js"></script>
                        </>
                        {/* <h1>{props.code}</h1> */}
                    </div>
                </div>

                <div class="panel__right">
                    <div class="layers-container"></div>
                    <div class="styles-container"></div>
                </div>
            </div>
            <div id="blocks"></div>
            {/* <div id="blocks"></div> */}
        </>

    );
};

export default GrapesjsMain;
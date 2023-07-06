import React from "react";
import 'grapesjs/dist/css/grapes.min.css';
import '../css/grapes.css';
import i from "../imagesproject/skpaex1.png"
import grapesjsPluginExport from 'grapesjs-plugin-export';
import gjsPresetWebpage from "grapesjs-preset-webpage";
import customCodePlugin from 'grapesjs-custom-code';
import plugin from 'grapesjs-component-code-editor';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs-component-code-editor/dist/grapesjs-component-code-editor.min.css';
import iii from "../imagesproject/skpaex1.png";
import grapesjspresetwebpage from 'grapesjs-preset-webpage';
import { color, height, textAlign } from "@mui/system";
// import htmlContent from '../imagesproject/header1.html';
// import { type } from "@testing-library/user-event/dist/type";
import pluginblocks from 'grapesjs-blocks-basic';
// import { Input } from "@material-ui/core";
import plugintui from 'grapesjs-tui-image-editor';
import gjsForms from 'grapesjs-plugin-forms';
import gjsBasic from 'grapesjs-blocks-basic';
const GrapesjsConfig = () => {
    // const svgHeader1 = '<img style="width:650px;height:45px" src="data:image/png;base64,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"/>';
    // const svgHeader2 = '<img style="width:650px;height:45px" src="data:image/png;base64,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"/>';
    // const svgHeader3 = '<img style="width:650px;height:45px" src="data:image/png;base64,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Hh6LhDA/7RId8vqlhfvWY+nrSzEkTb8c0OWF2yb2aV2QRhE2/D4F87+UM12/JkRERB1Rm4RbInJbDLfXnmsi3BIRERG5G4Zboo6N4fba09r9zCEyiYiIiIiIyO0x3BIREREREZHbY7glIiIiIiIit8dwS0RERERERG6P4ZaIiIiIiIjcHsMtERERERERuT2GWyIiIiIiInJ7DLdERERERETk9hhuiYiIqEOrsVpRWVWl7hFRRyI/+/I7oMVsgN2kblO70Pav2M+twXBLREREHdrR3Dzs3rtf3SOijkR+9uV3QEsZT9ph62VQ96g9yP0r93NrMNwSERFRh7Zt+1aUVVSz9paog5GfefnZl98BLeWZY4NlqJG1t+1E7le5f+V+bg1jaK8+L6vbRERERB3OiRMn0KVrV1RbbDh16hS6dQ2Gp4lHrkTXKxlqv921B4dzj2Nvdja++vtXasmleRQDtYEGWG4zwlBuh6EMMNSqhdRqMtTawg2o/oUJxgI7zHtat1MNQ+64s3V1vkRERETXkaFDb8XwYSPQp19fhlui65jsYyubIssa2507v1VzL481yoCaWCNsPQ2AUc2k1rPpTb5lja3pUOvjKcMtERERERERuT32uSUiIiIiIiK3x3BLREREREREbo/hloiIiIiIiNwewy0RERERERG5PYZbIiIiIiIicnsMt0REREREROTmgP8FMepbKXH6gvUAAAAASUVORK5CYII="/>';
    // const svgHeader4 = '<img style="width:650px;height:45px" src="/static/media/header5.520c7a311d7ab6c9e854.png"/>';

    // const svgH1 = '<img style="width:650px;height:200px" src="/static/media/h1.18a9b2e478df0910591c.png"/>';
    // const svgH2 = '<img style="width:650px;height:200px" src="/static/media/h2.c58f3127cfb2951cdabf.png"/>';
    // const svgH3 = '<img style="width:650px;height:200px" src="/static/media/h3.aae7a0c4fb9ace7a449f.png"/>';
    // const svgH4 = '<img style="width:650px;height:200px" src="/static/media/h4.868dcaab1411e3cb5fdd.png"/>';

    // const svgcard1 = '<img style="width:400px;height:300px" src="/static/media/card1.2f364460e85234d9e9ee.png"/>';
    // const svgcard2 = '<img style="width:400px;height:300px" src="/static/media/card2.2a922ffdc5637c2ec58c.png"/>';
    // const svgcard3 = '<img style="width:400px;height:300px" src="/static/media/card3.5800ae438dd138437f09.png"/>';
    // const svgcard4 = '<img style="width:400px;height:300px" src="/static/media/card4.33469c322b7396c7ab73.png"/>';

    // const svggallery1 = '<img style="width:400px;height:300px" src="/static/media/gallery1.36c2fc4f1b4911b6f3b9.png"/>';
    // const svgprice1 = '<img style="width:400px;height:300px" src="/static/media/price1.24986edec02e54f90f99.png"/>';
    // const svgcontatus = '<img style="width:400px;height:300px" src="/static/media/contactus.9100de4477b9348c70de.png"/>';
    // const svgtestimo = '<img style="width:400px;height:300px" src="/static/media/testimonials.6d9895d58d817ccad70f.png"/>';
    // const svgmaps = '<img style="width:400px;height:300px" src="/static/media/maps.f49132490dd3cff21218.png"/>';
    // const svgfooter1 = '<img style="width:400px;height:200px" src="/static/media/footer1.eedf10eba37ac6ac26f2.png"/>';
    // const svgfooter2 = '<img style="width:400px;height:200px" src="/static/media/footer2.5eb7ed2a3a9dc4f6770a.png"/>';
    // const svgfooter3 = '<img style="width:400px;height:200px" src="/static/media/footer3.8c5c29e384f38e0fc0ca.png"/>';


    const svgText = `<svg style="width:48px;height:48px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
    </svg>`;
    const svgLink = `<svg style="width:48px;height:48px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z" />
    </svg>`;
    const svgImage = `<svg style="width:48px;height:48px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
    </svg>`;
    const svg1Column = `<svg style="width:48px;height:48px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"></path>
    </svg>`;
    const svgVideo = `<svg style="width:48px;height:48px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"></path>
    </svg>`;
    const svgSection = `<svg style="width:48px;height:48px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z"></path>
    </svg>`;
    const svg2Column = `<svg style="width:48px;height:48px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"></path>
        </svg>`;
    const svgButton = `<svg style="width:48px;height:48px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"></path><path d="M4 11.5h16v1H4z"></path></svg>`;
    const svgInput = `<svg style="width:48px;height:48px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"></path><path d="M4 10h1v4H4z"></path></svg>`;
    const svgSelect = `<svg style="width:48px;height:48px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"></path><path d="M18.5 13l1.5-2h-3zM4 11.5h11v1H4z"></path></svg>`;
    const svgForm = `<svg style="width:48px;height:48px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 5.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 8H3V6h18v2zM22 10.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 13H3v-2h18v2z"></path><rect width="10" height="3" x="2" y="15" rx=".5"></rect></svg>`;

    // var perf =require('../imagesproject/header1.html');
    return {
        container: '#gjs',
        // plugins: grapesjsPluginExport,
        // pluginsOpts: {
        //     grapesjsPluginExport: {}
        // },
        // Get the content for the canvas directly from the element
        // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
        fromElement: true,
        // Size of the editor
        height: '600px',
        width: 'auto',
        // Disable the storage manager for the moment

        storageManager: false,
        useCustomTheme: true,
        canvas: {
            styles: [
              'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
            ],
            scripts: [
              'https://code.jquery.com/jquery-3.3.1.slim.min.js',
              'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
              'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'
            ],
          },

        // assetManager: {
        //     // custom: true,
        //     assets: [
        //         'https://via.placeholder.com/350x250/78c5d6/fff/image1.jpg',
        //         'https://via.placeholder.com/350x250/459ba8/fff/image2.jpg',
        //         'https://via.placeholder.com/350x250/79c267/fff/image3.jpg',
        //         'https://via.placeholder.com/350x250/c5d647/fff/image4.jpg',
        //         'https://via.placeholder.com/350x250/f28c33/fff/image5.jpg',
        //         'https://via.placeholder.com/350x250/e868a2/fff/image6.jpg',
        //         'https://via.placeholder.com/350x250/cc4360/fff/image7.jpg',
        //     ],
        //     upload: false,
        //     // custom: true,
        //     // The name used in POST to pass uploaded files, default: `'files'`
        //     // upload: 'https://endpoint/upload/assets',

        //     // // The name used in POST to pass uploaded files, default: `'files'`
        //     // uploadName: 'files',
        // },

        // // textCleanCanvas: false,
        // // append blocks
        blockManager: {
            appendTo: '#blocks',

            blocks: [

                // {
                //     id: 'Column',
                //     label: 'Column',
                //     attributes: { class: "Column" },
                //     content: '<div style="	color: black;padding: 15px;width: 100%;height: 100px;display: flex;align-items: center;"><div style="	cursor: pointer;font-family: Lacquer;"><h2 style="margin: 0;">BRAND</h2></div><ul style="padding: 0;margin: 0;margin-left: auto;margin-right: 50px;list-style: none;display: flex;align-items: center;transition: 0.4s ease all, 0s ease background;"><li style="text-transform: uppercase;padding: 0 15px;height: 100px;display: flex;justify-content: center;align-items: center;transition: 0.4s ease all, 0s ease margin;"><a style="text-decoration: none;color: #fff;" href="#">Home</a></li><li style="text-transform: uppercase;padding: 0 15px;height: 100px;display: flex;justify-content: center;align-items: center;transition: 0.4s ease all, 0s ease margin;"><a style="text-decoration: none;color: #fff;" href="#">About</a></li><li style="text-transform: uppercase;padding: 0 15px;height: 100px;display: flex;justify-content: center;align-items: center;transition: 0.4s ease all, 0s ease margin;"><a style="text-decoration: none;color: #fff;" href="#">Pages</a></li><li style="text-transform: uppercase;padding: 0 15px;height: 100px;display: flex;justify-content: center;align-items: center;transition: 0.4s ease all, 0s ease margin;"><a style="text-decoration: none;color: #fff;" href="#">Contact Us</a></li></ul><div class="right"><button style="	background: red;outline: none;font-weight: bold;padding: 10px 18px;border-radius: 25px;border: 1px solid darken(red,5%);letter-spacing: 1px;	">Dashboard</button></div></div>',
                //     // onClick: alert('button click catched'),
                // },
                // {
                //     id: 'Column2',
                //     label: '2 Column',
                //     // attributes:{ class: "fa-text"},
                //     content: '<div style=display:flex;justify-content:flex-start;align-items:stretch;flex-wrap:nowrap;padding:10px; id="iync"><div style=min-height:75px;flex-grow:1;flex-basis:100%;></div><div style=min-height:75px;flex-grow:1;flex-basis:100%;></div></div>',
                // },

                {
                    id: '1 column',
                    label: '1 Column',
                    category: 'Basic',
                    media: svg1Column,
                    activate: true,
                    content: `<div style=display:flex;justify-content:flex-start;align-items:stretch;flex-wrap:nowrap; id="iync">
                    <div style=min-height:75px;flex-grow:1;flex-basis:100%;></div>
                    `
                },
                {
                    id: '2 column',
                    label: '2 Column',
                    category: 'Basic',
                    media: svg2Column,
                    activate: true,
                    content: `<div style=display:flex;justify-content:flex-start;align-items:stretch;flex-wrap:nowrap; id="iync">
                    <div style=min-height:75px;flex-grow:1;flex-basis:100%;></div>
                    <div style=min-height:75px;flex-grow:1;flex-basis:100%;></div>
                    `
                },
                {
                    id: 'text',
                    label: 'Text',
                    category: 'Basic',
                    media: svgText,
                    activate: true,
                    content: '<p>Insert your text here</p>'
                },
                {
                    id: 'link',
                    label: 'Link',
                    category: 'Basic',
                    media: svgLink,
                    activate: true,
                    content: `<a>Click here</a>`
                },
                {
                    id: 'image',
                    label: 'Image',
                    category: 'Basic',
                    media: svgImage,
                    activate: true,
                    content: { type: 'image' }
                },
                {
                    id: 'video',
                    label: 'Video',
                    category: 'Basic',
                    media: svgVideo,
                    // activate: true,
                    content: {
                        type: 'video',
                        style: { width: "500px", height: "300px" },
                    }
                },
                {
                    id: 'button-block',
                    label: 'Button',
                    category: 'Basic',
                    media: svgButton,
                    content: '<button type="button" class="btn">button</button>'
                },
                {
                    id: 'input',
                    label: 'Input',
                    category: 'Basic',
                    media: svgInput,
                    activate: true,
                    content: '<input type="text"/>'
                },

                {
                    id: 'select',
                    label: 'Select',
                    category: 'Basic',
                    media: svgSelect,
                    activate: true,
                    content: `<select type="text" id="iklm"><option value="opt1">
                    Option 1</option><option value="opt2">Option 2</option><option value="opt3">
                    Option 3</option></select>`
                },
                {
                    id: 'form',
                    label: 'Form',
                    category: 'Basic',
                    media: svgForm,
                    activate: true,
                    content: `<form method="get" id="i17e">
                    <div>
                      <label>Name</label>
                      <input type="text"/>
                    </div>
                    <div>
                      <label>Email</label>
                      <input type="email"/>
                    </div>
                    <div>
                      <label>Gender</label>
                      <input type="checkbox" value="M"/>
                      <label>M</label>
                      <input type="checkbox" value="F"/>
                      <label>F</label>
                    </div>
                    <div>
                      <label>Message</label>
                      <textarea></textarea>
                    </div>
                    <div>
                      <button type="button">Send</button>
                    </div>
                  </form>`
                },
                {
                    id: 'text-section',
                    label: 'Section',
                    category: `Basic`,
                    media: svgSection,
                    activate: true,
                    content: `<div class="bdg-sect" id="ifil">
                    <h1 class="heading">Insert title here
                    </h1>
                    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                  </div>`
                },
           
                /////////////////////////////////////
                
        
            ]
        },


        // // Avoid any default panel
        selectorManager: {
            appendTo: '.styles-container'
        },
        layerManager: {
            appendTo: '.layers-container'
        },
        deviceManager: {
            devices: [{
                name: 'Desktop',
                width: '', // default size
            }, {
                name: 'Mobile',
                width: '320px', // this value will be used on canvas width
                widthMedia: '480px', // this value will be used in CSS @media
            },
            {
                name: 'Tablet',
                width: '768px', // this value will be used on canvas width
                widthMedia: '810px', // this value will be used in CSS @media
            },
            ]
        },
        plugins: [grapesjsPluginExport, customCodePlugin],
        pluginsOpts: {
            grapesjsPluginExport: { /* options */ },
            customCodePlugin: { open: false, active: false },

            // pluginblocks:{},
            // grapesjspresetwebpage:{},
        },
        // We define a default panel as a sidebar to contain layers
        panels: {

            defaults: [
                // ...
                {
                    id: 'panel-switcher',
                    el: '.panel__switcher',
                    buttons: [{
                        id: 'show-layers',
                        active: true,
                        className: "fa-layers",
                        command: 'show-layers',
                        // Once activated disable the possibility to turn it off
                        togglable: false,
                    }, {
                        id: 'show-style',
                        active: true,
                        className: "fa-styel",
                        command: 'show-styles',
                        togglable: false,
                    },

                    {
                        id: 'clean-all',
                        active: true,
                        className: "fa-clear",
                        command: 'clean-all',
                        togglable: false,
                    },

                    {
                        id: 'show-full',
                        active: true,
                        // className: 'btn-show-full',
                        className: "fa-full",
                        //context: 'show-full',
                        //id: ful,
                        //command: 'set-fullscreen',
                        command: 'fullscreen', // Built-in command
                        togglable: false,
                    },
                    ],
                },
                {
                    id: 'panel-devices',
                    el: '.panel__devices',
                    buttons: [{
                        id: 'device-desktop',
                        command: 'set-device-desktop',
                        className: "fa-desktop",
                        active: true,
                        togglable: false,
                    },
                    {
                        id: 'device-tablet',
                        className: "fa-tablet",
                        command: 'set-device-tablet',
                        togglable: false,
                    },
                    {
                        id: 'device-mobile',
                        className: "fa-mobile",
                        command: 'set-device-mobile',
                        togglable: false,
                    },

                    ],
                }
            ]
        },
        // The Selector Manager allows to assign classes and
        // different states (eg. :hover) on components.
        // Generally, it's used in conjunction with Style Manager
        // but it's not mandatory

        styleManager: {
            appendTo: '.styles-container',
            sectors: [
                {
                    name: 'General',
                    open: true,
                    // Use built-in properties
                    buildProps: ['float', "display", 'position', 'top', 'left', 'right', 'bottom'],
                    // Use `properties` to define/override single property

                },
                {
                    name: 'Dimension',
                    open: false,
                    // Use built-in properties
                    buildProps: ['width', 'height', 'max-width', 'max-height', 'margin', 'padding', 'spacing'],
                    // Use `properties` to define/override single property
                    // properties: [
                    //     {
                    //         // Type of the input,
                    //         // options: integer | radio | select | color | slider | file | composite | stack
                    //         type: 'integer',
                    //         name: 'The width', // Label for the property
                    //         property: 'width', // CSS property (if buildProps contains it will be extended)
                    //         units: ['px', '%', 'em', 'rem'], // Units, available only for 'integer' types
                    //         defaults: 'auto', // Default value
                    //         min: 0, // Min value, available only for 'integer' types
                    //     }
                    // ]
                },
                {
                    name: 'Font Style',
                    open: false,
                    // Use built-in properties
                    buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', "color", 'text-align', 'text-decoration', 'text-shadow'],
                    // Use `properties` to define/override single property

                },
                {
                    name: 'Decoration',
                    open: false,
                    // Use built-in properties
                    buildProps: ['opacity', 'border', 'border-radius', 'background-color', 'background', 'box-shadow'],
                    // Use `properties` to define/override single property

                },
                {
                    name: 'Flex',
                    open: false,
                    // Use built-in properties
                    buildProps: ['flex-direction', 'justify-content'],
                    // Use `properties` to define/override single property

                },
                {
                    name: 'Extra',
                    open: false,
                    buildProps: ['transform', 'transition'],
                    properties: [
                        {
                            id: 'custom-prop',
                            name: 'Custom Label',
                            property: 'font-size',
                            type: 'select',
                            defaults: '32px',
                            // List of options, available only for 'select' and 'radio'  types
                            options: [
                                { value: '12px', name: 'Tiny' },
                                { value: '18px', name: 'Medium' },
                                { value: '32px', name: 'Big' },
                            ],
                        }
                    ]
                }]
        },
    };
};

export default GrapesjsConfig;
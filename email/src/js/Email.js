import React, { useState } from 'react';
import '../css/email.css';
import logo from '../img/logo.png';

export default function Email() {

  return (
    <div className='body'>
        <div className="big-div">
            <div className="change-name"></div>
            <div className="img">
                <img src={logo} alt="Logo" />
            </div>
            <div className="text-little">
                <p>Free online fake mailer with attachments, encryption, HTML editor and advanced settings…</p>
            </div>
            <div className="inputs-div">
                <div className="input">
                    <p>From Name:</p>
                    <input type="text" />
                </div>
                <div className="input">
                    <p>From E-mail:</p>
                    <input type="text" />
                </div>
                <div className="input">
                    <p>To:</p>
                    <input type="text" />
                </div>
                <div className="input">
                    <p>Subject:</p>
                    <input type="text" />
                </div>
                <div className="input">
                    <p>Attachment:</p>
                    <input type="file" />
                </div>
                <div className="button">
                    <p>.</p>
                    <div className="button-inside">
                        <h6>Attach another file</h6>
                        <button>Advanced Settings</button>       
                    </div>
                </div>
                <div className="input">
                    <p>Content-Type:</p>
                    <div className="input-1">
                        <div className="input-2">
                            <input type="radio" name="content-type" />
                            <p>text/plain</p>
                        </div>
                        <div className="input-3">
                            <input type="radio" name="content-type" />
                            <p>text/html</p>
                            <input type="checkbox" />
                            <p>Editor</p>
                        </div>
                    </div>
                </div>
                <div className="input">
                    <p>Text:</p>
                    <textarea name="" id=""></textarea>
                </div>
                <div className="input">
                    <p>Captcha:</p>
                  
                </div>
            </div>
        </div>
    </div>
  );
}
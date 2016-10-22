
import { window as Window } from 'vscode';

import { packageExists } from './utils';
import * as Messages from './messages';
import { runCommand } from './run-command';


export function npmRawCommand () {
    
    if (!packageExists()) {
        Messages.noPackageError();
        return;
    }
    
    Window.showInputBox({
        prompt: 'tnpm command',
        placeHolder: 'install lodash@latest, ...'
    })
    .then((value) => {
        
        if (!value) {
            return;
        }
        
        const args = value.split(' ');
        
        runCommand(args);
    });
};
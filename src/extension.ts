import { commands as Commands, ExtensionContext } from 'vscode';

import { outputChannel } from './output';
import * as Messages from './messages';
import { runCommand } from './run-command';

import npmInit from './init';
import { npmInstallPackage, npmInstallPackageDev, npmInstallSavedPackages } from './install';
import { npmUninstallPackage, npmUninstallPackageDev } from './uninstall';
import { npmRunScript, npmRunLastScript, npmStart, npmTest } from './run';
import { npmPublish } from './publish';
import { npmDeprecate } from './deprecate';
import { npmRawCommand } from './raw';
import npmTerminate from './terminate';

export const activate = function (context: ExtensionContext) {

    const disposables = [
        Commands.registerCommand('tnpm-script.installSavedPackages', npmInstallSavedPackages),  
        Commands.registerCommand('tnpm-script.installPackage', npmInstallPackage),
        Commands.registerCommand('tnpm-script.installPackageDev', npmInstallPackageDev),
        Commands.registerCommand('tnpm-script.runScript', npmRunScript),
        Commands.registerCommand('tnpm-script.runScriptLatest', npmRunLastScript),
        Commands.registerCommand('tnpm-script.init', npmInit),
        Commands.registerCommand('tnpm-script.uninstallPackage', npmUninstallPackage),
        Commands.registerCommand('tnpm-script.uninstallPackageDev', npmUninstallPackageDev),
        Commands.registerCommand('tnpm-script.publish', npmPublish),
        Commands.registerCommand('tnpm-script.deprecate', npmDeprecate),
        Commands.registerCommand('tnpm-script.raw', npmRawCommand),
        Commands.registerCommand('tnpm-script.terminate', npmTerminate),
        Commands.registerCommand('tnpm-script.test', npmTest),
        Commands.registerCommand('tnpm-script.start', npmStart)
    ];
    
	context.subscriptions.push(...disposables, outputChannel);
}

export function deactivate() {
}
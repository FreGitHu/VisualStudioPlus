// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

let extensionEnabled = true;
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function toggleVSPlus() {
	extensionEnabled = !extensionEnabled
}
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Visual Studio + is now running!');
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}

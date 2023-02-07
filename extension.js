
const vscode = require('vscode');
const fs = require('fs')
/**
 * @param {vscode.ExtensionContext} context
 */
function BreakMode() {
	const panel = vscode.window.createWebviewPanel(
		'break',
		'Have a break',
		vscode.ViewColumn.Active,
		{
			enableScripts: true,
		}
	);

	let html = `<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Break Mode!</title>
	</head>
	<body>
		<h1>Test!</h1>
	</body>
	</html>`
	panel.webview.html = html
}
function activate(context) {
	context.subscriptions.push(
		vscode.commands.registerCommand("visual-studio-plus.breakMode", () => {
			BreakMode()
		})
	)
	console.log('Visual Studio + is now running!');
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}

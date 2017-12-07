'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { languages, window, commands, ExtensionContext, Range, TextDocument } from 'vscode';
import { workspace } from 'vscode';

let regex = new RegExp(/(class=)/g, 'ig');

function fullDocumentRange(document: TextDocument): Range {
  const lastLineId = document.lineCount - 1;
  return new Range(0, 0, lastLineId, document.lineAt(lastLineId).text.length);
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {

  let editor = window.activeTextEditor;

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = commands.registerCommand('extension.stayClassy', () => {
    // The code you place here will be executed every time your command is executed
    if (!editor) return;

    let selection = editor.selection;
    let range, text;

    // if there is no text, get the entire document
    if (selection.isEmpty) {
      range = fullDocumentRange(editor.document);
      text = editor.document.getText();
    }
    // otherwise just get the selected text and its range
    else {
      range = selection;
      text = editor.document.getText(selection);
    }

    // this function is where the editor is actually updated with the changed text
    editor.edit(builder => {
      let classyText = text.replace(new RegExp(/(class=)/g, 'ig'), 'className=');
      builder.replace(range, classyText);
    });

  });

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}
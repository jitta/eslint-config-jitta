var path = require('path');
var fs = require('fs');
var test = require('tape');
var chalk = require('chalk');
var config = require('../index.js');

var CLIEngine = require('eslint').CLIEngine;
var cli = new CLIEngine(config);
var testFiles = fs.readdirSync(path.join(__dirname, 'test-cases'));


/*
 * Converts eslint errors into `t.fail()` errors
 */

function errorify (t, res) {
  var messages = 0
  res.results.forEach(function (result) {
    if (result.errorCount || result.warningCount) {
      result.messages.forEach(function (msg) {
        messages += 1
        t.fail(chalk.red('' +
          result.filePath.replace(process.cwd(), '') +
          ':' + msg.line + ':' + msg.column + ': ' +
          msg.message + ' (' + msg.ruleId + ')'))
      })
    }
  })
  return messages
}


// - Test Runners
testFiles.forEach( filename => {
    test(`${filename} should be pass eslint validate`, (t) => {
        var result = cli.executeOnFiles([filename, path.join(__dirname, 'test-cases')]);

        // Run through result to generate error message
        var messages = errorify(t, result)

        if (messages === 0) {
            t.pass(`${filename} passed`)
        } 
        t.end()
    })
})

// test('load config in eslint to validate all rule syntax is correct', function (t) {
//   var CLIEngine = require('eslint').CLIEngine

//   var cli = new CLIEngine(config)

    

//   var report = cli.executeOnText('var obj = { key1: "value",\n key2: "value",}')
//   console.log(report.results[0].messages)

//   t.end()
// })
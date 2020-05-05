export const DEFAULT_LANG = `javascript`;

export const DEFAULT_SNIPPET = `import * as React from 'react'\r\nimport { withRouter } from 'react-router'\r\n\r\nimport * as methods from './methods'\r\nimport { Input } from '#components/Input'\r\nimport { inject, observer } from 'mobx-react'\r\nimport './Splash.css'\r\n\r\nconst selector = (tree) => {\r\n  console.warn({ tree })\r\n  return {\r\n    moduleStore: tree.state.moduleStore\r\n  }\r\n}\r\n\r\n@withRouter\r\n@inject(selector)\r\n@observer\r\nexport class Splash extends React.Component {\r\n  setInputValue = methods.setInputValue(this)\r\n  handleEnterKey = methods.handleEnterKey(this)\r\n  submitRegistration = methods.submitRegistration(this)\r\n  attemptLogin = methods.attemptLogin(this)\r\n  handleLoginEnterKey = methods.handleLoginEnterKey(this)\r\n  state = {\r\n    emailInputValue: locast.lastUserEmail || '',\r\n    passwordInputValue: '',\r\n    usernameInputValue: ''\r\n  }\r\n\r\n  render() {\r\n    const { props, state } = this\r\n    console.log('<Splash>', { props, state })\r\n\r\n    return (\r\n      <div styleName=\"Splash\">\r\n        <h1 className=\"title\">place some copy here</h1>\r\n\r\n        <Input\r\n          big\r\n          value={state.usernameInutValue}\r\n          onChange={this.setInputValue('username')}\r\n          onKeyPress={this.handleEnterKey}\r\n        />\r\n\r\n        <Input\r\n          big\r\n          value={state.emailInputValue}\r\n          onChange={this.setInputValue('email')}\r\n          onKeyPress={this.handleEnterKey}\r\n        />\r\n\r\n        <Input\r\n          big\r\n          value={state.passwordInputValue}\r\n          onChange={this.setInputValue('password')}\r\n          onKeyPress={this.handleEnterKey}\r\n        />\r\n\r\n        {/* TODO: Style buttons and shit... */}\r\n        <button onClick={this.submitRegistration}>submit</button>\r\n\r\n        <h1>LOGIN FORM</h1>\r\n\r\n        <Input\r\n          big\r\n          value={state.usernameInputValue}\r\n          onChange={this.setInputValue('username')}\r\n          onKeyPress={this.handleLoginEnterKey}\r\n        />\r\n\r\n        <Input\r\n          big\r\n          value={state.passwordInputValue}\r\n          onChange={this.setInputValue('password')}\r\n          onKeyPress={this.handleLoginEnterKey}\r\n        />\r\n\r\n        {/* TODO: Style buttons and shit... */}\r\n        <button onClick={this.attemptLogin}>submit</button>\r\n\r\n        <small styleName=\"emailPrompt\">\r\n          Enter your email to create a new module.\r\n        </small>\r\n      </div>\r\n    )\r\n  }\r\n}\r\n`;

export const DEFAULT_THEME = `dracula`;
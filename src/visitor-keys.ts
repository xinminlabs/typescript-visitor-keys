
const KEYS: { [key: string]: string[] } = {
  ArrayBindingPattern: ['elements'],
  ArrayLiteralExpression: ['elements'],
  ArrayType: ['elementType'],
  ArrowFunction: ['modifiers', 'name', 'typeParameters', 'parameters', 'type', 'body'],
  AsyncKeyword: [],
  AwaitExpression: ['expression'],
  BinaryExpression: ['left', 'operatorToken', 'right'],
  BindingElement: ['name', 'initializer', 'propertyName', 'dotDotDotToken'],
  Block: ['statements'],
  BooleanKeyword: [],
  BreakStatement: [],
  CallExpression: ['expression', 'typeArguments', 'arguments'],
  CaseBlock: ['clauses'],
  CaseClause: ['expression', 'statements'],
  CatchClause: ['variableDeclaration', 'block'],
  ClassDeclaration: ['name', 'typeParameters', 'heritageClauses', 'members'],
  ConditionalExpression: ['condition', 'questionToken', 'whenTrue', 'colonToken', 'whenFalse'],
  Constructor: ['name', 'typeParameters', 'parameters', 'type', 'body'],
  DefaultClause: ['statements'],
  ExportAssignment: ['expression'],
  ExportDeclaration: ['isTypeOnly', 'exportClause', 'moduleSpecifier'],
  ExportSpecifier: ['isTypeOnly', 'propertyName', 'name'],
  ExpressionStatement: ['expression'],
  ExpressionWithTypeArguments: ['expression', 'typeArguments'],
  FalseKeyword: [],
  FirstAssignment: [],
  FirstLiteralToken: ['text'],
  FirstStatement: ['declarationList'],
  ForInStatement: ['initializer', 'expression', 'statement'],
  ForOfStatement: ['initializer', 'expression', 'statement'],
  ForStatement: ['initializer', 'condition', 'incrementor', 'statement'],
  FunctionDeclaration: ['modifiers', 'name', 'typeParameters', 'parameters', 'type', 'body', 'asteriskToken'],
  HeritageClause: ['token', 'types'],
  IfStatement: ['expression', 'thenStatement', 'elseStatement'],
  ImportClause: ['isTypeOnly', 'name', 'namedBindings'],
  ImportDeclaration: ['importClause', 'moduleSpecifier'],
  ImportSpecifier: ['isTypeOnly', 'propertyName', 'name'],
  Identifier: ['escapedText'],
  InterfaceDeclaration: ['name', 'typeParameters', 'heritageClauses', 'members'],
  InstanceOfKeyword: [],
  MethodDeclaration: ['modifiers', 'name', 'typeParameters', 'parameters', 'type', 'body', 'asteriskToken', 'questionToken', 'exclamationToken'],
  NewExpression: ['expression', 'typeArguments', 'arguments'],
  NamedExports: ['elements'],
  NamedImports: ['elements'],
  NullKeyword: [],
  NumberKeyword: [],
  Parameter: ['name', 'initializer', 'type', 'dotDotDotToken', 'questionToken'],
  ParenthesizedType: ['type'],
  PostfixUnaryExpression: ['operator', 'operand'],
  PrefixUnaryExpression: ['operator', 'operand'],
  PropertyAccessExpression: ['expression', 'name'],
  PropertyDeclaration: ['name', 'initializer', 'type', 'questionToken', 'exclamationToken'],
  PropertySignature: ['name', 'type', 'questionToken'],
  ReturnStatement: ['expression'],
  StringLiteral: ['text'],
  StringKeyword: [],
  SuperKeyword: [],
  SwitchStatement: ['expression', 'caseBlock'],
  ThisKeyword: [],
  ThrowStatement: ['expression'],
  TrueKeyword: [],
  TryStatement: ['tryBlock', 'catchClause', 'finallyBlock'],
  TypeOfExpression: ['expression'],
  TypeReference: ['typeName', 'typeArguments'],
  UnionType: ['types'],
  VariableDeclarationList: ['declarations'],
  VariableDeclaration: ['name', 'initializer', 'type', 'exclamationToken'],
  WhileStatement: ['expression', 'statement'],
  // JSX
  JsxAttribute: ['name', 'initializer'],
  JsxAttributes: ['properties'],
  JsxClosingElement: ['tagName'],
  JsxElement: ['openingElement', 'children', 'closingElement'],
  JsxOpeningElement: ['tagName', 'typeArguments', 'attributes'],
  JsxSelfClosingElement: ['tagName', 'typeArguments', 'attributes'],
  JsxText: ['text'],
}

export default KEYS;

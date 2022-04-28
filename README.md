# code_challenge_vt_api
Visual Partner Ship - Cursos

API para consultar la informacion, correo electronico y los creditos de todos los estudiantes

endpoints 

| Endpoint | Request | Response |
|---|---|---|
| `localhost:3000/v1/students` | `localhost:3000/students` | `[{"id": "6264d5d89f1df827eb84bb23","name": "Warren","email": "Todd@visualpartnership.xyz","credits": 508,"enrollments": ["Visual Thinking Intermedio","Visual Thinking Avanzado"], ...]` |
| `localhost:3000/v1/students/show/email` | `localhost:3000/v1/students/have_certification/show/email` | `[{email: "Todd@visualpartnership.xyz"}, ....]` |
| `localhost:3000/v1/score_greater_than/:score` | `localhost:3000/v1/score_greater_than` | `[{"id": "6264d5d89f1df827eb84bb23","name": "Warren","email": "Todd@visualpartnership.xyz","credits": 508,"enrollments": ["Visual Thinking Intermedio","Visual Thinking Avanzado"], ...]` |

Instalacion
npm install

Dependencias
npm install --save express
npm install --save-dev jest
npm install --save-dev eslint

configuracion de linter
npm init @eslint/config

```javascript
module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "jest": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"]
    }
};
```

Automatizar los comandos de eslint en el package.json
```
  "scripts": {
    "test": "node ./node_modules/.bin/jest",
    "linter": "node ./node_modules/eslint/bin/eslint.js .",
    "linter-fix": "node ./node_modules/eslint/bin/eslint.js . --fix"
  }
```

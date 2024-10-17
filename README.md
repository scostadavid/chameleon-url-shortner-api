# 🦎 Chameleon
> Typescript/NestJS URL shortener api

<!-- ## Table of contents
1. Requirements
2. Getting Started
3. Troubleshooting
4. FAQ
5. Maintainers/Contributors
6. License -->

<!-- ## ✔️ Requirements

* Requirement 1
* Requirement 2
* Requirement 3

Bla bla bla.

* Requirement 1
```bash
 sudo apt install req1
```
* Requirement 2
```bash
 sudo apt install req2
```
* Requirement 3
```bash
 sudo apt install req3
``` -->

<!-- ## ⌨️ Getting Started

1. Describe the installation of the packages
2. How to run -->

<!-- ## ✔️ Troubleshooting

 * If ..., check the following:
  - Change A
  - Change B -->

<!-- ## 🤔 FAQ

Q: Question.

A: Answer. -->



## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Endpoints



Aqui está a tabela expandida, incluindo o formato de resposta (response) para cada endpoint:

| HTTP Method | Endpoint       | Description                                       | Example Input/Parameters         | Response Example                          |
|-------------|----------------|---------------------------------------------------|----------------------------------|-------------------------------------------|
| `POST`      | `/urls`        | Creates a new URL record                          | `{ "title": "My Site", "url": "https://example.com" }` | `{ "id": 1, "title": "My Site", "url": "https://example.com", "hash": "abc123" }` |
| `GET`       | `/urls`        | Retrieves all URL records                         | N/A                              | `[ { "id": 1, "title": "My Site", "url": "https://example.com", "hash": "abc123" }, { "id": 2, "title": "Another Site", "url": "https://another.com", "hash": "xyz789" } ]` |
| `GET`       | `/urls/:id`    | Retrieves a specific URL record by ID             | `id: 1`                          | `{ "id": 1, "title": "My Site", "url": "https://example.com", "hash": "abc123" }` |
| `PATCH`     | `/urls/:id`    | Updates a specific URL record by ID               | `id: 1, { "title": "Updated Title", "url": "https://updated.com" }` | `{ "id": 1, "title": "Updated Title", "url": "https://updated.com", "hash": "abc123" }` |
| `DELETE`    | `/urls/:id`    | Deletes a specific URL record by ID               | `id: 1`                          | `{ "message": "URL deleted successfully" }` |
| `GET`       | `/:hash`       | Redirects to the original URL based on the hash   | `hash: abc123` (e.g., `/abc123` would redirect to the corresponding full URL) | HTTP 302 Redirect to the original URL (e.g., "https://example.com") |

## Testing

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## 👨‍💻 Maintainers/Contributors

* David Costa - [mailto:scostadavid.dev@gmail.com](mailto:scostadavid.dev@gmail.com)

## 📝 License

This project is licensed under the MIT GENERAL PUBLIC LICENSE - see the [LICENSE](LICENSE) file for more details.

**Open Source Software** ヽ(・∀・)ﾉ
